import { Router } from 'express';
import { articleRoutes } from './articles.routes';

const router = Router();

router.use('/article', articleRoutes);

export { router };
