const fs = require('fs')

global.owner = "2348064071939" //owner number
global.footer = "Satoru MD" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['234']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/l83hhb.jpeg"
global.OWNER_NAME = "@saturotech" //
global.DEVELOPER = ["8128578478"] //
global.BOT_NAME = "Satoru MD"
global.bankowner = "SATURO"
global.creatorName = "Saturo Tech"
global.ownernumber = '2348064071939'  //creator number
global.location = "Nigeria, your village"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "Satoru MD" //footer section
global.link = "https://whatsapp.com/channel/0029VbBpPLa4yltGWSKWlC1L"
global.autobio = false//auto update bio
global.botName = "Satoru MD"
global.version = "v1"
global.botname = "Satoru MD"
global.author = "Saturo Tech"
global.themeemoji = '🚀'
global.wagc = 'https://whatsapp.com/channel/0029VbBpPLa4yltGWSKWlC1L'
global.thumbnail = 'https://files.catbox.moe/l83hhb.jpeg'
global.packname = "Satoru MD Stickers"
global.author = "Create by Saturo Tech\n\ntelegram : @saturotech"
global.creator = "2348064071939@s.whatsapp.net"
global.ownername = 'Saturo Tech' 
global.onlyowner = `𝚂𝙾𝚁𝚁𝚈 𝙰𝙲𝙲𝙴𝚂𝚂 𝙳𝙴𝙽𝙸𝙴𝙳`
  // reply 
global.database = `ᴡᴀɴɴᴀ ʙᴇ ɪɴ ᴅᴀᴛᴀʙᴀsᴇ? ᴄᴏɴᴛᴀᴄᴛ @saturotech`
  global.mess = {
wait: "_Wait 𝐒𝐚𝐭𝐨𝐫𝐮 𝐌𝐃_",
   success: "𝚂𝚄𝙲𝙲𝙴𝚂𝚂𝙵𝚄𝙻 𝙱𝚈 𝐒𝐚𝐭𝐨𝐫𝐮 𝐌𝐃",
   on: "𝐒𝐚𝐭𝐨𝐫𝐮 𝐌𝐃 ɪs ᴀᴄᴛɪᴠᴇ", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "𝐒𝐚𝐭𝐨𝐫𝐮 𝐌𝐃 ɪs ᴏғғ",
   query: {
       text: "Where's the text?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Bro, this feature's locked to groups only, can't use it elsewhere, ya hear?",
       private: "Private chats only, fam! This feature's locked to private chat, can't use it in public chats, bro.",
       owner: "Sorry bro, Trust's the only one with access to this feature.",
       admin: "Admins only, fam! You're not an admin, so you can't use this feature.",
       badmin: "Bro, bot ain't admin here, that's why you're locked out of this feature, gotta give bot admin rights first",
       premium: "This feature's a premium perk, and it's exclusive to Trust's favorite users, bro!",
   }
}

global.hituet = 0
//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti92 = false //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
