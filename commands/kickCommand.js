const Base = require("../base/Command")
const { MessageEmbed } = require("discord.js")
class Kick extends Base {
    constructor(client) {
        super(client, {
            name: "kick",
            description: "Expulsa um usuário do servidor.",
            usage: "!kick @member",
            category: "Information",
            aliases: ["expulsar"],
        })
    }
    run(message, args) {
        message.delete();

        if (message.member.roles.highest.position < message.guild.roles.cache.get("708685621387853864").position) return message.reply("você não tem permissão para usar este comando!").then(m => m.delete({ timeout: 7000 }))

        let member = message.mentions.members.first()

        let motivo = args.slice(1).join(" ")

        if (!motivo) { motivo = "Não Informado" }

        if (!member) return message.reply("insira a ID do elemento.").then(m => m.delete({ timeout: 7000 }))

        if (member.id === message.author.id) return message.reply("Você não pode kikar na mia rola").then(m => m.delete({ timeout: 7000 }))

        member.kick(`Expulso por: ${message.author.tag} | Motivo: ${motivo}`).then(() => {

            let embedKickx = new MessageEmbed()
                .setDescription(`**👤 Membro Expulso:** ${member.user.tag}\n📋 **Motivo:** ${motivo}\n**🚫 Expulso por:** ${message.author}`)
                .setTitle("Punição | Kick")
                .setThumbnail(member.user.displayAvatarURL())
                .setTimestamp()
            this.client.channels.cache.get('714916740072472767').send(embedKickx)
            message.channel.send(`${member} foi expulso com sucesso.`).then(m => m.delete({ timeout: 7000 }))
        })
    }
}
module.exports = Kick