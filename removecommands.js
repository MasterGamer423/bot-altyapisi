const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const rest = new REST({ version: 10 }).setToken(process.env.TOKEN);

//sunucuya dayalı slash komutları için 
rest.delete(Routes.applicationGuildCommand(process.env.CLIENT_ID, process.env.GUILD_ID, 'komut id'))
    .then(() => console.log('Belirtilen sunucuya dayalı komut(lar) başarıyla silindi.'))
    .catch(console.error);

//Global slash komutları için
/*rest.delete(Routes.applicationCommand(process.env.CLIENT_ID, 'komut id'))
    .then(() => console.log('Belirtilen Küresel komut başarıyla silindi.'))
    .catch(console.error);*/
