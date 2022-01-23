/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { FindOneArticleUseCase } from './FindOneArticleUseCase';

class FindOneArticleController {
  constructor(private findOneArticleUseCase: FindOneArticleUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    try {
      const article = await this.findOneArticleUseCase.execute({
        id: String(id)
      });
      return response.status(201).json(article).send();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { FindOneArticleController };
