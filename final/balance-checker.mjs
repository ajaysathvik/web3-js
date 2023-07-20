import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
export const airdrop = async (publickey) => {
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
    const response = await connection.getAccountInfo(publickey);
    return response === null || response === void 0 ? void 0 : response.lamports;
};
(async () => {
    const balance = await airdrop(new PublicKey("9ZcH5mr8r8doZw8B96fvFBZkWH36WhqNqeksY1qHmUdZ"));
    console.log(balance);
})();