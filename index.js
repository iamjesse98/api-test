const express = require("express");

const app = express();
const bodyparser = require("body-parser");

const port = process.env.PORT || 3200;

// middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.status(200).json({ message: "hello" }))

app.post("/test", (req, res) => {
  console.log(req.body)
  res.status(200).json(req.body)
})

app.post("/name", (req, res) => {
  const { name } = req.body;

  console.log(req.body)

  if (name) {
    res.status(200).json({
      message: "Order created successfully",
      ...req.body
    });
  } else {
    res.status(401).json({
      message: "Invalid Order creation",
      ...req.body
    });
  }
});

app.listen(port, () => {
  console.log(`running at port ${port}`);
})