import { Request, Response, Router } from 'express';
import { Article } from '../modules/articles/model/Article.model';
import { ArticlesRepository } from '../modules/articles/repositories/implementations/ArticlesRepository';

import { CreateArticleController } from '../modules/articles/useCases/createArticle/CreateArticleController';
import { CreateArticleUseCase } from '../modules/articles/useCases/createArticle/CreateArticleUseCase';

import { DeleteArticleController } from '../modules/articles/useCases/deleteArticle/DeleteArticleController';
import { DeleteArticleUseCase } from '../modules/articles/useCases/deleteArticle/DeleteArticleUseCase';

import { FindOneArticleUseCase } from '../modules/articles/useCases/findOneArticle/FindOneArticleUseCase';
import { FindOneArticleController } from '../modules/articles/useCases/findOneArticle/FindOneArticleController';

import { ListArticlesController } from '../modules/articles/useCases/listArticles/ListArticlesController';
import { ListArticlesUseCase } from '../modules/articles/useCases/listArticles/ListArticleUseCase';

import { UpdateArticleUseCase } from '../modules/articles/useCases/updateArticle/UpdateArticleUseCase';
import { UpdateArticleController } from '../modules/articles/useCases/updateArticle/UpdateArticleController';

const articleRoutes = Router();

const articlesRepository = new ArticlesRepository(Article);

const createArticleUseCase = new CreateArticleUseCase(articlesRepository);
const createArticleController = new CreateArticleController(
  createArticleUseCase
);

const deleteArticleUseCase = new DeleteArticleUseCase(articlesRepository);
const deleteArticleController = new DeleteArticleController(
  deleteArticleUseCase
);

const findOneArticleUseCase = new FindOneArticleUseCase(articlesRepository);
const findOneArticleController = new FindOneArticleController(
  findOneArticleUseCase
);

const listArticlesUseCase = new ListArticlesUseCase(articlesRepository);
const listArticlesController = new ListArticlesController(listArticlesUseCase);

const updateArticleUseCase = new UpdateArticleUseCase(articlesRepository);
const updateArticleController = new UpdateArticleController(
  updateArticleUseCase
);

articleRoutes.post('/', async (request: Request, response: Response) => {
  try {
    await createArticleController.handle(request, response);
  } catch (error) {
    response.status(404).send({ error });
  }
});

articleRoutes.delete('/:id', async (request: Request, response: Response) => {
  try {
    await deleteArticleController.handle(request, response);
  } catch (error) {
    response.status(404).send({ error });
  }
});

articleRoutes.get('/:id', async (request: Request, response: Response) => {
  try {
    await findOneArticleController.handle(request, response);
  } catch (error) {
    response.status(404).send({ error });
  }
});

articleRoutes.get('/', async (request: Request, response: Response) => {
  try {
    await listArticlesController.handle(request, response);
  } catch (error) {
    response.status(404).send({ error });
  }
});

articleRoutes.put('/:id', async (request: Request, response: Response) => {
  try {
    await updateArticleController.handle(request, response);
  } catch (error) {
    response.status(404).send({ error });
  }
});

export { articleRoutes };
