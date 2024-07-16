import React from 'react';
import { DemoBlock } from 'demos';
import { Carousel } from 'web-component';

export default () => {
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
  return (
    <>
      <DemoBlock title="组件展示">
        <Carousel
          style={{ height: 120 }}
          showArrow={'never'}
          autoPlay={false}
          indicatorPosition={'outer'}
          indicatorType={'dot'}
          animation={'fade'}
        >
          {imageSrc.map((src, index) => (
            <div key={index}>
              <img src={src} style={{ width: '100%' }} />
            </div>
          ))}
        </Carousel>
      </DemoBlock>
    </>
  );
};
