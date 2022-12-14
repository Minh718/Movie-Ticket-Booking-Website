const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/user");
const movieRouter = require("./routes/movie");
const roomRouter = require("./routes/room");
const showRouter = require("./routes/show");
const showtimeRouter = require("./routes/showtime");
const articleRouter = require("./routes/article.js");
// const commentRouter = require("./routes/comment.js");

const port = 8800;
const app = express();
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(morgan("common"));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/rooms", roomRouter);
app.use("/api/show", showRouter);
app.use("/api/showtime", showtimeRouter);
app.use("/api/articles", articleRouter);
// app.use("/api/comments", commentRouter);

app.listen(port, (req, res) => {
  console.log("đã kết nối cổng 8800");
});