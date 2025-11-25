import express from "express";
import "dotenv/config";
import { sql } from "./config/db.js";
import transactionRouter from "./routes/trasactions.routes.js";

const app = express();

// middleware
app.use(express.json());

const port = process.env.PORT || 5001;

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transactions(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )`;

    console.log("Database initialized successfully");
  } catch (error) {
    console.error("Error initializing database:", error);
    process.exit(1);
  }
}

app.use("/api/transactions", transactionRouter);

initDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`);
  });
});
