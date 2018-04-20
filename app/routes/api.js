const express = require('express'),
      router = express.Router();

router.get('/spin', (req, res) => {
  const won = Math.floor(Math.random() * 360);
  res.json({
    status: 1,
    won: won
  })
})

module.exports = router;