const showtimeRouter = require('express').Router();
const showtimeController = require('../controllers/showtimeController');

showtimeRouter.post("/add", showtimeController.addShowtime)

module.exports = showtimeRouter;
