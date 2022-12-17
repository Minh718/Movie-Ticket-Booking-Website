const createConnection = require("../config/database");

const ticketController = {
  getAllUserTickets: async (req, res) => {
    const connection = await createConnection();
    const idUser = req.params.idUser;
    try {
      const sql = `call get_all_tickets_user('${idUser}')`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getAllChairsTicket: async (req, res) => {
    const connection = await createConnection();
    const idTicket = req.params.idTicket;
    try {
      const sql = `SELECT chair from tbl_chair where idTicket = '${idTicket}'`;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
};

module.exports = ticketController;
