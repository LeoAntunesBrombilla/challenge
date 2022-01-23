import { Article } from '../../model/Article.model';
import { ArticlesRepository } from '../../repositories/implementations/ArticlesRepository';
import { ListArticlesController } from './ListArticlesController';
import { ListArticlesUseCase } from './ListArticleUseCase';

export default (): ListArticlesController => {
  const articlesRepository = new ArticlesRepository(Article);

  const listArticlesUseCase = new ListArticlesUseCase(articlesRepository);

  const listArticlesController = new ListArticlesController(
    listArticlesUseCase
  );

  return listArticlesController;
};
