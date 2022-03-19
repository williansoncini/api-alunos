import app from './app';
import appConfig from './config/appConfig';

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log('O pai está on!');
  console.log(appConfig.url);
});
