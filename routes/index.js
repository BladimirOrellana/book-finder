const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//this uses the index file inside the API FOLDER and use the router.use("/any/routes", anyApiroutes)
// and together it reads /api/any/routes.
//Then the Index file in the API FOLDER calls another DIRECTORY which is the end of the route example  router.route('/').post(booksController.saveOne);



// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
