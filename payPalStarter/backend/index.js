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

  const { userAddress } = req.query.user;

  const response = await Moralis.EvmApi.utils.runContractFunction({
    chain: "0x3881",
    address: "0x20F75f430AB4D1281de4d24bDC849d681Df9A69b",
    function: "getMyName",
    abi: ABI,
    params: {_user, userAddress},    
  });

  const jsonResponseName = response.raw;
  



  return res.status(200).json({});
});

Moralis.start({
  apiKey: process.env.MORALIS_API_KEY,
}).then(() => {
  app.listen(port, () => {
    console.log("Listening on port", port)
  });
});

