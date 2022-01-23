import { Article } from '../../model/Article.model';
import { ArticlesRepository } from '../../repositories/implementations/ArticlesRepository';
import { FindOneArticleController } from './FindOneArticleController';
import { FindOneArticleUseCase } from './FindOneArticleUseCase';

export default (): FindOneArticleController => {
  const articlesRepository = new ArticlesRepository(Article);

  const findOneArticleUseCase = new FindOneArticleUseCase(articlesRepository);

  const findOneArticleController = new FindOneArticleController(
    findOneArticleUseCase
  );

  return findOneArticleController;
};
