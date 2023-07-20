const {
  Connection,
  clusterApiUrl,
  PublicKey,
  LAMPORTS_PER_SOL,
  Keypair,
  Transaction,
  SystemProgram,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");

const fs = require("fs");
async function main(){
    const connection = new Connection(clusterApiUrl("devnet"));
    const secret = JSON.parse(fs.readFileSync("secretkey.json") || "[]");
    const secretkey = new Uint8Array(secret);

    const ownerKeyPair = Keypair.fromSecretKey(secretkey);
    console.log(ownerKeyPair.publicKey);

    const publickey = ownerKeyPair.publicKey;
    const recepientaddress ="GAoBNQZWo4aTkWoHUocG8MqieEY1JrVnqaGnMXAPt2JH";
    const recepient = new PublicKey(recepientaddress);
    console.log(recepient.toBase58);
    const transaction = new Transaction();

    const sendSolInstruction = SystemProgram.transfer({
      fromPubkey: publickey,
      toPubkey: recepient,
      lamports: LAMPORTS_PER_SOL * 0.1,
    });

    transaction.add(sendSolInstruction);
    const signature = await sendAndConfirmTransaction(connection,transaction,[ownerKeyPair,]);
    console.log(signature);
}
main()