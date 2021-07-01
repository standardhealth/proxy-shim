const express = require('express');
const { mcodeApp, MCODEClient } = require('mcode-extraction-framework')

const router = new express.Router();

router.use(express.json());
router.post('/', async (req, res) => {
  const extractedData = await mcodeApp(
    MCODEClient,
    null,
    null,
    req.body,
    null,
    null,
    true,
  );
  return res.json(extractedData);
});

module.exports = router;
