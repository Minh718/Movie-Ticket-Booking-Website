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
    },
    getAllShowTime : async (req,res) =>{
        const connection = await createConnection();
        try{
            const sql = `SELECT idShow,idMovie,title,dateShow,idHour,hour 
            FROM 
            (SELECT S.idShow,idMovie,dateShow,idHour,hour FROM tbl_hour_show S JOIN tbl_show M ON S.idShow =  M.idShow) AS Temp 
            JOIN tbl_movie ON tbl_movie.id = Temp.idMovie`;
            const showDate = await connection.query(sql);
            res.status(200).json(showDate);
        }catch(err){
            res.status(500).json(err);
        }
    },
    deleteShowtime : async (req,res)=>{
        const connection = await createConnection();
        const showID = req.body.showID;
        const hourID = req.body.hourID;
        try{
            const sql = `DELETE FROM tbl_hour_show WHERE idShow = ${showID} AND idHour = ${hourID}`
            console.log(sql);
            const result = await connection.query(sql);
            res.status(200).json(result);
        }catch(err){
            res.status(500).json(err);
        }
    }
}


module.exports = showtimeController;
