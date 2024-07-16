# web-component 组件库

---

这是一个内部的组件库，欢迎大家踊跃开发！

# 研发文档参考

---

# 开始

---

安装

```bash
$ npm i
```

开启服务

```bash
$ npm start
```

构建文档

```bash
$ npm run docs:build
```

运行测试

```bash
$ npm test
```

构建组件库

```bash
$ npm run build
```

# 创建组件 规范

```bash
$ npm run create
```

# git Commit 规范

---

git commit 规范

```shell
#  <类型>[可选的作用域]: <描述>
  git commit -m 'feat: 增加 xxx 功能'
  git commit -m 'bug: 修复 xxx 功能'
  git commit -m 'docs: 更新文档'
```

## 主要 Type

- feat: 增加新功能
- fix: 修复 bug
- build: 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
- ci: 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交
- docs: 文档更新
- perf: 性能，体验优化
- refactor: 代码重构时使用
- style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
- revert: 执行 git revert 打印的 message
- chore： 不属于以上类型的其他类型
- test: 添加测试或者修改现有测试
