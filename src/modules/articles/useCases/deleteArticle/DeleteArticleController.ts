/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { DeleteArticleUseCase } from './DeleteArticleUseCase';

class DeleteArticleController {
  constructor(private deleteArticleUseCase: DeleteArticleUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;

    try {
      const articleDeleted = await this.deleteArticleUseCase.execute({
        id: String(id)
      });
      return response.status(201).json(articleDeleted).send();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { DeleteArticleController };
