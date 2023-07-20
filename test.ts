import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  clusterApiUrl,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import { airdrop } from "./test1";

export const transfersol = async(from: Keypair, to: PublicKey, amount: number) => {
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
  const transaction = new Transaction();
  const instruction = SystemProgram.transfer({
    fromPubkey:from.publicKey,
    toPubkey:to,
    lamports:LAMPORTS_PER_SOL*amount
  })

  transaction.add(instruction);
  await sendAndConfirmTransaction(connection,transaction,[from])
  console.log("Done");
  
};

const secret = Uint8Array.from([183,103,110,196,194,207,247,146,44,97,100,38,97,163,52,147,35,2,78,62,102,190,32,127,235,4,100,25,161,76,232,239,175,133,248,139,220,78,96,178,181,244,56,56,193,231,123,56,193,227,34,39,80,210,140,133,245,81,62,229,138,142,48,208]);
const fromkeypair = Keypair.fromSecretKey(secret);
const topublicKey = new PublicKey("9ZcH5mr8r8doZw8B96fvFBZkWH36WhqNqeksY1qHmUdZ");


(async()=>{
  await airdrop((fromkeypair.publicKey),4);
  
  await transfersol(fromkeypair,topublicKey,2);
})()