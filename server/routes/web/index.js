module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const Category = require("../../models/Category");
  const Article = require("../../models/Article")

  router.get("/categories", async (req, res) => {
    const model = await Category.find();
    res.send(model);
  });

  router.get("/articles", async (req, res) => {
      const {skipArt} = req.query
    const model = await Article.find().limit(parseInt(skipArt)).populate('categories');
    res.send(model);
  });

  app.use("/web/api", router);
};
