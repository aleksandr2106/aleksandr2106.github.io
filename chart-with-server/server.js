const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
function random(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

app.get("/random", (req, res) => {
  res.json({ number: random(1, 1000) });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
