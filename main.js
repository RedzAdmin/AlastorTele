//base by CODEBREAKER (DARK EMPIRE TECH.)
//re-upload? recode? copy code? give credit ya :)
//YouTube: @unveiledhacking
//Telegram: @darkempdev
//GitHub: a@RedzAdmin
//WhatsApp: +2347030626048
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@unveiledhacking
//telegram channel: https://t.me/codexemp

require("./settings")
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    simple
} = require("./lib/myfunc")
const fs = require('fs') 
const os = require('os')
const speed = require('performance-now')
const axios = require('axios')
const chalk = require("chalk")
const o = fs.readFileSync(`./69/o.jpg`)
const { exec } = require('child_process');
const cooldowns = new Map(); // Create a map to track cooldowns
const adminfile = 'lib/premium.json';
// Read the adminfile and parse it as JSON
const adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));

if (BOT_TOKEN == 'YOUR_TELEGRAM_BOT_TOKEN') {
    return console.log("No token detected")
}

// File to store all user IDs
const usersFile = 'users.json';
// Ensure the users file exists
if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([]));
}
async function saveUser(userId) {
    // Load existing users
    let users = [];
    if (fs.existsSync(usersFile)) {
        try {
            const data = fs.readFileSync(usersFile, 'utf8');
            users = JSON.parse(data);
        } catch (error) {
            console.error('Error reading users file:', error);
            users = [];
        }
    }

    // Check if the user already exists
    if (!users.includes(userId)) {
        users.push(userId); // Add the new user ID

        // Save the updated list of users
        try {
            fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
            console.log(`User ID ${userId} added to the users list.`);
        } catch (error) {
            console.error('Error writing to users file:', error);
        }
    }
}

let allUsers = JSON.parse(fs.readFileSync(usersFile));
const premium_file = 'lib/premium.json';
const reseller_file = 'lib/reseller.json';
try {
    premiumUsers = JSON.parse(fs.readFileSync(premium_file));
} catch (error) {
    console.error('Error reading premiumUsers file:', error);
}
try {
    resellerUsers = JSON.parse(fs.readFileSync(reseller_file));
} catch (error) {
    console.error('Error reading resellerUsers file:', error);
}

const resellerIDs = JSON.parse(fs.readFileSync(reseller_file, 'utf8'));

const bot = new Telegraf(BOT_TOKEN)

async function checkMembership(userId) {
    try {
        const isInGroup = await bot.telegram.getChatMember(GROUP_ID, userId);
        const isInChannel = await bot.telegram.getChatMember(CHANNEL_ID, userId);
        return isInGroup.status !== 'left' && isInChannel.status !== 'left';
    } catch (err) {
        console.error("checkMembership error:", err);
        return false; // Assume user is not a member on failure
    }
}

async function verifyUser(ctx, next) {
    const userId = ctx.from.id;
    const isMember = await checkMembership(userId);

    if (!isMember) {
        return ctx.replyWithPhoto(global.pp, {
            caption: "❌ *Access Denied!*\n\nYou must join, subscribe and follow all the *given links* to use this bot.",
            parse_mode: "Markdown",
            reply_markup: {
                inline_keyboard: [
                    [{ text: "📲 WhatsApp", url: WHATSAPP_LINK }],
                    [{ text: "▶️ YouTube", url: YOUTUBE_LINK }],
                    [{ text: "📷 Instagram", url: INSTAGRAM_LINK }],
                    [{ text: "🔹 Telegram Group", url: GROUP_LINK }],
                    [{ text: "🔵 Telegram Channel", url: CHANNEL_INVITE_LINK }],
                    [{ text: "🔄 Check Again", callback_data: "check_membership" }]
                ]
            }
        });
    } else {
        return next();
    }
}

async function startXeony() {
    bot.on('callback_query', async (XeonBotInc) => {
        // ... keep your existing callback query code ...
    });

    const ownerId = global.DEVELOPER[0];

    bot.command("start", verifyUser, async (XeonBotInc) => {
        // ... keep your existing start command code ...
    });

    // ... keep all your other bot commands ...

    bot.launch({
        dropPendingUpdates: true
    })

    bot.telegram.getMe().then((getme) => {
        console.table({
            "Bot Name": getme.first_name,
            "Username": "@" + getme.username,
            "ID": getme.id,
            "Link": `https://t.me/${getme.username}`,
            "Author": "https://t.me/darkempdev"
        })
    })
    process.once('SIGINT', () => bot.stop('SIGINT'))
    process.once('SIGTERM', () => bot.stop('SIGTERM'))
}

