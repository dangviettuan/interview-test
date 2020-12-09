import React, { ReactNode, ReactNodeArray } from 'react';

import './seat-row.scss';

export interface SeatRowProps {
  label?: string;
  children?: ReactNode | ReactNodeArray;
}

export function SeatRow(props: SeatRowProps) {
  const { children, label } = props;
  return (
    <div className="seat-row">
      <div className="seat-row-label">{label}</div>
      {children}
    </div>
  );
}

export default SeatRow;
