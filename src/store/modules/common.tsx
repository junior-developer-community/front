import { createReducer, createAction } from "@reduxjs/toolkit";

type LoadingState = {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading : false,
}

const LOADING = 'common/LOADING'

export const loading = createAction(LOADING, isLoading => isLoading)

export const simpleAPI = (api, callback, isIgnoreLoading = false) => async dispatch => {  
  !isIgnoreLoading && dispatch(loading(true))
  api.then(result => {
    callback(result)
    !isIgnoreLoading && dispatch(loading(false))
  }).catch(err => {
    console.error(err)
    !isIgnoreLoading && dispatch(loading(false))
  })
}

export default createReducer(initialState, {
  [LOADING]: (state, {payload}) => ({...state, isLoading: payload}),
})
