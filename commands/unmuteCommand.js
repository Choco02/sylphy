const Base = require("../base/Command")

class Unmute extends Base {
    constructor(client) {
        super(client, {
            name: "unmute",
            description: "desmuta um usuário que foi mutado.",
            usage: "!unmute @menção",
            category: "Information",
            cooldown: 3000,
            aliases: ['desmutar'],
            permission: "READ_MESSAGES"
        })
    }
    run(message, args) {
        const { MessageEmbed } = require("discord.js")
        if (message.member.roles.highest.position < message.guild.roles.cache.get("708685621387853864").position) return message.reply("você não tem permissão para usar este comando!").then(m => m.delete({ timeout: 7000 }))
        if (!args[0]) return message.reply("mencione o membro, ou insira a ID!").then(m => m.delete({ timeout: 7000 }))

        let muteRole = message.guild.roles.cache.get('714941071662121000')
        let member = message.mentions.members.first();
        let memberRed = message.mentions.members.first();
        let memberRole = memberRed.roles.cache.get('714941071662121000')

        if (!memberRole) return message.reply("Este usúario não está mutado no servidor!").then(m => m.delete({ timeout: 7000 }))
        if (!member) return message.reply("mencione um usuário válido!").then(m => m.delete({ timeout: 7000 }))

        member.roles.remove(muteRole);
        let a = new MessageEmbed()
            .setTitle(`Informação | Unmute`)
            .setDescription(`**👤 Membro Desmutado:** ${member}\n**🚫 Desmutado por:** ${message.author}`)
            .setTitle("Um Usuário foi Desmutado!")
            .setColor("#23272A")
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
        this.client.channels.cache.get("714916740072472767").send(a)

        message.channel.send(`${member} foi desmutado!`).then(m => m.delete({ timeout: 7000 }))
    }
}
module.exports = Unmute