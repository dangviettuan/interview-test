import React, { useState } from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import Theater from './theater/theater';
import { data } from './data';
import SeatRow from './seat-row/seat-row';
import { Seat } from './seat/seat';
import { SeatStatus } from './types';
import Header from './header/header';
export function App() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatClick = (row?: string, col?: number) => {
    console.log('Selected');

    const found = selectedSeats.findIndex((item) => item === `${row}${col}`);
    if (found >= 0) {
      selectedSeats.splice(found, 1);
    } else {
      if (selectedSeats.length < 6) {
        selectedSeats.push(`${row}${col}`);
      }
    }
    setSelectedSeats([...selectedSeats]);
  };

  const isSelected = (
    row: string,
    col: number,
    currentStatus: SeatStatus
  ): SeatStatus => {
    if (selectedSeats.includes(`${row}${col}`)) {
      return 'selected';
    }

    return currentStatus;
  };

  return (
    <div className="app">
      {/* <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to ticket-booking!</h1>
      </header> */}
      <Header
        subTitle={`${data.room} | ${data.filmType}`}
        title={data.filmName}
      />
      <Theater>
        {data.rows.map((row, rowIndex) => (
          <SeatRow key={rowIndex} label={row.name}>
            {row.seats.map((seat, seatIndex) => (
              <Seat
                onClick={handleSeatClick}
                key={seatIndex + 1}
                type={seat.type}
                status={isSelected(row.name, seatIndex + 1, seat.status)}
                col={seatIndex + 1}
                row={row.name}
              />
            ))}
          </SeatRow>
        ))}
      </Theater>
    </div>
  );
}

export default App;
