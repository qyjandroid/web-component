---
title: '按需加载'
nav:
  title: 开发指南
---

# 按需加载

web-component 支持按需加载。

使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行自动语法转换。可以在 `.babelrc` 中这样配置：

```js
module.exports = {
  plugins: [
    ['import', { libraryName: 'web-component', libraryDirectory: 'es/components', style: false }],
  ],
};
```
