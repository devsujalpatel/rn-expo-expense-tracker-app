import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Server is running ok");
});



app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
