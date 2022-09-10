require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stone royal pitch proof grace office army gift'; 
let testAccounts = [
"0x9428dd53fa8af1adcf2427e6f30ef25311c1f7f9dd616e92fc11d3de2f8897be",
"0xb92703dec44f78b4721190afe04e6719e38e5fb257dd9f7329663544e43486be",
"0xd26f9b27af48b4030082b76cb7901c538a17c45bbb6d1fc2131dd8776f8eebb9",
"0x98c565b46ea3f48e27001ad53680c5107bcdecb0b188820c4a4aee80367014fc",
"0x1efee69bb3f62297e1ea28b4025ecc15324edf32a28c4e5b366345d0134af43b",
"0xa79b463657b80c4b0529760e9e44691c41cf2684b451ddecf3b973c915c4a108",
"0xda444d5a0ea50a62b35f24d03146cb803f4655575ffa2ff19e7ea21def472b64",
"0x1a62ce580b155eba25f96deca1de8afe5c99644a54d01cb0498cbe0d9b41f1d6",
"0x432a3ace30b2d4a6364119f781148cfa2863ce7a6c9540c3d5cbbb9d7de04e43",
"0x0a36d7e1c74c5e88605648db993d57e3cdd7b2a4423dde495e1a6b1129c11d8f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

