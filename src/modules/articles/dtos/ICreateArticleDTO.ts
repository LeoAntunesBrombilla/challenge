interface ICreateArticleDTO {
  featured: false;
  title: 'string';
  url: 'string';
  imageUrl: 'string';
  newsSite: 'string';
  summary: 'string';
  publishedAt: Date;
  launches: [
    {
      id: 'string';
      provider: 'string';
    }
  ];
  events: [
    {
      id: 'string';
      provider: 'string';
    }
  ];
}

export { ICreateArticleDTO };
