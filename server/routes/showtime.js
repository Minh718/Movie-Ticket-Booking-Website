const showtimeRouter = require("express").Router();
const showtimeController = require("../controllers/showtimeController");

showtimeRouter.post("/add", showtimeController.addShowtime);
showtimeRouter.post("/delete", showtimeController.deleteShowtime);
showtimeRouter.get("/", showtimeController.getAllShowTime);
showtimeRouter.post("/hours", showtimeController.getAllHourInRoom);
showtimeRouter.post("/insert", showtimeController.insertHours);

module.exports = showtimeRouter;
