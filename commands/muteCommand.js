const Base = require("../base/Command")

class Mute extends Base {
    constructor(client) {
        super(client, {
            name: "mute",
            description: "muta um membro do servidor.",
            usage: "!mute @member <tempo>",
            category: "Information",
            cooldown: 3000,
            aliases: ["mutar"],
            permission: "READ_MESSAGES"

        });

    }
   async run(message, args) {
        message.delete();

        if (message.member.roles.highest.position < message.guild.roles.cache.get("708685621387853864").position) return message.reply("você não tem permissão para usar este comando!").then(m => m.delete({ timeout: 7000 }))

        let member = message.mentions.members.first()

        let motivo = args.slice(2).join(' ')

        if (!motivo) motivo = 'Não informado.'

        let smutar = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
        if (!smutar) return message.reply("mencione um usuário por favor.").then(m => m.delete({ timeout: 7000 }))
        let muterole = message.guild.roles.cache.get('714941071662121000')
        let mutetime = args[1]
        if (!mutetime) return message.reply("insira o tempo que o membro irá ficar mutado.").then(m => m.delete({ timeout: 7000 }))

        await(smutar.roles.add(muterole.id));

        setTimeout(function () {
            smutar.roles.remove(muterole.id)
            message.channel.send(`<@${smutar.id}> foi desmutado!`).then(m => m.delete({ timeout: 7000 }))
        }, ms(mutetime))

        let embed = new MessageEmbed()
            .setDescription(`**👤 Membro Mutado:** ${member}\n📋 **Motivo:** ${motivo}\n**🚫 Mutado por:** ${message.author}\n⌚Tempo: ${mutetime}`)
            .setTitle("Punição | Mute")
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .setColor("#23272A")
        this.client.channels.cache.get('714916740072472767').send(embed)

        message.channel.send(`${member} foi mutado com sucesso!\nTempo: ${mutetime}\nMotivo: ${motivo}`).then(m => m.delete({ timeout: 7000 }))


    }
}
module.exports = Mute