import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from './index';

describe('<Image />', () => {
  it('render Image图片 with web-component', () => {
    render(<Image />);
  });
});
