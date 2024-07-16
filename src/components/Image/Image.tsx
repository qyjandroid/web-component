import React from 'react';
import { ImageProps } from './types';
import clsx from 'clsx';
import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';
import { isDef } from '@/utils/base';
import { addUnit } from '@/utils/format/unit';

interface ImageState {
  error: boolean;
  loaded: boolean;
}

const ErrorNode = () => (
  <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"></path>
  </svg>
);

const Placeholder = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2513"
    width="64"
    height="64"
  >
    <path
      d="M992 0H32C12.8 0 0 12.8 0 32v960c0 19.2 12.8 32 32 32h960c19.2 0 32-12.8 32-32V32c0-19.2-12.8-32-32-32zM960 64v684.8l-166.4-192c-6.4-6.4-12.8-12.8-25.6-12.8s-19.2 6.4-25.6 12.8l-147.2 160-268.8-358.4c-6.4-6.4-12.8-12.8-25.6-12.8s-19.2 6.4-25.6 12.8L64 665.6V64h896zM64 960v-179.2l236.8-345.6L576 787.2c6.4 6.4 12.8 12.8 25.6 12.8s19.2-6.4 25.6-12.8L768 627.2l192 217.6V960H64z"
      fill="#8a8a8a"
      p-id="2514"
    ></path>
    <path
      d="M704 467.2c76.8 0 147.2-64 147.2-147.2s-64-147.2-147.2-147.2S563.2 243.2 563.2 320s64 147.2 140.8 147.2z m0-224c44.8 0 83.2 38.4 83.2 83.2s-38.4 76.8-83.2 76.8S627.2 364.8 627.2 320s32-76.8 76.8-76.8z"
      fill="#8a8a8a"
      p-id="2515"
    ></path>
  </svg>
);

class Image extends React.Component<ImageProps, ImageState> {
  static defaultProps = {
    className: '',
    width: 100,
    height: 100,
    block: false,
    alt: 'img',
    src: '',
    style: {},
    fit: 'fill',
    errorNode: <ErrorNode />,
  };

  private bem: BEM = createNamespace('image');

  constructor(props: ImageProps) {
    super(props);
    this.state = {
      error: false,
      loaded: false,
    };
  }

  onError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { onError } = this.props;
    if (onError) {
      onError(event);
    }
    console.error('img load error!');
    this.setState({
      error: true,
    });
  };

  onLoaded = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad(event);
    }
    this.setState({
      loaded: true,
    });
  };

  renderPlaceholder() {
    const { loaded } = this.state;
    const { bem } = this;
    const { placeholder } = this.props;
    if (!loaded && placeholder) {
      return <div className={clsx(bem('img-loading'))}>{placeholder}</div>;
    }
    return null;
  }

  renderInner() {
    const { alt, src, errorNode, onClick, fit } = this.props;
    const { bem, onError, onLoaded } = this;
    const { error, loaded } = this.state;
    if (error) {
      return <div className={clsx(bem('img-error'))}>{errorNode}</div>;
    }
    const attrs = {
      className: clsx(bem('img')),
      style: {
        objectFit: fit,
        display: loaded ? 'block' : 'none',
      },
    };
    return (
      <>
        {this.renderPlaceholder()}
        <img alt={alt} src={src} onClick={onClick} onLoad={onLoaded} onError={onError} {...attrs} />
      </>
    );
  }

  render() {
    const { className, block, onClick, style, width, height } = this.props;
    const { bem } = this;
    const internalStyle = { ...style };

    if (isDef(width)) {
      internalStyle.width = addUnit(width);
    }

    if (isDef(height)) {
      internalStyle.height = addUnit(height);
    }

    return (
      <div
        className={clsx(
          className,
          bem({
            block,
          }),
        )}
        style={internalStyle}
        onClick={onClick}
      >
        {this.renderInner()}
        {this.props.children}
      </div>
    );
  }
}

export default Image;
