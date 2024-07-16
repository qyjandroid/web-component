import React from 'react';
import { DemoBlock } from 'demos';
import './demo.less';
import { Loading, Flex } from 'web-component';

export default () => {
  return (
    <>
      <DemoBlock title="组件展示">
        <Flex wrap>
          <div className="demo1-loading">
            <Loading text="加载中..." />
          </div>
        </Flex>
      </DemoBlock>
      <DemoBlock title="size">
        <Flex wrap>
          <div className="demo2-loading">
            <Loading width="50px" />
          </div>
          <div className="demo3-loading">
            <Loading width="150px" />
          </div>
        </Flex>
      </DemoBlock>
    </>
  );
};
