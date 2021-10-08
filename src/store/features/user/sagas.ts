import { takeLatest, put, fork, all, call } from 'redux-saga/effects';

import {
  firebase,
  createUserProfileDocument,
} from '../../../services/firebase';

import { User } from '../../../models';
import { Types } from './types';
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  getCurrentUser,
} from '../../../services/auth';
import { signInSuccess, signInFailure } from './action-creators';
import { EmailSignInRequest } from './actions';

type UserCredential = firebase.auth.UserCredential;
type UserRef =
  firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
type UserSnapshot =
  firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>;
interface UserWithoutId extends Omit<User, 'id'> {}

function* getUserFromAuth(userAuth: UserCredential) {
  if (!userAuth) {
    throw new Error('Failure sign from google. Please try again.');
  }

  const userRef: UserRef = yield call(
    createUserProfileDocument,
    userAuth.user!
  );
  const userSnapshot: UserSnapshot = yield userRef.get();

  const user: User = {
    id: userSnapshot.id,
    ...(userSnapshot.data() as UserWithoutId),
  };

  yield put(signInSuccess(user));
}

function* sighInWithGoogle() {
  try {
    const userAuth: UserCredential = yield call(signInWithGoogle);
    yield getUserFromAuth(userAuth);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* sighInWithEmail({ payload }: EmailSignInRequest) {
  try {
    const { email, password } = payload;

    const userAuth: UserCredential = yield call(
      signInWithEmailAndPassword,
      email,
      password
    );

    yield getUserFromAuth(userAuth);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth: UserCredential = yield call(getCurrentUser);

    if (!userAuth) {
      return;
    }

    yield getUserFromAuth(userAuth);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* googleSignInSaga() {
  yield takeLatest(Types.GOOGLE_SIGN_IN_REQUEST, sighInWithGoogle);
}

function* emailSignInSaga() {
  yield takeLatest(Types.EMAIL_SIGN_IN_REQUEST, sighInWithEmail);
}

function* checkUserSessionSaga() {
  yield takeLatest(Types.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userWatcher() {
  const sagas = [googleSignInSaga, emailSignInSaga, checkUserSessionSaga];

  yield all(sagas.map((s) => fork(s)));
}
