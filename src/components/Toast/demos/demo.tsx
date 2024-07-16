import React from 'react';
import { DemoBlock } from 'demos';
import { Toast, Button } from 'web-component';
import './demo.less';

export default () => {
  return (
    <>
      <DemoBlock title="组件展示">
        <Button
          className="demo1-toast-btn"
          onClick={() => {
            Toast.show('我是提示');
          }}
        >
          提示
        </Button>
      </DemoBlock>
      <DemoBlock title="时间不同">
        <Button
          className="demo1-toast-btn"
          onClick={() => {
            Toast.show('我是提示1s', 1000);
          }}
        >
          提示1s
        </Button>
        <Button
          className="demo2-toast-btn"
          onClick={() => {
            Toast.show('我是提示5s', 5000);
          }}
        >
          提示5s
        </Button>
      </DemoBlock>

      <DemoBlock title="显示图标">
        <Button
          className="demo3-toast-btn"
          onClick={() => {
            Toast.show('保存成功', 1000, 'success');
          }}
        >
          成功
        </Button>
        <Button
          className="demo2-toast-btn"
          onClick={() => {
            Toast.show('保存失败', 1000, 'error');
          }}
        >
          失败
        </Button>
        <Button
          className="demo3-toast-btn"
          onClick={() => {
            Toast.show('请选择多个文件', 1000, 'warning');
          }}
        >
          警告
        </Button>
      </DemoBlock>
    </>
  );
};
