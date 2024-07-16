import React from 'react';
import { FlexProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';

class Flex extends React.Component<FlexProps> {
  static defaultProps = {
    className: '',
    direction: 'horizontal',
  };

  private bem: BEM = createNamespace('flex');

  constructor(props: FlexProps) {
    super(props);
  }

  render() {
    const { className, children, wrap, block, direction, align, justify } = this.props;
    const { bem } = this;
    const classPrefix = bem();
    return (
      <div
        className={clsx(className, classPrefix, {
          [`${classPrefix}--wrap`]: wrap,
          [`${classPrefix}--block`]: block,
          [`${classPrefix}--${direction}`]: true,
          [`${classPrefix}--${align}`]: !!align,
          [`${classPrefix}--justify-${justify}`]: !!justify,
        })}
      >
        {React.Children.map(children, (child) => {
          return (
            child !== null &&
            child !== undefined && <div className={clsx(bem('item'))}>{child}</div>
          );
        })}
      </div>
    );
  }
}

export default Flex;
