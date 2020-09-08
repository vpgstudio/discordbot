exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const msg = await message.channel.send("Hello <@" + message.author.id + ">");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "hello",
  category: "Miscelaneous",
  description: "It sas hello to you :)",
  usage: "hello @Adin#7618"
};
