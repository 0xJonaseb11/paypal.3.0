# paypal.3.0

## MIT License

Get full functionalities of paypal but with a modern look of the brilliance of web3
This is a hardhat use case where web3 meets the blockchain technology.

## To start using this application

## **Blockchain Part**

---------------

```sh
# clone this repository - Give it a star pleasee!!!
git clone https://github.com/Jaz-3-0/paypal.3.0.git
# install hardhat
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle ethereum-waffle chai @nomiclabs/hardhat-ethereum ethers dotenv


# Updated dependency list
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-verify chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v6
```

```sh
# make sure dependency is fully resolved
npm install
```

_**Try running some of the following tasks:**_

```sh
# get full help on hardhat tasks
npx hardhat help
# Initialize new project
npx hardhat init
# get accounts
npx hardhat accounts
# clean the environment
npx hardhat clean
# compile smart contract
npx hardhat compile
# test smart contract
npx hardhat test
# interact with hardhat node
npx hardhat node
# deploy paypal smart contract
npx hardhat run scripts/deploy.js --network mumbai

```

`Contract verification`

```sh
npx hardhat verify <contract_address> --network mumbai
```

## Check your .env

```sh
# Your .env should look like this
# test networks
# for this project, i used these
# -----------------
MORALIS_API_KEY=
PRIVATE_KEY=
POLYGON_MUMBAI=
# -----------------
# Below where you see networks, You should enter the Urls of your endpoints(rpc)

SEPOLIA=
ARBITRUM_SEPOLIA=

# main networks
MAINNET=
POLYGON=
ARBITRUM_ONE=
OPTIMISM=

```

## **Client side**

```sh
# clone the repository - Give it a start please!!!
git clone https://github.com/Jaz-3-0/paypal.3.0.git
# Go to client directory
cd client
# install dependencies
npm install
# start application
npm start
```

### **Regarding utilization**

- Should have metamask or any other ethereum wallet installed
- Make sure your .env is set correctly.
  - PRIVATE_KEY
  - MORALIS_API_KEY
  - POLYGON_MUMBAI
- Get some mumbai testnet tokens
- Click connect wallet
- Get your full user experience

------------------------------

@Jaz-3-0
