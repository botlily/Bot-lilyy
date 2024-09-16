let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^حرب$/i.test(m.text)) { 
 responses = [ 
 'نعم؟'
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'أسمى بوت حرب 😁'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*متنساش بس النقطة ال قبل كل امر*',  
     ];
 }else if (/^تست$/i.test(m.text)) { 
     responses = [ 
       'البوت شغال تمام',  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
