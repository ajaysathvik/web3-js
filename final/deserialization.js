const web3 = require("@solana/web3.js");
const borsh = require("@project-serum/borsh");
const MOVIE_REVIEW_PROGRAM_ID = "CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN";

const borshAccountSchema = borsh.struct([
  borsh.bool("initialized"),
  borsh.u8("rating"),
  borsh.str("title"),
  borsh.str("description"),
]);

async function main() {
  const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

  const accounts = await connection
    .getProgramAccounts(new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID))
    .then((accounts) => {
      accounts.map(({ pubkey, account }) => {
        console.log("Accounts:", pubkey.toBase58());
        console.log("Accounts:", account.data);
        const { initialized, title, rating, description } =
          borshAccountSchema.decode(account.data);
        console.log("initialized:", initialized);
        console.log("title:", title),
          console.log("rating:", rating),
          console.log("description:", description);
        console.log(
          "______________________________________________________________________________"
        );
      });
    });
}
main();