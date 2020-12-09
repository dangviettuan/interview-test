import React from 'react';

import './header.scss';

export interface HeaderProps {
  title?: string;
  subTitle?: string;
}

export function Header(props: HeaderProps) {
  const { subTitle, title } = props;
  return (
    <div className="header">
      <h2>{title}</h2>
      <h4>{subTitle}</h4>
    </div>
  );
}

export default Header;
