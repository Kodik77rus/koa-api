import * as Koa from 'koa';

export default (ctx: Koa.Context, next: Koa.Next) => {
  ctx.set('Content-Type', 'application/json');
  next();
};
