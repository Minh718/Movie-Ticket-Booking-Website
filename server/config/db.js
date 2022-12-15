import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password123Aa",
  database: "bk_cinema",
});

export default db;
