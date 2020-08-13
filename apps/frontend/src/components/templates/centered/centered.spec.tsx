import React from 'react';
import { render } from '@testing-library/react';

import Centered from './centered';

describe(' Centered', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Centered />);
    expect(baseElement).toBeTruthy();
  });
});
