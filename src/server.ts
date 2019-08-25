import 'reflect-metadata';
import express from 'express';

// Init app
const app = express();

app.get('/', function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  return res
    .json({
      msg: 'Hello world'
    })
    .status(200);
});

app.get('/about', function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  return res
    .json({
      msg: 'Hello from about page'
    })
    .status(200);
});

app.listen(3000, () => console.log('server is running on port 3000'));
