/** 

Manjiro-Sano-md
by Cod3Uchiha
Takudzwa Mlambo
 
 **/





"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { france } = require("../framework/france");
france({ nomCom: "tempmail", reaction: "😌", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = '*𝕸𝖆𝖓𝖏𝖎𝖗𝖔-𝕾𝖆𝖓𝖔-𝖒𝖉* Temporary emails,Powered by *Cod3Uchiha* \n\n ' + "Click the links below to create unlimited TEMPORARY Emails. Powered by *Cod3Uchiha.*\n\n";
    let d = ' 1️⃣ https://tempumail.com\n\n 2️⃣ https://etempmail.com\n\n 3️⃣ https://ghostmail.one\n\n 4️⃣ https://tempmailid.com';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/2645fb9536dad7eda6aee.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});

