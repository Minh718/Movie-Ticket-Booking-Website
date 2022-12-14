const createConnection = require('../config/database')

const commentController = {
	getAllComments: async (req, res) => {
		const connection = await createConnection();
		try
		{
			const sql = "select * from tbl_commentarticle";
			const result = await connection.query(sql);
			res.status(200).json(result);
		} catch (err)
		{
			res.status(500).json(err);
		} finally
		{
			await connection.end();
		}
	},
	getCommentByArticleId: async (req, res) => {
		const id = req.params.id;

		const connection = await createConnection();
		try
		{
			const sql = `select * from tbl_commentarticle where idArticle=${id}`;
			const result = await connection.query(sql);
			res.status(200).json(result);
		} catch (err)
		{
			res.status(500).json(err);
		} finally
		{
			await connection.end();
		}
	},
	deleteArticleByArticleId: async (req, res) => {
		const id = req.params.id;

		const connection = await createConnection();
		try
		{
			const sql = `delete from tbl_commentarticle where idArticle=${id}`;
			const result = await connection.query(sql);
			res.status(200).json(result);
		} catch (err)
		{
			res.status(500).json(err);
		} finally
		{
			await connection.end();
		}
	},
	updateComment: async (req, res) => {
		const idUser = req.body.idUser;
		const idArticle = req.body.idArticle;
		const content = req.body.content;


		const connection = await createConnection();
		try
		{
			const sql =
				`update tbl_commentarticle 
				set content='${content}'
				where idArticle=${idArticle} and idUser=${idUser}`;
			const result = await connection.query(sql);
			res.status(200).json(result);
		} catch (err)
		{
			res.status(500).json(err);
		} finally
		{
			await connection.end();
		}
	},
	insertComment: async (req, res) => {
		const idUser = req.body.idUser;
		const idArticle = req.body.idArticle;
		const content = req.body.content;

		const connection = await createConnection();
		try
		{
			const sql =
				`insert into tbl_commentarticle (content, idUser, idArticle)
				values ('${content}', ${idUser}, ${idArticle})`;
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

module.exports = commentController;