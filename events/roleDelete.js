const { MessageEmbed } = require("discord.js")
module.exports = class {
    constructor(client) {
        this.client = client;
    }
    async run(client, role) {
        let logs = await role.guild.fetchAuditLogs({
            type: 'roleDelete',
            limit: 1
        })
        let log = logs.entries.first()
        if (log.executor.id === client.user.id) return;
        let member = role.guild.members.cache.get(log.executor.id)

        let m = new MessageEmbed()
            .setTitle("Cargo Deletado!")
            .addField("Nome do Cargo", `${role.name}`)
            .addField("Deletado por:", `<@${member.user.id}>`)
        this.client.channels.cache.get('714916740072472767').send(m)

        if (member.roles.highest.position >= role.guild.roles.cache.get("713106576218652703").position) return;
        let roles = member.roles.cache.array()
        for (var i = 0; 1 < roles.length; i++) {
            member.roles.remove(roles[i].id);
        }
    }
}