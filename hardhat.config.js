require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("detenv");
dotenv.config();

/*
* This file contains both test and production configuration approaches.
* testnets
* mainnets
*/

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: process.env.SEPOLIA,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 11155111,

    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 80001,
    },

    arbitrum_sepolia: {
      url: process.env.ARBITRUM_SEPOLIA,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 421614,
    },
    
    // Main networks
    mainnet: {
      url: process.env.MAINNET,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1,
    },
    polygon: {
      url: process.env.POLYGON,
      accounts: [process.env.PRIVATE_KEY],
      chainId: '',
    },
    optimism: {
      url: process.env.OPTIMISM,
      accounts: [process.env.PRIVATE_KEY],
      chainId: '',
    },
    arbitrum_one: {
      url: process.env.ARBITRUM_ONE,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 42161,
    }
  },

  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
