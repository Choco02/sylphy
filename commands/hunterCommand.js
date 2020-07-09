const Base = require("../base/Command")
const { MessageEmbed } = require("discord.js")
class bugHunter extends Base {
    constructor(client) {
        super(client, {
            name: "addbughunter",
            description: "Adiciona o cargo Caçador-de-Bugs à um usuário do servidor.",
            usage: "!addbughunter @mention",
            category: "Information",
            cooldown: 1000,
            aliases: [""],
            permLevel: 0,
            permission: "READ_MESSAGES"
        });
    }
    run(message, args) {
        message.delete()
        if (message.author.id !== "297494104529567745") return; //esse comando só ira funcionar com o id colocado

        let member = message.mentions.members.first()
        if (!member) return message.reply("mencione um membro válido.") //caso nenhum usuário for mencionado, irá retornar uma mensagem no canal.

        this.client.channels.cache.get('720782059773362270').send(`${member}!`) //aqui o bot irá pegar o canal e enviar uma mensagem mencionando o membro
        const info = new MessageEmbed()
            .setTitle("Um novo membro se tornou um caçador de bugs!")
            .setThumbnail(member.user.displayAvatarURL())
            .setColor("RANDOM")
            .setDescription(`Parabéns ${member}, você se tornou um caçador de bugs da Kiumy!\n\nVocê recebeu o cargo: <@&720772165514952746> como selo de honra.`)
            .setFooter(`Caçador de bugs na área: ${member.user.tag} `)
        this.client.channels.cache.get('720782059773362270').send(info).then((m) => {
            m.react("🌟") //o bot irá reagir a embed acima
            member.roles.add(["720772165514952746"]) //aqui o bot irá procurar a role nos ervidor e adicionar no membro
        })


    }
}
module.exports = bugHunter //aqui irá exportar o quê você definiu no class do começo do comando