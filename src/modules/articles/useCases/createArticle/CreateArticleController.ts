/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { CreateArticleUseCase } from './CreateArticleUseCase';

class CreateArticleController {
  constructor(private createArticleUseCase: CreateArticleUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events,
      publishedAt
    } = request.body;

    try {
      const newArticle = await this.createArticleUseCase.execute({
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
      return response.status(201).json(newArticle).send();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { CreateArticleController };
