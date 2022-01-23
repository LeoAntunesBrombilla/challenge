import { Article } from '../../model/Article.model';
import { ArticlesRepository } from '../../repositories/implementations/ArticlesRepository';
import { DeleteArticleController } from './DeleteArticleController';
import { DeleteArticleUseCase } from './DeleteArticleUseCase';

export default (): DeleteArticleController => {
  const articlesRepository = new ArticlesRepository(Article);

  const deleteArticleUseCase = new DeleteArticleUseCase(articlesRepository);

  const deleteArticleController = new DeleteArticleController(
    deleteArticleUseCase
  );

  return deleteArticleController;
};
