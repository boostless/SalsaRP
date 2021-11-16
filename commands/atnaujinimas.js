const Discord = require('discord.js');

module.exports={
    name: 'atnaujinimas',
    description: 'serverio atnaujinimas',
    execute(message, args, bot){
	if(message.channel.id != '874702203087097886'){
		message.delete()
	  return;
	} 
        message.delete()
        var title = ""
        var description = ""
        const updateEmbed = new Discord.MessageEmbed()
        .setColor('#3B82F6')
        .setTimestamp()
        .setFooter(`• Atnaujinima paskelbė ${message.author.username}`)
	    .setTitle('3sides.lt Atnaujinimas');

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
        bot.channels.cache.find(channel => channel.name === '📢┇atnaujinimai').send({embeds:[updateEmbed]});
    }      
}
