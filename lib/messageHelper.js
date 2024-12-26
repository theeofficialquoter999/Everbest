// lib/messageHelpers.js

/**
 * Sends a button message.
 * @param {Object} context - The context object.
 * @param {string} chatId - The chat ID to send the message to.
 * @param {string} text - The main text of the message.
 * @param {Array} buttons - An array of buttons for the message.
 * @param {string} footer - Footer text for the message.
 * @param {Object} [externalAdReply] - Optional external link information.
 */
async function sendButtonMessage(context, chatId, text, buttons, footer, externalAdReply) {
  const options = {
    text: text,
    buttons: buttons,
    footer: footer,
    headerType: 1,
    contextInfo: {
      forwardingScore: 100,
      isForwarded: true,
      externalAdReply: externalAdReply || {
        title: 'Pʟᴀᴛɪɴᴜᴍ-V1',
        sourceUrl: 'https://whatsapp.com/channel/0029Vas9N7MBA1f0yw8dZ515'
      }
    }
  };

  // Send the message with buttons using `context.sendMessage`
  return context.sendMessage(chatId, options);
}

module.exports = { sendButtonMessage };
