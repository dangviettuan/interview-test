import React from 'react';
import { Seat } from '../seat/seat';
import { SeatRow, SeatRowProps } from './seat-row';

export default {
  component: SeatRow,
  title: 'SeatRow',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SeatRowProps = {};

  return (
    <div style={{ background: 'black' }}>
      <SeatRow label="A">
        <Seat type="standard" status="available" />
        <Seat type="standard" status="empty" />
        <Seat type="standard" status="selected" />
        <Seat type="standard" status="selecting" />
        <Seat type="standard" status="sold" />
      </SeatRow>
    </div>
  );
};
