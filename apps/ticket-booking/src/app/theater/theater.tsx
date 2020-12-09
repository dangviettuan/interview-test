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
      <TransformWrapper
        doubleClick={{
          disabled: true,
        }}
        options={
          {
            // limitToBounds: false,
            // limitToWrapper: false,
          }
        }
      >
        <TransformComponent>
          <div className="theater-container">{children}</div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Theater;
