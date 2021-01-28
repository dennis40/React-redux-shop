import React from 'react';
import { Route, Switch } from 'react-router';

import Phones from './containers/phones/phones';
import Phone from './containers/phone/phone';
import Basket from './containers/basket/basket';

export const routes = (
  <Switch>
    <Route path={'/'} component={Phones} exact />
    <Route path={'/categories/:id'} component={Phones} />
    <Route path={'/phones/:id'} component={Phone} />
    <Route path={'/basket'} component={Basket} />
  </Switch>
);
