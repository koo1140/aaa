const axios = require("axios"); // API interaction package.
const { SlashCommandBuilder, EmbedBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removeuser")
    .setDescription(`Deletes an user from the dashboard`)
    .addStringOption((option) =>
      option
        .setName("username")
        .setDescription(`The username of the user you want to delete.`)
        .setRequired(true)
    ),
  async execute(interaction) {
    let username = interaction.options.getString("username");
  }
};
