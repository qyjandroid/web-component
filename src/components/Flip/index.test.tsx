import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Flip from './index';

describe('<Flip />', () => {
  it('render 翻转组件 with web-component', () => {
    render(<Flip />);
  });
});
