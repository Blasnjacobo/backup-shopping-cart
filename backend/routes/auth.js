const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");

const CLIENT_URL = "https://blasnjacobo.github.io/shopping-cart/";

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login/failed");
    }
    // Generate JWT token
    const token = jwt.sign(
      {
        user: user.user.id,
        username: user.user.username,
        provider: user.user.provider,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // Redirect to the main page with token appended to URL
    res.redirect(`${CLIENT_URL}?token=${token}`);
  })(req, res, next);
});

router.get(
  "/github",
  passport.authenticate("github", { scope: ["profile", "email"] })
);

router.get("/github/callback", (req, res, next) => {
  passport.authenticate("github", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect("/login/failed");
    }
    // Generate JWT token
    const token = jwt.sign(
      {
        user: user.user.id,
        username: user.user.username,
        provider: user.user.provider,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    // Redirect to the main page with token appended to URL
    res.redirect(`${CLIENT_URL}?token=${token}`);
  })(req, res, next);
});

router.get("/login/success", async (req, res) => {
  const authorizationHeader = req.headers.authorization;
  const token = authorizationHeader.split(" ")[1];
  try {
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Token not found in query parameter",
      });
    } else {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const { iat, exp, ...payload } = decodedToken;
      const user = await User.findOne({ username: payload.username });
      res.status(200).json({
        success: true,
        message: "Successfully logged in",
        user: user,
      });
    }
  } catch (error) {
    console.error("Invalid token:", error);
  }
});

module.exports = router;
