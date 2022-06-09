function handler(m) {
  this.sendContact(m.chat, '51917611323', 'Owner', m)
  this.sendContact(m.chat, '51921909260', 'Owner', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
