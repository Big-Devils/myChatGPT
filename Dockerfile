# FROM node:10-alpine as builder
FROM node:14-alpine as builder

WORKDIR /usr/src/app/
USER root

# 中国镜像源
# RUN yarn -g mirror-config-china --registry=https://registry.npmjs.org/ --unsafe-perm=true --allow-root
# RUN npm i -g mirror-config-china --registry=https://registry.npm.taobao.org --unsafe-perm=true --allow-root



# npm install
COPY package.json ./
COPY yarn.lock ./

RUN yarn


COPY ./ ./

# 执行打包命令
RUN npm run build:prod

# nginx压缩zip
RUN  find build -name "*" -type f -print0 | xargs -0 gzip -9 -k

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /usr/src/app/dist  /usr/share/nginx/html/

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

