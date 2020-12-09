import React from 'react';
import { render } from '@testing-library/react';

import SeatRow from './seat-row';

describe('SeatRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SeatRow />);
    expect(baseElement).toBeTruthy();
  });
});
