//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "jadewale71@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Jupiterbold05/Platinum-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/gvdQSvi.jpeg";
global.devs = "2348084644182";
global.sudo = process.env.SUDO || "2349071978357";
global.owner = process.env.OWNER_NUMBER || "2348084644182";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/gvdQSvi.jpeg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUUrMUQ3eWM2MXF5UlFKZFY2TjZZUDNZSUY1OG1MVWxabWI1RVpOaU9HVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaktPNXoxaTU3YlVDTEZRU05VMFhkcUJONE9GdHFPdlgwRTc0S0hpZDNqQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SFM4TTBUb3RueVd5UDY3ejdOaXhCZjNRc0k2cVZSZURJRVFnRk9ybTBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRU3piWTBlMFBNR0RMS1IycG84QWVIRTVCejJ6MjhPczI4SGtTbEJzVmhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllEYUZIQTVoWnc0dEdvTWJibGplTnZwUkt0YlpVL2xjMFBJeHZmdlhMMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijg0QlZIQXlpQ3MyL1luZ1luRWkreUwwaDc2bmp1QU5SaWhrNks1YmpDbDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JmSG1pajFIQUVIa2lKSWdadll3Q2duSlEwM01reFVtM2g1Skc0NmFVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibGZIY1c2T1VGUFZEbE9Rc3Y4b296cks5ZG1VUmxkZnJSdUlqU3ZJeStTWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndRT2tVVlRjOVBuT3NKaWxxSFpNQURQclZYeTNCb0piaE9Bdm9iemViQlZicHhXUTNSVkNrajlrZ3Z0STJRZjA3L2poL0QwcXlMa3k1WjJpajlhK0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU3LCJhZHZTZWNyZXRLZXkiOiJSOHZTbnA1Vk9uTFNuWFkyS2REUWg2RTRyMXVnaVZZNmlLVDRIL3BITFdnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzc0MzYxODQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjhGNzlFNzk3RjMxQTgwN0VBNjhGRDZDRjlCNDcwMzlGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2ODM1MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzc0MzYxODQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU0MUExQkYzOEY5QTI4MkFFMTU5MThFODhEQkYwOTRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2ODM1MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzc0MzYxODQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ4RTZBN0E3M0FCNzA0NThFNTIxN0UxQzFEREZGQ0Y5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2ODM1MTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3Nzc0MzYxODQ0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1N0YyOTRFOTdBMDkxQURFRDQzODgxRkFCRjI4RTg2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM2ODM1MTV9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkJIRE1QWHh0U2QyNFVSc0pMbW1ieXciLCJwaG9uZUlkIjoiZjhhYTM2NWEtMTc1Yi00OTYwLTkzMjktYTEzZmFjZTZlYWVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklNOHV0eFU5a3R5VEp3eTBTVkJHNEIwejYvRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkWVFKTTlDYTRZZ09GSHM5b09NblhNTVM5cWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTdUSDNMVDkiLCJtZSI6eyJpZCI6IjI3Nzc0MzYxODQ0OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUNm9OMERFS25TMTdvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IitUOHZzM3BwM2x0aUhCNklHODcyZGV3eFZEL2FqM3FRK3VuT3NHck9vRHc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFtb1pPV0ExVi9oSVlMOHVKanVtQTRRYkpOQi9ON2V6TUx3R05SMjFKUVZnNUZMc241bC9kcmdnRkIzaWhaK2duWk5wVS9IbTdJNzRXU2MyVGZXRkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVaUZvNEk4bUhQOG1wb3pLWFFhU2xhQWJ5NkRVYklWK0psbEVQOGszWHhQc2xYQVdjd2JIdDd3bmRMNkc3MjhRWVNPL2FDdDJXZzM4c3JaUGRnUkhCZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3Nzc0MzYxODQ0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZmsvTDdONmFkNWJZaHdlaUJ2TzluWHNNVlEvMm85NmtQcnB6ckJxenFBOCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzY4MzUxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFQ3oifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍™",
  author: process.env.PACK_AUTHER || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  packname: process.env.PACK_NAME || "ąҍօѵҽ ąӀӀ ☠️👑🌍",
  botname: process.env.BOT_NAME || "Ͳհҽ օղҽ ąҍօѵҽ ąӀӀ ☠️👑🌍",
  ownername: process.env.OWNER_NAME || "ᴀʙᴏᴠᴇ ᴀʟʟ ☠️👑🌍",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
