import fetch from 'node-fetch';

let handler = m => m;

handler.all = async function (m) {
  try {
    // The list of commands
    const ommention = '@916380260672'
    const commands = [`${ommention}`];
    
    // Convert the message to lowercase to make it case-insensitive
    const messageText = m.text.toLowerCase();

    // Check if the message contains any of the commands
    const matchedCommand = commands.find(cmd => messageText.includes(cmd.toLowerCase()));

    if (matchedCommand) {
      let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
      let tv = `./Assets/mp3/${pickRandom(["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11"])}.mp3`;
      let doc = {
        audio: {
          url: tv,
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100],
        fileName: 'ToxicAlexa',
        contextInfo: {
          externalAdReply: {
            title: 'TurboMods',
            body: 'The Greatest Developer 🗿💫',
            thumbnail: await (await fetch(ownerimg2.getRandom())).buffer(),
            sourceUrl: null,
            mediaUrl: alexamedia.getRandom(),
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: false,
          },
        },
      };

      await conn.sendMessage(m.chat, doc, { quoted: m });
    }
  } catch (error) {
    console.error('Error handling message:', error);
  }
};

export default handler;

// Helper function to pick a random item from an array
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
