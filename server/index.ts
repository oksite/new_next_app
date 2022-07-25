
import next from 'next'
import Koa  from 'koa';
import Router from 'koa-router';

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.all('(.*)', async (ctx) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200
    await next()
  })

  server.use(router.routes())
  const httpServer=  server.listen(port, () => {
    process.send('ready');
    console.log(`> Ready on http://localhost:${port}`)
  })

  process.on('SIGINT', () => {
    httpServer.close(() => {
      process.exit(0);
    });
  });

})