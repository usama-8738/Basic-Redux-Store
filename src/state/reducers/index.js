import { combineReducers } from "redux";
import AmountReducer from "./AmountReducer";

const rootReducer = combineReducers({
  amount: AmountReducer,
});

export default rootReducer;
