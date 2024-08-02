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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_59_08_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzksXG4gICAgICAgIDQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY4LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk4LFxuICAgICAgICA1MixcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDc5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDMwLFxuICAgICAgICA1OSxcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE2LFxuICAgICAgICA2NixcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3NixcbiAgICAgICAgMTA0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFBwem5EUDRvY29GTDRsMWpFUGlMcU5wV2kyRS9VTUlpZHlDQ0JKYXk0RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU3NDI1NjA0MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCMjY2RTZGODQ1M0I2NEFFRDZDRTNERUI0QTM5QTJBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjU4OTE2OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVSnFkVnRSc1N2eXdtOEI2Z2FJd3lBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBkNjJkMzQ1LTVjNGUtNGExZi1iYjBkLWYzMTEyNjg3ZDBlYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDksXG4gICAgICA0MCxcbiAgICAgIDE2NixcbiAgICAgIDIyMixcbiAgICAgIDM2LFxuICAgICAgMTI4LFxuICAgICAgMTkyLFxuICAgICAgNDUsXG4gICAgICAxMTksXG4gICAgICAxMzQsXG4gICAgICAyNDEsXG4gICAgICAyMTcsXG4gICAgICAxNzUsXG4gICAgICAxOTUsXG4gICAgICAxNTMsXG4gICAgICAzOSxcbiAgICAgIDEwMCxcbiAgICAgIDIxMCxcbiAgICAgIDc1LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxMTQsXG4gICAgICAyNTQsXG4gICAgICAyNDcsXG4gICAgICAxMzEsXG4gICAgICAxNDQsXG4gICAgICAxMjQsXG4gICAgICAyMDgsXG4gICAgICA1MixcbiAgICAgIDExMyxcbiAgICAgIDEyNSxcbiAgICAgIDkwLFxuICAgICAgMTg3LFxuICAgICAgMzcsXG4gICAgICAxNDYsXG4gICAgICA3MSxcbiAgICAgIDExOSxcbiAgICAgIDE3NixcbiAgICAgIDY4LFxuICAgICAgMTM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlI3WFlERTE0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3NDI1NjA0MTc6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyNDI1MzI0NDkwNzcxODoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJblVsS3dDRU9lL3NyVUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk45UXY5dG1ER3AzQzJmQUFvV3ViNHZYMFRzRTdHQXgzODVvcE9iYUg4a3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFhXREZUbDlRY3o3WktUU2p2VGc3Yko2NGZhZkdGMjlhNGoxVGNyQnJibjY4YVlTaVFKcmN4VU9EQUs5dXEyQ2IrekhsYlNjZXBhdFB5ZkhORUhZQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiamNDa1pYdWZXa1p0Y1pjMHgzeEtnMDNOWWkzYXJOREVySkZBLzVEbHJ5K3NuZklaUFJOWUNWTnpuWWVxRzl6eE5YQ0VRcEdXNHI2dVVsZHdpZHM0aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NzQyNTYwNDE3OjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTg5MTYyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSDU4XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFINTguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1bnpham1SNGUzblNPQ0tXVFF6NStpZjFKdEZtR1JIYnZsSlN2cG1ObVZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYyOTQ4NDA0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID  

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
