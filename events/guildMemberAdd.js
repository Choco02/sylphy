module.exports = class {
    constructor(client) {
        this.client = client;
    }
    run(member) {
        if (member.user.bot === true) {
            member.ban("Proteção contra bot ativada.")

        }
        /*
           Caso o usuário for um bot, a proteção irá bani-lo.
          */
    }
}