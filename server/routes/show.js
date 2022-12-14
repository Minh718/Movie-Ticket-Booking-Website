const showRouter = require('express').Router();
const showController = require('../controllers/showController');

showRouter.post("/add",showController.addShow)
showRouter.get("/",showController.getAllShows)

module.exports = showRouter;
