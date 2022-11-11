const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('çarpma')
    .setDescription('Belirtilen 2 sayıyı çarpar')
    .addNumberOption(option => 
        option.setName('sayı1')
        .setDescription('ilk sayı')
        .setRequired(true)
        )
    .addNumberOption(option => 
        option.setName('sayı2')
        .setDescription('ikinci sayı')
        .setRequired(true)
        ),

    execute(interaction, options, member) {
        const sayı1 = options.getNumber('sayı1') || 0
        const sayı2 = options.getNumber('sayı2') || 0

        interaction.reply(`${sayı1} * ${sayı2} = ${sayı1*sayı2}`)
    }
}