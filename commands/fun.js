exports.run = async (client, message, args, level) => {
  // eslint-disable-line no-unused-vars
  if (!args || args.length < 1)
    return message.reply('Must provide a command to play. Derp.')
  const command = args[0]

  if (command === 'ha') {
    message.channel.send(
      ':joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy:'
    )
  } else if (command === 'corona') {
    message.channel.send('Ono i dont like corona')
  } else if (command === '?') {
    message.channel.send('what????')
  } else if (command === '?!' || command === '!?') {
    message.channel.send('WHAT?!?!?!??!')
  } else if (command === 'pizza') {
    const msg = await message.channel.send('WHAT?!?!?!??!')
    setTimeout(() => {
      msg.edit(':pie:')
    }, 2000)
  } else if (command === 'pie') {
    const msg = await message.channel.send('WHAT?!?!?!??!')
    setTimeout(() => {
      msg.edit(':pizza:')
    }, 2000)
    setTimeout(() => {
      msg.edit(
        ':pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: :pizza: '
      )
    }, 5010)
  } else if (command === 'ping') {
    const msg = await message.channel.send('Ping?')
    msg.edit(
      `Pong! Latency is ${msg.createdTimestamp -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ping
      )}ms`
    )
  } else if (command === 'cool') {
    message.react('😄')
  } else {
    message.channel.send('Sorry, ' + command + ' dident exist try ´~help fun´')
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 'User'
}

exports.help = {
  name: 'fun',
  category: 'Miscelaneous',
  description:
    'Play ~fun ha to play a ha command, \nOr ~fun corona to make a corona mesage, \nOr ~fun ? to do somfing \nOr ~fun !? to get the same result as the first \nAnd more',
  usage: 'fun [command]'
}
