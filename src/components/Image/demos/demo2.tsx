import React from 'react';
import { DemoBlock } from 'demos';
import { Image } from 'web-component';
const defaultUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
const placeholderUrl =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200';

interface State {
  random: number;
}

export default class ImageDemo2 extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      random: Date.now(),
    };
  }

  render() {
    const { random } = this.state;
    return (
      <DemoBlock title="渐进式加载">
        <Image
          width={'100px'}
          height={'100px'}
          onLoad={() => {
            return console.log('load over');
          }}
          src={`${defaultUrl}?${random}`}
          placeholder={<Image src={placeholderUrl} />}
        />
      </DemoBlock>
    );
  }
}
