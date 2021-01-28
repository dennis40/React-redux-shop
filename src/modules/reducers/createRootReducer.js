import { combineReducers } from 'redux';
import { phones } from './phones';
import { connectRouter } from 'connected-react-router';
import { phonesPage } from './phonesPage';
import { phonePage } from './phonePage';
import { basket } from './basket';
import { categories } from './categories';

export const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    categories,
    router: connectRouter(history),
  });
