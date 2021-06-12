module.exports = {
	name: 'server',
	description: 'Server!',
	execute(message, args) {
		message.reply(`This server's name is: ${message.guild.name}`);
	},
};