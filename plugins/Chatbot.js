let handler = m => m; 

 handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat]; 
 let responses; 
 if (/^حرب$/i.test(m.text)) { 
 responses = [ 
 'نعم يعني ؟' 
 ]; 
 } else if (/^بوووت|بموووووووووت|بوت$/i.test(m.text)) { 
     responses = [ 
'ٱسمي حرب يروحى'
     ]; 
   } else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
 }else if (/^تيست$/i.test(m.text)) { 
     responses = [ 
       'شغال يروحي',  
     ];
  }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
        'بحبك أكتر ❤,' ,  
      ];
  }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
        'بعشقك 💟' ,  
     ];
 }
 if (responses) { 
 let randomIndex = Math.floor(Math.random() * responses.length); 
 conn.reply(m.chat, responses[randomIndex], m); 
 } 
 return !0 
 }; 

 export default handler;
