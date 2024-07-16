import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Flex from './index';

describe('<Flex />', () => {
  it('render Flex布局组件 with web-component', () => {
    render(<Flex />);
  });
});
