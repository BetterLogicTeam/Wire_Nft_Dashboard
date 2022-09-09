import {
  SET_WALLET_ADDRESS,
  SET_TEAM_DY,
  SET_DAILY_YEILD,
  SET_ALL_PARTICIPANTS,
  SET_BONUS_DY,
  SET_POOLS,
  SET_WIDTHDRAWL,
  SET_REFERRAL_EARNING,
  SET_DOWNLINE_BUSINESS
} from "../types";
import { API } from "./API";
export const getWalletAddress = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/wallet_address?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_WALLET_ADDRESS,
        payload: {res:res.data.data,user:payload}
      })
    }
  } catch (e) {
  }
};

export const getDailyYeild = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/daily_yeild?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DAILY_YEILD,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getTeamDy = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/team_dy?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_TEAM_DY,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getReferralEarning = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/referral_earning?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_REFERRAL_EARNING,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getPools = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/pools?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_POOLS,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getBonusDy = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/bonus_dy?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_BONUS_DY,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getWithdrawal = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/withdrawal?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_WIDTHDRAWL,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};
export const getDownlineBusiness = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/downline_business?id=${payload}`);
    if (res?.data?.success) {
      dispatch({
        type: SET_DOWNLINE_BUSINESS,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};

export const getAllParticipants = (payload) => async (dispatch) => {
  try {
    const res = await API.get(`/participants`);
    if (res?.data?.success) {
      dispatch({
        type: SET_ALL_PARTICIPANTS,
        payload: res.data.data
      })
    }
  } catch (e) {
  }
};