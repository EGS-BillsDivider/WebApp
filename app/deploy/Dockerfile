FROM node AS builder

MAINTAINER Pedro Abreu

LABEL version="1.0"

WORKDIR /app

COPY app/deploy/nginx.conf /etc/nginx/nginx.conf

COPY app/ .

RUN npm install

RUN npm run build

FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

COPY app/deploy/nginx.conf /etc/nginx/nginx.conf