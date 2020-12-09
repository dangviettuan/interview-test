import React from 'react';

import './explain.scss';

/* eslint-disable-next-line */
export interface ExplainProps {}

export function Explain(props: ExplainProps) {
  return (
    <div className="explain">
      <div className="explain-seat-container ">
        <div className="explain-seat">
          <div className="circle circle-seat-sold"></div>
          <div>Đã đặt</div>
        </div>
        <div className="explain-seat">
          <div className="circle circle-seat-selected"></div>
          <div>Đang chọn</div>
        </div>
      </div>

      <div className="explain-seat-container ">
        <div className="explain-seat">
          <div className="circle circle-seat-standard"></div>
          <div>Standard</div>
        </div>
        <div className="explain-seat">
          <div className="circle circle-seat-vip"></div>
          <div>VIP</div>
        </div>
        <div className="explain-seat">
          <div className="circle circle-seat-deluxe"></div>
          <div>Deluxe</div>
        </div>
      </div>
    </div>
  );
}

export default Explain;
