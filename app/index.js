const koaRoute = require('koa-route');
const Koa = require('koa');
const app = new Koa();

const serverName = process.env.SERVER_NAME;
const port = process.env.PORT; 

app.use(koaRoute.get('/appdata', function(ctx) {
  ctx.set('Content-Type', 'application/json');
  ctx.body = JSON.stringify({
    name: serverName
  });
}));

app.use(koaRoute.get('/', function(ctx) {
  ctx.set('Content-Type', 'text/html; charset=utf-8');
  ctx.body = `Hello Koa V.1 ${serverName}. <br /> Your path is ${ctx.request.url}`;
}));
 
app.listen(port);

console.log(`Ready on port: ${port}`) 