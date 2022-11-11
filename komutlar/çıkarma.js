const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('çıkarma')
        .setDescription('Belirtilen 2 sayıyı çıkarır')
        .addNumberOption(option => 
            option.setName('sayı1')
            .setDescription('İlk sayı')
            .setRequired(true)
            )
        .addNumberOption(option => 
            option.setName('sayı2')
            .setDescription('İkinci sayı')
            .setRequired(true)
            ),
    
    async execute(interaction, options, member) {
        const sayı1 = options.getNumber('sayı1') || 0
        const sayı2 = options.getNumber('sayı2') || 0

        await interaction.reply(`${sayı1} - ${sayı2} = ${sayı1-sayı2}`)
    }
}