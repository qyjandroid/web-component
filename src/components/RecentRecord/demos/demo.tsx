import React, { useEffect, useState } from 'react';
import { DemoBlock } from 'demos';
import { RecentRecord, Flex } from 'web-component';

export default () => {
  const [loopData, setLoopData] = useState(['<span>1</span>']);

  useEffect(() => {
    setTimeout(() => {
      setLoopData(['<span>1</span>', '<span>2</span>', '<span>3</span>']);
    }, 2000);
  }, []);

  return (
    <>
      <DemoBlock title="组件展示">
        <RecentRecord defaultText={'这是一个默认文案'} loopData={loopData} />
      </DemoBlock>
    </>
  );
};
