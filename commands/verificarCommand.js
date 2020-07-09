const Base = require("../base/Command")
const { MessageEmbed } = require("discord.js")
class Verified extends Base {
    constructor(client) {
        super(client, {
            name: "verificar",
            description: "Verifica um Artista/Fãn-Art do servidor",
            usage: "!verificar @member",
            category: "Information",
            cooldown: 1000,
            aliases: [""],
            permLevel: 0,
            permission: "READ_MESSAGES"
        });
    }
    run(message, args) {
        if (message.member.roles.highest.position < message.guild.roles.cache.get("710113676706971689").position) return message.reply("você não tem permissão para usar este comando!").then(m => m.delete({ timeout: 7000 }))
        message.delete()
        let member = message.mentions.members.first()
        if (!args[0]) {
            return message.reply(`\nUse: !verificar artista - Para verificar um usuário artista.\nOu\n!verificar fanart - Para verificar um usuário que fez uma fãnart da Kiumy.`)
        }
        if (args[0] == "artista") {
            if (!args[1]) return message.reply("mencione o usuário que deseja verificar!").then(m => m.delete({ timeout: 7000 }))
            let c = new MessageEmbed()
                .setTitle("Artista verificado com sucesso!")
                .setThumbnail(member.user.displayAvatarURL())
                .setDescription(`Parabéns ${member}, você foi verificado como \`Artista\` no Servidor! `)
                .setFooter(`Você foi verificado(a) por: ${message.author.tag}`, message.author.avatarURL())
            message.channel.send(c).then((x) => {
                member.roles.add(['730930663376551967'])
            })
        }
        if (args[0] == "fanart") {
            if (!args[1]) return message.reply("mencione o usuário que deseja setar como fanart!").then(m => m.delete({ timeout: 7000 }))
            let fan = new MessageEmbed()
                .setTitle("Fãn-art verificada com sucesso! ♥")
                .setDescription(`Olá ${member}, muito obrigada por me desenhar, eu e meu criador gostamos bastante de sua fãn-art!`)
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter(`Você foi verificado(a) por: ${message.author.tag}`, message.author.avatarURL())
            message.channel.send(fan).then((ç) => {
                member.roles.add(['730930666329473114'])
            })
        }
    }
}
module.exports = Verified