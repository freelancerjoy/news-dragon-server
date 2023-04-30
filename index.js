const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5000;

const category = require("./data/category.json");
// respond with "hello world" when a GET request is made to the homepage
app.use(cors());
app.get("/", (req, res) => {
  res.send("Dragon is running");
});
app.get("/category", (req, res) => {
  res.send(category);
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});
