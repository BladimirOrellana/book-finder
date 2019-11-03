const router = require('express').Router();

const booksController = require('../../controllers/booksContoller')

router.route('/').get(booksController.getSavedBook);
router.route('/').post(booksController.saveBook);
module.exports = router;