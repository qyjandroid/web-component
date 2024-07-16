import React from 'react';
import { DemoBlock } from 'demos';
import { Flip, Flex } from 'web-component';
import svg from '../../../assets/icon-img.svg';
export default () => {
  return (
    <>
      <DemoBlock title="上下">
        <Flex wrap>
          <Flip
            count={1}
            duration="1s"
            resetDuration="5s"
            active={false}
            upDown
            back={<div style={{ width: '100px', height: '100px', color: 'red' }}>back</div>}
            front={<div style={{ width: '100px', height: '100px', color: 'blue' }}>font</div>}
          />
        </Flex>
      </DemoBlock>
      <DemoBlock title="左右 infinite">
        <Flex wrap>
          <Flip
            count={1}
            duration="3s"
            resetDuration="2s"
            count={'infinite'}
            active={true}
            back={<div style={{ width: '100px', height: '100px', color: 'red' }}>back</div>}
            front={<div style={{ width: '100px', height: '100px', color: 'blue' }}>font</div>}
          />
        </Flex>
      </DemoBlock>
      <DemoBlock title="结束事件">
        <Flex wrap>
          <Flip
            count={1}
            duration="3s"
            resetDuration="2s"
            active={true}
            callBack={() => {
              console.log('end!!!!');
            }}
            back={
              <div style={{ width: '100px', height: '100px', color: 'red' }}>
                <img src={svg} alt="" />
              </div>
            }
            front={
              <div style={{ width: '100px', height: '100px', color: 'blue' }}>
                <img src={svg} alt="" />
              </div>
            }
          />
        </Flex>
      </DemoBlock>
    </>
  );
};
