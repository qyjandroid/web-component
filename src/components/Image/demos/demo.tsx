import React from 'react';
import { DemoBlock } from 'demos';
import { Image, Flex, Loading } from 'web-component';
import ImageDemo2 from './demo2';
import './style.less';
const url =
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?undefined';
const defaultUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => {
  const fits = ['contain', 'cover', 'fill', 'none', 'scale-down'] as const;
  return (
    <>
      <DemoBlock title="加载中">
        <Image width={'100px'} height={'100px'} src={`${defaultUrl}`} placeholder={<Loading />} />
      </DemoBlock>
      <ImageDemo2></ImageDemo2>
      <DemoBlock title="onerror展示">
        <Image
          width={'100px'}
          height={'100px'}
          alt={'this is a picture'}
          onError={() => {
            return console.log('load error');
          }}
          src="x.png"
        />
      </DemoBlock>
      <DemoBlock title="填充模式">
        <Flex wrap>
          {fits.map((el) => {
            return (
              <div className="fit-image-item">
                <Image fit={el} width="100%" height="27vw" src={url} />{' '}
                <div className="text">{el}</div>
              </div>
            );
          })}
        </Flex>
      </DemoBlock>
    </>
  );
};
