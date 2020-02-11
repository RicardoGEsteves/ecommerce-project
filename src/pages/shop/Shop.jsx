import React from 'react';
import { Route } from 'react-router-dom';

import ShopOverview from '../../components/shop-overview/ShopOverview';
import Offers from '../offers/Offers';

export const Shop = ({ match }) => (
  <div className='shop'>
    <Route exact path={`${match.path}`} component={ShopOverview} />
    <Route path={`${match.path}/:offersId`} component={Offers} />
  </div>
);

export default Shop;
