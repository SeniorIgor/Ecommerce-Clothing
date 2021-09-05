import { FC } from 'react';

import Style from './not-found.module.scss';

export const NotFound: FC = ({ children }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>404</h2>
      <p className={Style.text}>{children || 'Page not found'}</p>
    </div>
  );
};
