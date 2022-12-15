const movieRouter = require("express").Router();
const movieController = require("../controllers/movieController");

movieRouter.get("/", movieController.getAllMovie);
movieRouter.get("/:idMovie/dates", movieController.getMovieDate);
movieRouter.get("/:idMovie/show", movieController.getMovieShow);
movieRouter.get("/:idMovie/:date/hours", movieController.getMovieHours);
movieRouter.get("/:idShow/:date/:hour/room", movieController.getMovieHourRoom);
movieRouter.get(
  "/:idShow/:date/:hour/chairs",
  movieController.getMovieHourRoomChairs
);
movieRouter.post("/tickets", movieController.bookingTicket);
movieRouter.post("/insert", movieController.insertMovie);
module.exports = movieRouter;
