const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book 11",
    },
    {
      id: "2",
      title: "Book 222",
    },
    {
      id: "3",
      title: "Book 33",
    },
  ]);
});

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
