//base by DGXeon (Xeon Bot Inc.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: @DGXeon
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//telegram channel: https://t.me/+WEsVdEN2B9w4ZjA9

const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8581184596:AAHw1YDsMMp7ecz3HGfPWUyIrbsxj4Bs0lo" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "Alastor BUG Bot" //your bot name
global.OWNER_NAME = "@darkempdev" //your name with sign @
global.OWNER = ["https://t.me/darkempdev"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7711882574"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://i.ibb.co/n83JDdv2/thumb.jpg' //your bot pp


//approval
global.GROUP_ID = -1003457478963; // Replace with your group ID
global.CHANNEL_ID = -1003377528622; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/darkempirechatroom"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/codexemp"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://chat.whatsapp.com/EgWYHIPowuS1wv54JII6Ff?mode=hqrc"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@unveiledhacking"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/mbanemew9"; // Replace with your ig link

global.owner = global.owner = ['2347030626048'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})