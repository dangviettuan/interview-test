import React from 'react';
import clsx from 'clsx';

import './seat.scss';
import { SeatStatus, SeatType } from '../types';

export interface SeatProps {
  row?: string;
  col?: number;
  onClick?: (row?: string, col?: number) => void;
  status?: SeatStatus;
  type?: SeatType;
}

export function Seat(props: SeatProps) {
  const { col, onClick, row, status, type } = props;
  const handleOnClick = () => {
    if (status === 'available' || status === 'selected') {
      if (onClick) {
        onClick(row, col);
      }
    }
  };
  return (
    <button
      onClick={handleOnClick}
      className={clsx([
        'seat',
        {
          ['seat-empty']: status === 'empty',
          ['seat-selected']: status === 'selected',
          ['seat-available']: status === 'available',
          ['seat-selecting']: status === 'selecting',
          ['seat-sold']: status === 'sold',
          ['seat-standard']:
            type === 'standard' &&
            status !== 'empty' &&
            status !== 'selected' &&
            status !== 'sold',
          ['seat-vip']:
            type === 'vip' &&
            status !== 'empty' &&
            status !== 'selected' &&
            status !== 'sold',
          ['seat-deluxe']:
            type === 'deluxe' &&
            status !== 'empty' &&
            status !== 'selected' &&
            status !== 'sold',
        },
      ])}
    >
      {col}
    </button>
  );
}

export default Seat;
