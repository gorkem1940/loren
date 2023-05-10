const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sahip")
    .setDescription("gorkem"),
    run: async (client, interaction) => {
      interaction.reply(`gorkem`)
    }
 };
