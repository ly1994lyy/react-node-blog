module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const jwt = require("jsonwebtoken")
  const Category = require("../../models/Category");
  const Article = require("../../models/Article")
  const User = require("../../models/User")

  router.get("/categories", async (req, res) => {
    const model = await Category.find();
    res.send(model);
  });

  router.get("/articles", async (req, res) => {
    const model = await Article.find().populate('categories');
    res.send(model);
  });

  router.get("/articles/:id", async (req, res) => {
    const model = await Article.findById(req.params.id).populate('categories');
    res.send(model);
  });

  router.post("/register",async (req,res)=>{
    const {username,password,passwordConfirm} = req.body
    const useIsValid = await User.findOne({username})
    if(useIsValid){
      return res.status(422).send({
        message:'用户名已存在！'
      })
    }
    if(password===passwordConfirm){
      const model = await User.create({username,password})
      res.send(model)
    }else{
      return res.status(422).send({
        message:'两次密码不一样！'
      })
    }
  })

  router.post("/login",async (req,res)=>{
    const {username,password} = req.body
    const user = await User.findOne({username})
    if(!user){
      return res.status(422).send({
        message:'用户名不存在！'
      })
    }
    const isValid = require('bcrypt').compareSync(user.password,password)
    if(!isValid){
      return res.status(422).send({
        message:'密码错误'
      })
    }
  })
  app.use("/web/api", router);
};
