const router = require('express').Router();

const apiRoutes = require("./api");
// const main = require('./main');

// router.use("/", main);
router.use("/api", apiRoutes);

module.exports = router;