// WhatsApp Connection Logic
const {
    default: makeWASocket,
    DisconnectReason,
    makeInMemoryStore,
    jidDecode,
    Browsers,
    proto,
    getContentType,
    useMultiFileAuthState,
    fetchLatestBaileysVersion,
    downloadContentFromMessage
} = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const readline = require("readline");
const _ = require('lodash')
const FileType = require('file-type')
const path = require('path')
const PhoneNumber = require('awesome-phonenumber')
const { writeExif, imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif');
const { getBuffer, sleep } = require('./lib2/myfunc')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

// ADD THIS FUNCTION - IT'S MISSING!
function jidNormalizedUser(jid) {
    if (!jid) return jid;
    const decoded = jidDecode(jid) || {};
    return decoded.user && decoded.server ? `${decoded.user}@${decoded.server}` : jid;
}

async function XeonBotIncStart() {
    const { version } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState("session")
    
    const XeonBotInc = makeWASocket({
        logger: pino({ level: "fatal" }), // Reduced logging
        auth: state,
        version,
        browser: ["Ubuntu", "Chrome", "110.0.0"], // FIXED BROWSER
        printQRInTerminal: false,
        getMessage: async key => {
            const jid = jidNormalizedUser(key.remoteJid);
            const msg = await store.loadMessage(jid, key.id);
            return msg?.message || '';
        }
    });

    store.bind(XeonBotInc.ev);

    if (!XeonBotInc.authState.creds.registered) {
        console.log(chalk.yellow('📱 WhatsApp Pairing Required'));
        console.log(chalk.yellow('─────────────────────────────'));
        
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        const question = (text) => new Promise((resolve) => rl.question(text, resolve));
        
        try {
            const phoneNumber = await question('Enter your WhatsApp number (with country code, no +): ');
            console.log(chalk.blue('🔄 Requesting pairing code...'));
            
            let code = await XeonBotInc.requestPairingCode(phoneNumber);
            code = code?.match(/.{1,4}/g)?.join("-") || code;
            
            console.log(chalk.green('══════════════════════════════════════════════'));
            console.log(chalk.green.bold('✅ PAIRING CODE: ') + chalk.white.bgGreen(` ${code} `));
            console.log(chalk.green('══════════════════════════════════════════════'));
            console.log('');
            console.log(chalk.yellow('📲 INSTRUCTIONS:'));
            console.log(chalk.yellow('1. Open WhatsApp on your phone'));
            console.log(chalk.yellow('2. Go to Settings → Linked Devices'));
            console.log(chalk.yellow('3. Tap "Link a Device"'));
            console.log(chalk.yellow(`4. Enter this code: ${code}`));
            console.log(chalk.yellow('5. Wait for connection...'));
            console.log('');
            console.log(chalk.cyan('⏳ Waiting for connection (60 seconds)...'));
            
            // Wait for connection with better handling
            let connected = false;
            const connectionPromise = new Promise((resolve, reject) => {
                const timeout = setTimeout(() => {
                    if (!connected) {
                        reject(new Error('Timeout: No connection after 60 seconds.'));
                    }
                }, 60000);
                
                XeonBotInc.ev.on('connection.update', (update) => {
                    const { connection, lastDisconnect } = update;
                    
                    if (connection === 'open') {
                        connected = true;
                        clearTimeout(timeout);
                        console.log(chalk.green('🎉 WhatsApp connected successfully!'));
                        resolve();
                    } else if (connection === 'close') {
                        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
                        console.log(chalk.red(`❌ Connection closed. Reason: ${reason || 'Unknown'}`));
                        if (!connected) {
                            clearTimeout(timeout);
                            reject(new Error(`Connection closed: ${reason}`));
                        }
                    }
                });
            });
            
            await connectionPromise;
            rl.close();
            
        } catch (error) {
            console.log(chalk.red('❌ Error:'), error.message);
            console.log(chalk.yellow('💡 TIPS:'));
            console.log(chalk.yellow('1. Make sure your number is correct'));
            console.log(chalk.yellow('2. Try again in 5 minutes'));
            console.log(chalk.yellow('3. Ensure WhatsApp is updated'));
            process.exit(1);
        }
    }

    // Connection event handler
    XeonBotInc.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update;
        
        if (connection === 'close') {
            const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
            console.log(chalk.red(`Connection closed. Reason: ${reason}`));
            
            if (reason === DisconnectReason.badSession) {
                console.log(chalk.yellow('Deleting bad session...'));
                fs.rmSync('./session', { recursive: true, force: true });
                XeonBotIncStart();
            } else if (reason === DisconnectReason.connectionClosed || 
                       reason === DisconnectReason.connectionLost || 
                       reason === DisconnectReason.timedOut) {
                console.log(chalk.yellow('Reconnecting...'));
                XeonBotIncStart();
            } else if (reason === DisconnectReason.loggedOut) {
                console.log(chalk.red('Logged out. Please restart bot.'));
                fs.rmSync('./session', { recursive: true, force: true });
            }
        } else if (connection === 'open') {
            console.log(chalk.green.bold(`✅ Connected to WhatsApp: ${XeonBotInc.user.id.split(":")[0]}`));
        }
    });

    XeonBotInc.ev.on('creds.update', saveCreds);

    // Message handling
    XeonBotInc.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0];
            if (!mek.message) return;
            
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') 
                ? mek.message.ephemeralMessage.message 
                : mek.message;
            
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return;
            
            const m = smsg(XeonBotInc, mek, store);
            require("./XeonBug18.js")(XeonBotInc, m, chatUpdate, store);
        } catch (err) {
            console.log('Message error:', err);
        }
    });

    return XeonBotInc;
}

// Helper functions
function smsg(XeonBotInc, m, store) {
    // ... keep your existing smsg function ...
    return m;
}

// Main execution
(async () => {
    try {
        console.log(chalk.blue.bold("🔌 Connecting to WhatsApp..."));
        await XeonBotIncStart();
        console.log(chalk.blue.bold("🤖 Starting Telegram bot..."));
        await startXeony();
    } catch (error) {
        console.error(chalk.red("❌ Error:"), error.message);
        process.exit(1);
    }
})();