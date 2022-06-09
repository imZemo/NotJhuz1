let handler = async m => m.reply(`
(POR EL MOMENTO ES BOT DE USO PERSONAL, TODO DEBIDO A UN ERROR DE PROGRAMACIÓN, LES ESTARÉ ENSEÑANDO COMO CAMBIAR LOS NÚMEROS OWNERS PARA QUE PUEDAN UTILIZARLO SIN PROBLEMA ALGUNO EN LO QUE ARREGLO EL PROBLEMA EN GENERAL)
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
