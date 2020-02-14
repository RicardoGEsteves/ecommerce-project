import React from 'react';
import { withRouter } from 'react-router-dom';

import ShopItem from '../shop-item/ShopItem';
import './shop-preview.scss';

const ShopPreview = ({ title, items, history, match, routeName }) => {
  return (
    <div className='shop-preview'>
      <h1
        className='title'
        onClick={() => {
          history.push(`${match.url}/${routeName}`);
        }}
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <ShopItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(ShopPreview);
