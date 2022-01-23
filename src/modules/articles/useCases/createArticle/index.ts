import { Article } from '../../model/Article.model';
import { ArticlesRepository } from '../../repositories/implementations/ArticlesRepository';
import { CreateArticleController } from './CreateArticleController';
import { CreateArticleUseCase } from './CreateArticleUseCase';

export default (): CreateArticleController => {
  const articlesRepository = new ArticlesRepository(Article);

  const createArticleUseCase = new CreateArticleUseCase(articlesRepository);

  const createArticleController = new CreateArticleController(
    createArticleUseCase
  );

  return createArticleController;
};
