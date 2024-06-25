import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    dbName: "DockerDatabase",
  })
  .then((data) => console.log(`Conneted To Mongodb Databse Successfully...`))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Hey👋 I am nodejs in container" });
});

app.get(
  "/api/newuser",
  TryCatch(async (req, resp) => {
    const { name, email } = req.query;
    const message = await createUser(name, email);
    resp.status(201).json({ success: true, message });
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", schema);

//? User Create Function Define
const createUser = async (name, email) => {
  try {
    await User.create({ name, email });
    console.log("User Created 👤");
    return "User Created 👤";
  } catch (error) {
    throw new Error(`Samething went wrong! 👉 ${error.message}`);
  }
};
