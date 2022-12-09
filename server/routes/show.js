const showRouter = require('express').Router();
const showController = require('../controllers/showController');

showRouter.post("/add",showController.addShow)

module.exports = showRouter;
