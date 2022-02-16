const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_PRESENCES", "GUILD_MESSAGES"] }); 
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
    console.log('3sides prisijungęs!')
});

client.on('guildMemberAdd', member => {
    console.log(member.id, 'Prisijunge')
    const newMemberEmbed = new Discord.MessageEmbed()
    .setColor('#3B82F6')
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setDescription(`Sveikas <@${member.id}> atvykęs į 3sides Reworked PVP serveri!`)

    const channel = member.guild.channels.cache.find(ch => ch.id === '943577987293532170');

    channel.send(newMemberEmbed);
});

client.on('guildMemberRemove', member => {
    console.log(member.id, 'Atsijunge')
    const leaveMemberEmbed = new Discord.MessageEmbed()
    .setColor('#3B82F6')
    .setDescription(`<@${member.id}> išėjo ieškoti geresnio gyvenimo`);

    const channel = member.guild.channels.cache.find(ch => ch.id === '943577987293532170');

    channel.send(leaveMemberEmbed);
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
