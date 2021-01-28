import { FETCH_CATEGORIES_SUCCESS } from '../actionTypes';
import { indexBy, mergeAll, prop } from 'ramda';

const initialState = {};
export const categories = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES_SUCCESS:
      const newValues = indexBy(prop('id'), payload);
      return mergeAll([state, newValues]);
    default:
      return state;
  }
};
