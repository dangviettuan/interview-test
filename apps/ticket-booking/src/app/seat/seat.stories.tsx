import React from 'react';
import { Seat, SeatProps } from './seat';

export default {
  component: Seat,
  title: 'Seat',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SeatProps = {};

  return (
    <div style={{ background: 'black' }}>
      <div>
        <Seat type="standard" status="available" />
        <Seat type="standard" status="empty" />
        <Seat type="standard" status="selected" />
        <Seat type="standard" status="selecting" />
        <Seat type="standard" status="sold" />
      </div>

      <div>
        <Seat type="vip" status="available" />
        <Seat type="vip" status="empty" />
        <Seat type="vip" status="selected" />
        <Seat type="vip" status="selecting" />
        <Seat type="vip" status="sold" />{' '}
      </div>

      <div>
        <Seat type="deluxe" status="available" />
        <Seat type="deluxe" status="empty" />
        <Seat type="deluxe" status="selected" />
        <Seat type="deluxe" status="selecting" />
        <Seat type="deluxe" status="sold" />
      </div>
    </div>
  );
};
