const express = require('express');
const Moralis = require("moralis").default;
const cors = require('cors');
require("dotenv").config();

const port = 3000;
const ABI = require("./abi.json");

const app = express();

app.use(cors());
app.use(express.json());

app.get('/getNameAndBalance', async(req, res) => {
  return res.status(200).json({});
});

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening on port", port)
  });
});

