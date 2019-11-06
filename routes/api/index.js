const router = require("express").Router();
const bookRoutes = require("./books");
const saveBookRoute = require('./save-book');

const deleteBookRoute = require('./delete-saved');


// Book routes
router.use("/books", bookRoutes);

//API ROUTE To save the book
router.use("/save/book", saveBookRoute);

//API ROUTE To delete the book
router.use("/delete/book", deleteBookRoute);

module.exports = router;
