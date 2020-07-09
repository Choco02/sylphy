const Base = require("../base/Command");
class Ping extends Base {
    constructor(client) {
        super(client, {
            name: "ping",
            description: "Pings the bot.",
            usage: "",
            category: "Information",
            cooldown: 1000,
            aliases: ["pong"],
            permLevel: 0,
            permission: "READ_MESSAGES"
        });
    }

    run(message) {
        message.channel.send(`Ping! ${message.createdAt - Date.now()}ms.`);
    }
}

module.exports = Ping;