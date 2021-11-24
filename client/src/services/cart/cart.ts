import { firestore } from '../firebase';

import { CartDocumentRef } from './cart.types';

export const getUserCartRef = async (userId: string) => {
  const cartRef = firestore.collection('carts').where('userId', '==', userId);
  const snapshot = await cartRef.get();

  if (snapshot.empty) {
    const cartDocRef = firestore.collection('carts').doc() as CartDocumentRef;
    await cartDocRef.set({ userId, cartItems: [] });
    return cartDocRef;
  } else {
    return snapshot.docs[0].ref;
  }
};
