import { objectLaunchsAndEvents } from './ICreateArticleDTO';

interface IUpdateArticleDTO {
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  launches: objectLaunchsAndEvents[];
  events: objectLaunchsAndEvents[];
}

export { IUpdateArticleDTO };
