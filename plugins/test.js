import fetch from 'node-fetch' 
import moment from 'moment-timezone'
 let handler = async(m, { conn, usedPrefix, args, command }) => { 
     let name = db.data.users[m.sender].name 
 let fload = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 9998282719181899999,
    status: 404,
    surface : 404,
    message: `Turbo`,
    orderTitle: `Turbo`,
    thumbnail:   await (await fetch(`https://i.imgur.com/bCa4ulz.jpeg`)).arrayBuffer(),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
 let judul = ''
  const sections = [ 
                 { 
                   "rows": [{ 
                     "title": `Owner`, 
                     "description": "Bot Owner", 
                     "rowId": `${usedPrefix}owner` 
                   }, { 
                     "title": "Owner", 
                     "description": "Owner", 
                     "rowId": `${usedPrefix}owner` 
                   }, { 
                     "title": `Owner`, 
                     "description": "Owner", 
                     "rowId": `${usedPrefix}owner` 
                   }], 
                   "title": "owner" 
                 }, { 
                   "rows": [{ 
                     "title": `owner`, 
                     "description": "owner", 
                     "rowId": `${usedPrefix}owner` 
                     }], 
                   "title": "────────「 owner 」" 
                 }, { 
                     "rows": [{ 
                       "title": `owner`, 
                       "description": "owner", 
                       "rowId": ".owner"
                   }], 
                     "title": "───────「 owner 」" 
                 } 
               ]
         const listMessage = {
      text: `*❏ owner*
owner`,
      footer: global.botname,
      mentions: await conn.parseMention(judul),
      title: judul.trim(),
      buttonText: "Click Here",
      sections
    }
    return conn.sendMessage(m.chat, listMessage, { quoted: fload, mentions: await conn.parseMention(judul), contextInfo: { externalAdReply :{ 
     showAdAttribution: true, 
      }} 
   })
    
    }
handler.command = /^(test1|test2|test3|test4)$/i

export default handler 

function ucapan() {
    let res = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = ('Hi')
  if (time >= 0) {
    res = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    res = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    res = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    res = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    res = ('Selamat Malam🌙')
  }
  return res
                  }
