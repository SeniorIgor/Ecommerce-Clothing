import { RouteComponentProps } from 'react-router-dom';

interface Props {
  collectionId: string;
}

export interface CollectionProps extends RouteComponentProps<Props> {}
