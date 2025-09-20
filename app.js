const express = require("express");

const app = express();

const port = 5000;

app.get("/api/v1", function (req, res) {
  res.json([
    {
      id: 1,
      title: "Node Js",
      Description: "Javascript ruin v8",
    },
  ]);
});

app.listen(port, () => {
  console.info(`Server is running on port ${port}`);
});
