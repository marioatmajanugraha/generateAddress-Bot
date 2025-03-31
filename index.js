const fs = require('fs');
const ethers = require('ethers');
const cfonts = require('cfonts');
const readline = require('readline');

// Banner menggunakan cfonts
cfonts.say('Airdrop 888', {
    font: 'block',         // Jenis font
    align: 'center',       // Posisi tengah
    colors: ['cyan', 'gray'], // Warna gradien
    background: 'transparent', // Latar belakang
    letterSpacing: 1,      // Jarak antar huruf
    lineHeight: 1,         // Tinggi baris
    space: true,           // Spasi di sekitar
    maxLength: '0'         // Panjang maksimum (0 = tanpa batas)
});

// Teks setelah banner
console.log('Script coded by - @balveerxyz || reGenerate Wallet Address\n');

// Prompt untuk user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Pastikan folder sudah ada wallets.json yang berisi Private Key');
rl.question('Jalankan Bot? y/n: ', (answer) => {
    if (answer.toLowerCase() === 'y') {
        // Baca file wallets.json
        let walletsData;
        try {
            walletsData = JSON.parse(fs.readFileSync('wallets.json', 'utf8'));
        } catch (error) {
            console.error('Error: File wallets.json tidak ditemukan atau format JSON salah!');
            rl.close();
            return;
        }

        // Fungsi untuk generate wallet address dari private key
        const generateWallet = (wallet) => {
            const walletInstance = new ethers.Wallet(wallet.privatekey);
            return {
                address: walletInstance.address, // Address diletakkan pertama
                privateKey: wallet.privatekey     // Private key dari input
            };
        };

        // Proses semua private key dan generate address
        const generatedWallets = walletsData.map(wallet => generateWallet(wallet));

        // Simpan hasil ke generated_walletAdd.json
        fs.writeFileSync('generated_walletAdd.json', JSON.stringify(generatedWallets, null, 2), 'utf8');

        console.log('Wallet addresses berhasil digenerate dan disimpan di generated_walletAdd.json');
    } else {
        console.log('Bot dibatalkan.');
    }
    rl.close();
});