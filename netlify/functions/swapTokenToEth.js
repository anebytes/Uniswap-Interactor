const { schedule } = require("@netlify/functions");
const { ethers } = require("ethers");
require("dotenv").config();

const IUniswapV2Router02 = require("@uniswap/v2-periphery/build/IUniswapV2Router02.json");
const IERC20 = require("@openzeppelin/contracts/build/contracts/ERC20.json");

const handler = async function (event, context) {
  console.log("Received event:", event);

  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  const ACCOUNT_1 = new ethers.Wallet(process.env.PRIVATE_KEY_1, provider);
  const ERC20 = new ethers.Contract(process.env.TOKEN_ADDRESS, IERC20.abi);
  const erc20Balance = await ERC20.balanceOf(ACCOUNT_1.address);

  const V2_ROUTER = new ethers.Contract(
    process.env.V2_ROUTER_ADDRESS,
    IUniswapV2Router02.abi
  );

  const PATH = [process.env.TOKEN_ADDRESS, process.env.WETH_ADDRESS];
  const DEADLINE = Math.floor(Date.now() / 1000) + 60 * 10; // 10 minutes

  const token_to_eth_swap = await V2_ROUTER.connect(
    ACCOUNT_1
  ).swapExactTokensForETH(erc20Balance, 0, PATH, ACCOUNT_1.address, DEADLINE);

  console.log(`Swap Complete!`);
  console.log(
    `See transaction at: https://goerli.etherscan.io/tx/${token_to_eth_swap.hash}/`
  );

  return {
    statusCode: 200,
  };
};

exports.handler = schedule("@daily", handler);
