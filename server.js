const app = require('express')();
const { router } = require('./routes');
const { portLogger } = require('./common/logger-middleware');
const pool = require('./config/pool');

process.pool = pool;
const port = process.env.PORT || 4000;
app.use('/', router);
app.listen(port, portLogger(port));
