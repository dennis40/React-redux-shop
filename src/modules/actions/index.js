import {
  ADD_PHONE_TO_BASKET,
  CLEAN_BASKET,
  FETCH_CATEGORIES_FAILURE,
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_PHONE_BY_ID_FAILURE,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_FAILURE,
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_FAILURE,
  LOAD_MORE_PHONES_START,
  LOAD_MORE_PHONES_SUCCESS,
  REMOVE_FROM_BASKET,
  SEARCH_PHONE,
} from '../actionTypes';

import {
  fetchPhones as fetchPhonesApi,
  loadMorePhones as loadMorePhonesApi,
  fetchPhoneById as fetchPhoneByIdApi,
  fetchCategories as fetchCategoriesApi,
} from '../api/api';
import { getRenderedPhonesLength } from '../selectors';

export const fetchPhones = () => async (dispatch) => {
  dispatch({
    type: FETCH_PHONES_START,
  });
  try {
    const phones = await fetchPhonesApi();
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (e) {
    dispatch({
      type: FETCH_PHONES_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState());
  dispatch({
    type: LOAD_MORE_PHONES_START,
  });
  try {
    const phones = await loadMorePhonesApi({ offset });
    dispatch({
      type: LOAD_MORE_PHONES_SUCCESS,
      payload: phones,
    });
  } catch (e) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const fetchPhoneById = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_PHONE_BY_ID_START,
  });
  try {
    const phone = await fetchPhoneByIdApi(id);
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone,
    });
  } catch (e) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const addPhoneToBasket = (id) => (dispatch) => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id,
  });
};

export const searchPhone = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_PHONE,
    payload: text,
  });
};

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: FETCH_CATEGORIES_START,
  });
  try {
    const categories = await fetchCategoriesApi();
    dispatch({
      type: FETCH_CATEGORIES_SUCCESS,
      payload: categories,
    });
  } catch (e) {
    dispatch({
      type: FETCH_CATEGORIES_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const removePhoneFromBasket = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BASKET,
    payload: id,
  });
};

export const cleanBasket = () => (dispatch) => {
  dispatch({
    type: CLEAN_BASKET,
  });
};

export const basketCheckout = () => () => {
  alert('CHECKOUT');
};