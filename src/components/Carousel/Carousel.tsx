import React, { ReactElement } from 'react';
import { CarouselProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';
import CarouselArrow from './CarouselArrow';
import CarouselIndicator from './CarouselIndecator';

interface State {
  index: number;
  previousIndex: number;
  isPause: boolean;
  isAnimating: boolean;
  /**动画方向True为顺时针 */
  reverse: boolean;
}

const DEFAULT_AUTO_PLAY_INTERVAL = 3000;
class Carousel extends React.Component<CarouselProps, State> {
  static defaultProps = {
    className: '',
    autoPlay: false,
    animation: 'slide',
    timeFunction: 'ease-in-out',
    currentIndex: 0,
    showArrow: 'always',
    direction: 'horizontal',
    arrowClassName: '',
    moveSpeed: 500,
    icons: {},
    indicatorPosition: 'bottom',
    indicatorType: 'dot',
    indicatorClassName: '',
    trigger: 'click',
  };

  private bem: BEM = createNamespace('carousel');
  autoPlayInterval: number = DEFAULT_AUTO_PLAY_INTERVAL;
  timer: number;
  interval: number = 0;
  eventHandler = {};

  constructor(props: CarouselProps) {
    super(props);
    this.state = {
      index: this.getValidIndex(props.currentIndex) || 0,
      previousIndex: this.getValidIndex(props.currentIndex) || 0,
      isAnimating: false,
      isPause: false,
      reverse: false,
    };
    this.timer = 0;
    this.autoPlayInterval = this.getIntervalFromProps();
  }
  componentDidMount() {
    this.resetAutoPlay();
    this.eventHandler = this.getEventHandler();
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }

  childrenList = React.Children.toArray(this.props.children).filter((child) =>
    React.isValidElement(child),
  ) as ReactElement[];

  childrenLength = this.childrenList.length;

  getValidIndex(i): number {
    const indexNumber = +i;
    return typeof indexNumber === 'number' && !isNaN(indexNumber)
      ? (indexNumber + this.childrenLength) % this.childrenLength
      : i;
  }

  resetAutoPlay(isPause = false) {
    const { autoPlay } = this.props;
    if (this.interval) {
      clearTimeout(this.interval);
      // console.log("clear timeout:",this.interval);
    }
    // console.log('reset autoPlay!',isPause);
    if (autoPlay && !isPause && this.childrenLength > 1) {
      this.interval = setTimeout(() => {
        this.slideTo({ targetIndex: this.getValidIndex(this.state.index + 1), resetPlay: false });
        this.resetAutoPlay();
      }, this.autoPlayInterval);
      // console.log("create timeout:",this.interval)
    }
  }

  slideTo(data: {
    targetIndex: number;
    reverse?: boolean;
    isManual?: boolean;
    resetPlay?: boolean;
  }) {
    const { targetIndex, reverse = false, isManual = false, resetPlay = true } = data;
    const { isAnimating, index } = this.state;
    const { moveSpeed } = this.props;
    console.log('from', index, 'slide to', targetIndex);
    if (!isAnimating && targetIndex !== index) {
      this.setState({
        isAnimating: true,
        index: targetIndex,
        previousIndex: index,
        reverse: reverse,
      });
      this.timer = setTimeout(() => {
        this.setState({ isAnimating: false });
      }, moveSpeed);
    }
    if (resetPlay) {
      this.resetAutoPlay();
    }
  }

  getIntervalFromProps() {
    const { autoPlay } = this.props;
    if (typeof autoPlay === 'object') {
      return autoPlay.interval || DEFAULT_AUTO_PLAY_INTERVAL;
    }
    return DEFAULT_AUTO_PLAY_INTERVAL;
  }

  getEventHandler() {
    const { autoPlay } = this.props;
    const eventHandler = Object.assign(
      {},
      autoPlay && (typeof autoPlay !== 'object' || autoPlay.hoverToPause !== false)
        ? {
            onMouseEnter: () => {
              this.resetAutoPlay(true);
            },
            onMouseLeave: () => {
              this.resetAutoPlay();
            },
          }
        : null,
    );
    return eventHandler;
  }

  render() {
    const {
      className,
      timeFunction,
      animation,
      style,
      showArrow,
      arrowClassName,
      direction,
      icons,
      moveSpeed,
      indicatorType,
      indicatorClassName,
      indicatorPosition,
      trigger,
    } = this.props;
    const { isAnimating, previousIndex, reverse } = this.state;
    const { bem } = this;
    const prevIndex = this.getValidIndex(this.state.index - 1);
    const nextIndex = this.getValidIndex(this.state.index + 1);
    return (
      <div className={clsx(className, bem())} style={style} {...this.eventHandler}>
        <div
          className={clsx(`carousel-warper-${animation} carousel-${animation}-${direction}`, {
            [`slide-reverse`]: reverse,
          })}
        >
          {this.childrenList.map((child, index) => {
            const isCurrent = index === this.state.index;
            const isPrev = index === prevIndex;
            const isNext = index === nextIndex;
            const shouldRenderChild = isCurrent || isPrev || isNext;

            // if (!shouldRenderChild) {
            //     return null;
            // }

            return React.cloneElement(child, {
              'aria-hidden': !isCurrent,
              style: Object.assign(
                {
                  transitionTimingFunction: timeFunction,
                  transitionDuration: `${moveSpeed}ms`,
                  animationTimingFunction: timeFunction,
                  animationDuration: `${moveSpeed}ms`,
                },
                child.props.style,
              ),
              className: clsx(child.props.style?.className ?? {}, {
                [`item-prev`]: isPrev,
                [`item-next`]: isNext,
                [`item-current`]: isCurrent,
                [`item-slide-in`]: isAnimating && isCurrent,
                [`item-slide-out`]: isAnimating && index === previousIndex,
              }),
              onClick: (event: Event) => {
                child.props.OnClick && child.props.OnClick(event);
              },
            });
          })}
        </div>
        {indicatorType !== 'never' && this.childrenLength > 1 && (
          <div className={clsx(`indicator-wrapper`, `indicator-wrapper-${indicatorPosition}`)}>
            <CarouselIndicator
              className={indicatorClassName}
              type={indicatorType}
              count={this.childrenLength}
              activeIndex={this.state.index}
              position={indicatorPosition}
              trigger={trigger}
              onSelectIndex={(index: number) =>
                this.slideTo({
                  targetIndex: index,
                  reverse: index < this.state.index,
                  isManual: true,
                })
              }
            />
          </div>
        )}
        {showArrow !== 'never' && this.childrenLength > 1 && (
          <CarouselArrow
            className={arrowClassName}
            direction={direction}
            showArrow={showArrow}
            icons={icons}
            prev={() =>
              this.slideTo({
                targetIndex: prevIndex,
                reverse: true,
                isManual: true,
              })
            }
            next={() =>
              this.slideTo({
                targetIndex: nextIndex,
                isManual: true,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Carousel;
