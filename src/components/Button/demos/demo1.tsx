import React from 'react';
import { DemoBlock } from 'demos';
import { Button, Flex } from 'web-component';
import './demo.less';
const defaultUrl = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';

export default () => {
  return (
    <>
      <DemoBlock title="按钮点击">
        <Flex wrap>
          <Button
            className="demo1-btn"
            onClick={() => {
              alert('hello.');
            }}
          >
            点我
          </Button>
        </Flex>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Button disabled className="demo2-btn">
          禁用状态
        </Button>
      </DemoBlock>

      <DemoBlock title="按钮防抖">
        <Button
          className="demo2-btn"
          debounceTime={2000}
          onClick={() => {
            alert('2秒触发一次');
          }}
        >
          2秒触发一次
        </Button>
      </DemoBlock>
      <DemoBlock title="块级元素">
        <Button block className="demo2-btn">
          块级元素
        </Button>
      </DemoBlock>
      <DemoBlock title="行级元素">
        <Button className="demo2-btn">按钮一</Button>
        <Button className="demo3-btn">按钮二</Button>
      </DemoBlock>

      <DemoBlock title="自定义子元素">
        <Button
          className="demo4-btn"
          onClick={() => {
            alert('我是自定义子元素');
          }}
        >
          <div className="icon">
            <img src={defaultUrl}></img>
          </div>
          <div className="text">我是子元素</div>
        </Button>
      </DemoBlock>
    </>
  );
};
