import React from 'react';
import { LoadingProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';

class Loading extends React.Component<LoadingProps> {
  static defaultProps = {
    className: '',
    text: '',
    width: '100px',
    color: undefined,
  };

  private bem: BEM = createNamespace('loading');
  style: Record<string, number | string | undefined>;

  constructor(props: LoadingProps) {
    super(props);
    this.style = {
      '--color': props.color || 'yellow',
      '--width': props.width,
      '--animationName': props.color ? 'scaleOnly' : 'scaleAndHueRotate',
    };
  }

  render() {
    const { className, text } = this.props;
    const { bem, style } = this;

    return (
      <div className={clsx(className, bem())} style={style} data-text={text}>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
        <div className="inner-circle">
          <span></span>
        </div>
      </div>
    );
  }
}

export default Loading;
