const { default: makeWAliuet, DisliuectReason, MessageType, makeInMemoryStore, useMultiFileAuthState, delay, sleep,  downloadContentFromMessage  } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');

//*****NODE MODOULES*****/
const fs = require('fs');

const P = require('pino');

const axios = require('axios');

const util = require('util')

const ffmpeg = require('fluent-ffmpeg')

const webpmux = require("node-webpmux")

const { exec, spawn, execSync } = require("child_process")

const mimetype = require("mime-types")

const { getExtension } = require('./lib/get.js')

const moment = require('moment-timezone');

const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")

const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

const { color, bgcolor } = require('./lib/color')

const figlet = require('figlet')

const cfonts = require('cfonts');

const { say } = cfonts 

require('./config.js')

//==(LIB)==\\
const {
    getAdmins,
    getMembers
   } = require('./lib/utils');
const { deflate } = require('zlib');
const { ensureLink } = require('fs-extra');


async function connectToWhatsApp () {
    const {state, saveCreds} = await useMultiFileAuthState('./db/conexão')
    const liu = makeWAliuet({
          // can provide additional config here
          printQRInTerminal: true,
          logger: P({level: 'silent'}),
      defaultQueryTimeoutMs: undefined,
      auth: state
        })

    liu.ev.on('connection.update', (update) => {
        const { connection, lastDisliuect } = update
        if(connection === 'close') {
            const shouldReliuect = (update.lastDisliuect.error.output.statusCode == DisliuectReason.liuectionClosed)
            console.log('CONEXÃO FECHADA', lastDisliuect.error, ', Tentando Reconectar ', shouldReliuect)
            // reliuect if not logged out
            if(shouldReliuect) {
                connectToWhatsApp()
            }
        } else if(connection === 'open') {
            console.log(`LIU BOT [ON]`)
        }
    })
    liu.ev.on ('creds.update', saveCreds);

    liu.ev.on('messages.upsert', async updateM => {
        if (updateM.type != 'notify') return;
        const mek = updateM.messages[0];
        if (!mek.key.participant) mek.key.participant = mek.key.remoteJid;
        mek.key.participant = mek.key.participant.replace(/:[0-9]+/gi, '');
        if (mek.key.fromMe) return;
        if (!mek.message) return;
        const from = mek.key.remoteJid;
        const info = mek.message;  
        const type = require('@whiskeysockets/baileys').getContentType(info);

const body = type == 'conversation' ? info[type] : type == 'imageMessage' ? info[type].caption : type == 'videoMessage' ? info[type].caption : type == 'extendedTextMessage' ? info[type].text : type == 'buttonsResponseMessage' ? info[type].selectedButtonId : type == 'listResponseMessage' ? info[type].singleSelectReply.selectedRowId : type == 'templateButtonReplyMessage' ? info[type].selectedId : '';
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const argsButton = selectedButton.trim().split(/ +/)
var budy = type === 'conversation' ? mek.message.conversation : type === 'extendedTextMessage' ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
function env(text) {
liu.sendMessage(from, {text: text}, {quoted: mek});
}

//****CONST NAO MEXA****/
const isGroup = mek.key.remoteJid.endsWith('g.us');
const groupMetadata = isGroup ? await liu.groupMetadata(from) : ''
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : []
const sender = mek.key.participant;
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const args = body.trim().split(/ +/).slice(1)
const argss = body.split(/ +/g)
const texto = args.join(" ")
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const quoted = mek.quoted ? mek.quoted : mek
const qtod = mek.quoted? "true":"false"
const content = JSON.stringify(mek.message)
const text = q = args.join(" ")
const { getBuffer, jsonformat, format, parseMention, getGroupAdmins,  getRandom, runtime, fetchJson, generateProfilePicture  } = require('./lib/myfunc')
const pushname = mek.pushName ? mek.pushName : ""
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? liu.sendMessage(from, {text: teks.trim(), mentions: memberr}) : liu.sendMessage(from, {text: teks.trim(), mentions: memberr})
}

const store = makeInMemoryStore({ logger: P().child({ level: 'silent', stream: 'store' }) })

//**************(isQuoted/consts)**************//
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

/********** FUCTION DINHEIRO **********/

const uang = JSON.parse(fs.readFileSync('./arquivos/banco/uang.json'))

const addATM = (sender, pushname) => {
const obj = {id: sender, nome: pushname, uang : 0}
uang.push(obj)
fs.writeFileSync('./arquivos/banco/uang.json', JSON.stringify(uang))
}
    
/********** FUCTION DINHEIRO **********/
const getNameDinheiro = (sender) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].nome
}
}
    
/********** FUCTION DINHEIRO **********/
const addKoinUser = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./arquivos/banco/uang.json', JSON.stringify(uang))
}
}
       
/********** FUCTION DINHEIRO **********/
const checkATMuser = (sender) => {  
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
return uang[position].uang
}
}
    
/********** FUCTION DINHEIRO **********/
const confirmATM = (sender, amount) => {
let position = false
Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
position = i
}
})
if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./arquivos/banco/uang.json', JSON.stringify(uang))
}
}
    

if (isGroup) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender, pushname)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
} catch (err) {
console.error(err)
}
}

const tictactoe = JSON.parse(fs.readFileSync('./arquivos/ttt/TTTconfig/tictcotacto.json'));

const { setGame, validmove } = require('./db/tictactoe');

/*--------------------[ Tictactoe jogo Function ]--------------------*/

const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum =  ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
    const boardnow = setGame(`${from}`);
if (budy == 'cex') return env('why');
if ( 
budy.toLowerCase() == 's' ||
budy.toLowerCase() == 'sim' ||
budy.toLowerCase() == 'ok'
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return env('O Jogo já foi iniciado antes.')
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(
`./arquivos/tictactoe/db/${from}.json`, JSON.stringify(boardnow, null, 2)
);
const jogoAccept = `JOGO DA VELHA
❌ : @${boardnow.X}
⭕ : @${boardnow.O}

Sua vez: @${boardnow.turn == 'X' ? boardnow.X : boardnow.O}
${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
liu.sendMessage(from, {text: jogoAccept,  
quoted: mek,
contextInfo: {
mentionedJid: [ 
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
})

} else {
liu.sendMessage(from,
{text: `『❗』 Esta e uma opção apenas para o @${boardnow.O} !`, 
  quoted: mek,
  contextInfo: {
  mentionedJid: [boardnow.O + "@s.whatsapp.net"],
}
}
)
}
} else if (
budy.toLowerCase() == 'n' ||
budy.toLowerCase() == 'não' ||
budy.toLowerCase() == 'nao'
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return env('O jogo já começou.')
fs.unlinkSync(`./arquivos/tictactoe/db/${from}.json`);
liu.sendMessage(from, `@${boardnow.X} *Infelizmente correu do desafio*`),
MessageType.text, {
quoted: mek, 
contextInfo: {
  mentionedJid: [boardnow.X + "@s.whatsapp.net"]
}
}
}
}
}

if (arrNum.includes(cmde)) {
    const boardnow = setGame(`${from}`);
    if (!boardnow.status) return env('O seu oponente não aceitou o desafio ainda!')
    if ( 
    (boardnow.turn == 'X' ? boardnow.X : boardnow.O) != 
    sender.replace("@s.whatsapp.net", "")
    )
    return;
    const moving = validmove(Number(budy), `${from}`);
    const  matrix = moving._matrix;
    if (moving.isWin) {
    if (moving.winner == 'SERI') {
    {text: `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\nJogo termina empatado`, `Antis de iniciar outra partida, Certifique-se quê o jogo anterior foi resetado!`}
    fs.unlinkSync(`./arquivos/tictactoe/db/${from}.json`);
    return;
    }
    const dinheirowin = Math.ceil(Math.random() * 5000)
    const winnerJID = moving.winner == "O" ? moving.O : moving.X 
    const looseJID = moving.winner == "O" ? moving.X : moving.O;
    const limWin = Math.floor(Math.random() * 20) + 10;
    const limLoose = Math.floor(Math.random() * 10) + 5
    {text: `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*\n\nVencido por @${winnerJID} 😎👑`, `Antis de iniciar outra partida, Certifique-se quê o jogo anterior foi resetado!`}
    setTimeout(() => {
    if (fs.existsSync(`./arquivos/tictactoe/db/`+ from + ".json")) {
    fs.unlinkSync(`./arquivos/tictactoe/db/` + from + ".json")
    env(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
    } else {
    console.log(color(hora, "red"), color("[ ESPIRADO ]", "magenta"), color('Jogo da velha espirado', "red"));
    }
    }, 5000)
    env(`_*🥳Parabéns @${winnerJID} Você ganhou +${dinheirowin} de dinheiro por ter ganhado o jogo da velha🎉...*_`)
    fs.unlinkSync(`./arquivos/tictactoe/db/${from}.json`);
    } else {
    const chatMove = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️* \n\n ❌ : @${moving.X}\n⭕ : @${moving.O}\nSua vez : @${moving.turn == "X" ? moving.X : moving.O}\n\n ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}\n\n`;
    liu.sendMessage(from, {text: chatMove, quoted: mek, contextInfo: {mentionedJid: [moving.X + "@s.whatsapp.net", moving.O + "@s.whatsapp.net"]}})}}
    

