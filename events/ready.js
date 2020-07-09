module.exports = class {
    constructor(client) {
        this.client = client;
    }
    run(client) {
        console.log(`Sylphy defender Online!`)
        this.client.user.setActivity("Hello!")
    }
}