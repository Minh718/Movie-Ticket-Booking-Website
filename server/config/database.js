const mysql = require("mysql");
const createConnection = () => {
  const connection = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6585250",
    password: "nHscEdc7ma",
    database: "sql6585250",
  });

  const query = (sql) => {
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  };

  const end = () => {
    return new Promise((resolve, reject) => {
      connection.end((error) => {
        if (error) {
          reject();
        } else {
          resolve();
        }
      });
    });
  };

  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
      } else {
        resolve({ query, end });
      }
    });
  });
};

module.exports = createConnection;
module.exports = createConnection;
