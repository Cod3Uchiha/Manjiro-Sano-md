/** 
Manjiro-Sano-md
©Cod3Uchiha
 **/







const { france } = require('../framework/france');
const {addOrUpdateDataInAlive , getDataFromAlive} = require('../bdd/alive')
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");

france(
    {
        nomCom : 'alive',
        categorie : 'General'
        
    },async (dest,zk,commandeOptions) => {

 const {ms , arg, repondre,superUser} = commandeOptions;

 const data = await getDataFromAlive();

 if (!arg || !arg[0] || arg.join('') === '') {

    if(data) {
       
        const {message , lien} = data;


        var mode = "public";
        if ((s.MODE).toLocaleLowerCase() != "yes") {
            mode = "private";
        }
      
    
     
    moment.tz.setDefault('Africa/Harare');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

    const alivemsg = `
*⚔️ OWNER* : ${s.OWNER_NAME}
*⚔️ MODE* : ${mode}
*⚔️ DATE* : ${date}
*⚔️ TIME* : ${temps}

 ${message}
 
 
 *⚔️ Manjiro Sano md IS ALIVE NOW ⚔️*`

 if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Checking for .jpeg or .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption: alivemsg }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(alivemsg);
    
}

    } else {
        if(!superUser) { repondre("Hello, I'm Manjiro-Sano-md, created by Cod3Uchiha") ; return};

      await   repondre("Agar apko bot me alive msg set karna hai to ese likho: .alive message;photo link");
         repondre("*⚔️ HI I'm Manjiro sano 📀*")
     }
 } else {

    if(!superUser) { repondre ("Ap alive msg edit nahi kar sakte") ; return};

  
    const texte = arg.join(' ').split(';')[0];
    const tlien = arg.join(' ').split(';')[1]; 


    
await addOrUpdateDataInAlive(texte , tlien)

repondre('New alive msg set ho gaya hai')

}
    });
