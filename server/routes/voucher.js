const voucherRouter = require("express").Router();
const voucherController = require("../controllers/voucherController");

voucherRouter.get("/", voucherController.getAllVouchers);
voucherRouter.get("/:idUser", voucherController.getAllVouchersLeft);
voucherRouter.get("/:idUser/user", voucherController.getAllUserVouchers);

voucherRouter.get("/:id", voucherController.getVoucherById);
voucherRouter.get("/delete/:id", voucherController.deleteVoucherById);
voucherRouter.post("/update", voucherController.updateVoucher);
voucherRouter.post("/insert", voucherController.insertVoucher);
voucherRouter.post("/convert", voucherController.convertVoucher);

module.exports = voucherRouter;
