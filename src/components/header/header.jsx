import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const header = () => {
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
      </div>
    </header>
  );
};

export default header;
