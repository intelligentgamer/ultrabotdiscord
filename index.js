const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login(process.env.TOKEN)

client.on(`message`, message => {
    
    if(message.content === "Bonjour"){
        message.reply("salut je m'appelle ultrabot");
        console.log("Le bot dit bonjour");
    }
});

client.on("ready", function() {
    client.user.setActivity("ub!!", {type:"PLAYING"})
    console.log("Bot Ready")

    
})
