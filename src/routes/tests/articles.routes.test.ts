import request from 'supertest';
import app from '../../index';

const articleCreateTest = {
  featured: false,
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string'
    }
  ],
  events: [
    {
      id: 'string',
      provider: 'string'
    }
  ]
};

const articleUpdateTest = {
  featured: false,
  title: 'string',
  url: 'string',
  imageUrl: 'string',
  newsSite: 'string',
  summary: 'string',
  publishedAt: 'string',
  launches: [
    {
      id: 'string',
      provider: 'string'
    }
  ],
  events: [
    {
      id: 'string',
      provider: 'string'
    }
  ]
};

describe('[POST] - CREATE', () => {
  it('should create an article', async () => {
    const response = await request(app)
      .post('/article')
      .type('json')
      .send(articleCreateTest);

    expect(response.statusCode).toEqual(201);
  });
});

describe('[GET] - LIST', () => {
  it('should list all articles', async () => {
    const response = await request(app).get('/article').type('json').send();

    expect(response.statusCode).toEqual(201);
  });
});

describe('[GET] - FIND ONE', () => {
  it('should be able to find one article', async () => {
    const article = await request(app)
      .post('/article')
      .type('json')
      .send(articleCreateTest);

    const response = await request(app)
      .get(`/article/${article.body._id}`)
      .type('json')
      .send();

    expect(response.statusCode).toEqual(201);
  });
});

describe('[DELETE] - DELETE ONE', () => {
  it('should be able to find and delete one article', async () => {
    const article = await request(app)
      .post('/article')
      .type('json')
      .send(articleCreateTest);

    const response = await request(app)
      .delete(`/article/${article.body._id}`)
      .type('json')
      .send();

    expect(response.statusCode).toEqual(201);
  });
});

describe('[PUT] - UPDATE ONE', () => {
  it('should be able to find and update one article', async () => {
    const article = await request(app)
      .post('/article')
      .type('json')
      .send(articleCreateTest);

    const response = await request(app)
      .put(`/article/${article.body._id}`)
      .type('json')
      .send(articleUpdateTest);

    expect(response.statusCode).toEqual(201);
  });
});
