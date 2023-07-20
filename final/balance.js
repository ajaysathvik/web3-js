const { Connection,clusterApiUrl,PublicKey,LAMPORTS_PER_SOL } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl('devnet'));

async function getBalanceWeb3(address){
    return connection.getBalance(address);
}


const publickey = new PublicKey("9ZcH5mr8r8doZw8B96fvFBZkWH36WhqNqeksY1qHmUdZ");

getBalanceWeb3(publickey).then((balance) =>{
    console.log(balance/LAMPORTS_PER_SOL)
})