import LOGIN_REQUEST from "./constants";
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  const res = await axios.post("/admin/signin", { ...user });

  if (res.status === 200) {
    const { token, user } = res.data;
    localStorage.setItem("token", token);

    dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
  }else{
      if(res.status === 400){
          dispatch({type:LOGIN_FAIL, payload:{error:res.data.error}})
      }
  }
};
