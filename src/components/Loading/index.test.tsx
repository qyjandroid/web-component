import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './index';

describe('<Loading />', () => {
  it('render 加载中 with web-component', () => {
    render(<Loading />);
  });
});
