const createConnection = require("../config/database");

const showController = {
  getAllShows: async (req, res) => {
    const connection = await createConnection();
    try {
      const sql = `SELECT * FROM tbl_show JOIN tbl_movie on id = idMovie
            `;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  addShow: async (req, res) => {
    const connection = await createConnection();
    const idMovie = req.body.idMovie;
    const price = req.body.price;
    const room = req.body.room;
    try {
      const sql = `INSERT INTO tbl_show (idMovie, price, room) VALUES (${idMovie},${price},'${room}')`;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  deleteShow: async (req, res) => {
    const connection = await createConnection();
    const showID = req.body.showID;
    console.log(showID);
    try {
      const sql = `DELETE FROM tbl_show WHERE idShow = ${showID}`;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = showController;
