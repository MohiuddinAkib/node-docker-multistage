import 'reflect-metadata';
import express from 'express';
import mongoose from 'mongoose';
import { Post } from './models/Post';

// mongoose promise config
mongoose.Promise = global.Promise;
// Connect to mongo server
mongoose.connect('mongodb://mongo:27017/express-rest-ts', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});
// mongo error handling
mongoose.connection
  .on('open', () => {
    console.log('db connection established');
  })
  .once('error', (error: mongoose.Error) => {
    console.log('db connection failed', error);
  });

// Init app
const app = express();

app.get('/', function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const posts = Post.find({}).exec();

  posts
    .then(posts => {
      return res
        .json({
          msg: 'Hello world',
          posts
        })
        .status(200);
    })
    .catch((error: mongoose.Error) => {
      return res
        .json({
          msg: 'Hello world',
          error
        })
        .status(500);
    });
});

app.get('/about', function(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  const post = Post.create({
    title: 'Post title',
    body: 'Post body'
  });

  post
    .then(post => {
      return res
        .json({
          msg: 'Hello from about page',
          post
        })
        .status(201);
    })
    .catch((error: mongoose.Error) => {
      return res
        .json({
          msg: 'Hello from about page',
          error
        })
        .status(500);
    });
});

app.listen(3000, () => console.log('server is running on port 3000'));
