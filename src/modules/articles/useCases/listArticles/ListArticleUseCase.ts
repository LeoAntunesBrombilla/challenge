import { IArticlesRepository } from '../../repositories/IArticlesRepository';

class ListArticlesUseCase {
  constructor(private articlesRepository: IArticlesRepository) {}

  async execute(): Promise<void> {
    const articles = await this.articlesRepository.listAll();
    return articles;
  }
}

export { ListArticlesUseCase };
