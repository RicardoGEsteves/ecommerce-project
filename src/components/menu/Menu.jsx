import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectMenuSections } from '../../redux/menu/menu.selectors';

import MenuItem from '../menu-item/MenuItem';

import './menu.scss';

const Menu = ({ sections }) => (
  <div className='menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections
});

export default connect(mapStateToProps)(Menu);
