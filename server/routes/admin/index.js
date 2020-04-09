module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const Category = require('../../models/Category')
  const Article = require('../../models/Article')
  const AdminUser = require('../../models/AdminUser')
  const bcrypt = require("bcrypt")
  const jwt = require("jsonwebtoken")
  const authMiddleWare = require('../../middleware/auth')

  //分类增删改查
  router.post("/categories", async(req, res) => {
    const {name} = req.body
    const isValid = await Category.findOne({name})
    if(isValid){
      return res.status(422).send({
        message:'分类名称已存在！'
      })
    }
    const model = await Category.create(req.body)
    res.send(model)
  });

  router.get("/categories/:id", async(req, res) => {
    const model = await Category.findById(req.params.id)
    res.send(model)
  });

  router.get("/categories", async(req, res) => {
    const {searchWord} = req.query
    const model = await Category.find({name:new RegExp(searchWord)})
    res.send(model)
  });

  router.put("/categories/:id",async(req,res)=>{
    const model = await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })

  router.delete("/categories/:id",async(req,res)=>{
    await Category.findByIdAndDelete(req.params.id,req.body)
    res.send({
      type:"success",
      message:"删除成功!"
    })
  })

  //文章增删改查
  router.post("/articles", async(req, res) => {
    const {title} = req.body
    const isValid = await Article.findOne({title})
    if(isValid){
      return res.status(422).send({
        message:'文章标题已存在！'
      })
    }
    const model = await Article.create(req.body)
    res.send(model)
  });

  router.get("/articles", async(req, res) => {
    const {searchWord} = req.query
    const model = await Article.find({title:new RegExp(searchWord)}).populate('categories')
    res.send(model)
  });

  router.get("/articles/:id", async(req, res) => {
    const model = await Article.findById(req.params.id)
    res.send(model)
  });

  router.put("/articles/:id",async(req,res)=>{
    const model = await Article.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })

  router.delete("/articles/:id",async(req,res)=>{
    await Article.findByIdAndDelete(req.params.id,req.body)
    res.send({
      type:"success",
      message:"删除成功!"
    })
  })


  //登录接口
  app.post("/admin/api/login",async (req,res)=>{
    const {username,password} = req.body
    const user = await AdminUser.findOne({username})
    if(!user) res.status(401).send({message:"用户名不存在!"})
    const isValid = bcrypt.compareSync(password,user.password)
    if(!isValid) res.status(401).send({message:"密码错误!"})
    const token = jwt.sign({id:user._id},'asdla324Ekakdl#klasdkasldkalda',{expiresIn:60})
    res.send({token})
  })

  app.use("/admin/api",authMiddleWare(), router);
};
