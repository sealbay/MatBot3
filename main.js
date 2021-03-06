const Discord = require('discord.js'); //Henter discord module, så botton kan køre

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]}); // kalder botten for client (nemmest at huske)

const prefix = '!'; //prefix er med til så botton ved om beskden er til ham eller bare chatten

client.commands = new Discord.Collection();

const fs = require('fs'); //Henter filehandler module, så den kan finde rundt i systemets filer
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); //Bruger fs til at læse efter filer som ender med "js"
for(const file of commandFiles){ //Bruger for loop til at loade filerne ind
    const command = require(`./commands/${file}`); //Finderne filerne i mappen "commands"
    client.commands.set(command.name, command); 
}

client.on('ready', function (){
    console.log(`Logged in as ${bot.user.tag}!`);
    const channel = guild.channels.cache.find(channel => channel.type === 'text');
    channel.send("THANK YOU for choosing me! \n  If you want to know more about what I can do, type the following command:\n !help\n \n God fornøjelse")
    
});

client.on("guildCreate", guild => {
    const channels = guild.channels.cache.filter(channel => channel.type == "text");

    channels.first().send("THANK YOU for choosing me! \n If you want to know more about what I can do, type the following command:\n !help\n \n Enjoy Much!").catch(e => console.log(e));
});

client.on('message', message => {
    
    if(!message.content.startsWith(prefix) || message.author.bot) return; //Hvis beskeden fra en bruger starter med prefix eller en forfatter er en bot, så kør videre eller ignore

    const args = message.content.slice(prefix.length).split(/ +/); //Laver en args, så man kan skrive flere ting fx "!wiki school"
    const command = args.shift().toLowerCase(); //Sætter kommandoen til små bogstaver
    const user = message.author; //Laver en konstant så man botton kan reply til brugeren

    client.user.setActivity("For help type: !help");

    if(command === 'ping'){ //Hvis kommandoen er lig med "ping" så kør videre ellers ignore
        client.commands.get('ping').execute(message, args, user,command); //kør filen ping.js
    } 

    else if(command === 'hello'){
        client.commands.get('hello').execute(message, args, user);
    }

    else if(command === 'help'){
        client.commands.get('help').execute(message, args, user);
    }

    else if(command === 'invite'){
        client.commands.get('invite-link').execute(message, args);
    }

    else if(command === 'invitebot'){
        client.commands.get('invite-bot').execute(message, args);
    }

    else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    }

    else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    }

    else if (command === 'unban') {
        client.commands.get('unban').execute(message, args);
    }

    else if (command === 'funfact') {
        client.commands.get('funfact').execute(message, args);
    }

    else if (command === 'commands') {
        client.commands.get('commands').execute(message, args);
    }

    else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    }

    else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }

    else if (command === 'calc') {
        client.commands.get('calc').execute(message, args);
    }

    else if (command === 'area') {
        client.commands.get('area').execute(message, args, user);
    }

    else if (command === 'pyth') {
        client.commands.get('pyth').execute(message, args, user);
    }

    else if (command === 'bmi') {
        client.commands.get('bmi').execute(message, args, user);
    }

    else if (command === 'pct') {
        client.commands.get('pct').execute(message, args, user);
    }

    else if (command === 'roles') {
        client.commands.get('roles').execute(message, Discord, client);
    }

    else{
        message.channel.send('Invalid command - Use the command "!commands" for more information'); 
    }
    
    
});



client.login('TOKEN'); //Bottons hemmelige token, som gør man kan snakke sammen med Discord API

