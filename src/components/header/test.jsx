import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer,
  LogoContainer,
  LogoElement,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <LogoElement />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contacts'>CONTACTS</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={signOutStart}>
            {' '}
            SIGN OUT{' '}
          </OptionLink>
        ) : (
          <OptionLink to='/signin'> SIGN IN </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
