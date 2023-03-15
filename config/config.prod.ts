import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.APP_ROOT': 'https://baidu.com',
  },
  publicPath: './',
});
