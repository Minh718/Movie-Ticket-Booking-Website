const createConnection = require('../config/database')

const userController = {
    registerUser: async (req, res) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const gender = req.body.gender;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
        console.log(firstName, lastName, gender, phone, email, password);
        const connection = await createConnection();
        try
        {
            try
            {
                let checkUser = `SELECT * FROM tbl_user where email = '${email}' or phone = '${phone}'`
                const userFinded = await connection.query(checkUser);
                if (userFinded.length > 0)
                {
                    return res.status(500).json({ "error": "So dien thoai hoac mail da duoc dang ki" });
                }
            } catch (e)
            {
                return res.status(500).json({ "error": e });
            }
            let sql = `INSERT INTO tbl_user (firstName, lastName, gender, phone, email, password) VALUES ('${firstName}', '${lastName}', '${gender}', '${phone}', '${email}', '${password}')`;
            const result = await connection.query(sql);
            return res.status(200).json(result);
        } catch (err)
        {
            return res.status(500).json({ "error": err });
        } finally
        {
            await connection.end();
        }
    },
    getUser: async (req, res) => {
        console.log('here')
        const idUser = req.cookies?.idUser;
        if (!idUser)
        {
            return res.status(500).json("User aren't logged in");
        }
        const connection = await createConnection();
        try
        {
            let sql = `SELECT * FROM tbl_user where idUser = ${idUser}`;
            const result = await connection.query(sql);
            res.status(200).json(result);
        } catch (err)
        {
            res.status(500).json({ "error": err });
        }
    },
    loginUser: async (req, res) => {
        const phoneEmail = req.body.phoneEmail;
        const password = req.body.password;
        if (req.cookies?.idUser)
        {
            return res.status(200).json("User already logged in");
        }
        const connection = await createConnection();
        try
        {
            let sql = `SELECT * FROM tbl_user where email = '${phoneEmail}' or phone = '${phoneEmail}'`
            const result = await connection.query(sql);
            if (result[0].password === password)
            {
                res.cookie("idUser", result[0].idUser, {
                    httpOnly: true,
                    path: "/",
                    sameSite: "strict",
                    secure: true
                });
                res.status(200).json(result);
            } else
            {
                res.status(500).json({ "error": "wrong password" });
            }
        } catch (err)
        {
            res.status(500).json({ "error": "wrong phone or email" });
        } finally
        {
            await connection.end();
        }
    },
    logoutUser: (req, res) => {
        if (req.cookies?.idUser)
        {
            res.clearCookie("idUser");
            res.status(200).json({ status: 'Logout success' });
        } else
        {
            res.status(500).json({ status: "User don't log in" });
        }
    },
    updateUserInfo: async (req, res) => {
        const id = req.body.id;
        const firstName = req.body.fname;
        const lastName = req.body.lname;
        const gender = req.body.gender;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;

        const connection = await createConnection();
        try
        {
            const sql =
                `update tbl_user 
				set firstName='${firstName}', lastName='${lastName}', gender='${gender}',
                phone='${phone}', email='${email}', password='${password}'
				where idUser=${id}`;
            const result = await connection.query(sql);
            res.status(200).json(result);
        } catch (err)
        {
            res.status(500).json(err);
        } finally
        {
            await connection.end();
        }
    }
}

module.exports = userController;