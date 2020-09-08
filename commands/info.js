exports.run = async (client, message, args, level) => {
  message.channel.send(
    "<@" +
      message.author.id +
      "> Here you go, (https://vpgstudio.github.io/), or (https://vpgstudio.github.io/about/discord/adin-bot)"
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: "User"
};

exports.help = {
  name: "info",
  category: "Miscelaneous",
  description: "It givs you info!!!",
  usage: "info"
};
