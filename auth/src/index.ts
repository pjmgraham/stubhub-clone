import mongoose from "mongoose";

import { app } from "./app";

const start = async () => {
<<<<<<< HEAD
  console.log("Starting up.....");
=======
  console.log("Starting up......");
>>>>>>> 6f9b4e6b34562812a2768e34e271b885cb405a7c
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined");
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI must be defined");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});

start();
