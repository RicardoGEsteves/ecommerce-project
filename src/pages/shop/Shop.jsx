import React from 'react';

import SHOP_DATA from './shopData';
import ShopPreview from '../../components/shop-preview/ShopPreview';

export class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shopItems: SHOP_DATA
    };
  }
  render() {
    const { shopItems } = this.state;
    return (
      <div className='shop'>
        {shopItems.map(({ id, ...otherShopItemsProps }) => (
          <ShopPreview key={id} {...otherShopItemsProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
