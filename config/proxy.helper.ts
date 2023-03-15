/**
 * 本地运行proxy代理配置
 */
import {zipObject} from 'lodash';

const Cookie =
  '本地cookie，在测试或正式环境登陆后获取cv到这里';

const PROXY_PREFIXS = [
  '/一些',
  '/接口前缀/',
];

const PROXY_SETTING = {
  changeOrigin: true,
  withCredentials: true,
  headers: {
    Referer: 'https://代理地址',
    Cookie,
  },
  target: 'https://代理地址',
};

const common = zipObject(
  PROXY_PREFIXS,
  Array(PROXY_PREFIXS.length).fill(PROXY_SETTING),
);

// 需要代理不同的地址
const exception = {
  // '/classRoom': {
  //   changeOrigin: true,
  //   withCredentials: true,
  //   headers: {
  //     Referer: 'http://192.168.2.139:8081',
  //     Cookie,
  //   },
  //   target: 'http://192.168.2.139:8081/',
  // },
  // '/examination': {
  //   changeOrigin: true,
  //   withCredentials: true,
  //   headers: {
  //     Referer: 'http://192.168.2.139:8081',
  //     Cookie,
  //   },
  //   target: 'http://192.168.2.139:8081/',
  // }
};

export default {
  ...common,
  ...exception,
};
