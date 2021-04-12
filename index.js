const Discord = require('discord.js');
const client = new Discord.Client(); 
const prefix = '*';
const fs = require('fs');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    console.log(`✅ ${command.name} Sėkmingai užkrautą`)
    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('Salsa prisijungęs!')
});

client.on('guildMemberAdd', member => {

    const newMemberEmbed = new Discord.MessageEmbed()
    .setColor('#cf3838')
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setDescription(`Sveikas <@${member.id}> atvykęs į Salsa Roleplay discordo serverį!`)
    .addField('Naujokams', 'Jei esi naujokas patariame paskaityti <#818389974789128233>\n Beto nepamiršk ir persiskaityti <#816989675830902814>');

    const channel = member.guild.channels.cache.find(ch => ch.id === '817002865037148221');

    channel.send(newMemberEmbed);
});

client.on('guildMemberRemove', member => {

    const newMemberEmbed = new Discord.MessageEmbed()
    .setColor('#cf3838')
    .setDescription(`<@${member.id}> išvažiavo ieškoti geresnio gyvenimo`);

    const channel = member.guild.channels.cache.find(ch => ch.id === '818516885921464371');

    channel.send(newMemberEmbed);
});

// Command handleris nieko daugiau
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(client.commands.get(command)){
        client.commands.get(command).execute(message, args,client)  
    }
});

client.login(process.env.TOKEN);
