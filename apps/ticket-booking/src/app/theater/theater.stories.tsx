import React from 'react';
import { SeatRow } from '../seat-row/seat-row';
import { Seat } from '../seat/seat';
import { Theater, TheaterProps } from './theater';

import { data } from '../data';

export default {
  component: Theater,
  title: 'Theater',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: TheaterProps = {};

  return (
    <Theater>
      {data.rows.map((row, rowIndex) => (
        <SeatRow key={rowIndex} label={row.name}>
          {row.seats.map((seat, seatIndex) => (
            <Seat
              key={seatIndex}
              type={seat.type}
              status={seat.status}
              col={seatIndex}
              row={row.name}
            />
          ))}
        </SeatRow>
      ))}
    </Theater>
  );
};
