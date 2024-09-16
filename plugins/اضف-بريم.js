//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ *منشن على المشترك الخاص*\n\n📌 مثال : ${usedPrefix + command} @الشخص`
if (global.prems.includes(who.split`@`[0])) throw '□ عمل منشن على الشخص'
global.prems.push(`${who.split`@`[0]}`)

conn.reply(m.chat, `
✅ Premium

@${who.split`@`[0]} أصبح المستخدم ${taguser} !!

╣ *المنشن:* ${user.name}
`, m, { mentions: [who] })

}
handler.help = ['addprem <@tag>']
handler.tags = ['owner']
handler.command = ['addprem', 'اضف بريميوم'] 

handler.group = true
handler.rowner = true

export default handler
