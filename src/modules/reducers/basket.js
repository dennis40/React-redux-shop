import {
  ADD_PHONE_TO_BASKET,
  CLEAN_BASKET,
  REMOVE_FROM_BASKET,
} from '../actionTypes';
import { append, without } from 'ramda';

const initialState = [];

export const basket = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PHONE_TO_BASKET:
      return append(payload, state);
    case REMOVE_FROM_BASKET:
      return without([payload], state);
    case CLEAN_BASKET:
      return initialState;
    default:
      return state;
  }
};
