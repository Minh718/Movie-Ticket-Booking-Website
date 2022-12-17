const ticketRouter = require("express").Router();
const ticketController = require("../controllers/ticketController");

ticketRouter.get("/:idUser", ticketController.getAllUserTickets);
ticketRouter.get("/:idTicket/chairs", ticketController.getAllChairsTicket);
// voucherRouter.get("/:idUser/user", voucherController.getAllUserTicketss);

module.exports = ticketRouter;
