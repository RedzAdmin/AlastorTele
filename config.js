//base by CODEBREAKER (DARK EMPIRE TECH.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @unveiledhacking
//Telegram: @darkempdev
//GitHub: a@RedzAdmin
//WhatsApp: +2347030626048
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@unveiledhacking
//telegram channel: https://t.me/codexemp

//contact details
global.ownernomer = "2347030626048"
global.dev = ["2347030626048", "22963718715"]
global.ownername = "CODEBREAKER ⚉"
global.ytname = "YT: UnveiledHacking"
global.socialm = "GitHub: RedzAdmin"
global.location = "Africa, Nigeria, Lagos"

global.ownernumber = '2347030626048'  //creator number
global.ownername = 'CODEBREAKER ⚉' //owner name
global.botname = 'ALASTOR BugBot' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'CODEBREAKER ⚉\n\nContact: +2347030626048'

//console view/theme
global.themeemoji = '🪀'
global.wm = "DARK EMPIRE TECH"

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb70IdY60eBmvtGRT00R'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @DGXeon\nTelegram: @darkempdev\nWhatsApp: +2347030626048`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @DGXeon\nTelegram: @darkempdev\nWhatsApp: +2347030626048`,
}

global.banner = ["2347030626048@s.whatsapp.net","22963718715@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})