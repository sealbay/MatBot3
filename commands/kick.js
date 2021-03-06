module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){

        const target = message.mentions.users.first();
        const memberTarget = message.guild.members.cache.get(target.id);

        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`The user has been kicked: ${memberTarget}!`);
        }else{
            message.channel.send(`You couldn't kick that member!`);
        }
    }
}