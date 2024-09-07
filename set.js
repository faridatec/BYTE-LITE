 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = {SESSION_ID |Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFYdGM2ejhhQWNIajZYN3pnL1I0R2FGQzdDc2JjaUtVd010QXRVRXBsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic00za1Azb1hlSHJZWHBnVmlOUktNanJQa3ZEZE9rejVvK2tNSHNKOW9WRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSXAyd1hGa3Y2dmM3RkdNbjA1NU5DcWdza1d3NlM5OFRPeXNBUlQ3bm40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIL3VBZnlOVm1YTUd1aHk2NmE4ZmZRWFJsMzR5SUlaVnA1czZIcSszUVZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLTW9YQXMvRE11YXZFdnRqMmRUOEkxa0NtRHpHbVhtc2Evc3o0cHh5a2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFGOFZoYzl0Y2krRGhjMDJvdG9uZGROTDkzd0w2dnZYaFY1NUVwdDZEaUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0k4Z04yb2Jza2tJaW45czlnVEJaUGtNUyt2MzZyU2FVYmd0ZG9jaTJVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xJSnNBM29MRG1GdTdENGZwM1oxelZBMWNyK2swZnprSkdiczhLc2hVTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxQekZMK1paQ2tGam1nZERWWVJ5Q2xpNW8wMGZ4UEJTY09VUTg3UkNrRktyNmlMVmoza3ozSVhNOTJTYXovdElvRnNWQmNDcjV5eHJiUDQ0T3BDdEJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk1LCJhZHZTZWNyZXRLZXkiOiJBTlVkV01Td21mT3RxUkNqMkRZUG9vL0JtN3UwWWpXNWNBYnZ6UEhzenM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpRTJ5bjk0eFJ6aWpJNWV0WGNBbjJRIiwicGhvbmVJZCI6ImJjMzMwMzM2LWE1NjItNDUzNC05OWE1LTA0ZDdkM2VhMmZiMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxU1lYcDlkVG1UdDhTL1NPeWRWSHkxajhZVzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3g3ZmhlTk5HSHkvWmVYQWJOWHZiK2R3WVdFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNNQkFOVEgxIiwibWUiOnsiaWQiOiIyMzMyMDE3OTcyOTU6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi76O/KuKAjklDRSBNT05FWSrvo78ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09ENit1MEVFTG53OGJZR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ijh4NkFpLyt6MWQ4cnpaeFIyL2NvSUx1TGVTazFScVJZRFdGaGdoQ2RhMHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhwMlYwZmZaRks1QUUwcjlabHlNWnFXVXNkVlVXMkZhTG5ibTJKU3V3SEpxNmo5Wkw2UW5qNGpOV2NNazAxdlRVaitXNS9ybUpBVGhFeE95VlVld0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWS0pxMnBqQ0sraEl3cWdzQ0t4eWRZME1GeXdtNHcrcnRWeUppSlEwT2V0RmRrRUhiOTg2N21tcVBna0pUeHo5OWg2Y21aRFBqWmNFZEJENUFYeVpBZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzIwMTc5NzI5NTo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTWVnSXYvczlYZks4MmNVZHYzS0NDN2kza3BOVWFrV0ExaFlZSVFuV3RMIn19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1NzI0NzQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUk5VCJ9| 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
