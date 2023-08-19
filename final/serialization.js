const web3 = require("@solana/web3.js");
const borsh = require('@project-serum/borsh');

const equipPlayerSchema = borsh.struct([
    borsh.u8("variant"),
    borsh.u8("player_id"),
    borsh.u8("item_id")
]);

const buffer = Buffer.alloc(1000);

equipPlayerSchema.encode({variant: 0, player_id: 1, item_id: 2}, buffer);

const instructionBuffer = buffer.slice(0, equipPlayerSchema.getSpan(buffer));

const transaction = new web3.Transaction();

const instruction = new web3.TransactionInstruction({

    keys: [
        {pubkey: player.publickey, isSigner: true, isWritable: false},
        {pubkey: playerInfoAccount, isSigner: false, isWritable: true},
        {pubkey: web3.SystemProgram.programId, isSigner: false, isWritable: false}
    ],
    data: instructionBuffer,
    programId: programId
});

transaction.add(instruction);

web3.sendAndConfirmTransaction(connection, transaction, [player]).then((txid) => {console.log(txid)});