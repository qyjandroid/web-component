import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  className?: string | string[];
  type?: 'line' | 'dot' | 'slider' | 'never';
  count: number;
  activeIndex: number;
  /** 方向垂直或水平 */
  position?: 'bottom' | 'top' | 'left' | 'right' | 'outer';
  onSelectIndex: (index: number) => void;
  trigger: 'click' | 'hover';
}

class CarouselIndicator extends React.Component<Props, {}> {
  static defaultProps = {
    className: '',
    type: 'dot',
    position: 'bottom',
    trigger: 'click',
  };

  getContent() {
    const indicatorContent: ReactNode[] = [];
    const { type, count, activeIndex } = this.props;

    if (type === 'slider') {
      const step = 100 / count;
      indicatorContent.push(
        <span
          style={{ width: `${step}%`, left: `${activeIndex * step}%` }}
          className={clsx(`indicator-item`, `indicator-item-active`)}
        />,
      );
    } else {
      for (let i = 0; i < count; i++) {
        indicatorContent.push(
          <span
            key={i}
            data-index={i}
            className={clsx(`indicator-item`, {
              [`indicator-item-active`]: i === activeIndex,
            })}
          />,
        );
      }
    }
    return indicatorContent;
  }

  getProps() {
    const { className, type, position, onSelectIndex, count, activeIndex, trigger } = this.props;

    const wrapperProps = {
      className: clsx('indicator', `indicator-${type}`, `indicator-${position}`, className),
      [trigger === 'click' ? 'onClick' : 'onMouseEnter']: (event) => {
        event.preventDefault();
        if (type === 'slider') {
          const x = event.nativeEvent.offsetX;
          const width = event.currentTarget.clientWidth;
          // clear up effect from event bubbling
          if (event.target === event.currentTarget) {
            const index = ~~((x / width) * count);
            index !== activeIndex && onSelectIndex(index);
          }
        } else {
          const dataIndex: string = event.target.getAttribute('data-index');
          // Judge if data-index exists at first, event.target can be the wrapper of indicators
          dataIndex && +dataIndex !== activeIndex && onSelectIndex(+dataIndex);
        }
      },
    };

    return wrapperProps;
  }

  render() {
    return <div {...this.getProps()}>{this.getContent()}</div>;
  }
}

export default CarouselIndicator;
