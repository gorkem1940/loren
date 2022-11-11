const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sahip")
    .setDescription("tanrisiz visa#1940"),
    run: async (client, interaction) => {
      interaction.reply(`tanrisiz visa#1940`)
    }
 };
