/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { UpdateArticleUseCase } from './UpdateArticleUseCase';

class UpdateArticleController {
  constructor(private updateArticleUseCase: UpdateArticleUseCase) {}

  async handle(request: Request, response: Response): Promise<any> {
    const { id } = request.params;
    const {
      featured,
      title,
      url,
      imageUrl,
      newsSite,
      summary,
      launches,
      events
    } = request.body;

    try {
      const updatedArticle = await this.updateArticleUseCase.execute(
        { id: String(id) },
        {
          featured,
          title,
          url,
          imageUrl,
          newsSite,
          summary,
          launches,
          events
        }
      );
      return response.status(201).json(updatedArticle).send();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}

export { UpdateArticleController };
