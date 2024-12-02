// packages imports
import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import morgan from "morgan";
//security packages
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
// files imports
import connectDB from "./config/db.js";
// routes imports
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import jobsRoutes from "./routes/jobsRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on port no ${PORT}`
  );
});
