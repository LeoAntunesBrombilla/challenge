import { ICreateArticleDTO } from '../dtos/ICreateArticleDTO';
import { IUpdateArticleDTO } from '../dtos/IUpdateArticleDTO';

interface IArticlesRepository {
  createOne(data: ICreateArticleDTO): Promise<void>;
  deleteOneById(title: string): Promise<void>;
  listAll(): Promise<void>;
  updateOneById(
    id: string,
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
  ): Promise<void>;
  findOneById(title: string): Promise<void>;
}

export { IArticlesRepository };
