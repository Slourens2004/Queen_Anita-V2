//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/3e0fc6acbe5f63fdbe839.mp4";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "50942165713";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "typing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0tNdWxnT2V1ZmswMmlEZ21NWEZtNmdkVHQzUUU4ZzhyTGp3U2NMVDEwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemVxeVhDeGZQSkJzczljb0NuWldwNmxRd0dtTGFkUWR3UDZSL2g2M3IzWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT3MzMmJIT0NOL29YZVMrVlFRN3c5d2lnQ0s0SG5iZyt4UXhHK2FjMUZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGSmRmY2NsaWg5N2dQSGczVTNoSS9nN0d2and6MFZyUWtLdWlBaEV2aVVrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1JWUMxTXh4LzVRRUZkWUFNTEFXMDllY25obzgyQWMzczNmaUVmbWZGMVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5lUk9pR0NXTHVZZHU1cm1wUDVjbTRScVVBSzluZlhsbVRQdVJuN2djQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0ZZQWFtWVA0ajljSzY5Y29DNVJYZ09Qb2JjUkdJdjhrSnVtV1k5b1ZGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjlDcFZMNkMvbUk0OTZyeHlPWU4yQTE0WDFIbjc5ZjhjUTNMWkJxSEVFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMVjRxV1VXSUF3TXFKY0gwUnp3TTBoN2xxeWNEM0JFMlNGZVBVZFBNcUdTTG9DcW16cWY5d2gvNFRSR2lObUM2TnpEaVdMek5Ta1lrUVJjL3BNNUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IjFCYVliRkE0Nm9SdVdUY1pGZXp1a1ZIcHRTUFdmM2RwSDlLNnVZUEtZNGc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxYQjBSTHp2VEVtYUx3WENwZG5BRXciLCJwaG9uZUlkIjoiM2YxYWM1MzktOWUzNy00NDcxLWJjMDktYzFiMTc5ZDk4NWJmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1VNFFCTUpGL3JNbXlQeWVrd3pXL001UHArcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLQk5Kc0FEMCtENTdpRzhHcUFyTC8yR2plbmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVlZQTVZQRjgiLCJtZSI6eyJpZCI6IjUwOTQyMTY1NzEzOjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkpPS0VSIFNBU0FLSSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2pUdXNnRkVMcmZ0YlVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQ2UzM0xGcjNOelBCSGptOGFzY2IyaG1jc3Q1dk9YSEkrWW14UCticmFWND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL2hEdDA2Y1VHMGRnenQ1aWlUcWhPbnF0dkJBZkZkcE5uS1gwN1ByLzhGZUQ0a2tveENBSzJ4RFJZd1ZPcUZOTTBVNXlYZXBxUnhueFplL0FrNDBxQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IndadktKcVpERmJBNytXdFZmNG1lMEpLa2hiS3pOeGdRMnBPN3V4SWppK0FxaVdZQ1VEbW1jZzFiUTArWTJxMUtnWnBnNEJvNWk3TmRlNUJZTWFmb0R3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5NDIxNjU3MTM6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUW50OXl4YTl6Y3p3UjQ1dkdySEc5b1puTExlYnpseHlQbUpzVC9tNjJsZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjY0MjM3Nn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐉𝚯𝐊𝚵𝚪",
  author: process.env.PACK_AUTHER || "𝐉𝚯𝐊𝚵𝚪",
  packname: process.env.PACK_NAME || "𝐉𝚯𝐊𝚵𝚪",
  botname: process.env.BOT_NAME || "𝐉𝚯𝐊𝚵𝚪",
  ownername: process.env.OWNER_NAME || "𝐉𝚯𝐊𝚵𝚪",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
