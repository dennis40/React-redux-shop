import {
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONES_SUCCESS,
  SEARCH_PHONE,
} from '../actionTypes';
import { mergeAll, pluck, concat } from 'ramda';

const initialState = {
  ids: [],
  search: '',
};
export const phonesPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return mergeAll([state, { ids: pluck('id', payload) }]);
    case LOAD_MORE_PHONES_SUCCESS:
      const ids = pluck('id', payload);
      return mergeAll([state, { ids: concat(state.ids, ids) }]);
    case SEARCH_PHONE:
      return mergeAll([state, { search: payload }]);
    default:
      return state;
  }
};
