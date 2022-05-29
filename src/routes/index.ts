import searchRouter from './search';

import * as combineRouters from 'koa-combine-routers';

export default combineRouters(searchRouter);
