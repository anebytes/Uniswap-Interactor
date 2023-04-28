# Uniswap Interactor
 
 ## About
<<<<<<< HEAD
This repository includes web3 scripts that interact with Uniswap on the Goerli testnet, which can be modified to work with other decentralized exchanges (DEXs) and networks. Additionally, it enables connection to a Netlify cloud, which permits transactions to be executed periodically. The scripts can be adjusted to function on other DEXs and networks.


Currently, the network being used is Goerli. To use a different network, use the RPC URL of the desired network and modify parameters like the Goerli WETH and USDC addresses.

The current DEX being utilized is Uniswap. If you want to use a different DEX, make sure to install their ABI packages or copy their ABI into a separate JSON file.

## Requirements and Tools


=======
 
 
## Requirements and Tools


>>>>>>> 46e979715014441b1d6a6fc12ff708c846e4eb0a
- [Ethers.js](https://docs.ethers.io/v5/)
- [Alchemy](https://www.alchemy.com/) 
- [Netlify](https://www.netlify.com/) (Cloud Service)
- Install [NodeJS](https://nodejs.org/en/). We recommend using the latest LTS (Long-Term-Support) version, and preferably installing NodeJS via [NVM](https://github.com/nvm-sh/nvm#intro).
- Create an [Alchemy](https://www.alchemy.com/) account, you'll need to create an API key, and use the Goerli RPC URL for testing.
- Create a [Netlify](https://www.netlify.com/) account.

## Setting Up
### 1. Clone Repo

```
git clone https://github.com/yandmch/Uniswap-Interactor.git
```

### 2. Create a GitHub Repository and push repo


### 3. Login to Netlify
Once logged in to Netlify, under the **Team overvie# Uniswap Interactor
 
 ## About
This repository includes web3 scripts that interact with Uniswap on the Goerli testnet, which can be modified to work with other decentralized exchanges (DEXs) and networks. Additionally, it enables connection to a Netlify cloud, which permits transactions to be executed periodically. The scripts can be adjusted to function on other DEXs and networks.


Currently, the network being used is Goerli. To use a different network, use the RPC URL of the desired network and modify parameters like the Goerli WETH and USDC addresses.

The current DEX being utilized is Uniswap. If you want to use a different DEX, make sure to install their ABI packages or copy their ABI into a separate JSON file.

## Requirements and Tools


- [Ethers.js](https://docs.ethers.io/v5/)
- [Alchemy](https://www.alchemy.com/) 
- [Netlify](https://www.netlify.com/) (Cloud Service)
- Install [NodeJS](https://nodejs.org/en/). We recommend using the latest LTS (Long-Term-Support) version, and preferably installing NodeJS via [NVM](https://github.com/nvm-sh/nvm#intro).
- Create an [Alchemy](https://www.alchemy.com/) account, you'll need to create an API key, and use the Goerli RPC URL for testing.
- Create a [Netlify](https://www.netlify.com/) account.

## Setting Up
### 1. Clone Repo

```
git clone https://github.com/yandmch/Uniswap-Interactor.git
```

### 2. Create a GitHub Repository and push repo


### 3. Login to Netlify
Once logged in to Netlify, under the **Team overview** tab, scroll down to **Sites** and click on **Import from Git**

Connect to your GitHub account, select the repository you created, and click **Deploy site**

### 5. Configure Environment Variables
While looking at the site's configuration, at the top tab, click on **Site settings**.

On the sidebar, click on **Environment variables**, then click on **Add a variable**.

- **RPC_URL=""** (Alchemy RPC URL)

- **PRIVATE_KEY_1=""**
- **PRIVATE_KEY_2=""**
- **PRIVATE_KEY_3=""**
- **TRANSFER_AMOUNT="10000000"** (10 USDC)

- **TOKEN_ADDRESS="0x07865c6E87B9F70255377e024ace6630C1Eaa37F"** (USDC on Goerli)
- **WETH_ADDRESS="0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"** (WETH on Goerli)

- **V2_ROUTER_ADDRESS="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"** (Uniswap V2 Router on Goerli)
- **SWAP_AMOUNT="25000000000000000"** (0.025 ETH)
w** tab, scroll down to **Sites** and click on **Import from Git**

Connect to your GitHub account, select the repository you created, and click **Deploy site**

### 3. Configure Environment Variables
While looking at the site's configuration, at the top tab, click on **Site settings**.

On the sidebar, click on **Environment variables**, then click on **Add a variable**.

- **RPC_URL=""** (Alchemy RPC URL)

- **PRIVATE_KEY_1=""**
- **PRIVATE_KEY_2=""**
- **PRIVATE_KEY_3=""**
- **TRANSFER_AMOUNT="10000000"** (10 USDC)

- **TOKEN_ADDRESS="0x07865c6E87B9F70255377e024ace6630C1Eaa37F"** (USDC on Goerli)
- **WETH_ADDRESS="0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6"** (WETH on Goerli)

- **V2_ROUTER_ADDRESS="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"** (Uniswap V2 Router on Goerli)
- **SWAP_AMOUNT="25000000000000000"** (0.025 ETH)
