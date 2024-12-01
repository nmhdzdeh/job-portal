import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});