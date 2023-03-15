// 运行时配置
import type {RequestConfig} from '@umijs/max';
import {history} from '@umijs/max';
import {message} from 'antd';
import _ from 'lodash';

// 运行时配置
const codeMessage = {
  '200': '服务器成功返回请求的数据。',
  '201': '新建或修改数据成功。',
  '202': '一个请求已经进入后台排队（异步任务）。',
  '204': '删除数据成功。',
  '400': '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  '401': '用户没有权限（令牌、用户名、密码错误）。',
  '403': '用户得到授权，但是访问是被禁止的。',
  '404': '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  '405': '请求方法不被允许。',
  '406': '请求的格式不可得。',
  '410': '请求的资源被永久删除，且不会再得到的。',
  '422': '当创建一个对象时，发生一个验证错误。',
  '500': '服务器发生错误，请检查服务器。',
  '502': '网关错误。',
  '503': '服务不可用，服务器暂时过载或维护。',
  '504': '网关超时。',
};

// 与后端约定的响应数据格式
interface ResponseStructure {
  code: string;
  data: any;
  msg: string;
}

// 运行时配置

export const request: RequestConfig = {
  // 统一的请求设定
  timeout: 10000,
  headers: {'X-Requested-With': 'XMLHttpRequest', token: 'ddd'},
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误抛出
    // @ts-ignore
    errorThrower: (res: ResponseStructure) => {
      const {code, msg} = res;
      if (!code) {
        const error: any = new Error(msg || '服务器故障，请稍后重试');
        error.name = 'ERROR';
        error.info = {code};
        throw error; // 抛出自制的错误
      }
    },
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      console.dir(error);
      if (opts?.skipErrorHandler) throw error;
      // 我们的 errorThrower 抛出的错误。
      if (error.name === 'ERROR') {
        const errorInfo: ResponseStructure = error.info;
        if (errorInfo) {
          // const { data} = errorInfo;
          // @ts-ignore
          message.error(codeMessage[_.get(errorInfo, 'code', '500')]);
        }
      } else if (error.response) {
        // Axios 的错误
        // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
        message.error(error.response.statusText);
      } else if (error.request) {
        // 请求已经成功发起，但没有收到响应
        // \`error.request\` 在浏览器中是 XMLHttpRequest 的实例，
        // 而在node.js中是 http.ClientRequest 的实例
        message.error('服务器未响应');
      } else {
        // 发送请求时出了点问题
        message.error('请求出现错误，请重试');
      }
    },
  },

  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // 拦截请求配置，进行个性化处理。
      // const url = config.url.concat('?token = 123');
      // return { ...config, url};
      const url = process.env.NODE_ENV === 'production' ? process.env.APP_ROOT + config.url : config.url;
      return {...config, url};
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response) => {
      // 拦截响应数据，进行个性化处理
      const {data} = response;
      // console.log(response, location);
      if (_.get(data, 'code', '500') !== '200') {
        // @ts-ignore
        message.error(codeMessage[_.get(data, 'code', '500')]);
        if (_.get(data, 'code', '500') === '500' && location.pathname !== '/500') {
          history.push('/500');
        }
      }
      return response;
    },
  ],
};
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return {name: '智慧商城'};
}

export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
