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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//? User Create Function Define
const createUser = async (name, email) => {
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

  const User = mongoose.model("User", schema);

  await User.create({ name, email });
  console.log("User Created");
};

// await createUser("mdsomad", "mdsomad@gmail.com");
