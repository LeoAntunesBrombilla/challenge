export type objectLaunchsAndEvents = {
  id: string;
  provider: string;
};

interface ICreateArticleDTO {
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: Date;
  launches: objectLaunchsAndEvents[];
  events: objectLaunchsAndEvents[];
}

export { ICreateArticleDTO };
