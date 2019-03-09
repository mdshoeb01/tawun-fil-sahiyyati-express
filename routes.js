const router = require('express').Router();
const {
  urlLogger,
  notFoundLogger,
} = require('./common/logger-middleware');

router.use('/', urlLogger);

router.get('/', (req, res) => {
  res.send('hi');
});

router.use('*', notFoundLogger, (req, res) => {
  res.send('404 page, Not Found');
});

module.exports = {
  router,
};
