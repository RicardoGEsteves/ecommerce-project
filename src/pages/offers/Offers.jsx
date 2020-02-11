import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/ShopItem';
import { selectOffer } from '../../redux/shop/shop.selectors';

import './offers.scss';

const Offers = ({ offers }) => {
  const { title, items } = offers;
  return (
    <div className='offers'>
      <h2> {title} </h2>
      <div className='items'>
        {items.map(item => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  offers: selectOffer(ownProps.match.params.offersId)(state)
});

export default connect(mapStateToProps)(Offers);
