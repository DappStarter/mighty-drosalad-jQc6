require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hope enroll sure trophy name rate situate unveil gesture glide flip giant'; 
let testAccounts = [
"0xc866eeb2c66344a7c52932159c29ea02cd31d835a0b304feebe720009ece1199",
"0xc42ef9e1107831a7c513680e616f7e362acdd7630635222c01b8e7d18d7f0c75",
"0x85ef368d319abde96eeb9c70b325058d9888c9ab6a8370b99a2791476b074245",
"0xecfcac93311b11431e0d8681c8c94ceaaf616e5faa052877a7f0106dd710a2cb",
"0x529ce513cfe0cfce0e29e05507209dd75713e1944f8f2fe1b012e550aa4466eb",
"0x574b0d7087d7227e7d511af4bd931941de9b9b5b76b246709ae6896c32a862cc",
"0xd5bd8fc09cdd9f9ce49855df5f7baf34397531adb387495a862dd806ffe918c2",
"0x06c7ec314bb9ea24e614f2dc906a7bffc4575439b7f53fbc2eeb60b19d293309",
"0xd61ea46217b4e2564335d218031424b53df62370bd778caa7d0ec39319dae35b",
"0x9f7ae06b30665dc41cae331b537622438eb94bfd3c632f29796c891ff00ec6f9"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


