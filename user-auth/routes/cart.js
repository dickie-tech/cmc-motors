// routes/cart.js
const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart"); // Assuming a Cart model exists

// Add to cart endpoint
router.post("/add", async (req, res) => {
  const { userId, carId, quantity } = req.body;

  try {
    let cartItem = await Cart.findOne({ userId, carId });

    if (cartItem) {
      // Update quantity if the car is already in the cart
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      // Create a new cart item
      cartItem = new Cart({ userId, carId, quantity });
      await cartItem.save();
    }

    res.status(200).json({ message: "Car added to cart", cartItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding car to cart", error });
  }
});

router.get("/count", async (req, res) => {
  const userId = req.query.userId; // Assume userId is passed in query

  try {
    const count = await Cart.countDocuments({ userId });
    res.status(200).json({ count });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching cart count" });
  }
});


module.exports = router;
