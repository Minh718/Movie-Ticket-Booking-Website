const showtimeRouter = require('express').Router();
const showtimeController = require('../controllers/showtimeController');

showtimeRouter.post("/add", showtimeController.addShowtime)
showtimeRouter.post("/delete", showtimeController.deleteShowtime)
showtimeRouter.get("/", showtimeController.getAllShowTime)

module.exports = showtimeRouter;
