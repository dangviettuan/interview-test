import React from 'react';
import { Seat, SeatProps } from './seat';

export default {
  component: Seat,
  title: 'Seat',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SeatProps = {};

  return <Seat />;
};
