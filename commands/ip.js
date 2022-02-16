const Discord = require('discord.js');

module.exports={
    name: 'ip',
    description: 'Serverio ip',
    execute(message, args, bot){

	 if(message.channel.id != '943578027378503750'){
		  message.delete()
		message.author.send('`*ip` komanda gali naudoti tik <#943578027378503750> kanale 😊')
		return;
	 }
	    
        const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#169be6')
	    .addFields(
		    { name: 'Paspauskite F8', value: 'Kai jums pasirodys konsole įveskite `play.3sides.lt`' },
            { name: 'Paieškos laukelis', value: 'Paieškos laukelije įveskite 3sides' },
	    );
	    //.setTimestamp()
	    //.setFooter(`${message.author}`, 'https://i.imgur.com/wSTFkRM.png');

        message.channel.send(welcomeEmbed)
    }      
}
