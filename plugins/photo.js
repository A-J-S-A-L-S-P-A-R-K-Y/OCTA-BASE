const {eypz , commands} = require('../command')

eypz({
    pattern: "photo",
    desc: "use for group link.",
    category: "converter",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(m.quoted.stickerMessage) return await m.reply("Reply to a sticker!");
const buff = await m.quoted.download();
await conn.sendMessage(m.chat, { image: buff }, { quoted : m });

}catch(e){
console.log(e)
reply(`${e}`)
}
});
