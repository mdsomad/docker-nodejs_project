import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Hello, Auth!👋" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
