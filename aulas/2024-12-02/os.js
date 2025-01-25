
const os = require('os');

const userInfo = os.userInfo();

const memoriaLivreBytes = os.freemem();
const memoriaLivreGB = (memoriaLivreBytes / (1024 ** 3)).toFixed(2);

console.log(`Olá ${userInfo.username}! Sua memória livre: ${memoriaLivreGB} GB`);
