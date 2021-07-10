import {
  configureStore,
  getDefaultMiddleware,
  Action,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from 'redux-logger';
import rootReducer from './modules'

const middleware = [...getDefaultMiddleware(), logger ];

const store = () => configureStore({
  reducer: rootReducer,
  middleware: middleware
});

export const wrapper = createWrapper(store, {
  debug: true,
});

export default wrapper;