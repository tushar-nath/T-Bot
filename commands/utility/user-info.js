module.exports = {
	name: 'user-info',
	description: 'User Information!',
	execute(message, args) {
		message.reply(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};