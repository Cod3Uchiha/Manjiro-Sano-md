/** 
Manjiro-Sano-md
 **/








const { france } = require('../framework/france');

france({ nomCom: 'quote', categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('This Command works in groups only!!!');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`*Manjiro-Sano-md Quotes*

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

provided by *Cod3Uchiha*`);
        });
    } catch (e) {
      repondre('Error generating the quote : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`Manjiro-Sano-md

🎬 Anime: ${quote.anime}
👤 Character: ${quote.character}
💬 Quote: ${quote.quote}

Powered by *Manjiro-Sano-md*`);
        });
    } catch (e) {
      repondre('Error during the generation of the quote : ' + e.message);
    }
  }
});
