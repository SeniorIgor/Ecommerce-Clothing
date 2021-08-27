import { FC, MouseEventHandler, memo } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

import { auth } from '../../firebase';
import { useTypedSelector } from '../../hooks';
import { selectUser } from '../../selectors';

import Style from './header.module.scss';

export const Header: FC = memo(() => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => auth.signOut();
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
      </div>
    </div>
  );
});