/*--------------------[ CONST DE ARQUIVOS ]--------------------*/

const { convertSticker } = require('./lib/swm.js')

const { menu } = require('./arquivos/menus/menu.js')

const antilink = JSON.parse(fs.readFileSync('./arquivos/antis/antilink.json'))

const antiimagem = JSON.parse(fs.readFileSync('./arquivos/antis/antiimagem.json'))

const { addTTTId, addTTTwin, addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./base de dados/ttt/tictactoe.js')

const {smsg, isUrl, tanggal, formatDate, getTime, clockString, downloadContentFromMessage } = require('./lib/myfunc.js')

const premium = JSON.parse(fs.readFileSync('./db/json/premium.json'))

const welcome = JSON.parse(fs.readFileSync('./arquivos/antis/welcome.json'))


const { getExtension, getFileBuffer } = require('./lib/get.js')

//===ler AS MENSAGENS====//
await liu.readMessages([mek.key])

/*--------------------[ CONST 2 ]--------------------*/

const speed = require('performance-now')

const Random = Math.random(10)

const colors = require("colors")

const owner = ["557499237652@s.whatsapp.net", `559392010191@s.whatsapp.net`]

const botNumber = liu.user.id.split(':')[0]+'@s.whatsapp.net'

/*--------------------[ SELOS ]--------------------*/

const selo = {key: {fromMe: false, participant: '0@s.whatsapp.net'}, message: { "extendedTextMessage": {"text": ` LIU BOT `,"title": null,'jpegThumbnail': null}}}

const mus = {key : {participant : '0@s.whatsapp.net'},message: {audioMessage: {}}}

/*--------------------[ CONST IS  ]--------------------*/

const botN= liu.user.id.replace(/:[0-9]+/gi, '');
const isOwner = owner.indexOf(sender) < 0;
const isAdmins = isGroup ? getAdmins(groupMembers) : '';
const isMemberAdmin = isGroup ? isAdmins.indexOf(sender) > -1 : false;
const isBotAdm = isGroup ? isAdmins.indexOf(botN) > -1 : false;
const isCmd = prefix.indexOf(body.slice(0, 1)) > - 1;
const groupAdmins = isGroup ? getAdmins(groupMembers) : ''

//==(CONST IS2)==//

const isAntiLink = isGroup ? antilink.includes(from) : false

const isAntiImagem = isGroup ? antiimagem.includes(from) : false

const isPremium = premium.includes(sender)

const isWelcome = isGroup ? welcome.includes(from) : false

/*--------------------[ ANTIFLOD ]--------------------*/

/*if (isCmd && !isGroup && isAntiflod && !isOwner && mek.key.fromMe) {
console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
}*/

//===[Console]===\\

  // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅❗ 
var olog = '\n' 
const consolecii = olog 
  if (!isGroup && !isCmd) console.log( 
`${consolecii}`,color(`❗ CHAT PV ❗`, 'white'),'\n',
`${consolecii}`,color('⪼ NOME:', 'white'),color(pushname,'green'), '\n',
`${consolecii}`,color('⪼ COMANDO:', 'white'),color(body, 'green'), '\n',
`${consolecii}`,color('⪼ HORA:', 'white'),color(hora, 'green'), '\n',
`${consolecii}`,color('⪼ DATA:', 'white'),color(data, 'green')
)
        // ❗𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙼 𝙶𝚁𝚄𝙿𝙾❗
    if (!isCmd && isGroup) console.log(
`${consolecii}`,color('❗ CHAT EM GRUPO ❗', 'white'), '\n',
`${consolecii}`,color('⪼ GRUPO:', 'white'),color(`${groupMetadata.subject}`, 'cyan'), '\n',
`${consolecii}`,color('⪼ COMANDO:', 'white'),color(pushname, 'cyan'), '\n',
`${consolecii}`,color('⪼ HORA:', 'white'),color(hora, 'cyan'), '\n',
`${consolecii}`,color('⪼ DATA:', 'white'),color(data, 'cyan'), '\n',
)

//****(LOCAL DAS IFS)****//

if (budy.includes('bot')) { 
bla = fs.readFileSync('./db/audio/haha.mp3')
liu.sendMessage(from, {audio: bla, mimetype: 'audio/mp4', ptt: true}, {quoted: mek})
}

/*if (budy.includes('liu')) { 
ble = fs.readFileSync('./db/fotos/bot.webp')
liu.sendMessage(from, {video: ble, gifPlayback: true}, {quoted: mek})
}*/

/*--------------------[ COMANDOS ]--------------------*/

switch (command) {

case 'menu': 
liu.sendMessage(from, {react: { text: '🥚', key: mek.key }})
await delay(700)
liu.sendMessage(from, {react: { text: '🐣', key: mek.key }})
await delay(700)
liu.sendMessage(from, {react: { text: '🐥', key: mek.key }})
await delay (700)
liu.sendMessage(from, 
{image: fs.readFileSync('./db/fotos/menu.png'), 
caption: menu(command, prefix, hora, data, pushname), 
gifPlayback: true},
{quoted: selo})
break

case 'menu2':
    let peg = `testanto menu`
liu.sendPoll(from, peg, ['menu', 'linkgp'])
break

//****(COMANDOS DE GRUPO) ****//

case 'resetlink':
    if (!isMemberAdmin) return env('[❗] Somente a Administração do Grupo')
    var code = liu.groupRevokeInvite(from)
env('Link Resetado')
break 

case 'linkgp':
case 'linkgrupo':
    if (!isMemberAdmin) return env('[❗] Somente a Administração do Grupo')
    if (!isGroup) return env('[👥] Apenas em Grupos.')
    if (!isBotAdm) return env('Bot sem adm')
    var response = await liu.groupInviteCode(from)
liu.sendMessage(from, {text: `https://chat.whatsapp.com/${response}\n\nLink do grupo: ${groupMetadata.subject}`}, {quoted: mek, detectLink: true })
break

case 'descgp': 
if (!isMemberAdmin) return env('[❗] Somente a Administração do Grupo')
if (!isGroup) return env('[👥] Apenas em Grupos.')
if (!isBotAdm) return env('bot sem adm')
if (!text) return env('Onde esta a descrição?')
liu.groupUpdateDescription(from, text)
env('Prontinho')
break 

case 'nomegp': 
if (!isMemberAdmin) return env("[❗] Somente a Administração do Grupo") 
if (!isGroup) return env("[👥] Apenas em Grupos.") 
if (!text) return env("Cadê o Nome do Grupo?") 
await liu.groupUpdateSubject(from, text)
env('*Nome do Grupo alterado com sucesso*')
break

case 'rebaixar': case 'demote': case 'dm': 
if (isOwner) return env('[❗] Somente a Administração do Grupo')
if (!isGroup) return env('[👥] Apenas em Grupos.')
if (!isMemberAdmin) return env('Você precisa ser adm')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return env('Marque ou responda a mensagem de quem você quer tirar de admin')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant
let responsepm = await liu.groupParticipantsUpdate(from, [mentioned], 'demote')
if (responsepm[0].status === "406") liu.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) da lista de admins.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "200") liu.sendMessage(from, {text: `@${mentioned.split("@")[0]} Não é mais um admin`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsepm[0].status === "404") liu.sendMessage(from, {text: `@${mentioned.split("@")[0]} não ta no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else liu.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'promover': case 'promote': case 'pm': 
if (isOwner) return env('[❗] Somente a Administração do Grupo')
if (!isGroup) return env('[👥] Apenas em Grupos.')
if (!isMemberAdmin) return env('Você precisa ser adm')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return env('Marque ou responda a mensagem de quem você quer promover')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant
let responsedm = await liu.groupParticipantsUpdate(from, [mentioned], 'promote')
if (responsedm[0].status === "200") liu.sendMessage(from, {text: `@${mentioned.split("@")[0]} É o novo adm do gp️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responsedm[0].status === "404") liu.sendMessage(from, {text: `@${mentioned.split("@")[0]} não ta no grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else liu.sendMessage(from, {text: `Parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
break

case 'open':
case 'abrir': 
if (!isMemberAdmin) return env("[❗] Somente a Administração do Grupo") 
await liu.groupSettingUpdate(from, 'not_announcement') 
env("*GRUPO ABERTO*")
break

case 'close': 
case 'fechar': 
if (!isMemberAdmin) return env("[❗] Somente a Administração do Grupo") 
await liu.groupSettingUpdate(from, 'announcement') 
env("*GRUPO FECHADO*")
break

case 'marcar':
    if (!isGroup) return 
    if (!isMemberAdmin) return env('[❗] Somente a Administração do Grupo')
    members_id = []
tesks = (args.length > 1) ? body.slice(9).trim() : ''
tesks += '\n\n'
for (let mem of groupMembers) {
    tesks += `=> @${mem.id.split('@')[0]}\n`
    members_id.push(mem.id)
}
env(tesks)
break

case 'ban':
if (!isGroup) return env('[❗] Comando feito apenas em Grupos')
if (!isMemberAdmin) return env('[❗] Somente a Administração do Grupo')
if (!isBotAdm) return env('Apenas adms')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return env('Marque a mensagem ou o @ do alvo')
if (mek.message.extendedTextMessage.contextInfo.participant !== null && mek.message.extendedTextMessage.contextInfo.participant != undefined && mek.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentionedJid[0] : mek.message.extendedTextMessage.contextInfo.participant
if (sender.includes) return env('Marque o @ do usuário')
if (botNumber.includes) return env('Não vou me remover bobão')
if (Owner.includes) return env('Não vou remover meu Dono')
let responseb = await liu.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status ===  '200') liu.sendMessage(from, {text: `${mentioned.split('@')[0]} foi removido do grupo`, mentions: [mentioned, sender], contextInfo: {forwardingScore:999, isForwarded: true}})
else if (responseb[0].status === '406') liu.sendMessage(from, {text: `${mentioned.split('@')[0]} Criou esse Grupo e não pode ser removido`, mentions: [mentioned, sender], contextInfo: {forwardingScore:999, isForwarded: true}})
else if (responseb[0].status === '404') liu.sendMessage(from, {text: `Esse numero ja foi removido`, mentions: [mentioned, sender], contextInfo: {forwardingScore:999, isForwarded: true}})
else liu.sendMessage(from, {text: 'Deu erro, Tente Novamente', mentions: [mentioned, sender], contextInfo: {forwardingScore:999, isForwarded: true}})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid != null && mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined) { 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.includes(sender)) return env('Marque o @ do usuário')
if (mentioned.includes(owner)) return env('Não vou remover meu dono bobão')
if (mentioned.includes(botNumber)) return env('Não vou me remover')
if (mentioned.length > 1) {
if (mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return env('Jaja o grupo fica sem membros')
veacovc = 0 
for (let banned of mentioned) {
await sleep (100)
if (responseb2 = await liu.groupParticipantsUpdate(from, [banned], 'remove'))
if (responseb2[0].status === '200') veacovc = veacovc + 1
}
liu.sendMessage(from, {text: `${veacovc} participantes removido do grupo..`, mentions: [mentioned, sender], contextInfo: {forwardingScore:999, isForwarded: true}})
} else {
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
tkkes = 'Membro removido com sucesso \n'
for (let _ of mentioned) {
tkkes += `@${_.split("@")[0]}\n`
}
mentions(tkkes, mentioned, true) 
liu.groupParticipantsUpdate(from, mentioned, 'remove')
} else { 
mentions(`Membro removido com sucesso`, mentioned, true)
liu.groupParticipantsUpdate(from, mentioned, 'remove')
}
}
}
break

//*****(COMANDOS DE DOWNLOAD)*****//

case "play2":
if (!q) return env('Coloque o nome da musica também')
env("「📼」 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...") 
fetch(`https://clover-t-bot.onrender.com/yt/playmp4?query=${q}&key=625455&username=k`).then(response => response.json()).then(ytbr => {

liu.sendMessage(from,{image:{url:`${ytbr.thumb}`}, caption: `「👤」𝙽𝚘𝚖𝚎 ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕 ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜 ${ytbr.views}`}, {quoted: selo})

liu.sendMessage(from, { video: { url: ytbr.url }, mimetype: 'video/mp4' }, {quoted: selo})

})
break

case 'play1': 
if (!q) return reply('Coloque o nome da musica também')
env("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...") 
fetch(`https://clover-t-bot.onrender.com/yt/playmp3?query=${q}&key=588965&username=sim`).then(response => response.json()).then(ytbr => {

liu.sendMessage(from,{image:{url:`${ytbr.thumb}`}, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}`}, {quoted: mek})

liu.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, {quoted: mek})

})

break

case 'play': 
  if (!q) return env('Coloque o nome da musica também')
env("「🎵」 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...") 
fetch(`https://clover-t-bot.onrender.com/yt/playmp4?query=${q}&key=588965&username=sim`).then(response => response.json()).then(ytbr => {

 liu.sendMessage(from,{image:{url:`${ytbr.thumb}`}, caption: `「👤」𝙽𝚘𝚖𝚎 ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕 ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜 ${ytbr.views}`}, {quoted: selo})

 liu.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, {quoted: selo})

})
break

case "tiktok": {
if (!isGroup) return env('[👥] Apenas em Grupos.')
if (q.length < 1) return env("Por favor, coloque o link do vídeo após o comando.");
const url = q;
const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=588965&username=sim`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
if (data.videoSemWt) {
liu.sendMessage(from, {
video: { url: data.videoSemWt },
mimetype: 'video/mp4'
});
} else {
return env("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
}
})
.catch(error => {
console.error(error);
return env("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
});
} 
break

case "tiktok2": {
    if (q.length < 1) return env("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://clover-t-bot.onrender.com/download/tiktok?url=${url}&key=625455&username=k`;
    fetch(apiUrl)
.then(response => response.json())
.then(data => {
    if (data.videoSemWt) {
liu.sendMessage(from, {
    audio: { url: data.audio },
    mimetype: 'audio/mpeg'
});
    } else {
     env("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
    }
})
.catch(error => {
    console.error(error);
    return env("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
});
} 
break

//****(COMANDOS DE BRINCADEIRAS)****//

case 'roleta':
if (!isGroup) return env('[👥] Apenas em Grupos.')
    rato = body.slice(6)
    var foda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
    var keyse = foda[Math.floor(Math.random() * foda.length)]
    var fda =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
    var hesteia = fda[Math.floor(Math.random() * foda.length)]
    var fodu =['🍇','🍌','🍍','🍎','🥕','🥑','🥦']
    var alemanha = fodu[Math.floor(Math.random() * foda.length)]
naosei = `
╔──────🎰🎰🎰──────╗
┃         C A S S I N O 
┃ 
┃ => ${keyse} ${hesteia} ${alemanha}
┃ 
╚──────🎰🎰🎰──────╝`
liu.sendMessage(from, {text: naosei}, mek)
break

case 'calculadora': case 'calcular':  case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return env(JSON.stringify(eval(`${rsp}`,null,'\t')))
break 

case 'perfil':
    if (!isGroup) return env('[👥] Apenas em Grupos.')
    try { 
    ppimg = await liu.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch { 
    ppimg = 'https://telegra.ph/file/7102c595261ad409cafdf.jpg'
}
const aleata = `${Math.floor(Math.random() * 110)}`
const aleata2 = `${Math.floor(Math.random() * 110)}`

var bio = await liu.fetchStatus(sender)
var bioo = bio.status 

const slakkj = `SEU PERFIL

Nome: ${pushname}

Numero: ${sender.split('@')[0]}

Bio: ${bioo} : 'sem recado'

Saldo: ${checkATMuser(sender)}

Gado: ${aleata}%

Gay: ${aleata2}%`
liu.sendMessage(from, {image: {url: ppimg}, caption: slakkj, selo})
break

case 'gado': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
const aleat = `${Math.floor(Math.random() * 110)}`
env('Pesquisando sua ficha de gado, aguarde')
await(5000)
env(`${pushname} Sua porcentagem de Gado é: ${aleat}% 🐂`)
break 

case 'nazista': 
if (!isGroup) return env("[👥] Apenas em Grupos.")
const naxis = `${Math.floor(Math.random() * 110)}`
env(`${pushname} sua ficha de Nazista é: ${naxis}% 🇮🇲`)
break 

case 'shippo':
    if (!isGroup) return env('[👥] Apenas em Grupos.')
    teks = args.join(' ')
if (teks.length < 10 ) return env('Marque Algum Membro do Grupo')
membrus = []
const eueueu = groupMembers
const eueueu1 = groupMembers
const vcvcvc = eueueu[Math.floor(Math.random() * eueueu.length)]
const vcvcvc1 = eueueu1[Math.floor(Math.random() * eueueu1.length)]
var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22%`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
const shippazao = shipted1[Math.floor(Math.random() * shipted1.length)]
jet = `EU ACREDITO NESSE CASAL 👀\n\n1 = @${vcvcvc.id.split('@')[0]}\n & 2 = ${teks} Com essa porcentagem: ${shippazao}`
membrus.push(vcvcvc.id)
membrus.push(vcvcvc1.id) 
mentions(jet, membrus, true)
break

case 'rankgay': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
try { 
    d = []
    ret = 'Rank dos mais Gays do grupo\n\n'
    for(i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
        ret += `🏳️‍🌈 - @${groupMembers[r].id.split('@')[0]}\n\n`
        d.push(groupMembers[r].id)
    }
    mentions(ret, d, true)
} catch (e) {
    console.log(e) 
    env('Opss! Deu erro.')
}
break

case 'ranknazista': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
try { 
    d = []
    ret = 'Rank dos mais nazistas do grupo\n\n'
    for(i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
        ret += `🇮🇲 - @${groupMembers[r].id.split('@')[0]}\n\n`
        d.push(groupMembers[r].id)
    }
    mentions(ret, d, true)
} catch (e) {
    console.log(e) 
    env('Opss! Deu erro.')
}
break

case 'rankgostoso': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
try { 
    d = []
    ret = 'Rank dos mais gostosos (a) do grupo\n\n'
    for(i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
        ret += `😋 - @${groupMembers[r].id.split('@')[0]}\n\n`
        d.push(groupMembers[r].id)
    }
    mentions(ret, d, true)
} catch (e) {
    console.log(e) 
    env('Opss! Deu erro.')
}
break

case 'rankfeio': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
try { 
    d = []
    ret = 'Rank dos mais feios (a) do grupo\n\n'
    for(i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
        ret += `😭 - @${groupMembers[r].id.split('@')[0]}\n\n`
        d.push(groupMembers[r].id)
    }
    mentions(ret, d, true)
} catch (e) {
    console.log(e) 
    env('Opss! Deu erro.')
}
break

case 'rankbebado': 
if (!isGroup) return env('[👥] Apenas em Grupos.')
try { 
    d = []
    ret = 'Rank dos mais bebados (a) do grupo\n\n'
    for(i = 0; i < 5; i++) {
        r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
        ret += `🤢 - @${groupMembers[r].id.split('@')[0]}\n\n`
        d.push(groupMembers[r].id)
    }
    mentions(ret, d, true)
} catch (e) {
    console.log(e) 
    env('Opss! Deu erro.')
}
break

case 'rankpau':
case 'Rankpau': 

if (!isGroup) return env('[👥] Apenas em Grupos.')

membr = []
const pauz1 = groupMembers
const pauz2 = groupMembers
const pauz3 = groupMembers
const pauz4 = groupMembers
const pauz5 = groupMembers
const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, PIKA DAS GALÁXIAS  😳`]
var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, PIKA DAS GALÁXIAS 😳`]
var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, PIKA DAS GALÁXIAS 😳`]
var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, PIKA DAS GALÁXIAS 😳`]
var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, PIKA DAS GALÁXIAS 😳`]
const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
pdr = `Esses são os caras com o menor e maior pau do Grupo\n${groupMetadata.subject}\n\n@${paus1.id.split('@')[0]}\n${pc1}\n@${paus2.id.split('@')[0]}\n${pc2}\n@${paus3.id.split('@')[0]}\n${pc3}\n@${paus4.id.split('@')[0]}\n${pc4}\n@${paus5.id.split('@')[0]}\n${pc5}\n\n ${BotName}`
membr.push(paus1.id)
membr.push(paus2.id)
membr.push(paus3.id)
membr.push(paus4.id)
membr.push(paus5.id)
mentions(pdr, membr, true)
break 

case 'pau': 
random = `${Math.floor(Math.random() * 35)}` 
const tamanho = random
if (tamanho < 13 ) {pp = 'só o corinho 😳'} else if (tamanho == 13 ) {pp = 'passou do kid beng...'} else if (tamanho == 14 ) {pp = 'passou da média'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'ta nas nuvens '} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço 😈😳'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste ai? rs'} else if (tamanho > 25 ) {pp = 'oq vai procurar com isso? 😳😈'
}
seloko = `SEU PIU PIU TEM ${random}CM\n\n${pp}` 
env(seloko)
break

/*case 'beijo':
    if (!isGroup) return env('[👥] Apenas em Grupos.')
    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] ? mek.message.extendedTextMessage.contextInfo.mentioned[0] : mek.message.extendedTextMessage.contextInfo.participant
    const beijinho = [`Atacante 🔥! @${sender.split('@')[0]} deu um beijão em @${mentioned.split('@')[0]}, o cara é brabo 🤭`, `Ave Maria 😦. @${sender.split('@')[0]} deu uma linguada no (a) @${mentioned.split('@')[0]} 😈🔥`, `ELE FEZ DENOVO!!! @${sender.split('@')[0]} deu uma beijoca em @${mentioned.split('@')[0]} 😈💦`, `@${sender.split('@')[0]} deu uma beiçada em @${mentioned.split('@')[0]}, calma campeão 🤭`]
    eitapega = beijinho[Math.floor(Math.random() * beijinho.length)]
    liu.sendMessage(from, {video: fs.readFileSync('./arquivos/videos/beijo.mp4'), gifPlayback: true, caption: eitapega}, {quoted: mek})
break*/

case 'jogodavelha':
if(!isGroup) return env('comando apenas para grupos')
if (fs.existsSync(`./arquivos/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*𝐉𝐎𝐆𝐎 𝐃𝐀 𝐕𝐄𝐋𝐇𝐀*
 
 [❗] Alguém está jogando no momento.\n\n@${boardnow.X} VS @${boardnow.O}
 
 ❌ : @${boardnow.X}
 ⭕ : @${boardnow.O}
 
 Sua vez : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
 
 
  ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
  ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
  ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
 
 
 `;
liu.sendMessage(from, {text: chatMove, 
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return env(
`* Jogue com Alguém!!!!*
*para inicar a partida : ${prefix + command} @ membro do grupo*`
 );
const boardnow = setGame(`${from}`);
console.log(`Start Tictactore ${boardnow.session}`);
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(
`./arquivos/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `*『⚔️ 𝑬𝑺𝑷𝑬𝑹𝑨𝑵𝑫𝑶 𝑺𝑬𝑼 𝑶𝑷𝑶𝑵𝑬𝑵𝑻𝑬 ⚔️』*
 
@${sender.replace(
"@s.whatsapp.net",
""
)} _está te desafiando para uma partida de jogo da velha._
 
_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar._
`;
liu.sendMessage(from, {text: strChat, 
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break

case 'resetvelha':
  if (!isMemberAdmin) return env('Apenas algm ADM pode resetar a velha')
if (fs.existsSync('./arquivos/tictactoe/db/' + from + '.json')) {
fs.unlinkSync("./arquivos/tictactoe/db/" + from + '.json');
env('Jogo da velha resetado')
} else {
env('Erro, Nenhuma sessão em andamento')
}
break 

case 'preto':
case 'feio':
case 'lixo':
case 'burro':
case 'gordo':
case 'pobre':
case 'corno':
case 'bonito':
case 'macaco':
case 'gostoso':
    try { 
        d = []
        ret = `O mais ${command} é o (a): `
        for(i = 0; i < 1; i++) {
            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
            ret += ` @${groupMembers[r].id.split('@')[0]}\n\n`
            d.push(groupMembers[r].id)
        }
        mentions(ret, d, true)
    } catch (e) {
        console.log(e) 
        env('Opss! Deu erro.')
    }
break

//****(OUTROS COMANDOS)****//

case 'chat':   case 'chatgpt':    case 'gpt': //conversa com você
if (!q) return env('Em que posso te ajudar?')
env("calma")
try {
const resopen = await openai.createCompletion({
  frequency_penalty: 0.5, //não sei
  max_tokens: 3000, //quantidade máxima de palavra-chave
  model: "text-davinci-003", //modelo de respostas
  presence_penalty: 0, //não sei
  prompt: q, //o que deseja
  temperature: 0, //respostas exatas (não entendi muito bem na documentação)
  top_p: 1, //não sei
});
respgpt = resopen.data.choices[0].text.includes('\n') ? resopen.data.choices[0].text.replace('\n\n', '') : resopen.data.choices[0].text //remove o espaçamento inicial
env(respgpt) //envia o resultado
} catch (e) { //se der erro, informará o mesmo no console/terminal
  if (e.response.data.error.code == "billing_hard_limit_reached") {
    env('Key expirada! Gere uma nova com outra conta ou pague através do site.')
    await sleep(200)
    console.log(e.response.data)
  } else if (e.response) {
    env('Erro!')
    await sleep(250)
    console.log(e.response.status)
    await sleep(350)
    console.log(e.response.data)
  } else {
    env('Erro!')
    await sleep(250)
    console.log(e.message)
  }
}
break

case 'metadinha': 
await liu.sendMessage(from, {react: { text: '💦', key: mek.key }})
let simon = await axios.get(`https://marcos025.onrender.com/api/ferramenta/metadinha?apikey=X5wZX4ysJA`)
liu.sendMessage(from, {image: {url: simon.data.masculina}, caption: `MASCULINA`})
liu.sendMessage(from, {image: {url: simon.data.feminina}, caption: `FEMININA`})
env('Prontinho')
break

case 'criador': case 'owner': case 'dono':
smokeAKV = `INFORMAÇÕES DO MEU CRIADOR

*Nome: K*
WhatsApp: wa.me//557499237652

*Nome: Carlos*
WhatsApp: wa.me//559392010191

🔗 REDES SOCIAIS

K: Instagram: https://www.instagram.com/_._kau_?igsh=dG9vM3hwdWJsejh3
`
liu.sendMessage(from, {text: smokeAKV}, {quoted: selo})
break     

case 'listaadm': case 'listadm':
  if (!isGroup) return env('Apenas em Grupos')
  tekos = `LISTA DE ADMINISTRADORES DO GRUPO ${groupMetadata.subject}\nTOTAL: ${groupAdmins.length}\n\n`
  no = 0 
  for (let admon of groupAdmins) {
  no += 1
  tekos += `[${no.toString()}] @${admon.split('@')[0]}\n`
  }
mentions(tekos, groupAdmins, true)
break

case 'ddd':
    if (args.length < 1) return env('Exemplo: !ddd 52')
    ddd = body.slice(5)
    ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
    dddlista = `LISTA DE CIDADES *${ddds.data.state}* COM ESTE DDD ${q}\n\n`
    for (let i = 0; i < ddds.data.cities.length; i++) {dddlista += `${i + 1} => *${ddds.data.cities[i]}*\n`}
    liu.sendMessage(from, {text: dddlista}, {quoted: mek})
break

case 'cep':
if (args.length < 1) return env('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return env(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
liu.sendMessage(from, {text: ccg}, {quoted:mek})
break

case 'emojimix' : { 
    if (!isGroup) return env('Apenas em Grupos') 
    if (!q) return env('Exemplo: !emojimix 😁+😋')
    env('Se demorar muito, Tente Novamente')
    let [emoji1, emoji2] = q.split`+`
    var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
    for (let res of em.results) {
        templateMassage = { 
            image: { 
                url: `${res.url}`, 
                quoted: mek
            }
        }
liu.sendMessage(from, templateMassage, {quoted: mek})
    }
}
break

case 'tts': 
if (args.length < 1) return env(`Você deve usar o comando da forma correta:\n${p}tts (língua) (texto)\nExemplo: ${p}tts pt bom dia\n\nUse: ${p}ts para listar todas as línguas`)
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return liu.sendMessage(from, {text:'Cadê o texto?', quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
dtt.length > 800
? env('Texto muito grande')
: gtts.save(ranm, dtt, function() {
liu.sendMessage(from, {audio: fs.readFileSync(ranm), quoted: mek, mimetype: 'audio/mp4', ptt:true})
fs.unlinkSync(ranm)
})
break

//****(COMANDOS DE FIGS)****//
case 'ss': case 's': case 'f': case 'fig':
try {
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
env(" CRIANDO SUA FIGURINHA")
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Liu-Bot','Sr.Flame')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(`${mess}`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
liu.sendMessage(from, {sticker: buffer}, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : mek.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
const media = rane
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('Liu-Bot', 'Sr.Flame')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
env(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
liu.sendMessage(from, {sticker: buffer}, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
env(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
} catch (e) {
env('Ocorreu um erro')
console.log(e)
}
break

case 'rename': 
case 'roubar': 
if (!isQuotedSticker) return env("Marque uma Figurinha") 
encmediats = await getFileBuffer(mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0]; 
var author2 = kls.split("/")[1];
if (!q) return env("Tem coisa faltando!")
if (!pack) return env("Escreva no formato certo: -roubar Liu/bot")
if (!author2) return env("Escreva no formato certo: -roubar Liu/bot")
env("Calma la calma lá")
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64'); 
liu.sendMessage(from, {sticker: sti, contextInfo: { externalAdenv:{title: `${pack}|${author2}`, body:"", previewType:"PHOTO",thumbnail: sti}}}, {quoted: selo})
.catch((err) => { 
env("Opss! Deu erro"); 
})
break

case 'toimg':
if (!isQuotedSticker) return env('Marque uma figurinha')
buff = await getFileBuffer(mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
try {
liu.sendMessage(from, {image: buff}, {quoted: mek})
} catch(e) {
console.log(e)
env('erro...')
}
break

case 'figfundo':
    case 'figvideo':
    case 'figusemfundo':
    case 'sfundo':
      if (!isQuotedImage) return env(`Marque uma imagem`)
      if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
        manu = isQuotedImage ? mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : mek = message.imageMessage
        buff = await getFileBuffer(manu, 'image')
        bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
        anu = args.join(' ').split('|')
        satu = anu[0] !== '' ? anu[0] : `${pushname}`
        sd = `CRIADO POR ↓ LIU BOT`
        dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
        var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
        var sti = new Buffer.from(mantap, 'base64');
        liu.sendMessage(from, { sticker: sti }, { quoted: mek })
      } else {
        return env(`Apenas imagens`)
      }
      break


case 'attp1': {
    if (!q) return env("cade o txt")
    const buff = await getBuffer(`https://marcos025.onrender.com/api/maker/attp1?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: buff, packname: global.packname, author: global.author })
    }
    break
    
    case 'attp2': {
        if (!q) return env('Cade o texto?')
        const attp2 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp2?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, {sticker: attp2})
    }
    break 
    
    case 'attp3' : { 
        if (!q) return env('Cade o texto bobão')
        const attp3 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp3?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: attp3})
    }
    break
    
    case 'attp4' : { 
        if (!q) return env('Cade o texto bobão')
        const attp4 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp4?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: attp4})
    }
    break
    
    case 'attp5' : { 
        if (!q) return env('Cade o texto bobão')
        const attp5 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp5?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: attp5})
    }
    break
    
    case 'attp6' : { 
        if (!q) return env('Cade o texto bobão')
        const attp6 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp6?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: attp6})
    }
    break
    
    case 'attp7' : { 
        if (!q) return env('Cade o texto bobão')
        const attp7 = await getBuffer(`https://marcos025.onrender.com/api/maker/attp7?texto=${q}&apikey=DpfJFRv3Tx`)
    liu.sendMessage(from, { sticker: attp7})
    }
    break

//****(COMANDOS DE AUDIO)****//

case 'speed':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!') 
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'slowed':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!') 
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'gigante':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!') 
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'baixo': case 'bass':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!') 
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'sombrio':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem}  -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!') 
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'esquilo':
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('Ish, Acho que deu Erro!')
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'grave': 
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!')
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break

case 'estourar': 
if (!isQuotedAudio) return env('Marque um áudio Para Modificá-lo!')
env('Aguarde, Já estou Enviando')
muk = isQuotedAudio ? mek.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : mek.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return env('Ish, Acho que deu Erro!')
hah = fs.readFileSync(ran)
liu.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt:true}, {quoted: mus})
fs.unlinkSync(ran)
})
break


//****(COMANDOS DE ANTIS)****//

case 'antilink':
  if (!isGroup) return env('apenas em grupos')
  if (!isMemberAdmin) return env("Apenas Admins")
  if (args.length < 1) return env("1 para ativar 0 para desativar") 
  if (Number(args[0]) === 1) {
    if (isAntiLink) return env("Antilink Ativado")
    antilink.push(from)
  fs.writeFileSync('./arquivos/antis/antilink.json', JSON.stringify(antilink))
  env('Antilink acaba de ser ativado')
  } else if (Number(args[0]) === 0) { 
    antilink.splice(from, 1)
    fs.writeFileSync('./arquivos/antis/antilink.json', JSON.stringify(antilink))
    env('Antilink desativado nesse grupo')
  } else { 
    env('1 para ativar 0 para desativar, bobão')
  }
break

case 'antiimg':
    if (!isGroup) return env('apenas em grupos')
    if (!isMemberAdmin) return env("Apenas admins")
    if (args.length < 1) return env('1 para ativar 0 para desativar')
    if (Number(args[0]) === 1) {
        if (isAntiImagem) return env('Anti-Imagem ativado')
    antiimagem.push(from)
    fs.writeFileSync('./arquivos/antis/antiimagem.json', JSON.stringify(antiimagem))
    env('Anti-Imagem Ativado')
    } else if (Number(args[0]) === 0) {
        antiimagem.splice(from, 1)
    fs.writeFileSync('./arquivos/antis/antiimagem.json', JSON.stringify(antiimagem))
    env('Anti-Imagem desativado')
    } else { 
        env('1 para ativar 0 para desativar, bobão')
    }
break

case 'bemvindo':
if (!isGroup) return env('Só em Grupo')
if (!isMemberAdmin) if (isOwner) return env('Só adm ou dono')
if (q.length < 1) return env('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isWelcome) return env('Ja esta ativo')
welcome.push(from)
fs.writeFileSync('./arquivos/antis/welcome.json', JSON.stringify(welcome))
env(`Ativou com sucesso o recurso de ${command} neste grupo `)
} else if (Number(args[0]) === 0) {
if (!isWelcome) return env('Ja esta Desativado')
pesquisar = from
processo = welcome.indexOf(pesquisar)
while(processo >= 0){
welcome.splice(processo,1)
processo = welcome.indexOf(pesquisar)
}
fs.writeFileSync('./arquivos/antis/welcome.json', JSON.stringify(welcome))
env('‼️ Desativou com sucesso o recurso de bem-vindo neste grupo ✔️')
} else {
env('1 para ativar,0 para desativar')
}
break

//****(COMANDOS DE SALDO)****//
case 'wmoney': 
if (isOwner) return env("So dono") 
addKoinUser(sender, 100000000000000000000000000000000)
env("1000000000$ Adicionados em sua conta")
break

/*case 'buyprem': 
if (premium.includes(sender)) return env("[ ❌ ] Só pode ser obtido uma vez!")
paypal = 1 
const koinPerlo = 10000
const buyPrem = koinPerlo * paypal
if ( checkATMuser(sender) <= buyPrem) return env("[ ❌ ] Opss! Você não tem Dinheiro suficiente\n Valor Suficiente: 10000 mil") 
if ( checkATMuser(sender) >= buyPrem) {
confirmATM(sender, buyPrem)
premium.push(`${sender}`)
fs.writeFileSync('./db/json/premium.json', JSON.stringify(premium))
await env(` 💸 COMPRA SUCEDIDA COM SUCESSO \n\n 👤 Fornecedor: K\n🔖 Comprador: *${pushname}*\n 💲 VALOR DO PREMIUM: *${koinPerlo}*`)
}
break*/

case 'pix':

if (!isGroup) return env('Apenas em grupos')
const numeroUang = args[0].replace('@','')
const uangLimite1 = args[1]
const darmoneyUang = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (uangLimite1 <= 1) return env(`Precisa dar no minímo 1 limit`)
if (isNaN(uangLimite1)) return env(`[❗] USE ASSIM\n ${p + comando} @557499237652 50`)
if (!numeroUang) return env(`[❗] DIGITE ASSIM\n ${p + comando} @557499237652 50`)
const idUang = numeroUang + '@s.whatsapp.net'
var found = false
Object.keys(uang).forEach((i) => {
if(uang[i].id === idUang){
found = i
}
})
if (found !== false) {
uang[found].uang += Number(uangLimite1)
const updated = uang[found]
fs.writeFileSync('./arquivos/banco/uang.json',JSON.stringify(uang))
const verMoney = checkATMuser(darmoneyUang)
const result = `
「 Pix Realizado com Sucesso 」

usuário: *@${updated.id.replace('@s.whatsapp.net','')}*
Horário : *${moment().format('DD/MM/YY HH:mm:ss')}*
Quantidade: *${verMoney}*
`
console.log(uang[found]);
env(result)
} else {
env(`[❗] Desculpe ${pushname}, este ${numeroUang} número não está registrado no bot...`)
}
break

case 'dinheiro':
case 'saldo':
stu = `${Math.floor(Math.random() * 600)}`
stuu = `${Math.floor(Math.random() * 600)}`
const testeDinheiro = checkATMuser(sender)
const checkDinheiro = checkATMuser(sender, testeDinheiro)
bancoCeci = `「 𝑳𝑰𝑼 𝑩𝑨𝑵𝑲 」

👤 NOME: ${pushname}

🕰 HORA: ${hora}

💸 SALDO: ${checkATMuser(sender)}

CÓDIGO: ${stu}

SALDO NEGATIVO: ${stuu}
`
env(bancoCeci)
break

case 'rankmoney':
bo = args[0]
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
let rankDinheiro = '🏆【 DINHEIRO 】🏆\n\n'
let nomNumberRank = 0
try {
for (let i = 0; i < 5; i++) {
nomNumberRank++
rankDinheiro += `
*${nomNumberRank}º*🥇 : @${uang[i].id.replace('@s.whatsapp.net', '')}
╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸
│  Nome: _${uang[i].nome}_
│  Dinheiro: _${uang[i].uang}_ 💸
╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
await env(rankDinheiro)
} catch (err) {
console.error(err)
await env(`Precisa ter mais Usuários registrados`)
}
break

case 'apostar': 
if (!isGroup) return env("Apenas em Grupos") 
const dinheiro = checkATMuser(sender)
const checkxpr = checkATMuser(sender, dinheiro)
const quantidader = '50' 
if (checkxpr <= quantidader) return env("[❗] Você não possui dinheiro suficiente para apostar. Mínimo: 100$")
if (args.length !== 1) return env("Especifique a quantidade para sua apostar") 
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro) return env("Você não pode apostar uma quantidade de dinheiro maior do que você tem.")
if (Number(args[0]) < 50) return env("Quantidade máxima de aposta é 50") 
if (isNaN(args[0])) return env("Use apenas números, nada de letras ou virgulas!")
const double = Math.floor(Math.random() * 7) + 1 
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) { 
await env(`BANG!!!\n\nVocê Perdeh na *Roleta-Russa*, sua perca é de ${nrolxp} em seu dinheiro`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`557499237652@s.whatsapp.net`, prolxp)
} else if (double == 2) { 
await env(`UFAA 🙏\n\nO tiro passou bem longe e você ganhou ${prolxp} em dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 3) { 
await env(`💥 NÃO TEVE MUITA SORTE.\n\nVocê Perdeu *${nrolxp}*, Continua apostando igual os otários na blaze 😈`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`557499237652@s.whatsapp.net`, prolxp)
} else if (double == 4) {
await env(`UM CARA DE SORTE 🍀\n\nJudeu conseguiu se salvar. Sua recompensa por isso: ${prolxp}, continue assim!`)
addKoinUser(sender, prolxp, dinheiro)
} else if (double == 5) { 
await env(`FOI POR POUCO\n\nVocê perdeu ${nrolxp} em seu saldo, continue apostando mais que vai sair cartinha 👀`)
addKoinUser(sender, nrolxp, dinheiro)
addKoinUser(`557499237652@s.whatsapp.net`, prolxp)
} else if (double == 6) {
await env(` 🏆 PARABÉNS 🏆\n\nVocê Finalmente ganhou, Sua recompensa: ${prolxp} em dinheiro`)
addKoinUser(sender, prolxp, dinheiro)
}
break

case 'minerar': 
    if (!isGroup) return env('Apenas em Grupos')
    env('> MINERAÇÃO INCICIADA!\n\n AGUARDE!')
 minerar = Math.floor(Math.random() * 4) + 1
 dinheirooh = Math.floor(Math.random() * 300) + 50
 perdaarr = Math.floor(Math.random() * 300) + 50

 if (minerar == 1) {
await sleep(30000)
addKoinUser(sender, dinheirooh)
return env(`MINERAÇÃO CONCLUIDA!\n\n ${pushname} você conseguiu ${dinheirooh}R$, trampo rendeu 😎, Parabens!`)
}

if (minerar == 2) {
await sleep(30000)
addKoinUser(sender, dinheirooh)
return env(`Parabens ${pushname}, Sua mineração rendeu ${dinheirooh}R$`)
}

if (minerar == 3) {
await sleep(30000)
addKoinUser(sender, dinheirooh)
return env(`MINERAÇÃO COMPLETA\n\n Você conseguiu ${dinheirooh}R$!`)
}

if (minerar == 4) {
await sleep(30000)
confirmATM(sender, perdaarr)
env(`EITA! 💣!\n\n A mina explodiu e você perdeu ${perdaarr}R$, Tente Novamente.`)
}

if (minerar == 5) {
await sleep(30000)
confirmATM(sender, perdaarr)
env(`Tomoli 😅\n\n Uma Rocha caiu em sua cabeça... tendo uma perda de ${perdaarr}R$`)
}

if (minerar == 6) {
await sleep(30000)
confirmATM(sender, perdaarr)
env(`DEU RUIM!!\n\n A mina desmoronou e você perdeu ${perdaarr}R$, Tente Novamente.`)
}
break


case 'loja':
if (!isGroup) return env('Comando apenas em  grupos')
 lojabot = `❗ - Para adquirir os produtos da *Loja do Liu* , é preciso possuir uma quantia precisa de dinheiro. Caso não esteja ciente do valor disponível em sua conta, basta digitar "/saldo" para obter essa informação.\n\n
╭──┤『 LOJA DO LIU 』├──────
│${prefix}Premium / 100000$
│${prefix}ReaçãoAlea / 20000$
│${prefix}**** / 100
│${prefix}Recurso-- / 50000
╰──────────────┤`
liu.sendMessage(from, {text:lojabot}, {quoted: mek})
break

//*****(COMANDOS DE IMAGEM)*****//

case 'diablo': {
					if (args.length < 1) return env("Precisa do Texto amigo")
					q = body.slice(5)
					if (q.length > 10) return env('O texto é longo, até 10 caracteres')
					env('Estou fazendo, se der erro tente novamente.')
					buffer = await getBuffer(`https://marcos025.onrender.com/api/ephoto/diabo?nome=${q}&apikey=DpfJFRv3Tx`)
					liu.sendMessage(from, {image: buffer, mek, thumbnail: null, caption: 'PRONTINHO!'})
}
break
//*****(COMANDOS DO DONO)*****//

case 'mek':
    if (isOwner) return env("so dono")
     liu.sendMessage(from, {text: JSON.stringify(updateM, null, '\t')}, {quoted: mek});
     break;

     case 'exec':
if (isOwner) return env("so dono")
let exexv = texto || 'ls';
exec(exexv, (err, msg) => {
 if (err) return env(err.message);
 if (msg) return env(msg);
});
break

case 'vcase':
try{
if (isOwner) return env (`*😤 Você tá sabendo demais!*`)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
env(`${getCase(q)}`)
} catch(e) {
console.log(e)
env('Case inexistente')
}
break

case 'reiniciar':
case 'restart':
 if (isOwner) return env("so dono")
  env(`*Reiniciando aguarde alguns segundos...*`) 
       setTimeout(() => {       
                        process.exit(1)
                        env(`Prontinho`);
                    }, 3000)	
break

case 'ping':
        var timestamp = speed()
        var latensi = speed () - timestamp
    env(`> TEMPO ATIVO ${runtime(process.uptime())}\nVELOCIDADE: ${latensi.toFixed(4)} _segundos_ `)
break


case 'ping2':
if (isOwner) return liu.sendMessage(from, {text: 'somente dono'})
r = (Date.now() / 1000) - mek.messageTimestamp
pokemon = `
┌───PING 
┊*ping*: ${String(r.toFixed(3))}
└───PING
`
await liu.sendMessage(from, {text: pokemon}, {quoted: mek})
break

case '157': 
if (isOwner) return env(' Você tá sabendo demais 👀')
liu.groupUpdateDescription(from, `\n\n\n\n\n𝘎𝘙𝘜𝘗𝘖 𝘕𝘜𝘒𝘈𝘋𝘖 💫`)
liu.groupSettingUpdate(from, `annoucement`)
env('SIMONE MANDOU FECHAR ')
liu.groupUpdateSubject(from, `By: Simonetti 🤣 `)
env(`\n\n Grupo 157! `)
let users407 = groupMembers.map(u => u.id)
for (let user of users407) if (user.endsWith('@s.whatsapp.net')){
if ( user != botNumber){
liu.groupParticipantsUpdate(from, [user], `remove`)
}
}
break


//****(FIM DOS COMANDOS)****/
default: 

    fs.watchFile('./index.js', (curr, prev) => { 
        if (curr.mtime.getTime() !== prev.mtime.getTime()) {
            console.log('A index foi alterada. Reinciando');
            process.exit()
        }
    })


    if (budy.startsWith('>')) { 
        if (isOwner) return env("apenas dono seu danado")  
        try{ 
        var evaled = await eval(budy.slice(2)) 
        if (typeof evaled !== 'string' ) evaled = require('util').inspect(evaled)
        await env(evaled) 
        } catch (err) { 
        await env(String(err))
        }
        }
        
        if (budy.startsWith('=>')) { 
        if (isOwner) return env('Apenas dono seu danado') 
        function Return(sul) {
        sat = JSON.stringfy(sul, null, 2)
        bang = uttil.format(sat) 
        if (sat == undefined) { 
        bang = util.format(sul) 
        } 
        return env(bang) 
        }
        try { 
        env(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
        } catch (e) { 
        env(String(e)) 
        } 
        }

//****(IFS DE SEGURANÇA)****/

if (budy.includes('wa.me')) {
if (!isGroup) return 
if (isMemberAdmin) return 
if (!isAntiLink) return
if (!isBotAdm) return env("bot sem adm")
      var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
    setTimeout( () => { 
      env('Eliminado')
    }, 100)
    env(`「 link  detectado」\n User sendo banido!`)
    setTimeout( () => { 
      liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
    }, 10)
    setTimeout( () => { 
    }, 0)
    }

if (budy.includes('https://')) {
if (!isGroup) return 
if (isMemberAdmin) return 
if (!isAntiLink) return
if (!isBotAdm) return env("bot sem adm")
    var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
    setTimeout( () => { 
     env('Eliminado')
  }, 100)
    env(`「 link  detectado」\n User sendo banido!`)
    setTimeout( () => { 
  liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
     }, 10)
  setTimeout( () => { 
     }, 0)
}

if (budy.includes('http://')) {
if (!isGroup) return 
if (isMemberAdmin) return 
if (!isAntiLink) return
if (!isBotAdm) return env("bot sem adm")
    var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
    setTimeout( () => { 
    env('Eliminado')
      }, 100)
     env(`「 link  detectado」\n User sendo banido!`)
setTimeout( () => { 
liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
         }, 10)
      setTimeout( () => { 
         }, 0)
}

if (budy.includes('https:/')) {
if (!isGroup) return 
if (isMemberAdmin) return 
if (!isAntiLink) return
if (!isBotAdm) return env("bot sem adm")
    var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
    setTimeout( () => { 
    env('Eliminado')
      }, 100)
     env(`「 link  detectado」\n User sendo banido!`)
setTimeout( () => { 
liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
         }, 10)
      setTimeout( () => { 
         }, 0)
}

if (budy.includes('.com')) {
if (!isGroup) return 
if (isMemberAdmin) return 
if (!isAntiLink) return
if (!isBotAdm) return env("bot sem adm")
 var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
        setTimeout( () => { 
        env('Eliminado')
          }, 100)
         env(`「 link  detectado」\n User sendo banido!`)
    setTimeout( () => { 
    liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
             }, 10)
          setTimeout( () => { 
             }, 0)
}

if (isAntiImagem && type == 'imageMessage') {
    if (!isGroup) return 
    if (isMemberAdmin) return 
    if (!isBotAdm) return env("bot sem adm")
     var kick =  `${sender.split("@")[0]}@s.whatsapp.net`
            setTimeout( () => { 
            env('Eliminado')
              }, 100)
             env(`❗ TIPO DE MENSAGEM PROIBIDA NO GRUPO, USUARIO SENDO BANIDO ❗`)
        setTimeout( () => { 
        liu.sendMessage(from, [kick], 'remove').catch((e) => {env(`ERRO: ${e}`)})
                 }, 10)
              setTimeout( () => { 
                 }, 0)
    }

liu.ev.on('group-participants.update', async (num) => {
console.log(num)
if (!welcome.includes(num.id)) return
if (num.action === 'add') {
try {
ppimg = await liu.profilePictureUrl(num.participants[0], 'image')
} catch {
ppimg = 'https://telegra.ph/file/1e2610a8029e454c81a65.jpg'}
pimg = await getBuffer(ppimg)
bbn = `Olá, @${num.participants[0].split("@")[0]} Seja bem-vindo(a) ao nosso grupo!`
liu.sendMessage(num.id, { image: pimg, mentions: num.participants, caption: `${bbn}` });
} else if (num.action === 'remove') {
try {
ppimg = await liu.profilePictureUrl(num.participants[0], 'image')
} catch {
ppimg = 'https://telegra.ph/file/1e2610a8029e454c81a65.jpg'}
pimg = await getBuffer(ppimg)
bbn = `Adeus, @${num.participants[0].split("@")[0]} Não vai fazer falta!`
liu.sendMessage(num.id, { image: pimg, mentions: num.participants, caption: `${bbn}` })}
        })

  /*liu.ev.on('group-participants.update', async (anu) => {
    console.log(color(anu), 'red')
    try {
        let metadata = await liu.groupMetadata(anu.id)
        let participants = anu.participants
        for (let num of participants) {
            try {
                ppuser = await liu.profilePictureUrl(num, 'image')
            
            } catch {
                ppuser = 'https://tinyurl.com/yx93l6da'
            }
            try {
                ppgroup = await liu.profilePictureUrl(anu.id, 'image')
            } catch {
                ppgroup = 'https://tinyurl.com/yx93l6da'
            }
    
    if (anu.action == 'add') { 
        liu.sendMessage(from, {image : {url: ppuser }, mentions: [num], caption: `Bem vindo a o grupo ${metadata.subject} @${num.split('@')[0]}` })
    } else if (anu.action == 'remove')
        liu.sendMessage(from, {image: {url: ppuser}, mentions: [num], caption: 'saiu'})
    
        }
            } catch (err) {
            console.log(err)
            }
    })*/

/*liu.ev.on('group-participants.update', async (anu) => {
 //   if (!isBemvindo) return
        try {
            const participants = anu.participants;
            const metadata = await liu.groupMetadata(anu.id);
    
            for (let num of participants) {
                try {
                    let ppbemv = await liu.profilePictureUrl(anu.id, `https://clover-t-bot.onrender.com/welcome?nick=${pushname}&background=https://i.ibb.co/4YBNyvP/images-76.jpg&guildName=${groupMetadata.subject}&guildIcon=https://telegra.ph/file/87fe9fdbf08280460e531.jpg&memberCount=000&avatar=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg&key=625455&username=k`)
                    if (!ppbemv) {
                        ppbemv = await liu.profilePictureUrl(anu.id, 'image') || `https://clover-t-bot.onrender.com/welcome?nick=${pushname}&background=https://i.ibb.co/4YBNyvP/images-76.jpg&guildName=${groupMetadata.subject}&guildIcon=https://telegra.ph/file/87fe9fdbf08280460e531.jpg&memberCount=000&avatar=https://i.ibb.co/1s8T3sY/48f7ce63c7aa.jpg&key=625455&username=k`;
                    }
    
                    if (anu.action == 'add' && !anu.welcomeSent) {
                        liu.sendMessage(anu.id, {
                            image: { url: ppbemv },
                            contextInfo: { mentionedJid: [num] },
                            caption: `
    「 Olá e bem-vindo (a) ao grupo! 🌟 」
    
    Estamos felizes em tê-lo por aqui! Antes de começar a interagir, por favor, tome um momento para ler nossa descrição. Lá você encontrará informações importantes sobre as diretrizes do grupo. Lembrando, Qualquer tipo de dúvidas apenas consultar algum administrador do grupo. 
    
    Tchau Tchau 👋.`
    
                        });
    
                        anu.welcomeSent = true;
                    }
                } catch (err) {
                    console.log(err);
                }
            }
        } catch (err) {
            console.log(err);
        }
    });*/

}


})
}

/***FIM***/
 //run in main file
connectToWhatsApp()