/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose';
import { ICreateArticleDTO } from '../../dtos/ICreateArticleDTO';
import { IArticlesRepository } from '../IArticlesRepository';
import { IUpdateArticleDTO } from '../../dtos/IUpdateArticleDTO';

class ArticlesRepository implements IArticlesRepository {
  public repository: mongoose.Model<any>;

  constructor(schemaModel: mongoose.Model<any>) {
    this.repository = schemaModel;
  }

  async createOne({
    featured,
    title,
    url,
    imageUrl,
    newsSite,
    summary,
    launches,
    events,
    publishedAt
  }: ICreateArticleDTO): Promise<void> {
    const newArticle = await this.repository.create({
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events,
      publishedAt
    });
    return newArticle;
  }

  async deleteOneById(id: string): Promise<void> {
    const articleDeleted = this.repository.findByIdAndDelete(id);
    return articleDeleted;
  }

  async listAll(): Promise<any> {
    const articles = await this.repository.find({});
    return articles;
  }

  async updateOneById(
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
  ): Promise<void> {
    const articleUpdated = await this.repository.findByIdAndUpdate(id, {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events
    });
    return articleUpdated;
  }

  async findOneById(id: string): Promise<void> {
    const article = await this.repository.findById(id);
    return article;
  }
}

export { ArticlesRepository };
