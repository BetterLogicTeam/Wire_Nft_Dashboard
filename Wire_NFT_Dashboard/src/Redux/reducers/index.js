import dashboardReducer from "./dashboard";
import dailyYieldReducer from "./dailyYield"
import authReducer from "./auth"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    dailyYield: dailyYieldReducer,
    authReducer: authReducer
});

export default rootReducer;