const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sahip")
    .setDescription(".gg/1940"),
    run: async (client, interaction) => {
      interaction.reply(`discord.gg/1940`)
    }
 };
