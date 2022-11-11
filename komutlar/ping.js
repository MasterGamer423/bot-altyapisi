const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Pong cevabı gönderir.'),
    async execute(interaction, options) {
        await interaction.reply('Pong!')
    },
};