import {User_Login} from "../constants/index"
import isEmpty from "lodash/isEmpty"

const initialState = {
    isAuthenticated:false,
    user:{}
}
const auth = (state = initialState, action) => {
  switch (action.type) {
    case User_Login:
      return {
          isAuthenticated:!isEmpty(action.user),
          user:action.user
      };
    default:
      return state;
  }
};

export default auth;
