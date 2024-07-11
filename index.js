require("dotenv").config();
const express = require("express");
const createShortUrl = require("./create-short-url");
const getOriginalUrl = require("./get-original-url");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  res.send(`I am alive at port: ${port}`);
});

app.post("/shortner", async function (req, res) {
  const url = req.body.URL;
  const shortURL = await createShortUrl(url);
  res.send(shortURL);
});

app.get("/:punyUrl", async function (req, res) {
  const uniqueId = req.params.punyUrl;
  const originalUrl = await getOriginalUrl(uniqueId);
  res.redirect(originalUrl);
});

const port = 4000;
app.listen(port, () => {
  console.log("App is working.");
});
