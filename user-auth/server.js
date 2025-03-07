require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Load Firebase service account key
const serviceAccount = require("C:/Users/Administrator/Desktop/CMC CAR DEALERS/user-auth/cmc-motors-e9fee-firebase-adminsdk-fbsvc-421cb72483.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("MongoDB URI not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error: ", err));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD, // App password
  },
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  firebaseUid: { type: String, unique: true },
  verificationCode: { type: String, required: false },
  verified: { type: Boolean, default: false },
});

const User = mongoose.model("User", userSchema);

// Routes

// Firebase Signup with Email Verification
app.post("/register", async (req, res) => {
  const { username, email, address, password } = req.body;

  try {
    // Create Firebase User
    const firebaseUser = await admin.auth().createUser({
      email,
      password,
    });

    // Generate a 6-digit verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user details to MongoDB
    const user = new User({
      username,
      email,
      address,
      password: hashedPassword,
      firebaseUid: firebaseUser.uid,
      verificationCode,
      verified: false,
    });

    await user.save();

    // Send email with verification code
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Email Verification Code",
      text: `Your verification code is: ${verificationCode}`,
    });

    res.status(201).json({ message: "User registered! Please verify your email." });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "Error registering user. Ensure the email is valid and not already used." });
  }
});

// Email Verification
app.post("/verify", async (req, res) => {
  const { username, verificationCode } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) return res.status(404).json({ error: "User not found" });
    if (user.verified) return res.status(400).json({ error: "User already verified" });

    if (user.verificationCode === verificationCode) {
      user.verified = true;
      user.verificationCode = null;
      await user.save();

      res.status(200).json({ message: "Account verified! You can now log in." });
    } else {
      res.status(400).json({ error: "Invalid verification code" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed." });
  }
});

// Firebase Login (Only for Verified Users)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: "User not found" });

    if (!user.verified) {
      return res.status(403).json({ error: "Please verify your email before logging in." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const customToken = await admin.auth().createCustomToken(user.firebaseUid);

    res.status(200).json({ message: "Login successful!", token: customToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete User
app.delete("/delete-user", async (req, res) => {
  const { email } = req.body;

  try {
    const result = await User.deleteOne({ email });
    if (result.deletedCount === 1) {
      res.status(200).json({ message: `User with email ${email} was successfully deleted.` });
    } else {
      res.status(404).json({ error: `No user found with email ${email}.` });
    }
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "An error occurred while deleting the user." });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
