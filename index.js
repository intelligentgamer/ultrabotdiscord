const Discord = require ("discord.js")
const client = new Discord.Client()
var prefix = "ub!!";
client.login("NDQ4NTc5NDQwMTU5NzUyMTky.DeYi2A.5uiKl7I5ZwkdfmqYNzYoVP7ZX6s")

client.on("ready", function() {
    client.user.setActivity("ub!!", {type:"PLAYING"})
    console.log("Bot Ready")

    
})