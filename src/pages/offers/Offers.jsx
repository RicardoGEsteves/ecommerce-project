import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/ShopItem';
import { selectOffer } from '../../redux/shop/shop.selectors';

import {
  OffersContainer,
  OfferTitle,
  OfferItemsContainer
} from './offers.styles';

const Offers = ({ offers }) => {
  const { title, items } = offers;
  return (
    <OffersContainer>
      <OfferTitle> {title} </OfferTitle>
      <OfferItemsContainer>
        {items.map(item => (
          <ShopItem key={item.id} item={item} />
        ))}
      </OfferItemsContainer>
    </OffersContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  offers: selectOffer(ownProps.match.params.offersId)(state)
});

export default connect(mapStateToProps)(Offers);
