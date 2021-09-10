export interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface Collection {
  id: number;
  title: string;
  routeName: string;
  items: CollectionItem[];
}

export interface DBCollectionItem {
  title: string;
  items: CollectionItem[];
}
