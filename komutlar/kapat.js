const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kapat')
    .setDescription('Botu Kapatır (sadece botu geliştirenler kullanabilir)'),

    async execute(interaction, options) {
        if(interaction.user.id === process.env.OWNER_ID) {
            await interaction.reply({ content: "Bot başarılı bir şekilde kapatılmıştır", ephemeral: true })
            process.exit(1)
        } else {
            return interaction.reply({ content: "Bu komutu sadece sahibim kullanabilir", ephemeral: true })
        }
    },
};