import * as Koa from 'koa';

export const searchService = async (ctx: Koa.Context) => {
  if (Object.entries(ctx.query).length === 0) {
    return {};
  }
  return {};
};
