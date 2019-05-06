const Koa = require('koa');
const app = new Koa();
const port = 3000; 

// response
app.use(ctx => {
  ctx.body = 'Hello Koa V.2';
});
 
app.listen(3000);

console.log(`Ready on port: ${port}`)