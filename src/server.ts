import app from './index';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Lets go!');
});
