import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { __dirname } from './utils.mjs';
import routes from './routes.mjs';

dotenv.config();

const app = express();

// Middleware
app.use(morgan('common'));
app.use(helmet());

// Static handlers
app.use(express.static('public'));
app.use('/', express.static(path.join(__dirname, 'public')));

// API endpoints
app.use('/api', routes);

// Not found and error handlers
/* eslint-disable-next-line no-unused-vars */
app.use((req, res, next) =>
  res.status(404).send({ message: "Sorry can't find that!" })
);

/* eslint-disable-next-line no-unused-vars */
app.use((err, req, res, next) => {
  /* eslint-disable-next-line no-console */
  console.error(err.stack);
  res.status(500).send({ message: 'Something broke!' });
});

// Start app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  /* eslint-disable-next-line no-console */
  console.log(`Listening on http://localhost:${port}...`);
});
