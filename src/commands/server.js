const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sunucu")
    .setDescription("şuan sunucu bulunmamaktadır."),
    run: async (client, interaction) => {
      interaction.reply(`şuan sunucu bulunmamaktadır.`)
    }
 };
