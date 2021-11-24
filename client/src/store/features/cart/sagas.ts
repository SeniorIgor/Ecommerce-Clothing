import { all, fork, takeLatest, put, call, select } from 'redux-saga/effects';

import {
  getUserCartRef,
  CartDocumentRef,
  CartDocumentSnapshot,
} from '../../../services/cart';
import { CartItem, User } from '../../../models';

import { Types as UserTypes } from '../user/types';
import { SignInSuccess } from '../user/actions';
import { selectUser } from '../user/selectors';

import { Types as CartTypes } from './types';
import { selectCartItems } from './selectors';
import { clearCart, setCartItems } from './action-creators';

function* clearCartWorker() {
  yield put(clearCart());
}

function* checkCartFromDatabaseWorker({ payload }: SignInSuccess) {
  try {
    const cartRef: CartDocumentRef = yield call(getUserCartRef, payload.id);
    const cartSnapshot: CartDocumentSnapshot = yield cartRef.get();

    const data = cartSnapshot.data();

    if (data) {
      yield put(setCartItems(data.cartItems));
    }
  } catch (err) {
    console.log('Error:', (err as Error).message);
  }
}

function* updateCartItemsWorker() {
  try {
    const user: User = yield select(selectUser);

    if (!user) {
      return;
    }

    const cartRef: CartDocumentRef = yield call(getUserCartRef, user.id);
    const cartItems: Array<CartItem> = yield select(selectCartItems);

    yield cartRef.update({ cartItems });
  } catch (err) {
    console.log('Error:', (err as Error).message);
  }
}

function* onSignOutSuccessWatcher() {
  yield takeLatest(UserTypes.SIGN_OUT_SUCCESS, clearCartWorker);
}

function* onSignInSuccessWatcher() {
  yield takeLatest(UserTypes.SIGN_IN_SUCCESS, checkCartFromDatabaseWorker);
}

function* updateCartItemsWatcher() {
  yield takeLatest(
    [
      CartTypes.ADD_CART_ITEM,
      CartTypes.CLEAR_CART_ITEM,
      CartTypes.REMOVE_CART_ITEM,
    ],
    updateCartItemsWorker
  );
}

export function* cartWatcher() {
  const sagas = [
    onSignOutSuccessWatcher,
    onSignInSuccessWatcher,
    updateCartItemsWatcher,
  ];

  yield all(sagas.map((s) => fork(s)));
}

/**
 *  1. Если пользователь прошел авторизацию => обновляем корзину в database из local-state
 *  2. Если пользователь авторизован => обновляем корзину в database из local-state
 *  3. После выхода пользователя => очищаем local-storage и local-state
 */
