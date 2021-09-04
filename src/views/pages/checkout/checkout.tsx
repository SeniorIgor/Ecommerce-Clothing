import { FC, memo } from 'react';

import { CheckoutItem } from '../../components/checkout-item';

import { useTypedSelector } from '../../hooks/use-typed-selector';
import { selectors } from '../../../state';

import { data } from './checkout.data';

import Style from './checkout.module.scss';

const { selectCartItems, selectCartTotal } = selectors.cart;

export const Checkout: FC = memo(() => {
  const items = useTypedSelector(selectCartItems);
  const total = useTypedSelector(selectCartTotal);

  const itemsView = items.map((item) => (
    <CheckoutItem item={item} key={item.id} />
  ));

  const headerView = data.map(({ id, title }) => (
    <div className={Style.headerColumn} key={id}>
      <span>{title}</span>
    </div>
  ));

  return (
    <div className={Style.container}>
      <div className={Style.header}>{headerView}</div>
      {itemsView}

      <div className={Style.total}>Total: ${total}</div>
    </div>
  );
});
