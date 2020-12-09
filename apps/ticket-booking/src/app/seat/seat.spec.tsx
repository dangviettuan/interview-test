import React from 'react';
import { render } from '@testing-library/react';

import Seat from './seat';

describe('Seat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Seat />);
    expect(baseElement).toBeTruthy();
  });
});
