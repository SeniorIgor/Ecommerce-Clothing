import { FC, memo } from 'react';

import { selectors } from '../../../store';
import { useTypedSelector, useActions } from '../../hooks';

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
  const hidden = useTypedSelector(selectCartHidden);
  const user = useTypedSelector(selectUser);
  const { signOutRequest } = useActions();

  return (
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/contact">contact</OptionLink>
        {user ? (
          <OptionLink as="div" onClick={signOutRequest}>
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
