import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const header = ({ currentUser, hidden }) => {
  return (
    <header className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          SHOP
        </Link>
        <Link to='/contacts' className='option'>
          CONTACTS
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            {' '}
            SIGN OUT{' '}
          </div>
        ) : (
          <Link to='/signin' className='option'>
            {' '}
            SIGN IN{' '}
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(header);
