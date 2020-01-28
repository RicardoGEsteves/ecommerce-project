import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGooleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGooleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
