const createConnection = require("../config/database");

const movieController = {
  getAllMoviesLeft: async (req, res) => {
    const connection = await createConnection();
    try {
      const sql = `SELECT * FROM tbl_movie WHERE id NOT IN (SELECT idMovie FROM tbl_show) `;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getAllMovie: async (req, res) => {
    const connection = await createConnection();
    try {
      const sql = `SELECT * FROM tbl_movie`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  deleteMovie: async (req, res) => {
    const connection = await createConnection();
    const id = req.params.id;
    try {
      const sql = `DELETE FROM tbl_movie WHERE id = ${id}`;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  insertMovie: async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const poster_path = req.body.poster_path;
    const backdrop_path = req.body.backdrop_path;

    const connection = await createConnection();
    try {
      const sql = `insert into tbl_movie (id, title, poster_path, backdrop_path)
                    values ('${id}', '${title}', '${poster_path}', '${backdrop_path}')`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getMovieDate: async (req, res) => {
    const idShow = req.params.idShow;
    const connection = await createConnection();
    try {
      const sql = `SELECT DISTINCT DATE_FORMAT(dateShow, "%Y-%m-%d") as dateShow , DATE_FORMAT(dateShow, "%d-%m-%Y") as dateShowRender FROM tbl_hour_show WHERE idShow = '${idShow}' AND dateShow > Current_date() ORDER BY dateShow asc`;
      console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getMovieShow: async (req, res) => {
    const idMovie = req.params.idMovie;
    const connection = await createConnection();
    try {
      const sql = `SELECT * from tbl_show  WHERE idMovie = ${idMovie}`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getMovieHours: async (req, res) => {
    const idShow = req.body.idShow;
    const dateShow = req.body.dateShow;
    console.log(idShow, dateShow);
    const connection = await createConnection();
    try {
      const sql = `SELECT time_format(hour, '%H:%i') as hour FROM tbl_hour_show WHERE idShow = '${idShow}' AND dateShow = '${dateShow}'order by hour asc;`;
      // console.log(sql);
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getMovieHourRoom: async (req, res) => {
    const idShow = req.params.idShow;
    const date = req.params.date;
    const hour = req.params.hour;
    const connection = await createConnection();
    try {
      const sql = `SELECT room from tbl_hour_show HS,tbl_show S WHERE S.idShow = ${idShow} AND dateShow = '${date}' AND hour = '${hour}'`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  getMovieHourRoomChairs: async (req, res) => {
    const idShow = req.params.idShow;
    const date = req.params.date;
    const hour = req.params.hour;
    const connection = await createConnection();
    try {
      const sql = `SELECT chair from tbl_hour_show natural join tbl_ticket natural join tbl_chair WHERE idShow = ${idShow} AND dateShow = '${date}' AND hour = '${hour}'`;
      const result = await connection.query(sql);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
  bookingTicket: async (req, res) => {
    const idShow = req.body.idShow;
    const date = req.body.date;
    const hour = req.body.hour;
    const chairList = req.body.chairList;
    const idUser = req.cookies?.idUser;

    const connection = await createConnection();

    try {
      const getIdHourQuery = `SELECT idHour from tbl_hour_show where idShow = ${idShow} AND dateShow = '${date}' AND hour = '${hour}'`;
      console.log(getIdHourQuery);
      const idHour = await connection.query(getIdHourQuery);
      if (idHour.length > 0) {
        const idH = idHour[0].idHour;
        const ticketQuery = `SELECT idTicket from tbl_ticket where idHour = ${idH} AND idUser = ${idUser}`;
        const ticket = await connection.query(ticketQuery);
        if (ticket.length == 0) {
          await connection.query(
            `INSERT INTO tbl_ticket (idUser, idHour) VALUES (${idUser}, ${idH})`
          );
          const idTicket = await connection.query(
            `SELECT idTicket from tbl_ticket where idHour = ${idH} AND idUser = ${idUser}`
          );
          chairList.forEach(async (chair) => {
            await connection.query(
              `INSERT INTO tbl_chair (idTicket, chair) VALUES (${idTicket[0].idTicket}, '${chair}')`
            );
          });
          const res1 = await connection.query(
            `UPDATE tbl_user set point = point + '${
              chairList.length * 2
            }' where idUser = '${idUser}' `
          );
          console.log(res1);
          res.status(200).json("Add ticket success");
        } else {
          const idTicket = ticket[0].idTicket;
          chairList.forEach(async (chair) => {
            await connection.query(
              `INSERT INTO tbl_chair (idTicket, chair) VALUES (${idTicket}, '${chair}')`
            );
          });
          await connection.query(
            `UPDATE tbl_user set point = point + 2 where idUser = '${idUser}' `
          );
          res.status(200).json("Add ticket chair success");
        }
      }
    } catch (err) {
      res.status(500).json(err);
    } finally {
      await connection.end();
    }
  },
};

module.exports = movieController;
