const Discord = require('discord.js')

exports.run = async (client , message , args) => {
let embed = new Discord.MessageEmbed()
.setTimestamp()
.setDescription(`📉Şu anda pingim : ${client.ws.ping}ms`)
.setFooter(message.client.user.username , message.client.user.displayAvatarURL({dynamic : true}))
message.channel.send(embed)
}
exports.conf = {
    aliases: ["lag"],
    permLevel : 0
  }
  exports.help = {
    name : "ping"
  }
