import { login } from "../../api/auth";
import {User_Login} from "../constants/index"
import jwtDecode from "jwt-decode"

export const userLogin = userData => async dispatch => {
  const res = await login(userData);
  localStorage.setItem('token',res.data.token)
  dispatch({
      type:User_Login,
      user:jwtDecode(res.data.token)
  })
};
