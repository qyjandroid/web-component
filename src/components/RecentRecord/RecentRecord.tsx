import React, { createRef, ReactNode, RefObject } from 'react';
import { RecentRecordProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';

interface State {
  index1: number;
  index2: number;
  data: string[] | null;
  ani: boolean;
  aniSecond: boolean;
  delay: boolean;
  initFlag: boolean;
}

class RecentRecord extends React.Component<RecentRecordProps, State> {
  static defaultProps = {
    className: '',
    loopData: null,
    defaultText: '',
    pauseTime: 1000,
    inTime: 1000,
  };

  private bem: BEM = createNamespace('recent-record');
  private firstRef: RefObject<HTMLDivElement>;
  private secondRef: RefObject<HTMLDivElement>;
  private timer1: number | undefined;
  private timer2: number | undefined;

  constructor(props: RecentRecordProps) {
    super(props);
    this.firstRef = createRef();
    this.secondRef = createRef();
    this.state = {
      index1: 0,
      index2: 1,
      data: props.loopData,
      ani: true,
      aniSecond: true,
      delay: true,
      initFlag: false,
    };
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    if (this.timer1) {
      clearTimeout(this.timer1);
    }
    if (this.timer2) {
      clearTimeout(this.timer2);
    }
  }
  init = () => {
    const { index1, data } = this.state;
    if (!data) return;
    const firstElement = this.firstRef.current;
    const secondeElement = this.secondRef.current;
    const secondIndex = index1 + 1 >= data.length ? 0 : index1 + 1;
    if (firstElement) {
      firstElement.innerHTML = data[index1];
      firstElement.addEventListener('webkitAnimationEnd', this.setElement);
    }
    if (secondeElement) {
      secondeElement.innerHTML = data[secondIndex];
      secondeElement.addEventListener('webkitAnimationEnd', this.setElementTwo);
    }
    this.setState({ initFlag: true });
  };

  static getDerivedStateFromProps(props: RecentRecordProps, state: State) {
    // console.log("props:",props,"state:",state)
    if (props.loopData?.length !== state.data?.length) {
      return {
        data: props.loopData,
      };
    }
    return {};
  }

  componentDidUpdate(preProps: RecentRecordProps, preState: State) {
    if (preState.data?.length !== this.state.data?.length) {
      if (!this.state.initFlag) {
        this.init();
      }
    }
  }

  setElement = () => {
    const { data, index1 } = this.state;
    const { pauseTime } = this.props;
    const node = this.firstRef.current;
    const nextIndex = (index1 + 2) % (data?.length ?? 10);
    if (node) {
      node.innerHTML = '' + data?.[nextIndex];
    }
    // console.log("index",index1)
    this.setState({
      ani: false,
      index1: nextIndex,
    });

    this.timer1 = setTimeout(() => this.setState({ ani: true }), pauseTime);
  };
  setElementTwo = () => {
    const { data, index1 } = this.state;
    const { pauseTime } = this.props;
    const node = this.secondRef.current;
    const nextIndex = index1 + 1 >= (data?.length ?? 0) ? 0 : index1 + 1;

    if (node) {
      node.innerHTML = '' + data?.[nextIndex];
    }

    this.setState({
      aniSecond: false,
      delay: false,
    });

    this.timer2 = setTimeout(() => this.setState({ aniSecond: true }), 1000);
  };
  render() {
    const { className, defaultText } = this.props;
    const { data, ani, aniSecond, delay } = this.state;

    const { bem } = this;
    if (data?.length) {
      return (
        <div className={clsx(className, bem())}>
          <div
            data-id="index1"
            className={ani ? 'up first-el' : 'first-el'}
            // onAnimationEnd={this.setElement}
            ref={this.firstRef}
          ></div>
          <div
            data-id="index2"
            className={clsx({ 'second-el': true, up: aniSecond, delay: delay })}
            // onAnimationEnd={this.setElementTwo}
            ref={this.secondRef}
          ></div>
        </div>
      );
    }
    return <div className={clsx(className, bem())}>{data ? defaultText : null}</div>;
  }
}

export default RecentRecord;
