import {
  prop,
  map,
  length,
  compose,
  pluck,
  sum,
  filter,
  includes,
  values,
  path,
  when,
  always,
  equals,
  uniq,
  assoc,
} from 'ramda';

export const getPhoneById = (state, id) => prop(id, state.phones);

export const getPhones = (state, ownProps) => {
  const activeCategoryId = getActiveCategoryId(ownProps);
  const applySearch = (item) =>
    includes(state.phonesPage.search, prop('name', item));
  const applyCategory = (item) =>
    equals(activeCategoryId, prop('categoryId', item));
  const phones = compose(
    filter(applySearch),
    when(always(activeCategoryId), filter(applyCategory)),
    map((id) => getPhoneById(state, id))
  )(state.phonesPage.ids);
  return phones;
};

export const getRenderedPhonesLength = (state) => length(state.phonesPage.ids);

export const getTotalBasketCount = (state) => length(state.basket);

export const getTotalBasketPrice = (state) => {
  const totalPrice = compose(
    sum,
    pluck('price'),
    map((id) => getPhoneById(state, id))
  )(state.basket);
  return totalPrice;
};

export const getCategories = (state) => values(state.categories);

export const getActiveCategoryId = (ownProps) =>
  path(['match', 'params', 'id'], ownProps);

export const getBasketWithCount = (state) => {
  const phoneCount = (id) =>
    compose(
      length,
      filter((basketId) => equals(id, basketId))
    )(state.basket);
  const phoneWithCount = (phone) => assoc('count', phoneCount(phone.id), phone);
  const uniqueIds = uniq(state.basket);
  const phones = compose(
    map(phoneWithCount),
    map((id) => getPhoneById(state, id))
  )(uniqueIds);
  return phones;
};
