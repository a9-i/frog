var fs = require('fs');
var Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('.frog | frog.wtf', { type: 'PLAYING' });
  console.log(`[Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;

  if (message.content.startsWith('.frog') || message.content.startsWith('.phrog')) {
    var frogs = fs.readdirSync('./frogs');
      .map(file => {
        return `frogs/${file}`;
      })

    message.channel.send({ files: [frogs[Math.floor(Math.random() * (frogs.length - 1))]] });
  }
})

client.login(process.env.TOKEN);
