import React from 'react';
import { FlipProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';

class Flip extends React.Component<FlipProps> {
  static defaultProps = {
    className: '',
    count: 1,
    duration: '1s',
    resetDuration: '1s',
    upDown: false,
    active: null,
  };

  private bem: BEM = createNamespace('flip');
  style: Record<string, number | string | undefined>;

  constructor(props: FlipProps) {
    super(props);
    this.style = {
      '--iterationCount': props.count,
      '--duration': props.duration,
      '--resetDuration': props.resetDuration,
    };
  }
  onAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
    if (e.currentTarget.getAttribute('data-id') === 'front') {
      if (this.props.callBack) {
        this.props.callBack();
      }
    }
  };
  render() {
    const { className, front, back, upDown, active } = this.props;
    const { bem, onAnimationEnd, style } = this;
    return (
      <div className={clsx(className, bem())} style={style}>
        <div
          className={clsx({
            front: true,
            'up-down': upDown,
            active: active === true,
            reset: active === false,
          })}
          data-id="front"
          onAnimationEnd={onAnimationEnd}
        >
          {front}
        </div>
        <div
          className={clsx({
            back: true,
            'up-down': upDown,
            active: active === true,
            reset: active === false,
          })}
          data-id="back"
        >
          {back}
        </div>
      </div>
    );
  }
}

export default Flip;
