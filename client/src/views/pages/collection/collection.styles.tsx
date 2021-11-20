import styled from 'styled-components';

import { CollectionItem as BaseCollectionItem } from '../../components/collection-item';

export const CollectionItem = styled(BaseCollectionItem)`
  margin-bottom: 30px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;
