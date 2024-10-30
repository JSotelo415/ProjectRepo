const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const SECRET_KEY = "your_secret_key"; // Use a secure key in production

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // Check credentials here, and if valid, create a JWT token
  if (email && password) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
