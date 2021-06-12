const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'Invite me to some servers!',
    execute(message, args) {
        message.reply("invite me ==> https://discord.com/api/oauth2/authorize?client_id=851537041425956894&permissions=3224894529&scope=bot")
    }
}
