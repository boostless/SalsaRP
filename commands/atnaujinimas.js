const Discord = require('discord.js');

module.exports={
    name: 'atnaujinimas',
    description: 'serverio atnaujinimas',
    execute(message, args, bot){
	if(message.channle.id != '816988698930577409') message.delete() return;
        message.delete()
        var title = ""
        var description = ""
        const updateEmbed = new Discord.MessageEmbed()
        .setColor('#cf3838')
        .setTimestamp()
        .setFooter(`• Atnaujinima paskelbė ${message.author.username}`)
	    .setTitle('Salsa Atnaujinimas');

        for(var arg = 0; arg < args.length; ++ arg){
            if(args[arg].includes('^')){
                description = ""
                title = args[arg].replace('^','')
                for(var i=arg+1; i < args.length; ++ i){
                    if(args[i].includes('^')){
                        break;
                    }                 
                    description = description + ' ' + args[i]                  
                }
                updateEmbed.addField(`${title}`, `• ${description}`); 
            }
        }

        //updatechannel.send(updateEmbed)
        bot.channels.cache.find(channel => channel.name === '🆕atnaujinimai').send(updateEmbed);
    }      
}
