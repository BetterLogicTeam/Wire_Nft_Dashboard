import {
  SET_TEAM_DY_REPORT,
  SET_DAILY_YEILD_REPORT,
  SET_BONUS_DY_REPORT,
  SET_REFERRAL_EARNING_REPORT,
  SET_POOLS_REPORT,
  SET_WIDTHDRAWL_REPORT,
  SET_ACTIVE_HISTORY_REPORT,
  SET_DOWNLINE_REPORT,
  SET_MY_REFERRAL_REPORT,
  SET_TEAM_REPORT,SET_LEVEL_REPORT
} from "../types";

const initialState = {
  dailyYeildReport: [],
  bonusDyReport: [],
  referralReport: [],
  poolsReport: [],
  teamDyReport: [],
  widthdrawlReport: [],
  activeHistoryReport: [],
  downlineReport: [],
  refReport: [],
  teamReport: [],
  levelReport:[]

};

const dailyYieldReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    
    case SET_LEVEL_REPORT:
      return { ...state, levelReport: action.payload };
    case SET_TEAM_REPORT:
      return { ...state, teamReport: action.payload };
    case SET_DAILY_YEILD_REPORT:
      return { ...state, dailyYeildReport: action.payload };
    case SET_BONUS_DY_REPORT:
      return { ...state, bonusDyReport: action.payload };
    case SET_REFERRAL_EARNING_REPORT:
      return { ...state, referralReport: action.payload };
    case SET_POOLS_REPORT:
      return { ...state, poolsReport: action.payload };
    case SET_TEAM_DY_REPORT:
      return { ...state, teamDyReport: action.payload };
    case SET_WIDTHDRAWL_REPORT:
      return { ...state, widthdrawlReport: action.payload };
    case SET_ACTIVE_HISTORY_REPORT:
      return { ...state, activeHistoryReport: action.payload };
    case SET_DOWNLINE_REPORT:
      return { ...state, downlineReport: action.payload };
    case SET_MY_REFERRAL_REPORT:
      return { ...state, refReport: action.payload };

    default:
      return { ...state };
  }
};

export default dailyYieldReducer;
