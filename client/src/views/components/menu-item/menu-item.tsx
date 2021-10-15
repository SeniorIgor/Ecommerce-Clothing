import { FC, MouseEventHandler, memo } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { MenuItemProps } from './menu-item.types';

import {
  Container,
  Background,
  Content,
  Title,
  SubTitle,
} from './menu-item.styles';

const defaultProps = {
  size: undefined,
};

const MenuItem: FC<MenuItemProps> = memo(
  ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();

    const handleClick: MouseEventHandler<HTMLDivElement> = () => {
      const url = `${match.url}${linkUrl}`;

      history.push(url);
    };

    return (
      <Container size={size} onClick={handleClick}>
        <Background url={imageUrl} className="background" />
        <Content className="content">
          <Title>{title}</Title>
          <SubTitle>Shop now</SubTitle>
        </Content>
      </Container>
    );
  }
);

MenuItem.defaultProps = defaultProps;

export { MenuItem };
