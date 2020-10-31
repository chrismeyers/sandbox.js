import express from 'express';

const router = express.Router();

router.get('/html', (req, res) => {
  res.send('<h1>hello from API</h1>');
});

router.get('/json', (req, res) => {
  res.send({ message: 'hello from API' });
});

/* eslint-disable-next-line no-unused-vars */
router.get('/error', (req, res) => {
  throw new Error('This should break!');
});

export default router;
