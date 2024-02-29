const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94756332544"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'asia/colombo'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94756332544' 
global.devs = '94756332544';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RVWVRTb1BqTnhRVXZKNHhsNTVmN1ZmdVFwSlRVSzAwS1FsT29vRXprST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlZ0U201TkpKNXIvZVZwWWg0MHlsVEI5SzhvbVlxSUI2cmZRbXY2Vk9Fcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQnRhNlBqS2xWNWJZakJlRXdERThXS1lHeE1jY3VJaHdRSEl0dHRNTWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQlgvWG1KUWdHRGIyMVVqSUpmTWpaSUF3dDhMbHhIS0xoMUZHb3hwemlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPc2Z6UjkwYWlvQ2NiNy9SZ1R4enpwQmdmbElXaWZyNENJalR4dDVUV2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBjZFpVeW1YT0dwdkJjODFjeHUwQzArbzIyZ1FrNlJWdHFIbmJaWklEMVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdhYTY2b3VWeGVrZWVTU3lHNDU1QVVXeDhFQkt4SHRTdHNQcUZKNTMxRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVTbk02NW9RcktDNk16MVMzaWZHZjA5bE1oQlFuSjdKZFkwNE12RG1Vdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAzSFVjNndsVVJpVWxHT1IwcS82b1RlSFkwekJzYXlRSitUOHNDL0xZOG9aSTZCcHhtRU1tY0RTQzl6RXJRNVJncUcvWWNHQk9wYWlWaXJ3NFNEb0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTMsImFkdlNlY3JldEtleSI6IkhhK0VaNHkzdEZQSHV6cjZvcVZHS0pnZXBWbXYrTUlBQTVZMm4vYVJBK1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTYzMzI1NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTlEREY1NkUxMzM2RkY3NkQwQTFDM0NGRkI2MUVENzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwOTE5Nzc5M30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTYzMzI1NDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDA5RjA0RjlDOTlGRkVBQzBFMEFDNENBNUI1QkVEQUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwOTE5Nzc5M31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidDdGVGtIMjRReld3MWxwRTYtUkYxUSIsInBob25lSWQiOiIwNDE3YWIzMi1hMTAzLTQ0MzItOTQ0Zi1lZDMwZDcwZDJiZDgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZm5IckJPZW12emZHM1RDNmt4LytBdlNFQ1FNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdWU0lCdWJqMS95WWE1OHJiOG43eTJkcTdSWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIzOFZBUlRUTiIsIm1lIjp7ImlkIjoiOTQ3NTYzMzI1NDQ6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiRmFudGFjeSBCb3QifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2am10WUJFTjJUZ2E4R0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ii9pYkxmMWdZdlNNbUlZUDZtdytpb0tXdlY0Z1RXTjdXcEgxSHhyNmt1V0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjN4TzlseFVWYW1SYjRKa0dhcXI0Ry9EenFvSE9lakZJZ3pBNzNnRytlRXF3WGRLck41WS9qTzJsODJZbDBkejIxYUFwbVQvNDQ5aTEvNk9kUklhZ0JBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOM3NlT2k5VGVJNmx4MlJEa281NCtHeldJN0V2dDl1eUxpY0l2Znd5dUFDSHB3L2FFVHd6YnQ0cU14eXptUFdvdVJ4V3ozQXROZ2phRUdWckdRY0tDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU2MzMyNTQ0OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmY0bXkzOVlHTDBqSmlHRCtwc1BvcUNscjFlSUUxamUxcVI5UjhhK3BMbGkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDkxOTc3OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHBFIn0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DILA',
  packname:  process.env.PACK_NAME || 'DILSHAN',
   
  botname:   process.env.BOT_NAME === undefined ? "DILA-4Q" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DILSHAN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
