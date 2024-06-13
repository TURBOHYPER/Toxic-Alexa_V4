let handler = async(m, { conn, command }) => {
  let isPublic = command === "public";
  let self = global.opts["self"]

  if(self === !isPublic) return m.reply(`Done ${!isPublic ? "Self" : "Public"} from earlier ${m.sender.split("@")[0] === global.owner[1] ? "Turbo" : "Mods"} :v`)

  global.opts["self"] = !isPublic

  m.reply(`Done Bot Is Now ${!isPublic ? "Self" : "Public"}`)
}

handler.help = ["self", "public"]
handler.tags = ["owner"]

handler.rowner = true

handler.command = /^(self|public)/i

export default handler 