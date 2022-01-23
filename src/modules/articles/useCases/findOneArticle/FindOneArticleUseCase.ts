import { IFindOneArticleInput } from '../../dtos/IFindOneArticleDTO';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';

class FindOneArticleUseCase {
  constructor(private articlesRepository: IArticlesRepository) {}

  async execute({ id }: IFindOneArticleInput): Promise<void> {
    const article = this.articlesRepository.findOneById(id);
    return article;
  }
}

export { FindOneArticleUseCase };
