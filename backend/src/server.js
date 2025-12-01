import express from "express";
import "dotenv/config";
import transactionRoutes from "./routes/trasactions.routes.js";
import rateLimiter from "./middleware/rateLimiter.js";
import { initDB } from "./config/initDb.js";

const app = express();
const port = process.env.PORT || 5001;

// middlewares
app.use(express.json());
app.use(rateLimiter); // ratelimit middleware

app.get("/api/healthcheck", (req, res) => {
  res.send("It's working!");
});

// routes
app.use("/api/transactions", transactionRoutes);

initDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
  });
});
