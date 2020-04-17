import { login,register } from "../../api/auth";
import * as actions from "../constants"
import jwtDecode from "jwt-decode"
import {message} from "antd"

export const setCurrentUser = user=>{
  return {
    type:actions.User_Login,
    user:jwtDecode(user)
  }
}

export const userLogin = userData => async dispatch => {
  const res = await login(userData);
  if(res.status===200) message.success('登录成功!')
  localStorage.setItem('usertoken',res.data.token)
  dispatch(setCurrentUser(res.data.token))
};


export const userRegister = userData => async dispatch => {
  const res = await register(userData);
  if(res.status===200) message.success("注册成功!");
  return res
};
