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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255628119641";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255628119641";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_53_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIsXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NixcbiAgICAgICAgOTksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMjYsXG4gICAgICAgIDMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICA0NixcbiAgICAgICAgNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzLFxuICAgICAgICA3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMzLFxuICAgICAgICA3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTczLFxuICBcImFkdlNlY3JldEtleVwiOiBcImlyOGdwWnAvNjIxYUFDS2wrL1RLclVXeHgrUDNWSWMyMDQ1eVhScmh5MU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlDbGFOTTZTUnRTanQtVGlrVG1sM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTZiYTljYmUtYjE2My00NjE3LTg0YTQtNmQ3MTc4YTNlNGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDExNSxcbiAgICAgIDE1NyxcbiAgICAgIDE0NSxcbiAgICAgIDI0OCxcbiAgICAgIDQ3LFxuICAgICAgMjAzLFxuICAgICAgMjI0LFxuICAgICAgMTY5LFxuICAgICAgMTAsXG4gICAgICAyMTYsXG4gICAgICA0MSxcbiAgICAgIDE4MCxcbiAgICAgIDg2LFxuICAgICAgMTMzLFxuICAgICAgNDIsXG4gICAgICAyMzMsXG4gICAgICA1OCxcbiAgICAgIDg2LFxuICAgICAgMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDQsXG4gICAgICAxODcsXG4gICAgICAzNSxcbiAgICAgIDE0MCxcbiAgICAgIDE5MCxcbiAgICAgIDQ5LFxuICAgICAgMjQxLFxuICAgICAgOTksXG4gICAgICAyNDEsXG4gICAgICAxOTgsXG4gICAgICA3OSxcbiAgICAgIDEyNCxcbiAgICAgIDM2LFxuICAgICAgMjM1LFxuICAgICAgMjIsXG4gICAgICAxNyxcbiAgICAgIDE4OSxcbiAgICAgIDE3NixcbiAgICAgIDI1MixcbiAgICAgIDIxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXR0w3WEo1V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjI4MTE5NjQxOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNTU3NjE5NTUxNDQyOTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05TYXZzUUJFSXZndDdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN0ljZ3VWMTcxeUZLWWNYOHJwZ3dVQWVZM1hLMlM2c0ZNYlVNQ0ZORCtHQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvaDFncHQ0UUQwMkNLUHRYaW1YUUl4YVVaR0RHM3p1NFZjS3VEOS9DaE9TUjFyajM1VzdQMVNnMXc3NTVKVDFJelZrcVB5YUU5NWNoSTArTlFqNmVCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIN20reDY0NVV3WHIwMGlkZUlPcmNjd1FXS1JIaHFNM0Z1WnhZbytRT3pITVJaeEVWVy93Z2ZxYW1ielc3SWxwajJTcUxyVDFEb1NicU1ZcEVDaktDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2MjgxMTk2NDE6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjc1MjE2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID  

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
