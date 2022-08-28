import {
  SET_WALLET_ADDRESS, SET_DAILY_YEILD, SET_TEAM_DY, SET_ALL_PARTICIPANTS,
  SET_BONUS_DY, SET_POOLS, SET_WIDTHDRAWL, SET_REFERRAL_EARNING, SET_DOWNLINE_BUSINESS

} from "../types";

const initialState = {
  walletAddress: null,
  dailyYeild: null,
  teamDy: null,
  allParticipants: null,
  bonusDy: null,
  pools: null,
  widthdrawl: null,
  referralEearnig: null,
  downlineBusiness: null,
  userId:0
};

const dashboardReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_WALLET_ADDRESS:
      return { ...state, walletAddress: action.payload.res ,userId:action.payload.user};
    case SET_DAILY_YEILD:
      return { ...state, dailyYeild: action.payload };
    case SET_TEAM_DY:
      return { ...state, teamDy: action.payload };
    case SET_ALL_PARTICIPANTS:
      return { ...state, allParticipants: action.payload };
    case SET_BONUS_DY:
      return { ...state, bonusDy: action.payload };
    case SET_POOLS:
      return { ...state, pools: action.payload };
    case SET_WIDTHDRAWL:
      return { ...state, widthdrawl: action.payload };
    case SET_REFERRAL_EARNING:
      return { ...state, referralEearnig: action.payload };
    case SET_DOWNLINE_BUSINESS:
      return { ...state, downlineBusiness: action.payload };

    default:
      return { ...state };
  }
};

export default dashboardReducer;
