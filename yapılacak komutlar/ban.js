const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Belirttiğiniz kullanıcıyı sunucudan banlar')
    .addUserOption
}