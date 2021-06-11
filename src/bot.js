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
		message.channel.send('Supported commands :\n$help - Displays the help menu\n$ping - Should respond with a pong and display the latency\n$avatar - Displays the avatar of the user\n$server - Displays the name of the server\n$user-info - Displays the information of the user and its ID');
	} else if (command === 'ping') {
		const timeTaken = Date.now() - message.createdTimestamp;
    	message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === `server`) {
		message.channel.send(`This server's name is: ${message.guild.name}`);
	} else if (command === `user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if (command === 'avatar') {
		if (!message.mentions.users.size) {
			return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
		}
		
		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: <${user.displayAvatarURL({ format: 'png', dynamic: true })}>`;
		});
	
		message.channel.send(avatarList);
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