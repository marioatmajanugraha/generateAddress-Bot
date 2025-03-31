# generateAddress-Bot 🔑

Script ini digunakan untuk meng-generate wallet address dari private key yang ada di file `wallets.json` dan menyimpannya ke `generated_walletAdd.json`.

## 📌 Fitur

✅ Meng-generate wallet address dari private key menggunakan `ethers.js`  
📋 Membaca data private key dari file `wallets.json` dengan format JSON  
💾 Menyimpan hasil ke `generated_walletAdd.json` dengan format `address` dan `privateKey`  
⚡ Prompt interaktif untuk memastikan user ingin menjalankan bot (`y/n`)  
🔒 Error handling jika file `wallets.json` tidak ditemukan atau formatnya salah  

## 🚀 Cara Penggunaan

### Clone repository ini
```sh
git clone https://github.com/marioatmajanugraha/generateAddress-Bot.git
cd generateAddress-Bot
```

### Install Dependencies
```sh
npm install ethers cfonts readline
```

### Siapkan file `wallets.json`
Buat file `wallets.json` dan isi dengan private key dalam format JSON. Contoh:
```json
[
    {
        "privatekey": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
    },
    {
        "privatekey": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    }
]
```

### Jalankan Script
```sh
node index.js
```

### Ikuti Instruksi
Pastikan file `wallets.json` sudah ada di folder yang sama. Saat dijalankan, script akan menampilkan banner **"Airdrop 888"** dan pesan:
```
Script coded by - @balveerxyz || reGenerate Wallet Address
Pastikan folder sudah ada wallets.json yang berisi Private Key
Jalankan Bot? y/n:
```
Ketik `y` untuk menjalankan bot atau `n` untuk membatalkan. Jika berhasil, hasil akan disimpan di `generated_walletAdd.json`.

## ⚠️ Disclaimer
Gunakan script ini dengan bijak. Jangan bagikan private key Anda kepada siapa pun. Developer tidak bertanggung jawab atas kehilangan data atau penyalahgunaan script ini.

## 🤝 Kontribusi
Jika ingin berkontribusi, silakan fork repo ini dan ajukan pull request! Kami terbuka untuk ide baru dan perbaikan.

## 📞 Kontak
Jika ada pertanyaan, hubungi: [@balveerxyz](https://t.me/balveerxyz)

Join channel Telegram gratis: [Airdrop 888](https://t.me/airdroplocked)

## Contoh Hasil `generated_walletAdd.json`
```json
[
    {
        "address": "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
        "privateKey": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
    },
    {
        "address": "0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a0z",
        "privateKey": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    }
]
