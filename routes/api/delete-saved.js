const router = require('express').Router();

const booksController = require('../../controllers/booksContoller')

router.route('/:id').delete(booksController.deleteSaved);

module.exports = router;