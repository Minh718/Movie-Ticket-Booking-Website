import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bk_cinema",
});

export default db;
