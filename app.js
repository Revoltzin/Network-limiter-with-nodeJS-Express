const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const port = 5000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5, // Limit each ip to 5 requests
  message:
    "Too many API requests from this IP, please try again after 15 minutes",
});

const loginAccountLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 5, // Limit each ip to 5 requests
  message: "Try again after 15 minutes",
});

// This definition allows to be used in all routes
// app.use(limiter);

app.use("/api", limiter);

app.get("/api/v1", function (req, res) {
  res.json([
    {
      id: 1,
      title: "Node Js",
      Description: "Javascript ruin v8",
    },
  ]);
});

app.get("/login", loginAccountLimiter, function (req, res) {
  res.send("Imaginary login form.");
});

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
