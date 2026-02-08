import express from "express";
import { MongoClient } from "mongodb";

const app = express();
const port = process.env.PORT || 3000;

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (err) {
    console.error("❌ Connection failed:", err);
  }
}

run();

app.get("/", (req, res) => {
  res.send("Hello! Server is running.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
