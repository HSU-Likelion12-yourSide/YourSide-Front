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

/**
 * target 설정에 유의해서 코드를 작성하고 proxy를 사용해야 한다.
 const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://exam-lab.store/api',
            changeOrigin: true,
        })
    );
    app.use(
        '/users',
        createProxyMiddleware({
            target: 'https://exam-lab.store/users',
            changeOrigin: true,
        })
    );
 */