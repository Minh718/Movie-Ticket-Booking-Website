const createConnection = require('../config/database')

const showController = {
    getAllShows : async (req,res) => {
        const connection = await createConnection();
        try{
            const sql = `SELECT idShow,idMovie,price,room,title FROM tbl_show S
            JOIN tbl_movie M
            ON S.idMovie = M.id
            `
            console.log(sql);
            const result = await connection.query(sql);
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    },
    addShow : async (req,res) =>{
        const connection = await createConnection();
        try{
            const sql = `INSERT INTO tbl_show (idMovie, price, room) VALUES (${idMovie},${price},'${room}')`
            console.log(sql);
            const result = await connection.query(sql);
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }
}


module.exports = showController;
