import React, { useState } from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import star from './star.svg';
import Theater from './theater/theater';
import { data } from './data';
import SeatRow from './seat-row/seat-row';
import { Seat } from './seat/seat';
import { SeatStatus, SeatType } from './types';
import Header from './header/header';
import Explain from './explain/explain';
import Summary from './summary/summary';

const prices = {
  standard: 60000,
  vip: 90000,
  deluxe: 110000,
};
export function App() {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const [total, setTotal] = useState(0);

  const handleSeatClick = (row: string, col: number, type: SeatType) => {
    console.log('Selected');

    const found = selectedSeats.findIndex((item) => item === `${row}${col}`);
    if (found >= 0) {
      selectedSeats.splice(found, 1);
      setTotal(total - prices[type]);
    } else {
      if (selectedSeats.length < 6) {
        selectedSeats.push(`${row}${col}`);
        setTotal(total + prices[type]);
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
      <div className="container">
        <Header
          subTitle={`${data.room} | ${data.filmType}`}
          title={data.filmName}
        />
        <Theater>
          {data.rows.map((row, rowIndex) => (
            <SeatRow key={rowIndex} label={row.name}>
              {row.seats.map((seat, seatIndex) => (
                <Seat
                  onClick={(row, col) => handleSeatClick(row, col, seat.type)}
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
        <Explain />
        <Summary
          date={data.time.date}
          from={data.time.from}
          to={data.time.to}
          location={data.location}
          total={total}
        />
      </div>
    </div>
  );
}

export default App;
