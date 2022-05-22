import axios from "axios";
import { SET_LOADING, SET_ERROR, FECTH_PRODUCTS } from "./actionType";
const url = "https://randomuser.me/api/?results=4&page=";

export function fetchProducts(page) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const data = await axios(`${url}${page}`);
      dispatch(setLoading(false));
      dispatch(setFetchProducts(data.data.results));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  };
}

export function setFetchProducts(payload) {
  return {
    type: FECTH_PRODUCTS,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SET_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SET_ERROR,
    payload,
  };
}
