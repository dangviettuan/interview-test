import React from 'react';
import { SeatRow, SeatRowProps } from './seat-row';

export default {
  component: SeatRow,
  title: 'SeatRow',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SeatRowProps = {};

  return <SeatRow />;
};
