import React from 'react';
import { Flex, Button } from 'web-component';
import { DemoBlock } from 'demos';

export default () => {
  return (
    <>
      <DemoBlock title="水平方向的间距">
        <Flex>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Flex>
      </DemoBlock>

      <DemoBlock title="换行">
        <Flex wrap>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
          <Button>按钮4</Button>
          <Button>按钮5</Button>
          <Button>按钮6</Button>
          <Button>按钮7</Button>
          <Button>按钮8</Button>
          <Button>按钮9</Button>
          <Button>按钮10</Button>
          <Button>按钮11</Button>
        </Flex>
      </DemoBlock>

      <DemoBlock title="垂直方向的间距">
        <Flex direction="vertical">
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Flex>
      </DemoBlock>

      <DemoBlock title="渲染为块级元素">
        <Flex direction="vertical" block>
          <Button>按钮1</Button>
          <Button>按钮2</Button>
          <Button>按钮3</Button>
        </Flex>
      </DemoBlock>

      <DemoBlock title="主轴对齐方式">
        <Flex justify="center" block>
          <Button>1</Button>
          <Button>
            2<br />2
          </Button>
          <Button>
            3<br />3<br />3
          </Button>
        </Flex>
      </DemoBlock>

      <DemoBlock title="交叉轴对齐方式">
        <Flex align="end">
          <Button>1</Button>
          <Button>
            2<br />2
          </Button>
          <Button>
            3<br />3<br />3
          </Button>
        </Flex>
      </DemoBlock>
    </>
  );
};
