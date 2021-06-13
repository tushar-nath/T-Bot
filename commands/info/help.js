const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows all the commands of this bot.",
  usage: "(command name)",
  cooldown: 3,
  async execute(message, args, prefix) {
    console.log(args);
    if (args.length === 0 || args[0] === "" || args === undefined) {
      const helpEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("T-Bot")
        .setDescription(
          "The prefix must be typed before the command for it to work.\nThe current prefix of T-Bot is '$' without the quotations."
        );

      const helpInfo = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .addField(":flower_playing_cards: Fun", "`meme`, `joke`, `chucknorris`, `idea`, `advice` `avatar`, `cat`, `beep`, `color`")
        .addField(":toolbox: Utility", "`help`, `movie`, `weather`, `invite`, `user`, `server`, `ping`, `del`")
        .addField(":rocket: International Space Station API", "`isslocation`, `isspeople` ")
        .setFooter("Requested by " + message.author.username, message.author.avatarURL());

      message.channel.send(helpEmbed);
      message.channel.send(helpInfo);
    } else {
      try {
        const command = require(`${__dirname}/${args}.js`);
      } catch {
        message.reply("Command not found!");
        return;
      }
      let arg, usage;
      const command = require(`${__dirname}/${args}.js`);
      if (command.args) {
        arg = "True";
      } else {
        arg = "False"
      }
      if (command.usage) {
        usage = command.usage
      } else {
        usage = "No usage specified."
      }
      const commandEmbed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle(`${prefix}${command.name}`)
        .setDescription(`${command.description}`)
        .addField("**Arguments**", arg)
        .addField("**Usage**", "`" + usage + "`")
        .addField("**Cooldown**", command.cooldown + "s")
        .setFooter("Requested by " + message.author.username, message.author.avatarURL());
      
      message.channel.send(commandEmbed);
      console.log(command);
    }
  }
};