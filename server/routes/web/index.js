module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const jwt = require("jsonwebtoken");
  const Category = require("../../models/Category");
  const Article = require("../../models/Article");
  const User = require("../../models/User");
  const Comment = require("../../models/Comment");
  const Like = require("../../models/Like");

  router.get("/categories", async (req, res) => {
    const model = await Category.find();
    res.send(model);
  });

  router.get("/categories/:id", async (req, res) => {
    const model = await Category.findById(req.params.id)
      .populate({ path: "articlelist" })
      .lean();
    res.send(model);
  });

  router.get("/articles", async (req, res) => {
    const model = await Article.find().populate("categories");
    res.send(model);
  });

  router.get("/articles/:id", async (req, res) => {
    const model = await Article.findById(req.params.id)
      .populate({ path: "comments", populate: "commenter" })
      .populate({path:'likes'})
      .populate("categories")
      .lean();
    res.send(model);
  });

  router.post("/register", async (req, res) => {
    const { username, password, passwordConfirm } = req.body;
    const useIsValid = await User.findOne({ username });
    if (useIsValid) {
      return res.status(422).send({
        message: "用户名已存在！",
      });
    }
    if (password === passwordConfirm) {
      const model = await User.create({ username, password });
      res.send(model);
    } else {
      return res.status(422).send({
        message: "两次密码不一样！",
      });
    }
  });

  router.post("/comment", async (req, res) => {
    const model = await Comment.create(req.body);
    res.send(model);
  });

  router.post("/like", async (req, res) => {
    const model = await Like.create(req.body);
    res.send(model);
  });

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).populate({path:'likes'}).lean();
    if (!user) {
      return res.status(422).send({
        message: "用户名不存在！",
      });
    }
    const isValid = require("bcrypt").compareSync(password, user.password);
    if (!isValid) {
      return res.status(422).send({
        message: "密码错误",
      });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username},
      "sdfsgdfgfdhdhretet"
    );
    res.send({ token });
  });
  app.use("/web/api", router);
};
