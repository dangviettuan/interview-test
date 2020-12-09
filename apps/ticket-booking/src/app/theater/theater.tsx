import React, { ReactNode, ReactNodeArray } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

import './theater.scss';

export interface TheaterProps {
  children?: ReactNode | ReactNodeArray;
}

export function Theater(props: TheaterProps) {
  const { children } = props;

  return (
    <div className="theater">
      <TransformWrapper defaultScale={0.5}>
        <TransformComponent>{children}</TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Theater;
