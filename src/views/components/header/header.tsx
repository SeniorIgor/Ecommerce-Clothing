import { FC, MouseEventHandler, memo } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../firebase';
import { selectors } from '../../../state';
import { useTypedSelector } from '../../hooks';

import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';

import { ReactComponent as Logo } from '../../../assets/images/crown.svg';

import Style from './header.module.scss';

const { selectCartHidden } = selectors.cart;
const { selectUser } = selectors.user;

export const Header: FC = memo(() => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => auth.signOut();

  const hidden = useTypedSelector(selectCartHidden);
  const user = useTypedSelector(selectUser);

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
        {user ? (
          <div className={Style.option} onClick={handleClick}>
            Sign out
          </div>
        ) : (
          <Link to="/auth" className={Style.option}>
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
});
