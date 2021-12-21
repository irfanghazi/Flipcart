import { authConstant } from "./constants";
import axiosInstance from '../../helpers/axios'


export const login = (user) => async (dispatch) => {
  dispatch({ type: authConstant.ADMIN_LOGIN_REQUEST });

  const res = await axiosInstance.post("/admin/signin", { ...user });
  console.log(res)

  if (res.status === 200) {
    const { token, user } = res.data;
    localStorage.setItem("token", token);
    //console.log(token)
    localStorage.setItem("user", JSON.stringify(user));

    dispatch({ type: authConstant.ADMIN_LOGIN_SUCCESS, payload: { token, user } });
  } else {
    if (res.status === 400) {
      dispatch({type: authConstant.ADMIN_LOGIN_FAIL, payload: { error: res.data.error }});
    }
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if(token){
    dispatch({ type: authConstant.ADMIN_LOGIN_SUCCESS, payload: { token, user } });

  }else{
    dispatch({type:authConstant.ADMIN_LOGIN_FAIL, payload:{error:"Failed to login"}})
  }
};

export const logoutUser = () => async(dispatch) => {
localStorage.clear()
  dispatch({type:authConstant.ADMIN_LOGOUT_REQUEST})
}


