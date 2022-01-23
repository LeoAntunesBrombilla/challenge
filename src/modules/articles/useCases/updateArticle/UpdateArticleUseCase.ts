import { IFindOneArticleInput } from '../../dtos/IFindOneArticleDTO';
import { IUpdateArticleDTO } from '../../dtos/IUpdateArticleDTO';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';

class UpdateArticleUseCase {
  constructor(private articlesRepository: IArticlesRepository) {}

  async execute(
    { id }: IFindOneArticleInput,
    {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events
    }: IUpdateArticleDTO
  ): Promise<void> {
    const updatedArticle = await this.articlesRepository.updateOneById(id, {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events
    });
    return updatedArticle;
  }
}

export { UpdateArticleUseCase };
