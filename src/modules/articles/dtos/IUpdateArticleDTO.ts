interface IUpdateArticleDTO {
  featured: false;
  title: 'string';
  url: 'string';
  imageUrl: 'string';
  newsSite: 'string';
  summary: 'string';
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

export { IUpdateArticleDTO };
