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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_22_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNixcbiAgICAgICAgODUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MixcbiAgICAgICAgODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICA1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxODksXG4gICAgICAgIDExLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU5LFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyMixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTg0LFxuICAgICAgICA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICA1LFxuICAgICAgICA4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA1OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSk9SU1lSRkdDYjYxN2c4MkFWcGNvU041UDV6M1kzd2ZxeHBmVzg5UGtzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODU3MDI4NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDNTM4NkE5N0E0MDg5M0Q4MEZEOEZEODk5MEI3QUI4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQxMDU3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODU3MDI4NzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkUyQTNDODhEOUM0RkI1Q0E5Q0U5RkE0MTlENzVDM0NDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQxMDU3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjUEY1MktUTFRwbThEWDBMcDliNzl3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjhlYmI5YzgyLTQzMDktNDc0Ni1hZjVlLThmOGJlNzJjYzZmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MyxcbiAgICAgIDI0LFxuICAgICAgNjIsXG4gICAgICA2LFxuICAgICAgMjIyLFxuICAgICAgMTYyLFxuICAgICAgNTQsXG4gICAgICAxNixcbiAgICAgIDE0MSxcbiAgICAgIDEzMSxcbiAgICAgIDE0NCxcbiAgICAgIDIxNCxcbiAgICAgIDE3NCxcbiAgICAgIDQ0LFxuICAgICAgMTY3LFxuICAgICAgOTQsXG4gICAgICA1NCxcbiAgICAgIDE1OCxcbiAgICAgIDIzOSxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDksXG4gICAgICA1LFxuICAgICAgMTM1LFxuICAgICAgMjQsXG4gICAgICAyMDYsXG4gICAgICAxMzMsXG4gICAgICAyMDQsXG4gICAgICAyMTUsXG4gICAgICA4NSxcbiAgICAgIDIxNSxcbiAgICAgIDE4LFxuICAgICAgMjAxLFxuICAgICAgODIsXG4gICAgICA5OSxcbiAgICAgIDI5LFxuICAgICAgMjQ5LFxuICAgICAgMTQ5LFxuICAgICAgMTk1LFxuICAgICAgMTQ3LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk0yRjRGNlJQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDg1NzAyODcyOjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIzMzU3Nzk1NDQzMTE0Mjo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIs+A4oKswqkjIHbCrjBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJenpyN01CRU1qTXA3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjlHck9tNGRBK0YranRJVTZzdW4rZkxTYXdSeXRIemJEWlY1bjQ2ZThURzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZjExZHYrK1FXdzh3ZWNsT0tpclVTQy9kbjVDK25xeW1PK1V2N2g2aVhvVGNPNEZkL0g0UVRST29qV1RxU0NodndZb29VdlhsRklIRzdXQnB3WmFNQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibnpZejdoZkJWMHVKYU9MQmV0TG5jVFAvR29NV2pNSDVncWVmeXJIMnJvVTJPWFkrWHUvVVBYVTZ6b1p1NmI0ZGU4RG1pYUtUcnV1eVdTQ3IxRU42aFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4NTcwMjg3Mjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQxMDU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU5xZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTnFkLmpzb24iOiAie1wia2V5RGF0YVwiOlwibmdTWlVEVUJGd3R3akJXelR3UWpESTBrK2FTZHFIM29sbytGMHBJaU1vVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozNzYxNzQ5ODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQxMDU3MzQxNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
