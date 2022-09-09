import axios from "axios";
import {
  SET_DAILY_YEILD_REPORT,
  SET_BONUS_DY_REPORT,
  SET_REFERRAL_EARNING_REPORT,
  SET_POOLS_REPORT,
  SET_TEAM_DY_REPORT,
  SET_WIDTHDRAWL_REPORT,
  SET_ACTIVE_HISTORY_REPORT,
  SET_DOWNLINE_REPORT,
  SET_MY_REFERRAL_REPORT,
  SET_TEAM_REPORT,
  SET_LEVEL_REPORT,
  SET_WIDTHDRAWL
} from "../types";
import { API } from "./API";


export const getTeamReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/my_team_reports?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_TEAM_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getLevelReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/level_details?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_LEVEL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getMyReferralReport = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(`https://ule-nft-api.herokuapp.com/nft_Staking_history?id=${payload}`);
    console.log("Api_DATA",res);
    if (res?.data?.success) {
      dispatch({
        type: SET_MY_REFERRAL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getDownlineReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/downline_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DOWNLINE_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};


export const getActiveHistoryReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/active_history_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_ACTIVE_HISTORY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getWidthdrawlReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/withdrawl_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_WIDTHDRAWL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};






export const getDailyYieldReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/daily_yeild_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DAILY_YEILD_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getBonusDYReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/bonus_dy_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_BONUS_DY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getReferralEarning = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/referral_earning_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_REFERRAL_EARNING_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getPoolsReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/pools_report?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_POOLS_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getTeamDyReport = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/team_dy_report?id='${payload}'`);
    if (res?.data?.success) {
      dispatch({
        type: SET_TEAM_DY_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getMyUnStakingReport = (payload) => async (dispatch) => {
  try {
    const res = await axios.get(`https://ule-nft-api.herokuapp.com/nft_UnStaking_history?id=${payload}`);
    // console.log("Api_DATA",res);
    if (res?.data?.success) {
      dispatch({
        type: SET_MY_REFERRAL_REPORT,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

// http://localhost:8080/registraction
// {
//   "sid":"100",
//   "uid":"",
//   "accountnumber":"TXXfR9sSKRELQcGmyuwq65qY1iz5NEFA7G",
//   "email":"",
//   "addresslist":"",
//   "paymentType":"",
//   "amount":"",
//   "traxn":"TXXfR9sSKRELQcGmyuwq65qY1iz5NEFA7G",
//   "status":"success",
//   "amount1":"",
//   "amount2":""
//  }