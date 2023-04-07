const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
// const dashboardRoutes =require("./dashboardRoutes");
// add uploads(images), comments

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
//router.use("/dashboard", dashboardRoutes);

module.exports = router;
