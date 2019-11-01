const router = require('express').Router();

const booksController = require('../../controllers/booksContoller')

router.route('/').get(booksController.findAll);
module.exports = router;