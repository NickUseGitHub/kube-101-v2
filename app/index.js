const Koa = require('koa');
const app = new Koa();

const serverName = process.env.SERVER_NAME;
const port = process.env.PORT; 

// response
app.use(ctx => {
  ctx.set('Content-Type', 'text/html; charset=utf-8');
  ctx.body = `Hello Koa V.1 ${serverName}. <br /> Your path is ${ctx.request.url}`;
});
 
app.listen(port);

console.log(`Ready on port: ${port}`) 