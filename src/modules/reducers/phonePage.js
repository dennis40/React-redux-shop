import {
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
} from '../actionTypes';
import { mergeAll, prop } from 'ramda';

const initialState = {
  id: null,
};
export const phonePage = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return mergeAll([state, { id: prop('id', payload) }]);
    default:
      return state;
  }
};
