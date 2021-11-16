const Discord = require('discord.js');

module.exports={
    name: 'ip',
    description: 'Serverio ip',
    execute(message, args, bot){

	 if(message.channel.id != '874695047390584872'){
		  message.delete()
		message.author.send('`*ip` komanda gali naudoti tik <#874695047390584872> kanale 😊')
		return;
	 }
	    
        const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#3B82F6')
	    .setTitle('Kaip nuvažiuoti į 3sides ?')
	    .addFields(
		    { name: 'Paspauskite F8', value: 'Kai jums pasirodys konsole įveskite `NERA`' },
            { name: 'Paieškos laukelis', value: 'Paieškos laukelije įveskite 3sides' },
	    );
	    //.setTimestamp()
	    //.setFooter(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send({embeds:[welcomeEmbed]})
    }      
}
