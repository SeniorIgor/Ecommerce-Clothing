import { FC, MouseEventHandler, memo } from 'react';

import { auth } from '../../../firebase';
import { selectors } from '../../../state';
import { useTypedSelector } from '../../hooks';

import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';

import { ReactComponent as Logo } from '../../../assets/images/crown.svg';

import {
  Container,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const { selectCartHidden } = selectors.cart;
const { selectUser } = selectors.user;

export const Header: FC = memo(() => {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => auth.signOut();

  const hidden = useTypedSelector(selectCartHidden);
  const user = useTypedSelector(selectUser);

  return (
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/contact">contact</OptionLink>
        {user ? (
          <OptionLink as="div" onClick={handleClick}>
            Sign out
          </OptionLink>
        ) : (
          <OptionLink to="/auth">Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </Container>
  );
});
