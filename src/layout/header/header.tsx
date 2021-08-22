import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import Style from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={Style.container}>
      <Link to="/" className={Style.logoContainer}>
        <Logo className={Style.logo} />
      </Link>
      <div className={Style.options}>
        <Link to="/shop" className={Style.option}>
          shop
        </Link>
        <Link to="/contact" className={Style.option}>
          contact
        </Link>
      </div>
    </div>
  );
};
