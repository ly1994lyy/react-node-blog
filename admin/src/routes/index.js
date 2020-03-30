import React from 'react'
import Login from "../pages/Login/Login";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import ArticleList from "../pages/Article/ArticleList";
import Home from "../pages/Home/Home";
import EditArticle from "../pages/Article/EditArticle";
import UserList from "../pages/User/UserList";
import AdminUserList from "../pages/AdminUser/AdminUserList";
import EditAdminUser from "../pages/AdminUser/EditAdminUser";

import {
    UserOutlined,
    TeamOutlined,
    HomeOutlined,
    ReadOutlined,
    BarsOutlined
  } from "@ant-design/icons";
import EditCategory from '../pages/Category/EditCategory';
import CategoryList from '../pages/Category/CategoryList';

export const mainRouter = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/404",
    component: PageNotFound
  }
];

export const adminRouter = [
  { path: "/admin", component: Home, exact: true, isShow: true, title: "首页",icon:<HomeOutlined /> },
  {
    path: "/admin/category",
    component: CategoryList,
    isShow: true,
    exact:true,
    title: "分类管理",
    icon:<BarsOutlined />
  },
  { path: "/admin/category/create", component: EditCategory, isShow: false },
  { path: "/admin/category/edit/:id", component: EditCategory, isShow: false },
  {
    path: "/admin/article",
    component: ArticleList,
    isShow: true,
    exact:true,
    title: "文章列表",
    icon:<ReadOutlined />
  },
  { path: "/admin/article/create", component: EditArticle, isShow: false },
  { path: "/admin/article/edit/:id", component: EditArticle, isShow: false },
  {
    path: "/admin/user",
    component: UserList,
    exact:true,
    isShow: true,
    title: "用户列表",
    icon:<TeamOutlined />
  },
  {
    path: "/admin/adminuser",
    component: AdminUserList,
    isShow: true,
    title: "管理员列表",
    icon:<UserOutlined />
  },
  { path: "/admin/adminuser/create", component: EditAdminUser, isShow: false },
  { path: "/admin/adminuser/edit/:id", component: EditAdminUser, isShow: false },
];
