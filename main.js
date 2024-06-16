const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Hey👋 I am nodejs in container" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
