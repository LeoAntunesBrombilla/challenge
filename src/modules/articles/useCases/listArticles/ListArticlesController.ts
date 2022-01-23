/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { ListArticlesUseCase } from './ListArticleUseCase';

class ListArticlesController {
  constructor(private listArticleUseCase: ListArticlesUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    try {
      const articles = await this.listArticleUseCase.execute();
      return response.status(201).json(articles).send();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { ListArticlesController };
