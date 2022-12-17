const createConnection = require("../config/database");

const voucherController = {
  getAllVouchers: async (req, res) => {
    const connection = await createConnection();
    try {
      const sql =
        "select idVoucher ,name, value, maximum, point, suffix, DATE_FORMAT(start_date, '%d/%m/%Y') as start_date, DATE_FORMAT(end_date, '%d/%m/%Y') as end_date from tbl_voucher";
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getAllVouchersLeft: async (req, res) => {
    const connection = await createConnection();
    const idUser = req.params.idUser;
    try {
      const sql = `select idVoucher ,name, value, maximum, point, suffix, DATE_FORMAT(start_date, '%d/%m/%Y') as start_date, DATE_FORMAT(end_date, '%d/%m/%Y') as end_date
      from tbl_voucher WHERE end_date >= CURRENT_DATE() AND idVoucher NOT IN (SELECT idVoucher FROM tbl_voucheruser where idUser = '${idUser}' ) order by end_date asc
      `;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getAllUserVouchers: async (req, res) => {
    const connection = await createConnection();
    const idUser = req.params.idUser;
    try {
      const sql = `select idVoucher ,name, value, maximum, point, suffix, DATE_FORMAT(start_date, '%d/%m/%Y') as start_date, DATE_FORMAT(end_date, '%d/%m/%Y') as end_date from tbl_voucher NATURAL JOIN tbl_voucheruser 
      where end_date >= CURRENT_DATE() AND idUser = '${idUser}' AND isUse = 0 order by end_date asc`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getVoucherById: async (req, res) => {
    const id = req.params.id;

    const connection = await createConnection();
    try {
      const sql = `select * from tbl_voucher where idVoucher=${id}`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  deleteVoucherById: async (req, res) => {
    const id = req.params.id;

    const connection = await createConnection();
    try {
      const sql = `delete from tbl_voucher where idVoucher=${id}`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  updateVoucher: async (req, res) => {
    const name = req.body.name;
    const idVoucher = req.body.idVoucher;
    const end_date = req.body.end_date;
    const value = req.body.value;
    const maximum = req.body.maximum;
    const suffix = req.body.suffix;
    const point = req.body.point;

    const connection = await createConnection();
    try {
      const sql = `update tbl_voucher
				set name='${name}', end_date='${end_date}', point='${point}', suffix='${suffix}', value='${value}', maximum='${maximum}'
				where idVoucher=${idVoucher}`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  insertVoucher: async (req, res) => {
    const name = req.body.name;
    const end_date = req.body.end_date;
    const value = req.body.value;
    const maximum = req.body.maximum;
    const suffix = req.body.suffix;
    const point = req.body.point;

    const connection = await createConnection();
    try {
      const sql = `insert into tbl_voucher (name, end_date, value, maximum,point, suffix)
				values ('${name}', '${end_date}', '${value}', '${maximum}', '${point}', '${suffix}')`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  convertVoucher: async (req, res) => {
    const idUser = req.body.idUser;
    const idVoucher = req.body.idVoucher;
    const point = req.body.point;

    const connection = await createConnection();
    try {
      const sql = `CALL convert_voucher('${idVoucher}','${idUser}','${point}')`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
};

module.exports = voucherController;
