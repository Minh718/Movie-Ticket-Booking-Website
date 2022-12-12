const articleRouter = require('express').Router();
const articleController = require('../controllers/articleController');

articleRouter.get("/", articleController.getAllArticles);
articleRouter.get("/:id", articleController.getArticleById);
articleRouter.get("/delete/:id", articleController.deleteArticleById);
articleRouter.get("/update", articleController.updateArticle);


module.exports = articleRouter;
