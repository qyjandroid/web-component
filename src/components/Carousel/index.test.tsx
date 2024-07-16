import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './index';

describe('<Carousel />', () => {
  it('render 轮播组件 with web-component', () => {
    render(<Carousel />);
  });
});
