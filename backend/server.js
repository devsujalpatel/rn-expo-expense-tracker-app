import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ok");
});

app.listen(5001, () => {
  console.log("Server is running on PORT:5001");
});
