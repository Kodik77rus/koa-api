import * as Koa from 'koa';

import { searchService } from '../services/search';

export const searchController = async (ctx: Koa.Context) => {
  ctx.body = await searchService(ctx);
};
