import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPreview from '../shop-preview/ShopPreview';

import { selectOffersForPreview } from '../../redux/shop/shop.selectors';

import './shop-overview.scss';

const ShopOverview = ({ shopItems, history, match }) => {
  return (
    <div className='shop-overview'>
      {shopItems.map(({ id, ...otherShopItemsProps }) => (
        <ShopPreview
          key={id}
          {...otherShopItemsProps}
          history={history}
          match={match}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectOffersForPreview
});

export default connect(mapStateToProps)(ShopOverview);
