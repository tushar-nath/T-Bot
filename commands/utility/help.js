module.exports = {
	name: 'help',
	description: 'Help!',
	execute(message, args) {
		message.reply('good to have you here. The Supported commands are :\n\n$help - Displays the help menu\n$ping - Should respond with a pong and display the latency\n$avatar - Displays the avatar of the user\n$server - Displays the name of the server\n$user-info - Displays the information of the user and its ID\n$prune [range] - Should delete the number of messages specified in the range');
	},
};