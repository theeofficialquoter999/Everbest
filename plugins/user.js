const {
  tlang,
  getAdmin,
  prefix,
  Config,
  sck,
  sck1,
  fetchJson,
  getBuffer,
  runtime,
  smd
} = require("../lib");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
smd({
  'pattern': 'jid',
  'desc': "get jid of all user in a group.",
  'category': "user",
  'filename': __filename,
  'use': '<@user>'
}, async ({
  jid: _0x317d9b,
  reply: _0x355aae,
  quoted: _0x5256f4
}) => {
  if (_0x5256f4) {
    return _0x355aae(_0x5256f4.sender);
  } else {
    return _0x355aae(_0x317d9b);
  }
});
smd({
  'pattern': "getpp",
  'desc': "Get Profile Pic For Given User",
  'category': "user",
  'filename': __filename
}, async _0x24b8a0 => {
  try {
    let _0x4cd072 = _0x24b8a0.reply_message ? _0x24b8a0.reply_message.sender : _0x24b8a0.mentionedJid[0x0] ? _0x24b8a0.mentionedJid[0x0] : _0x24b8a0.from;
    let _0x23f248;
    try {
      _0x23f248 = await _0x24b8a0.bot.profilePictureUrl(_0x4cd072, "image");
    } catch (_0x42ab42) {
      return _0x24b8a0.reply("```Profile Pic Not Fetched```");
    }
    return await _0x24b8a0.bot.sendMessage(_0x24b8a0.chat, {
      'image': {
        'url': _0x23f248
      },
      'caption': "  *---Profile Pic Is Here---*\n" + Config.caption
    }, {
      'quoted': _0x24b8a0
    });
  } catch (_0x40b881) {
    await _0x24b8a0.error(_0x40b881 + "\n\ncommand : getpp", _0x40b881);
  }
});
smd({
  'pattern': "whois",
  'desc': "Makes photo of replied sticker.",
  'category': 'user',
  'use': "<reply to any person>",
  'filename': __filename
}, async _0x5b9714 => {
  try {
    let _0x354e18 = _0x5b9714.reply_message ? _0x5b9714.reply_message.sender : _0x5b9714.mentionedJid[0x0] ? _0x5b9714.mentionedJid[0x0] : false;
    if (!_0x354e18 && _0x5b9714.isGroup) {
      const _0x561b75 = (await _0x5b9714.bot.profilePictureUrl(_0x5b9714.chat, "image")["catch"](_0x1c3876 => 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg')) || THUMB_IMAGE;
      const _0x3bf573 = _0x5b9714.metadata;
      const _0x3526c9 = _0x5b9714.admins.map((_0x2df5bb, _0x5c8c6c) => "  " + (_0x5c8c6c + 0x1) + ". wa.me/" + _0x2df5bb.id.split('@')[0x0]).join("\n");
      const _0x46b7ba = _0x3bf573.owner || _0x5b9714.admins.find(_0x297d66 => _0x297d66.admin === "superadmin")?.['id'] || false;
      let _0x204314 = "\n      *「 GROUP INFORMATION 」*\n*▢ NAME :* \n   • " + _0x3bf573.subject + "\n*▢ Members :*\n   • " + _0x3bf573.participants.length + "\n*▢ Group Owner :*\n   • " + (_0x46b7ba ? "wa.me/" + _0x46b7ba.split('@')[0x0] : 'notFound') + "\n*▢ Admins :*\n" + _0x3526c9 + "\n*▢ Description :*\n   • " + (_0x3bf573.desc?.['toString']() || "_not set_") + "\n   ";
      return await _0x5b9714.reply(_0x561b75, {
        'caption': _0x204314
      }, "image");
    } else {
      if (!_0x354e18) {
        return _0x5b9714.reply("*_Please Reply To A Person!_*");
      }
      try {
        var _0x12d99e = await _0x5b9714.bot.fetchStatus(_0x354e18);
        var _0x23847e = _0x12d99e.status;
        var _0xfd4a68 = _0x12d99e.setAt.toString();
        var _0x5d0d88 = _0xfd4a68.split(" ");
        if (_0x5d0d88.length > 0x3) {
          _0xfd4a68 = _0x5d0d88.slice(0x0, 0x5).join(" ");
        }
      } catch {
        var _0x23847e = "undefined";
        var _0xfd4a68 = '';
      }
      var _0x52ccee = _0x354e18.split('@')[0x0];
      let _0x5ae446;
      try {
        _0x5ae446 = await _0x5b9714.bot.profilePictureUrl(_0x354e18, "image");
      } catch (_0x17156a) {
        _0x5ae446 = 'https://telegra.ph/file/29a8c892a1d18fdb26028.jpg';
      }
      var _0xf3d6e0 = await _0x5b9714.bot.getName(_0x354e18);
      return await _0x5b9714.bot.sendMessage(_0x5b9714.jid, {
        'image': {
          'url': _0x5ae446
        },
        'caption': "\n╔════◇\n║ *『Person's  Information』*\n║ \n║ *🍫Name :* " + _0xf3d6e0 + "\n║ *👤Num :* " + _0x52ccee + "\n║ *🎐Bio    :*  " + _0x23847e + "\n║ *🌟SetAt :* " + _0xfd4a68 + "\n║    *Keep Calm Dude🥳*    ◇\n╚════════════════╝\n"
      }, {
        'quoted': _0x5b9714
      });
    }
  } catch (_0x31ca34) {
    await _0x5b9714.error(_0x31ca34 + "\n\ncommand : whois", _0x31ca34);
  }
});
smd({
  'pattern': 'wa',
  'desc': "Makes wa me of quoted or mentioned user.",
  'category': "user",
  'filename': __filename
}, async _0x3186cd => {
  try {
    let _0x3c71d6 = _0x3186cd.reply_message ? _0x3186cd.reply_message.sender : _0x3186cd.mentionedJid[0x0] ? _0x3186cd.mentionedJid[0x0] : false;
    await _0x3186cd.reply(!_0x3c71d6 ? "*Please Reply Or Mention A User*" : "https://wa.me/" + _0x3c71d6.split('@')[0x0]);
  } catch (_0x100353) {
    await _0x3186cd.error(_0x100353 + "\n\ncommand : wa", _0x100353, false);
  }
});
smd({
  pattern: "groupNotify",
  desc: "Handles customizable welcome and goodbye messages in the group",
  category: "group",
  filename: __filename
}, async (m) => {
  try {
    // Listen for the 'group-participants-update' event
    m.bot.ev.on('group-participants.update', async (update) => {
      const { id, participants, action } = update;

      // Example placeholders for customizable messages; replace these with actual data fetch if needed
      const defaultWelcome = "👋 Welcome to the group, {{user}}! We're glad to have you here.";
      const defaultGoodbye = "😢 Goodbye, {{user}}! We hope to see you again.";

      // Fetch customizable messages (replace this with actual config fetching logic)
      const getCustomMessage = (type) => {
        // Simulate fetching from a database or config file
        return type === 'welcome' ? defaultWelcome : defaultGoodbye;
      };

      for (let participant of participants) {
        // Get the participant's username
        let user = `@${participant.split('@')[0]}`;

        if (action === 'add') {
          // Get the customizable welcome message and replace the placeholder
          const welcomeMessage = getCustomMessage('welcome').replace('{{user}}', user);
          await m.bot.sendMessage(id, {
            text: welcomeMessage,
            mentions: [participant]
          });
        } else if (action === 'remove') {
          // Get the customizable goodbye message and replace the placeholder
          const goodbyeMessage = getCustomMessage('goodbye').replace('{{user}}', user);
          await m.bot.sendMessage(id, {
            text: goodbyeMessage,
            mentions: [participant]
          });
        }
      }
    });
  } catch (error) {
    console.error("Error in handling group participant updates:", error);
    await m.error(error + "\n\ncommand: groupNotify", error);
  }
});
smd({
  pattern: "getpp2",
  desc: "Get Profile Pic For Given User",
  category: "user",
  filename: __filename
}, async (m) => {
  try {
    let targetUser = m.reply_message ? m.reply_message.sender : m.mentionedJid[0] ? m.mentionedJid[0] : m.from;
    console.log("Target User:", targetUser);

    let profilePicUrl;
    try {
      profilePicUrl = await m.bot.profilePictureUrl(targetUser, "image");
      console.log("Profile Pic URL:", profilePicUrl);
    } catch (error) {
      console.log("Error fetching profile picture:", error);
      return m.reply("```Profile Pic Not Fetched```");
    }

    return await m.bot.sendMessage(m.chat, {
      image: {
        url: profilePicUrl
      },
      caption: "  *---Profile Pic Is Here---*\n" + (Config.caption || "Default caption")
    }, {
      quoted: m
    });
  } catch (error) {
    console.log("Error in getpp command:", error);
    await m.error(error + "\n\ncommand : getpp", error);
  }
});
smd({
  'pattern': 'mee',
  'desc': "Makes wa me for user.",
  'category': "user",
  'filename': __filename
}, async _0x12ac1b => {
  try {
    return await _0x12ac1b.reply("https://wa.me/" + _0x12ac1b.sender.split('@')[0x0]);
  } catch {}
});
