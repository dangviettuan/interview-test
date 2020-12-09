import React from 'react';

import './summary.scss';

export interface SummaryProps {
  total?: number;
  location?: string;
  from?: string;
  to?: string;
  date?: string;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export function Summary(props: SummaryProps) {
  const { date, from, location, to, total } = props;
  return (
    <div className="summary">
      <div className="info-group">
        <div className="info">
          <div>{location}</div>
          <div>
            {from}~{to} | {date}
          </div>
        </div>
        <div className="price">
          {numberWithCommas(total)} <span className="unit">đ</span>
        </div>
      </div>
      <div className="buttons-group">
        <button className="summary-button">Chọn combo</button>
        <button className="summary-button spacing">Thanh toán</button>
      </div>
    </div>
  );
}

export default Summary;
