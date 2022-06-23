const router = require('express').Router();
const { getbook, addbook, updatebook, deletebook } = require('./controller/book.controller.js');


router.get('/book', getbook);
router.post('/book',  addbook);
router.put('/book/:id',  updatebook);
router.delete('/book/:id', deletebook);


module.exports = router;