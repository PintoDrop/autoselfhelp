const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  console.log(req.body);
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })

    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;
        console.log("email");

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log("here login");
    console.log(req.body.email);
    console.log(req.body.password);
    if (!userData) {
      res
        .status(400)
        .json({ message: "Please re-enter user name and password" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Please re-enter user name and password" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Logged in" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
  // res.send("success reached here");
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/", (req, res) => {
  console.log("default HIT");
});

module.exports = router;
