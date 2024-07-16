import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { AngleDown, AngleLeft, AngleRight, AngleUp } from './ArrowIcon';

interface Props {
  className?: string | string[];
  showArrow?: string;
  prev: () => void;
  next: () => void;
  /** 方向垂直或水平 */
  direction?: 'vertical' | 'horizontal';
  icons?: { prev?: ReactNode; next?: ReactNode };
}

class CarouselArrow extends React.Component<Props, {}> {
  static defaultProps = {
    className: '',
    showArrow: 'always',
    direction: 'horizontal',
  };

  render() {
    const { className, direction, showArrow, prev, next, icons } = this.props;

    const arrowClass = clsx(
      `carousel-arrow`,
      {
        [`carousel-arrow-hover`]: showArrow === 'hover',
      },
      className,
    );
    const iconPrev =
      icons && icons.hasOwnProperty('prev') ? (
        icons.prev
      ) : direction === 'horizontal' ? (
        <AngleLeft />
      ) : (
        <AngleUp />
      );
    const iconNext =
      icons && icons.hasOwnProperty('next') ? (
        icons.next
      ) : direction === 'horizontal' ? (
        <AngleRight />
      ) : (
        <AngleDown />
      );

    return (
      <div className={arrowClass}>
        <div className={`arrow-${direction === 'vertical' ? 'top' : 'left'}`} onClick={prev}>
          {iconPrev}
        </div>
        <div className={`arrow-${direction === 'vertical' ? 'bottom' : 'right'}`} onClick={next}>
          {iconNext}
        </div>
      </div>
    );
  }
}

export default CarouselArrow;
