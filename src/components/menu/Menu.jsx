import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuSections } from '../../redux/menu/menu.selectors';

import MenuItem from '../menu-item/MenuItem';

import { MenuContainer } from './menu.styles';

const Menu = ({ sections }) => (
  <MenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </MenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
});

export default connect(mapStateToProps)(Menu);
