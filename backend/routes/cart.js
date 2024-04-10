const express = require("express");
const totalQuantity = require("../controllers/cart/totalQuantity");
const itemQuantity = require("../controllers/cart/itemQuantity");
const increaseQuantity = require("../controllers/cart/increaseQuantity");
const decreaseQuantity = require("../controllers/cart/decreaseQuantity");
const removeFromCart = require("../controllers/cart/removeFromCart");
const cartItems = require("../controllers/cart/cartItems");
const authenticateToken = require("../middleware/auth.js");

const router = express.Router();
router.get("/totalQuantity/:username", authenticateToken, totalQuantity);
router.get("/itemQuantity/:username/:_id", authenticateToken, itemQuantity);
router.post("/increase/:_id/:username", authenticateToken, increaseQuantity);
router.post("/decrease/:_id/:username", authenticateToken, decreaseQuantity);
router.delete("/delete/:_id/:username", authenticateToken, removeFromCart);
router.get("/:username", authenticateToken, cartItems);

module.exports = router;
