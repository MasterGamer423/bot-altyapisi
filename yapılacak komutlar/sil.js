const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sil')
        .setDescription('Sunucudaki mesajları belirtilen sayıda siler'),

    execute(interaction, options) {
        
    }
}