import mysql from 'mysql'


export default function createConnection(){
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'bluewolf123',
        database: 'bk_cinema'
    });

    const query = sql => {
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
            connection.end(error => {
                if (error) {
                    reject();
                } else {
                    resolve();
                }
            })
        });
    };

    return new Promise((resolve, reject) => {
        connection.connect(error => {
            if (error) {
                reject(error);
            } else {
                resolve({query, end});
            }
        });
    })
};

