const articleRouter = require('express').Router();
const articleController = require('../controllers/articleController');

articleRouter.get("/", articleController.getAllArticles);
articleRouter.get("/:id", articleController.getArticleById);
articleRouter.get("/delete/:id", articleController.deleteArticleById);
articleRouter.post("/update", articleController.updateArticle);
articleRouter.post("/insert", articleController.insertArticle);

module.exports = articleRouter;
