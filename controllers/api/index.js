const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");
// add uploads(images), comments

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;
