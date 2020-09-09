exports.run = async (client, message, args, level) => {
  message.channel.send(
    "The rules?? They are in the rules channel <@" + message.author.id + ">"
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User",
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "It says what you whant.",
  usage: "say [message]",
};
