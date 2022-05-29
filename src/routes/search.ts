import * as Router from 'koa-router';

import { searchController } from '../controllers/search';
import setContentTypeMiddleware from '../middleware';

const searchRouter: Router = new Router();

export default searchRouter.get(
  '/',
  setContentTypeMiddleware,
  searchController,
);
