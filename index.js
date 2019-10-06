const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const router = express.Router();


require("./config/passport")(passport);
app = express();

dotenv.config();
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected"))
  .catch(err => console.log(`Error: ${err}`));

app.use(express.json());
app.use(expressLayouts);
app.set("view engine", "ejs");

//body useNewUrlParser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
//express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/posts");
const dashboardRoutes = require("./routes/dashboard");

app.use("/", require("./routes/index"));

// router.get("/login", (req, res) => {
//   res.render("./login");
// });

// router.get("/register", (req, res) => {
//   res.render("./register");
// });

app.use("/api/posts", postRoutes);
app.use("/api/user", authRoutes);
app.use("/api/dashboard",dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
