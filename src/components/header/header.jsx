import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const header = ({ currentUser }) => {
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
      </div>
    </header>
  );
};

export default header;
