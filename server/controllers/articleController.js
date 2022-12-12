const createConnection = require('../config/database')

const articleController = {
	getAllArticles: async (req, res) => {
		const connection = await createConnection();
		try
		{
			const sql = "select * from tbl_article";
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
	getArticleById: async (req, res) => {
		const id = req.params.id;

		const connection = await createConnection();
		try
		{
			const sql = `select * from tbl_article where idArticle=${id}`;
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
	deleteArticleById: async (req, res) => {
		const id = req.params.id;

		const connection = await createConnection();
		try
		{
			const sql = `delete from tbl_article where idArticle=${id}`;
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
	updateArticle: async (req, res) => {
		const id = req.body.id;
		const title = req.body.title;
		const summary = req.body.summary;
		const content = req.body.content;
		const img = req.body.img;

		const connection = await createConnection();
		try
		{
			const sql =
				`update tbl_article 
				set title='${title}', summary='${summary}', content='${content}', img='${img}'
				where idArticle=${id}`;
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
}

module.exports = articleController;