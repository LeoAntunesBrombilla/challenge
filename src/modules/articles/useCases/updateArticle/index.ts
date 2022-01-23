import { Article } from '../../model/Article.model';
import { ArticlesRepository } from '../../repositories/implementations/ArticlesRepository';
import { UpdateArticleController } from './UpdateArticleController';
import { UpdateArticleUseCase } from './UpdateArticleUseCase';

export default (): UpdateArticleController => {
  const articlesRepository = new ArticlesRepository(Article);

  const updateArticleUseCase = new UpdateArticleUseCase(articlesRepository);

  const updateArticleController = new UpdateArticleController(
    updateArticleUseCase
  );

  return updateArticleController;
};
