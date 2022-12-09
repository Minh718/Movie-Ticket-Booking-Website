const createConnection = require('../config/database')

const showController = {
    addShow : async (req,res) =>{
        const idMovie = req.body.idMovie;
        const price = req.body.price;
        const room = req.body.room;

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
