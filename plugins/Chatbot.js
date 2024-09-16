let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^حرب$/i.test(m.text)) { 
 responses = [ 
 'نعم؟'
 ]; 
 } else if (/^كسم البوت|بوت$/i.test(m.text)) { 
     responses = [ 
 'أسمى بوت حرب 😁'
     ]; 
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       'البوت شغال تمام',  
 
 } else if (/^بوت عرص$/i.test(m.text)) { 
     responses = [ 
 'هو نا كنت بعرص ع امك ولا اي؟'
     ];     
 } else if (/^كسمك|كسمك بوت|يبنلشرموطة$/i.test(m.text)) { 
     responses = [ 
'كسمك عشان البوت 😁'
     ]; 
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
