const web3 = require("@solana/web3.js");

// const Movie_Review_Program_Id = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDKgUduboN";

async function main() {
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));
  console.log("connection", connection);
  const accounts = await connection
    .getProgramAccounts(new web3.PublicKey(Movie_Review_Program_Id))
    .then((accounts) => {
      accounts.map(({ pubkey, account }) => {
        console.log(pubkey.toBase58(), account.data);
      })
    });
}
