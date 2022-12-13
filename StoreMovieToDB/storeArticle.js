import { readFile } from 'fs/promises';
import createConnection from "./database.js"

const json = JSON.parse(
	await readFile(
		new URL('./articleData.json', import.meta.url)
	)
);
const data = json.data;

const connection = await createConnection()

try
{
	for (let i = 0; i < data.length; i++)
	{
		const content = data[i].content.reduce((accum, item) => {
			accum += item + "$"
			return accum
		}, "")
		const query = `INSERT INTO tbl_article (idArticle, title, summary, content, img) 
			VALUES (${data[i].id}, '${data[i].title}', '${data[i].summary}', '${content}', '${data[i].image}')`

		//const values = [data[i].id, data[i].title, data[i].summary, content, data[i].image]

		await connection.query(query)

		// insert comment
		// for (let j = 0; j < data.comments.length; j++)
		// {
		// 	const queryCmt = `
		// 		INSERT INTO tbl_commentarticle VALUES
		// 		(${data[i].comments.id}, ${data[i].id}, ${data[i].content});
		// 	`
		// 	// userid, articleid, content
		// 	await connection.query(queryCmt)
		// }
	}
}
catch (e)
{
	console.log(e);
}
finally
{
	await connection.end();
}


//node storeArticle