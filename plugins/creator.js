function handler(m) {
  this.sendContact(m.chat, '51917611323', '𓃵𝕯𝖊𝖘𝖙𝖗𝖔𝒚𝖊𝖗⍣𝛰𝔣𝑖𝒄𝑖𝚊𝑙⃝ ཻུꫂ⠗', m)
  this.sendContact(m.chat, '51921909260', 'Smith', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
