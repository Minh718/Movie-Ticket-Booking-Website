const movieRouter = require("express").Router();
const movieController = require("../controllers/movieController");

movieRouter.get("/", movieController.getAllMovie);
movieRouter.get("/left", movieController.getAllMoviesLeft);
movieRouter.get("/:idShow/dates", movieController.getMovieDate);
movieRouter.get("/:idMovie/show", movieController.getMovieShow);
movieRouter.post("/hours", movieController.getMovieHours);
movieRouter.get("/:idShow/:date/:hour/room", movieController.getMovieHourRoom);
movieRouter.get(
  "/:idShow/:date/:hour/chairs",
  movieController.getMovieHourRoomChairs
);
movieRouter.post("/tickets", movieController.bookingTicket);
movieRouter.post("/insert", movieController.insertMovie);
movieRouter.get("/delete/:id", movieController.deleteMovie);

module.exports = movieRouter;
