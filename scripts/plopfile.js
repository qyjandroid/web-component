const path = require('path');

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称（驼峰命名,首字母大写）' },
      { type: 'input', name: 'CN', message: '请输入组件中文名称' },
      { type: 'input', name: 'description', message: '请输入组件描述' },
      {
        type: 'list',
        name: 'comType',
        message: '请选择组件类型',
        choices: ['基础组件', '布局组件', '表单组件', '反馈组件', '数据展示'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/index.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(
          __dirname,
          '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        ),
        templateFile: path.resolve(__dirname, '../templates/component/comp.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/style/index.less'),
        templateFile: path.resolve(__dirname, '../templates/component/style/index.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/types.ts'),
        templateFile: path.resolve(__dirname, '../templates/component/types.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/demos/demo.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/demos/demo.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/index.md'),
        templateFile: path.resolve(__dirname, '../templates/component/doc.hbs'),
      },
      {
        type: 'add',
        path: path.resolve(__dirname, '../src/components/{{pascalCase name}}/index.test.tsx'),
        templateFile: path.resolve(__dirname, '../templates/component/__test__/index.test.hbs'),
      },
      {
        type: 'append',
        path: path.resolve(__dirname, '../src/index.ts'),
        pattern: '/* PLOP_INJECT_EXPORT */',
        template:
          "export { default as {{pascalCase name}} } from './components/{{pascalCase name}}';",
      },
    ],
  });
};
