exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  const sayMessage = args.join(" ");

  message.delete().catch(O_o => {});

  message.channel.send("<@" + message.author.id + "> sade: " + sayMessage);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "say",
  category: "Miscelaneous",
  description: "It like... Pings. Then Pongs. And it's not Ping Pong.",
  usage: "say [message]"
};
