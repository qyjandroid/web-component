import { defineConfig } from 'dumi';
import { resolve } from 'path';

let publicPath = '/';
console.log('env==', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'production') {
  publicPath = '/component/prod/';
}

export default defineConfig({
  title: 'web-component',
  hash: true,
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  description: '用于Web 前端组件开发。',
  mode: 'site',
  publicPath: publicPath,
  base: publicPath,
  exportStatic: {},
  locales: [['zh-CN', '中文']],
  navs: [
    null,
    {
      title: 'GitLab',
      path: 'http://192.168.9.131:8081/webcommon/web-component',
    },
  ],
  themeConfig: {
    carrier: '中国联通',
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  styles: [
    `
        #root .__dumi-default-previewer-actions button:first-child{
          display:none;
        }
        #root .__dumi-default-previewer-actions a{
            display:none;
          }
        `,
  ],
  alias: {
    demos: process.cwd() + '/src/demos/index.ts',
  },
  // more config: https://d.umijs.org/config
});
