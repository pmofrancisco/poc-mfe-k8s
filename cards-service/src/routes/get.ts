import express from 'express';

const router = express.Router();

router.get('/api/cards', (req, res) => {
  res.send([]);
});

export { router as getCardsRouter };
