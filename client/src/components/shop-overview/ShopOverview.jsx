import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPreview from '../shop-preview/ShopPreview';

import { selectOffersForPreview } from '../../redux/shop/shop.selectors';

import { ShopOverviewContainer } from './shop-overview.styles';

const ShopOverview = ({ shopItems }) => {
  return (
    <ShopOverviewContainer>
      {shopItems.map(({ id, ...otherShopItemsProps }) => (
        <ShopPreview key={id} {...otherShopItemsProps} />
      ))}
    </ShopOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectOffersForPreview
});

export default connect(mapStateToProps)(ShopOverview);
