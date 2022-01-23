import mongoose, { Schema } from 'mongoose';
import { ICreateArticleDTO } from '../dtos/ICreateArticleDTO';

const ArticleSchema: Schema = new Schema({
  featured: { type: Boolean, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  imageUrl: { type: String, required: true },
  newsSite: { type: String, required: true },
  summary: { type: String, required: true },
  publishedAt: { type: Date, required: true },
  launches: { type: Array, required: true },
  events: { type: Array, required: true }
});

ArticleSchema.virtual('');

const Article = mongoose.model<ICreateArticleDTO>('Article', ArticleSchema);

export { Article };
