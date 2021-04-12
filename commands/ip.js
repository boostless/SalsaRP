const Discord = require('discord.js');

module.exports={
    name: 'ip',
    description: 'Serverio ip',
    execute(message, args, bot){

        const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#cf3838')
	    .setTitle('Kaip nuvažiuoti į Salsa ?')
	    .addFields(
		    { name: 'Paspauskite F8', value: 'Kai jums pasirodys konsole įveskite `connect 185.34.52.180`' },
            { name: 'Paieškos laukelis', value: 'Paieškos laukelije įveskite SalsaRP' },
	    );
	    //.setTimestamp()
	    //.setFooter(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(welcomeEmbed)
    }      
}