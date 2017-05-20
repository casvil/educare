'use strict';

const Koa = require('koa');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');

const app = new Koa();

app
.use(cors())
.use(bodyParser())
.use(router.allowedMethods())
.use(router.routes());

app.listen(3000);
console.log('Server running on port 3000');
