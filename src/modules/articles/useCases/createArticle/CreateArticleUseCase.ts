import { ICreateArticleDTO } from '../../dtos/ICreateArticleDTO';
import { IArticlesRepository } from '../../repositories/IArticlesRepository';

class CreateArticleUseCase {
  constructor(private articlesRepository: IArticlesRepository) {}

  async execute({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    launches,
    events
  }: ICreateArticleDTO): Promise<void> {
    const newArticle = await this.articlesRepository.createOne({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events,
      publishedAt: new Date()
    });
    return newArticle;
  }
}

export { CreateArticleUseCase };
