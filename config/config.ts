import { defineConfig } from '@umijs/max';
import routes from "./router";
import proxy from './proxy.helper';

export default defineConfig({
  antd: {},
  access: {},
  history: {
    type: 'hash'
  },
  hash: true,
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '模版页面',
  },
  dva: {},
  proxy,
  routes,
  npmClient: 'yarn',
});
