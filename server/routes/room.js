const roomRouter = require('express').Router();
const roomController = require('../controllers/roomController');

roomRouter.get("/",roomController.getAllRoom)
module.exports = roomRouter;
