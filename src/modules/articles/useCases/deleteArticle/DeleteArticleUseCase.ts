import { IFindOneArticleInput } from '../../dtos/IFindOneArticleDTO';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';

class DeleteArticleUseCase {
  constructor(private articlesRepository: IArticlesRepository) {}

  async execute({ id }: IFindOneArticleInput): Promise<void> {
    const articleDeleted = await this.articlesRepository.deleteOneById(id);
    return articleDeleted;
  }
}

export { DeleteArticleUseCase };
