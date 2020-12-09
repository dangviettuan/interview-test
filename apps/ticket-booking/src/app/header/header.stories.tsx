import React from 'react';
import { Header, HeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
};

export const primary = () => {
  return (
    <Header
      title="Spider-man: Người Nhện xa nhà"
      subTitle="C13 | 2D Vietnam sub"
    />
  );
};
