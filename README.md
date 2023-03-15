# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://next.umijs.org/zh-CN/docs/max/introduce)

## publicPath
`/config/config.dev.ts`文件下`publicPath`变量 
<br>
`/config/config.prod.ts`文件下`publicPath`变量

## 路由配置
`/config/router.ts`文件

## 网络请求
```typescript
  import {request} from "@umijs/max";
```
## 网络代理
在`config/proxy.helper.ts`文件中配置

## 正式环境nginx代理
`nginx.conf`文件下`server`内部配置
```
  location ^~ /ijx/web-umi-class-board/ {
        add_header Access-Control-Allow-Origin *;
        alias /usr/share/nginx/html/;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
  }
```
