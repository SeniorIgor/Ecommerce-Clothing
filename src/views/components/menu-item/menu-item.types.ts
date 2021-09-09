import { MenuItem } from '../../../models';

export interface MenuItemProps extends Omit<MenuItem, 'id'> {}

export interface ContainerProps {
  size?: 'large';
}

export interface ImageProps {
  url: string;
}
