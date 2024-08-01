const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/71ce7bc2c1af81cbc7df7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DUDUU_MENDEZ²²¹-ᴍᴅ" 


global.devs = "255749750707" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255742560417";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255742560417";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_12_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxODgsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDk2LFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODUsXG4gICAgICAgIDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0MixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTYsXG4gICAgICAgIDExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTcwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICA5NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDksXG4gICAgICAgIDYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICA5NixcbiAgICAgICAgNzMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZGlITDRlaFF5SzByZWdEcnRVNlFSZ0M0ajBxZllTcUJwdXp4SzBvZmJaRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDI1NjA0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkZEODQyQjU4RDc2QjU5MzU2QkExRDlCRERCODc5MDA1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU1MzkxNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVN24wQThMMlNhLTNkekxDd0tOamNBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRjNjc3OTk2LTE2YzUtNDM0Ni04YzMwLTg3NTc1M2QzMzQxM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE2NSxcbiAgICAgIDg5LFxuICAgICAgMjUxLFxuICAgICAgMTU3LFxuICAgICAgMTgxLFxuICAgICAgNTIsXG4gICAgICAxMDAsXG4gICAgICAyNDgsXG4gICAgICAyMzAsXG4gICAgICAyMjQsXG4gICAgICAyOSxcbiAgICAgIDI1NSxcbiAgICAgIDIwNyxcbiAgICAgIDEyOCxcbiAgICAgIDUsXG4gICAgICA1NSxcbiAgICAgIDE5NixcbiAgICAgIDE5OCxcbiAgICAgIDE3MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDIyNixcbiAgICAgIDYyLFxuICAgICAgMTQxLFxuICAgICAgMTY1LFxuICAgICAgMjQyLFxuICAgICAgOTksXG4gICAgICAyNDUsXG4gICAgICAxMjAsXG4gICAgICA3MyxcbiAgICAgIDE2MyxcbiAgICAgIDExNSxcbiAgICAgIDQsXG4gICAgICAyNDAsXG4gICAgICAxNDQsXG4gICAgICAyMDcsXG4gICAgICAxNjEsXG4gICAgICAzNyxcbiAgICAgIDIxNixcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UlpQTVhaOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzQyNTYwNDE3OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjQyNTMyNDQ5MDc3MTg6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSW5VbEt3Q0VMU3NzTFVHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOOVF2OXRtREdwM0MyZkFBb1d1YjR2WDBUc0U3R0F4Mzg1b3BPYmFIOGtzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNiZk50dW9nOXFPYzlIdnJtQjdaWTgwbVFpMlhpNVZTNEt2WmFNcG02UFRqSXVUMk1LajJXWjJQRVFIZ2J1M3pCbWxqdU5DZWF4a2pkM3lOcmhNakJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhJUXBKZ1Q0NjdEQzdCR3dkSmpZR2V0VnEyZDk4c3o0eks3OTh1Z1dpQkJHeU9oOTZzYmJPck9xZDdSWCtPMmM5dFVSeUtMVklhZkhJUnRjNWNXM2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc0MjU2MDQxNzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjU1MzkxMixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg1OFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDU4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNW56YWptUjRlM25TT0NLV1RRejUraWYxSnRGbUdSSGJ2bEpTdnBtTm1WWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2Mjk0ODQwNDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID  

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ MENDEZ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • MENDEZ ᴛᴇᴄʜ』*\n youtube.com/@DUDUU_MENDEZ"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "FANTASTICS BOT",
  ownername:process.env.OWNER_NAME|| "Duduu_mendez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-RMkn7loW3l2EmY3JV1pNT3BlbkFJOM2MSmCXkKhLFKg95Bdg",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FANTASTICS"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
