//base by CODEBREAKER (DARK EMPIRE TECH.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @unveiledhacking
//Telegram: @darkempdev
//GitHub: a@RedzAdmin
//WhatsApp: +2347030626048
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@unveiledhacking
//telegram channel: https://t.me/codexemp

function escapeMarkdownV2(text) {
    return text.replace(/([_*[\]()~`>#+\-=|{}.!\\])/g, '\\$1'); 
}

exports.noToken = "The bot token cannot be empty, please create a bot via https://t.me/BotFather";

exports.first_chat = (botname, pushname) => {
    return escapeMarkdownV2(`Hi ${pushname}, I am Alastor Bug Bot, a bot that can destroy WhatsApp users.
Click /menu to learn more about how to use this bot.`);
};