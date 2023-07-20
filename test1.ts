import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";

export const airdrop = async (publickey: PublicKey): Promise<number | undefined> => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const response = await connection.getAccountInfo(publickey);
    return response?.lamports;
};

(async () => {
    const balance = await airdrop(new PublicKey("9ZcH5mr8r8doZw8B96fvFBZkWH36WhqNqeksY1qHmUdZ"));
    console.log(balance);
})();