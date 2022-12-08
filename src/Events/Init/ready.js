const { Collection, ActivityType } = require('discord.js');
const commands = require('.app/src/server.js');
const config = require('../../config.json');
const helpCommand = require('../../Commands/Info/help');
// console.log(commands)
module.exports = (client) => {
  console.log(`Bot ${client.user.username} is online.`);
  client.user.setPresence({
            status: config.status.type,
            activities: [{
                name: config.status.name,
                type: ActivityType.Playing ,
            }]
        })
  client.guilds.cache.forEach((guild) => {
    client.application.commands.set(commands, guild.id).catch((err) => console.log(err));
  });
  client.application.commands.set([helpCommand.data.toJSON()]).catch((err) => console.log(err));
  client.guildConfigs = new Collection();
}
