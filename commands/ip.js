const Discord = require('discord.js');

module.exports={
    name: 'ip',
    description: 'Serverio ip',
    execute(message, args, bot){

	 if(message.channel.id != '816991922815893614'){
		  message.delete()
		message.author.send('`*ip` komanda gali naudoti tik <#816991922815893614> kanale 😊')
		return;
	 }
	    
        const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#cf3838')
	    .setTitle('Kaip nuvažiuoti į Salsa ?')
	    .addFields(
		    { name: 'Paspauskite F8', value: 'Kai jums pasirodys konsole įveskite `connect cfx.re/join/llg8z7`' },
            { name: 'Paieškos laukelis', value: 'Paieškos laukelije įveskite SalsaRP' },
	    );
	    //.setTimestamp()
	    //.setFooter(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(welcomeEmbed)
    }      
}
