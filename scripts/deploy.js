const hre = require("hardhat");

const Main = async () => {

  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  console.log("Deploying Paypal contract...");

  await paypal.deployed();

  console.log("Paypal contract deployed to:", paypal.address);  

}

const runMain = async() => {
  try {
    await Main();
    process.exit(0);
  } catch (err) {
    console.log("Error deploying Paypal contract", err);
    process.exit(1);
  }  
}

runMain();