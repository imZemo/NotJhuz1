let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
//let vn = './media/mariana.mp3'
let menu =`
*Que onda, ${username}*

»𝐀𝐪𝐮𝐢́ 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐚𝐫𝐚́𝐬 𝐥𝐨𝐬 𝐝𝐢𝐬𝐭𝐢𝐧𝐭𝐨𝐬 𝐞𝐧𝐥𝐚𝐜𝐞𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬«

╔════════════════╗
𝐂𝐮𝐫𝐬𝐨 𝐫𝐞𝐩𝐚𝐫𝐚𝐜𝐢ó𝐧 𝐝𝐞 𝐥𝐚𝐩𝐭𝐨𝐩𝐬: https://mega.nz/folder/uZtSlCrC#vpQGTGTAoAbFD-KtoCASeA
𝐂𝐮𝐫𝐬𝐨𝐬 𝐝𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢ó𝐧/𝐇𝐚𝐜𝐤𝐢𝐧𝐠 É𝐭𝐢𝐜𝐨: https://mega.nz/folder/WVpwFIxC#8rqcUPET68JnhcLzdjW4RA/folder/zRxnCAoJ
𝐂𝐮𝐫𝐬𝐨𝐬 𝐝𝐞 𝐩𝐫𝐨𝐠𝐫𝐚𝐦𝐚𝐜𝐢ó𝐧: https://mega.nz/folder/0yY3CDrZ#WkKxZnlLt3z4j8f8mxYnxg
╚════════════════╝

»𝐄𝐒𝐓𝐎𝐒 𝐄𝐍𝐋𝐀𝐂𝐄𝐒 𝐂𝐎𝐍𝐓𝐈𝐄𝐍𝐄𝐍 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 𝐐𝐔𝐄 𝐋𝐄𝐒 𝐏𝐔𝐄𝐃𝐄 𝐀𝐘𝐔𝐃𝐀𝐑. 𝐍𝐎 𝐍𝐎𝐒 𝐇𝐀𝐂𝐄𝐌𝐎𝐒 𝐑𝐄𝐒𝐏𝐎𝐍𝐒𝐀𝐁𝐋𝐄𝐒 𝐃𝐄𝐋 𝐔𝐒𝐎 𝐐𝐔𝐄 𝐋𝐄𝐒 𝐃𝐄𝐍 𝐍𝐈 𝐋𝐀𝐒 𝐂𝐎𝐍𝐒𝐄𝐂𝐔𝐄𝐍𝐂𝐈𝐀𝐒 𝐐𝐔𝐄 𝐏𝐎𝐃𝐑Í𝐀𝐍 𝐓𝐑𝐀𝐄𝐑 𝐒𝐔𝐒 𝐀𝐂𝐓𝐎𝐒.
.𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑, 𝐄𝐕𝐈𝐓𝐀 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐍𝐓𝐄𝐍𝐈𝐃𝐎 𝐒𝐈𝐍 𝐂𝐎𝐍𝐎𝐂𝐈𝐌𝐈𝐄𝐍𝐓𝐎 𝐏𝐑𝐄𝐕𝐈𝐎.«
`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, '©𝐔𝐧 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭𝐬𝐢𝐭𝐨 𓃵', '𝕄𝔼ℕ𝕌 ℙℝ𝕀ℕℂ𝕀ℙ𝔸𝕃 ', `#menu`, '𝕐𝕆𝕌𝕋𝕌𝔹𝔼', `#ytowner`, '𝕀ℕ𝕊𝕋𝔸𝔾ℝ𝔸𝕄 ', `#igowner`, m, false, { contextInfo: { mentionedJid }})   
//await await await await await await conn.sendFile(m.chat, vn, 'mariana.mp3', null, m, true, {
//type: 'audioMessage', 
//ptt: true 
//})
}
handler.command = /^(programenu|menuprogra|program|pm)$/i
handler.fail = null
module.exports = handler
