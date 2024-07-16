import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentRecord from './index';

describe('<RecentRecord />', () => {
  it('render 大奖轮播 with web-component', () => {
    render(<RecentRecord />);
  });
});
