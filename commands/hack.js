exports.run = async (client, message, args, level) => {
  message.channel.send("No, <@" + message.author.id + ">");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hack",
  category: "Miscelaneous",
  description: "Hack youre friends!!!!",
  usage: "hack"
};
