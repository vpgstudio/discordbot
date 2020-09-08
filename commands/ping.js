exports.run = async (client, message, args, level) => {
  message.channel.send("Pong").then(m => {
    var ping = m.createdTimestamp - message.createdTimestamp;
    var botPing = Math.round(client.pi);

    m.edit(`**:ping_pong: Pong! Your Ping Is:-**\n  ${ping} ms ` + "<@" + message.author.id + ">");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "ping",
  category: "Miscelaneous",
  description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
  usage: "ping"
};
