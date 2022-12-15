const voucherRouter = require("express").Router();
const voucherController = require("../controllers/voucherController");

voucherRouter.get("/", voucherController.getAllVouchers);
voucherRouter.get("/:id", voucherController.getVoucherById);
voucherRouter.get("/delete/:id", voucherController.deleteVoucherById);
voucherRouter.post("/update", voucherController.updateVoucher);
voucherRouter.post("/insert", voucherController.insertVoucher);

module.exports = voucherRouter;
