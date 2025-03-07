transporter.sendMail({
  from: process.env.EMAIL,
  to: "testrecipient@example.com",
  subject: "Test Email",
  text: "This is a test email from Nodemailer.",
}, (err, info) => {
  if (err) {
    console.error("Email test failed:", err);
  } else {
    console.log("Email test successful:", info.response);
  }
});
