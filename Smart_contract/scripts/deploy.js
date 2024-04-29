const { ethers } = require("ethers");

const Main = async () => {
  // const [deployer] = await ethers.getSigners();

  // console.log("Deploying Paypal contract with the account:", deployer.address);

  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  console.log("Paypal contract deployed to:", paypal.address);  
}

const runMain = async () => {
  try {
    await Main();
    process.exit(0);
  } catch (err) {
    console.log("Error deploying Paypal contract", err);
    process.exit(1);
  }  
}

runMain();
