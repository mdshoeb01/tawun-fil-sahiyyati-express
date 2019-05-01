const express = require('express');
const app = express();
const path = require('path');
const { portLogger } = require('./common/logger-middleware');

app.use(express.static(path.join('public')));
const port = process.env.PORT || 4010;
app.listen(port, portLogger(port));
