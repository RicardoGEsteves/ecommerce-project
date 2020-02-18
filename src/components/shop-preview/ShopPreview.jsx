import React from 'react';
import { withRouter } from 'react-router-dom';

import ShopItem from '../shop-item/ShopItem';

import {
  ShopPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './shop-preview.styles';

const ShopPreview = ({ title, items, history, match, routeName }) => {
  return (
    <ShopPreviewContainer>
      <TitleContainer
        onClick={() => {
          history.push(`${match.url}/${routeName}`);
        }}
      >
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <ShopItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </ShopPreviewContainer>
  );
};

export default withRouter(ShopPreview);
