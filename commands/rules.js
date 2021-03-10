exports.run = async (client, message, args, level) => {
  message.channel.send(
    "The rules?? They are in the rules channel <@" + message.author.id + ">"
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "rules",
  category: "Miscelaneous",
  description: "Give you the rules",
  usage: "rules",
};
