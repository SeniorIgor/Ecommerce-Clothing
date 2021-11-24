import { firebase } from '../firebase';
import { CartItem } from '../../models';

interface CartDocumentData {
  userId: string;
  cartItems: Array<CartItem>;
}

export interface CartDocumentRef
  extends firebase.firestore.DocumentReference<CartDocumentData> {}

export interface CartDocumentSnapshot
  extends firebase.firestore.DocumentSnapshot<CartDocumentData> {}
