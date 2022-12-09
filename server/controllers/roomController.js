const createConnection = require('../config/database')

const roomController = {
    getAllRoom : async (req,res) =>{
        const connection = await createConnection();
        try{
            const sql = `SELECT * FROM tbl_room`
            const result = await connection.query(sql);
            res.status(200).json(result)
        }catch(err){
            res.status(500).json(err);
        }
    }
}


module.exports = roomController;
