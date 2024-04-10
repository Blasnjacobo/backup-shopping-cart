const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport.js");
const dotenv = require("dotenv");
dotenv.config();
const perfumes = require("./routes/perfumes.js");
const auth = require("./routes/auth.js");
const cart = require("./routes/cart.js");

const app = express();
app.use(morgan("dev"));

app.use(passport.initialize());

app.use(
  cors({
    origin: ["http://localhost:5173", "https://blasnjacobo.github.io"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use("/auth", auth);
app.use("/perfumes", perfumes);
app.use("/cart", cart);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.mongoDBURL, {})
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server Port: ${PORT}, you are connected to database`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
