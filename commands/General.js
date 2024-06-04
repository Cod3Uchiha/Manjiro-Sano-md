
/** 

Manjiro-Sano-md
by Cod3Uchiha
Takudzwa Mlambo
 
 **/




const { france } = require("../framework/france");
const {getAllSudoNumbers,isSudoTableNotEmpty} = require("../bdd/sudo")
const conf = require("../set");

france({ nomCom: "owner", categorie: "General", reaction: "💞" }, async (dest, zk, commandeOptions) => {
    const { ms , mybotpic } = commandeOptions;
    
  const thsudo = await isSudoTableNotEmpty()

  if (thsudo) {
     let msg = `*My Super-User*\n
     *Owner Number*\n :
- 🌟 @${conf.NUMERO_OWNER}

------ *other sudos* -----\n`
     
 let sudos = await getAllSudoNumbers()

   for ( const sudo of sudos) {
    if (sudo) { // Vérification plus stricte pour éliminer les valeurs vides ou indéfinies
      sudonumero = sudo.replace(/[^0-9]/g, '');
      msg += `- 💼 @${sudonumero}\n`;
    } else {return}

   }   const ownerjid = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
   const mentionedJid = sudos.concat([ownerjid])
   console.log(sudos);
   console.log(mentionedJid)
      zk.sendMessage(
        dest,
        {
          image : { url : mybotpic() },
          caption : msg,
          mentions : mentionedJid
        }
      )
  } else {
    const vcard =
        'BEGIN:VCARD\n' + // metadata of the contact card
        'VERSION:3.0\n' +
        'FN:' + conf.OWNER_NAME + '\n' + // full name
        'ORG:undefined;\n' + // the organization of the contact
        'TEL;type=CELL;type=VOICE;waid=' + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + '\n' + // WhatsApp ID + phone number
        'END:VCARD';
    zk.sendMessage(dest, {
        contacts: {
            displayName: conf.OWNER_NAME,
            contacts: [{ vcard }],
        },
    },{quoted:ms});
  }
});

france({ nomCom: "developer", categorie: "General", reaction: "🐐" }, async (dest, zk, commandeOptions) => {
    const { ms, mybotpic } = commandeOptions;

    const devs = [
      { nom: "Tkm", numero: "263785028126" },
      { nom: "Cod3Uchiha", numero: "263775571820" },
      // Ajoute d'autres développeurs ici avec leur nom et numéro
    ];

    let message = "Hello 👋\n *Welcome to 𝕸𝖆𝖓𝖏𝖎𝖗𝖔-𝕾𝖆𝖓𝖔-𝖒𝖉!*\n\n*✦━━◆CREATOR INFO◆━━✦*\n\n\n *◇NAME: _Takudzwa-Mlambo_*\n*◇AGE: 17*\n*◇LOCATION: _On Earth_*\n*◇BELIEVER: YES ✅*\n*◇FRIENDLY: slightly ✅*\n*◇EGOISTIC: _YEEES ✅_*\n*◇FAV Game: _Mortal-kombat_*\n*◇INSTAGRAM: https://instagram.com/Cod3Uchiha*\n*◇Github: https://github.com/Cod3Uchiha*\n\n______________________________\n\n*💙KEEP USING Manjiro-Sano-md🤍*\n\n\n_The following are my contacts_:\n:";
    for (const dev of devs) {
      message += `----------------\n• ${dev.nom} : https://wa.me/${dev.numero}\n`;
    }
   
  var lien = mybotpic()
    if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:message }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    repondre(lien)
    repondre("link error");
    
}
});

france({ nomCom: "support", categorie: "General" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, auteurMessage, } = commandeOptions; 
 
  repondre("look on pm sir ")
  await zk.sendMessage(auteurMessage,{text : `https://wa.me/263785028126`},{quoted :ms})

})
 
