const Base = require("../base/Command")
const { MessageEmbed } = require("discord.js")
class Ban extends Base {
    constructor(client) {
        super(client, {
            name: "ban",
            description: "bane um usuário do servidor",
            usage: "!ban @member",
            category: "Information",
            aliases: ["banir"]
        })
    }
    run(message, args) {
        message.delete();
        if (message.member.roles.highest.position < message.guild.roles.cache.get("708685621387853864").position) return message.reply("você não tem permissão para usar este comando!").then(m => m.delete({ timeout: 7000 }))
        let member = message.mentions.members.first()
        let motivo = args.slice(1).join(" ")
        if (!motivo) { motivo = "Não Informado" }
        if (!member) return message.reply("insira a ID do elemento.").then(m => m.delete({ timeout: 7000 }))
        if (member.id === message.author.id) return message.reply("Você não pode banir-se").then(m => m.delete({ timeout: 7000 }))

        member.ban(`Banido por: ${message.author.tag} | Motivo: ${motivo}`).then(() => {

            let embedBan2 = new MessageEmbed()
                .setDescription(`**👤 Membro Banido:** ${member.user.tag}\n📋 **Motivo:** ${motivo}\n**🚫 Banido por:** ${message.author}`)
                .setTitle("Punição | Ban")
                .setThumbnail(member.user.displayAvatarURL())
                .setTimestamp()
            this.client.channels.cache.get('714916740072472767').send(embedBan2)
            message.channel.send(`${member} foi banido com sucesso.`).then(m => m.delete({ timeout: 7000 }))
        })
    }
}
module.exports = Ban