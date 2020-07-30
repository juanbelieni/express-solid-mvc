import 'dotenv/config';
import app from './app';
import connection from './database/connection';

connection.then(() => {
  app.listen(3000, () => console.log('Listening 3000'));
});
