import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import movieRouter from "./routes/movie.js";

const port = 8800;
const app = express();

app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.listen(port, (req, res) => {
  console.log("đã kết nối cỗng 8800");
});
