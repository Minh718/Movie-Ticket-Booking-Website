const commentRouter = require('express').Router();
const commentController = require('../controllers/articleController');

commentRouter.get("/", commentController.getAllComments);
commentRouter.get("/:id", commentController.getCommentByArticleId);
commentRouter.get("/delete/:id", commentController.deleteArticleByArticleId);
commentRouter.post("/update", commentController.updateComment);
commentRouter.post("/insert", commentController.insertComment);


module.exports = articleRouter;
