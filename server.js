const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
if (process.env.NODE_ENV !== "production")
  dotenv.config({ path: "./config.env" });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = process.env.port || 5000;
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// serve static files, build is the file we get after building our client page
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };
  stripe.charges.create(body, (err, stripeRes) => {
    if (err) {
      res.status(500).send({ error: err });
    } else res.status(200).send({ success: stripeRes });
  });
});
