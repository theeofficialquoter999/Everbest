const {
  aitts,
  smd,
  prefix,
  Config,
  createUrl,
  parsedJid,
  sleep,
} = require("../lib");
const axios = require("axios");
const { send } = require("../lib");
const fetch = require("node-fetch");
smd(
  {
    pattern: 'gemini2 ',
    desc: 'google gemini',
    type: 'ai',
  },
  async (message, match, ctx) => {
    if (!ctx.GEMINI_API_KEY) {
      return await message.send(
        'Missing Gemini API key? Get one at https://aistudio.google.com/app/apikey.\nsetvar GEMINI_API_KEY = api_key'
      )
    }

    if (!match) {
      return await message.send(
        '*Example :*\ngemini hi\ngemini what is in the picture(reply to a image)'
      )
    }

    let image
    if (message.reply_message && message.reply_message.image) {
      image = {
        image: await message.reply_message.downloadMediaMessage(),
        mimetype: message.reply_message.mimetype,
      }
    }

    const res = await gemini(match, message.id, image)
    await message.send(res.data, { quoted: message.data })
  }
)
        
