/* eslint-disable */
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '', // 서버의 주소와 포트번호로 수정해주세요
      changeOrigin: true,
    }),
  );
};
