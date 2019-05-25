const Koa = require('koa');
const app = new Koa();

const serverName = process.env.SERVER_NAME;
const port = process.env.PORT; 

// response
app.use(ctx => {
  ctx.body = `Hello Koa V.1 ${serverName}`;
});
 
app.listen(port);

console.log(`Ready on port: ${port}`) 