const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
const bot = new Discord.Client();

const { prefix, token } = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
	
	if (command === 'help') {
		message.reply('good to have you here. The Supported commands are :\n\n$help - Displays the help menu\n$ping - Should respond with a pong and display the latency\n$avatar - Displays the avatar of the user\n$server - Displays the name of the server\n$user-info - Displays the information of the user and its ID\n$prune [range] - Should delete the number of messages specified in the range');
	} else if (command === 'ping') {
		const timeTaken = Date.now() - message.createdTimestamp;
    	message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	} else if (command === 'beep') {
		message.reply('Boop.');
	} else if (command === `server`) {
		message.reply(`This server's name is: ${message.guild.name}`);
	} else if (command === `user-info`) {
		message.reply(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.reply(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});
	
		message.channel.send(avatarList);
	} else if (command === 'prune') {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('that doesn\'t seem to be a valid number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('you need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('there was an error trying to prune messages in this channel!');
		});
	}
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: "$help",
            type: "PLAYING"
        }
    });
});


client.login('ODUxNTM3MDQxNDI1OTU2ODk0.YL5tqw.jMQZfV5-PQT8_q0wP1Bh2rSSq-8');