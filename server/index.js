import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// routes

import authRoutes from "./routes/authRoutes.js";

const app = express();

// middleware

app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();
app.use("/auth", authRoutes);

// env variables

const port = process.env.PORT || 5000;
const url = process.env.URL;

// connect to mongoDB

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.error(err);
  });

// launch the app

app.listen(port, () => {
  console.log(`listening to requests on port ${port}`);
});
