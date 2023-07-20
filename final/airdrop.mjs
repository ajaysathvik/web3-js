import { PublicKey, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
export const transaction = async (address, amount) => {
    const publickey = new PublicKey(address);
    const connection = new Connection(clusterApiUrl('devnet'), "confirmed");
    const signature = await connection.requestAirdrop(publickey, amount * LAMPORTS_PER_SOL);
    connection.confirmTransaction(signature);
};

transaction("9ZcH5mr8r8doZw8B96fvFBZkWH36WhqNqeksY1qHmUdZ", 1);
