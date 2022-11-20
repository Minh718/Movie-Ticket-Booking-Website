import express, { query } from "express";
import db from "../config/db.js";

const movieRouter = express.Router();

movieRouter.get("/", (req, res) => {
  db.query("select * from tbl_movie", (err, result) => {
    if (err) res.status(500).json("error");
    else res.status(200).json(result);
  });
});
movieRouter.get("/:idMovie/dates", (req, res) => {
  const idMovie = req.params.idMovie;
  console.log("oke");
  db.query(
    "SELECT dateShow from tbl_show natural JOIN tbl_date_show WHERE idMovie = ?",
    idMovie,
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});
movieRouter.get("/:idMovie/show", (req, res) => {
  const idMovie = req.params.idMovie;
  db.query(
    "SELECT * from tbl_show  WHERE idMovie = ?",
    idMovie,
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});

movieRouter.get("/:idMovie/:date/hours", (req, res) => {
  const idMovie = req.params.idMovie;
  const date = req.params.date;
  db.query(
    "SELECT hour from tbl_show natural JOIN tbl_date_show natural JOIN tbl_hour_show WHERE idMovie = ? AND dateShow = ?",
    [idMovie, date],
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});
movieRouter.get("/:idShow/:date/:hour/room", (req, res) => {
  const idShow = req.params.idShow;
  const date = req.params.date;
  const hour = req.params.hour;
  console.log(req.params);
  db.query(
    "SELECT room from tbl_hour_show WHERE idShow = ? AND dateShow = ? AND hour = ?",
    [idShow, date, hour],
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});
movieRouter.get("/:idShow/:date/:hour/chairs", (req, res) => {
  const idShow = req.params.idShow;
  const date = req.params.date;
  const hour = req.params.hour;
  db.query(
    "SELECT chair from tbl_hour_show natural join tbl_ticket natural join tbl_chair WHERE idShow = ? AND dateShow = ? AND hour = ?",
    [idShow, date, hour],
    (err, result) => {
      if (err) res.status(500).json("error");
      else res.status(200).json(result);
    }
  );
});
movieRouter.post("/tickets", (req, res) => {
  const idShow = req.body.idShow;
  const date = req.body.date;
  const hour = req.body.hour;
  const chairList = req.body.chairList;
  const idUser = req.body.idUser;
  db.query(
    "SELECT idHour from tbl_hour_show where idShow = ? AND dateShow = ? AND hour = ? ",
    [idShow, date, hour],
    (err, result) => {
      if (err) res.status(500).json("error");
      else {
        const idHour = result[0].idHour;
        db.query(
          `SELECT idTicket from tbl_ticket where idHour = ? AND idUser = ?`,
          [idHour, idUser],
          (err, result) => {
            if (err) res.status(500).json("error");
            else {
              if (result.length === 0) {
                db.query(
                  `INSERT INTO tbl_ticket (idUser, idHour) VALUES (?, ?)`,
                  [idUser, idHour],
                  (err, result) => {
                    if (err) res.status(500).json("error");
                  }
                );
                db.query(
                  `SELECT idTicket from tbl_ticket where idHour = ? AND idUser = ?`,
                  [idHour, idUser],
                  (err, result) => {
                    if (err) res.status(500).json("error");
                    else {
                      const idTicket = result[0].idTicket;
                      chairList.forEach((chair, index) => {
                        db.query(
                          "INSERT INTO tbl_chair (idTicket, chair) VALUES (?, ?)",
                          [idTicket, chair],
                          (err, result) => {
                            if (err) res.status(500).json("error-chair");
                            if (index === chairList.length - 1)
                              res.status(200).json("oke");
                          }
                        );
                      });
                    }
                  }
                );
              } else {
                const idTicket = result[0].idTicket;
                chairList.forEach((chair, index) => {
                  db.query(
                    "INSERT INTO tbl_chair (idTicket, chair) VALUES (?, ?)",
                    [idTicket, chair],
                    (err, result) => {
                      if (err) res.status(500).json("error-chair");
                      if (index === chairList.length - 1)
                        res.status(200).json("oke");
                    }
                  );
                });
              }
            }
          }
        );
        // chairList.forEach(chair => {
        //   db.query("INSERT INTO tbl_chair (idHour, position) VALUES (")
        // });
      }
    }
  );
});

export default movieRouter;
