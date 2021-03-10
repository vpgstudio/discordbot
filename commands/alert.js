exports.run = async (client, message, args, level) => {
  const sayMessage = args.join(" ");
  const channel = client.channels.find("name", "announcemnts");
  channel.send("@everyone " + sayMessage);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "alert",
  category: "Miscelaneous",
  description: "it alerts what you what",
  usage: "alert [message]"
};
