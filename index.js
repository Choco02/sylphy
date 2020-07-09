const Client = require("./base/Client");

const client = new Client({ config: "./config" });
client.login(client.config.token);
client.loadCommands(client.config.paths.commands);
client.loadEvents(client.config.paths.events);