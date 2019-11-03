const router = require("express").Router();
const bookRoutes = require("./books");
const saveBookRoute = require('./save-book');


// Book routes
router.use("/books", bookRoutes);

//API ROUTE To save the book
router.use("/save/book", saveBookRoute);

module.exports = router;
