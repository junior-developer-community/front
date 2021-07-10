import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import common from './common'


export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { 
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    common,
  })(state, action);
};

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;