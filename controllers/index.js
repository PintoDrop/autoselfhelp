const router = require("express").Router();

const apiRoutes = require("./api");
const homePage = require("./homepage");
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homePage);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
