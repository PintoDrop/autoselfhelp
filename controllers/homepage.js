const router = require("express").Router();
const { Post, Comment, User } = require("../models/");

// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User]
    });

    const posts = postData.map((post) => post.get({ plain: true }));


    console.log(posts);
    res.render("homepage", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User]
        }
      ]
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post);
     res.render("single-post", {
       layout: "dashboard",
       post,
     });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  // if (req.session.loggedIn) {
  //   res.redirect("/dashboard");
  //   return;
  // }

  res.render("signup");
});

module.exports = router;
