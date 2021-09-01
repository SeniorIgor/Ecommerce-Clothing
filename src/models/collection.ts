export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}
