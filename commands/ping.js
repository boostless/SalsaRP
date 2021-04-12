module.exports={
    name: 'ping',
    description: 'ping command',
    execute(message, args, bot){
        message.channel.send(`${message.author}, pong`)
    }
}