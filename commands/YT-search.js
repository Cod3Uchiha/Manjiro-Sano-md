const { france } = require("../framework/france");
const { getytlink, ytdwn } = require("../framework/ytdl-core");
const yts = require("yt-search");
const ytdl = require('ytdl-core');
const fs = require('fs');

france({ commandName: "yts", category: "Search", reaction: "🔰" }, async (destination, client, commandOptions) => {
  const { message, reply, args } = commandOptions;
  const query = args.join(" ");

  if (!query[0]) {
    reply("Which videos from YouTube do you want to search for?");
    return;
  }

  try {
    const info = await yts(query);
    const result = info.videos;

    let captions = "";
    for (let i = 0; i < 10; i++) {
      captions += `----------------\nTitle: ${result[i].title}\nTime : ${result[i].timestamp}\nUrl: ${result[i].url}\n`;
    }
    captions += "\n======\n_MADE BY Manjiro-Sano-md_";

    client.sendMessage(destination, { image: { url: result[0].thumbnail }, caption: captions }, { quoted: message });
  } catch (error) {
    reply("Error during the process: " + error);
  }
});

france({
  commandName: "ytmp4",
  category: "Download",
  reaction: "🔰"
}, async (originalMessage, client, commandOptions) => {
  const { args, message, reply } = commandOptions;

  if (!args[0]) {
    reply("Give me the link of the YouTube video");
    return;
  }

  const query = args.join(" ");
  try {
    const videoInfo = await ytdl.getInfo(query);
    const format = ytdl.chooseFormat(videoInfo.formats, { quality: '18' });
    const videoStream = ytdl.downloadFromInfo(videoInfo, { format });

    const filename = 'video.mp4';
    const fileStream = fs.createWriteStream(filename);
    videoStream.pipe(fileStream);

    fileStream.on('finish', () => {
      client.sendMessage(originalMessage, { video: { url: `./${filename}` }, caption: "_MADE BY GOLD-MD_", gifPlayback: false }, { quoted: message });
    });

    fileStream.on('error', (error) => {
      console.error('Error writing video file:', error);
      reply('An error occurred while writing the video file.');
    });

  } catch (error) {
    console.error('Error during video search or download:', error);
    reply('An error occurred during the video search or download.' + error);
  }
});

france({
  commandName: "ytmp3",
  category: "Download",
  reaction: "🔰"
}, async (originalMessage, client, commandOptions) => {
  const { message, reply, args } = commandOptions;

  if (!args[0]) {
    reply("Give me the link of the YouTube video");
    return;
  }

  try {
    let query = args.join(" ");

    const audioStream = ytdl(query, { filter: 'audioonly', quality: 'highestaudio' });
    const filename = 'audio.mp3';
    const fileStream = fs.createWriteStream(filename);
    audioStream.pipe(fileStream);

    fileStream.on('finish', () => {
      client.sendMessage(originalMessage, { audio: { url: `./${filename}` }, mimetype: 'audio/mp4' }, { quoted: message, ptt: false });
      console.log("Audio file sent!");
    });

    fileStream.on('error', (error) => {
      console.error('Error writing audio file:', error);
      reply('An error occurred while writing the audio file.');
    });

  } catch (error) {
    console.error('Error during video search or download:', error);
    reply('An error occurred during the video search or download.');
  }
});
