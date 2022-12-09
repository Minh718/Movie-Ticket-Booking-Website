const createConnection = require('../config/database')

const showtimeController = {
    addShowtime : async (req,res) =>{
        const idShow = req.body.idShow;
        const date = req.body.date;
        const hour = req.body.hour;

        const connection = await createConnection();
        try{
            const findShowDateQuery = `SELECT * FROM tbl_date_show WHERE idShow = ${idShow} AND dateShow = '${date}'`
            const showDate = await connection.query(findShowDateQuery);
            const findShowHourQuery = `SELECT * FROM tbl_hour_show WHERE idShow = ${idShow} AND dateShow = '${date}' AND hour = '${hour}'`
            const showHour = await connection.query(findShowHourQuery);
            if (showDate.length == 0){
                const insertShowDateQuery = `INSERT INTO tbl_date_show VALUES (${idShow},'${date}')`
                await connection.query(insertShowDateQuery);
            }
            if (showHour.length == 0){
                const insertShowHourQuery = `INSERT INTO tbl_hour_show (idShow,dateShow,hour) VALUES (${idShow},'${date}','${hour}')`
                await connection.query(insertShowHourQuery);
            }
            res.status(200).json({"status":"oke"});
        }catch(err){
            res.status(500).json(err);
        }
    }
}


module.exports = showtimeController;
