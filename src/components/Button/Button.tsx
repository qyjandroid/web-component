import React from 'react';
import { ButtonProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';
import ButtonCheck from './ButtonCheck';

class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    className: '',
    tag: 'button',
    block: false,
    stopPropagation: false,
    debounceTime: 200,
  };

  private bem: BEM = createNamespace('button');

  private buttonCheck;

  constructor(props: ButtonProps) {
    super(props);
    this.buttonCheck = new ButtonCheck(props.debounceTime);
  }

  renderContent = () => {
    return this.props.children;
  };

  onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick, disabled } = this.props;
    if (!disabled && onClick) {
      if (this.props.stopPropagation) {
        event.nativeEvent.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
      }
      if (!this.buttonCheck.check()) {
        // console.log('点击太频繁');
        return;
      }
      onClick(event);
    }
  };

  render() {
    const { className, tag, disabled, block } = this.props;
    const { onClick, bem } = this;
    const eleType = tag || 'button';
    return React.createElement(
      eleType,
      {
        className: clsx(className, bem({ disabled, block })),
        disabled,
        onClick,
      },
      this.renderContent(),
    );
  }
}

export default Button;
