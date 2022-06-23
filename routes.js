const router = require('express').Router();
const { getbook, addbook, updatebook, deletebook } = require('./controller/book.controller.js');


router.get('/hotel', getbook);
router.post('/hotel',  addbook);
router.put('/hotel/:id',  updatebook);
router.delete('/hotel/:id', deletebook);


module.exports = router;