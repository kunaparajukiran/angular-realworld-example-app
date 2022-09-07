const Cryptr = require('./crypto-js.js');
ciphertext = Cryptr.AES.encrypt('1', '1A25-0806-7030-1678-5936-8743').toString();
console.log(ciphertext)