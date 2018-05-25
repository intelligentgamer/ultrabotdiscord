const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login(process.env.TOKEN)

client.on(`message`, message => {
    
    if(message.content === "Bonjour tu fait quoi"){
        message.reply("salut je m'appelle ultrabot et Je te surveille XDDD");
        console.log("Le bot dit bonjour et Je te surveille XDDD");
    if(message.content === "ub!!Ping")
       message.reply("pong :ping_pong: ")
       console.log('Le bot dit pong !') 
        }
    });
client.on("ready", function() {
    client.user.setActivity("ub!!|cree par Jean0", {type:"PLAYING"})
    console.log("Bot Ready")

    
})
