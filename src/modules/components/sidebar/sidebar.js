import React from 'react';
import BasketCart from '../basketCart/basketCart';
import Search from '../search/search';
import Categories from '../categories/categories';

const Sidebar = () => {
  return (
    <div>
      <BasketCart />
      <Search />
      <Categories />
    </div>
  );
};

export default Sidebar;
