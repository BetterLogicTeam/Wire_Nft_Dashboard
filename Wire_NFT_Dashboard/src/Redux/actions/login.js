import { SET_USER } from "../types";
import { API } from "./API";
export const loginAction = (payload) => async (dispatch) => {
  try {
    if (payload.length > 6) {
      const res = await API.get(`/login?id='${payload}'`);
      console.log("Redux_Res",res);
      if (res?.data?.success && res?.data?.data !== 0) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch({
          type: SET_USER,
          payload: res.data.data,
        });
        return true;
      } else {
        return false;
      }
    } else {
      const res = await API.get(`/login?id=${payload}`);
      if (res?.data?.success && res?.data?.data !== 0) {
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        dispatch({
          type: SET_USER,
          payload: res.data.data,
        });
        return true;
      } else {
        return false;
      }
    }
  } catch (e) {
    return false;
  }
};
