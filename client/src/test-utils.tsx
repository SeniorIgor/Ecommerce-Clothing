// test-utils.jsx
import { FC } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import merge from 'deepmerge';

import { RootState } from './store';
import { initialState as cartState } from './store/features/cart/reducers';
import { initialState as shopState } from './store/features/shop/reducers';
import { initialState as userState } from './store/features/user/reducers';
import { initialState as directoryState } from './store/features/directory/reducers';

const initialState: RootState = {
  cart: cartState,
  directory: directoryState,
  shop: shopState,
  user: userState,
};

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export const getMockProvider = (partialState?: RecursivePartial<RootState>) => {
  const mockStore: any = configureStore();

  const store: any = mockStore(merge(initialState, partialState || {}));

  const MockProvider: FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return { MockProvider, store };
};

jest.mock('firebase/app', () => {
  return {
    auth: jest.fn(),
    initializeApp: jest.fn(),
    firestore: jest.fn(),
  };
});

export * from '@testing-library/react';
