const axios = require("axios"); // API interaction package.
const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("execute")
    .setDescription(`Executes a chosen command on the mexar server.`)
    .addStringOption((option) =>
      option
        .setName("password")
        .setDescription(`The password to verify authentication.`)
        .setRequired(true)
    ),
  async execute(interaction) {
    let password = interaction.options.getString("password");
  }
};
