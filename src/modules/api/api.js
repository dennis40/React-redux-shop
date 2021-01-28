import { mockPhones } from './mockPhones';
import { find, propEq } from 'ramda';
import { mockCategories } from './mockCategories';

export const fetchPhones = async () => {
  return new Promise((resolve, reject) => {
    resolve(mockPhones);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(mockCategories);
  });
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    resolve(mockPhones);
  });
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, reject) => {
    const phone = find(propEq('id', id), mockPhones);
    resolve(phone);
  });
};
