const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/user')
const movieRouter = require('./routes/movie')

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
app.listen(port, (req, res) => {
  console.log("đã kết nối cỗng 8800");
});
