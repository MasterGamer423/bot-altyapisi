const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toplama')
        .setDescription('Belirtilen 2 sayıyı toplar')
        .addNumberOption(option => 
            option.setName('sayı1')
                .setDescription('Toplamak istediğiniz 1. sayı')
                .setRequired(true)
            )
        .addNumberOption(option => 
            option.setName('sayı2')
                .setDescription('Toplamak istediğiniz ikinci sayı')
                .setRequired(true)
            ),

    async execute(interaction, options) {
        const sayı1 = options.getNumber('sayı1') || 0
        const sayı2 = options.getNumber('sayı2') || 0

        await interaction.reply({
            content: `${sayı1} + ${sayı2} = ${sayı1+sayı2}`
        })
    }
}