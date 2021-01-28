import {
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
} from '../actionTypes';
import { assoc, indexBy, mergeAll, prop } from 'ramda';

const initialState = {};
export const phones = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      const newValues = indexBy(prop('id'), payload);
      return mergeAll([state, newValues]);
    case LOAD_MORE_PHONES_SUCCESS:
      const moreValues = indexBy(prop('id'), payload);
      return mergeAll([state, moreValues]);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return assoc(payload.id, payload, state);
    default:
      return state;
  }
};
