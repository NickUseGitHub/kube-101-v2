const axios = require('axios');
const fs = require('fs');
const koaRoute = require('koa-route');
const path = require('path');
const Koa = require('koa');
const app = new Koa();

const anotherServiceHost = process.env.ANOTHER_SERVER_HOST;
const anotherServicePort = process.env.ANOTHER_SERVER_PORT;
const serverName = process.env.SERVER_NAME;
const port = process.env.PORT; 

app.use(koaRoute.get('/appdata', function(ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({
    name: serverName
  });
}));

app.use(koaRoute.get('/callstaticfile', async function(ctx) {
  const data = await new Promise(function (resolve) {
    fs.readFile(path.resolve(__dirname, './static/someStatic.json'), 'utf8', function (err, datafile) {
      if (err) throw err;
      resolve(datafile);
    });
  });

  console.log('data', data)
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.parse(data);
}));

app.use(koaRoute.get('/callanotherservice', async function(ctx) {
  const urlAnotherService = `http://${anotherServiceHost}:${anotherServicePort}/appdata`
  console.log('before call url another service url - ', urlAnotherService)
  await axios.get(urlAnotherService)
    .then(function (response) {
      ctx.set('Content-Type', 'text/html; charset=utf-8');
      ctx.body = `This is ${serverName} called data. <br /> get data is ${JSON.stringify(response.data)}`;
    })
    .catch(function (err) {
      console.log('error!!!', err)
    })
}));

app.use(koaRoute.get('/', function(ctx) {
  ctx.set('Content-Type', 'text/html; charset=utf-8');
  ctx.body = `Hello Koa V.1 ${serverName}. <br /> Your path is ${ctx.request.url}`;
}));

app.listen(port);

console.log(`Ready on port: ${port}`) 