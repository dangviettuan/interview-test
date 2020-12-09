import React, { ReactNode, ReactNodeArray } from 'react';

import './theater.scss';

export interface TheaterProps {
  children?: ReactNode | ReactNodeArray;
}

export function Theater(props: TheaterProps) {
  const { children } = props;

  return <div className="theater">{children}</div>;
}

export default Theater;
