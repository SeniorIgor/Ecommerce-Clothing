import { takeLatest, put, fork, all, call } from 'redux-saga/effects';

import {
  firebase,
  createUserProfileDocument,
} from '../../../services/firebase';

import { User } from '../../../models';
import {
  Types,
  AdditionalData,
  FirebaseUser,
  UserCredential,
  UserRef,
  UserSnapshot,
  UserWithoutId,
} from './types';
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  getCurrentUser,
  logout,
  createUserWithEmailAndPassword,
} from '../../../services/auth';
import {
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  signUpSuccess,
  signUpFailure,
} from './action-creators';
import * as Actions from './actions';

function* getUserFromAuth(
  userAuth: FirebaseUser,
  additionalData?: AdditionalData
) {
  if (!userAuth) {
    throw new Error('Failure sign from google. Please try again.');
  }

  const userRef: UserRef = yield call(
    createUserProfileDocument,
    userAuth,
    additionalData
  );

  const userSnapshot: UserSnapshot = yield userRef.get();

  const user: User = {
    id: userSnapshot.id,
    ...(userSnapshot.data() as UserWithoutId),
  };

  yield put(signInSuccess(user));
}

/** ================= GOOGLE SIGN IN ================= */
function* sighInWithGoogle() {
  try {
    const userAuth: UserCredential = yield call(signInWithGoogle);
    yield getUserFromAuth(userAuth.user!);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* googleSignInSaga() {
  yield takeLatest(Types.GOOGLE_SIGN_IN_REQUEST, sighInWithGoogle);
}

/** ================= EMAIL SIGN IN ================= */
function* sighInWithEmail({ payload }: Actions.EmailSignInRequest) {
  try {
    const { email, password } = payload;

    const userAuth: UserCredential = yield call(
      signInWithEmailAndPassword,
      email,
      password
    );

    yield getUserFromAuth(userAuth.user!);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* emailSignInSaga() {
  yield takeLatest(Types.EMAIL_SIGN_IN_REQUEST, sighInWithEmail);
}

/** ==================== CHECK AUTH ==================== */
function* isUserAuthenticated() {
  try {
    const user: firebase.User = yield call(getCurrentUser);

    if (!user) {
      return;
    }

    yield getUserFromAuth(user);
  } catch (err) {
    yield put(signInFailure((err as Error).message));
  }
}

function* checkUserSessionSaga() {
  yield takeLatest(Types.CHECK_USER_SESSION, isUserAuthenticated);
}

/** ==================== SIGN OUT ==================== */
function* signOut() {
  try {
    yield call(logout);
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure((err as Error).message));
  }
}

function* signOutRequestSaga() {
  yield takeLatest(Types.SIGN_OUT_REQUEST, signOut);
}

/** ==================== SIGN UP ==================== */
function* signUpWorker({ payload }: Actions.SignUpRequest) {
  try {
    const { displayName, email, password } = payload;

    const userAuth: UserCredential = yield call(
      createUserWithEmailAndPassword,
      email,
      password
    );

    yield put(
      signUpSuccess({ user: userAuth.user!, additionalData: { displayName } })
    );
  } catch (err) {
    yield put(signUpFailure((err as Error).message));
  }
}

function* signUpSuccessWorker({ payload }: Actions.SignUpSuccess) {
  const { user, additionalData } = payload;

  yield getUserFromAuth(user, additionalData);
}

function* signUpRequestSaga() {
  yield takeLatest(Types.SIGN_UP_REQUEST, signUpWorker);
}

function* signUpSuccessSaga() {
  yield takeLatest(Types.SIGN_UP_SUCCESS, signUpSuccessWorker);
}

/** ==================== USER WATCHER ==================== */
export function* userWatcher() {
  const sagas = [
    googleSignInSaga,
    emailSignInSaga,
    checkUserSessionSaga,
    signOutRequestSaga,
    signUpRequestSaga,
    signUpSuccessSaga,
  ];

  yield all(sagas.map((s) => fork(s)));
}
