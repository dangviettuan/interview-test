import React from 'react';
import { render } from '@testing-library/react';

import Theater from './theater';

describe('Theater', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Theater />);
    expect(baseElement).toBeTruthy();
  });
});
