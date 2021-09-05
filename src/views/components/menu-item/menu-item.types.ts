import { MenuItem } from '../../../models';

export interface MenuItemProps extends Omit<MenuItem, 'id'> {}
