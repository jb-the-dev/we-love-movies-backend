const router = require("express").Router();
const moviesController = require("./movies.controller");
// insert methodNotAllowed handler

router.route("/").get(moviesController.list).get(moviesController.listNowShowing)

router.route("/:movieId([0-9]+)").get(moviesController.read)

router.route("/:movieId/theaters").get(moviesController.readWithTheater)

module.exports = router