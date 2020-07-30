
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
}, 280000);
const { Client, RichEmbed } = require("discord.js");
var { Util } = require("discord.js");
const db = require("quick.db");
const { TOKEN, YT_API_KEY, prefix, devs } = require("./config.js");
const client = new Client({ disableEveryone: true });
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss");
const fetchVideoInfo = require("youtube-info");
const botversion = require("./package.json").version;
const simpleytapi = require("simple-youtube-api");
const moment = require("moment");
const fs = require("fs");
const util = require("util");
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const r1 = require("snekfetch");
const jimp = require("jimp");
const { get } = require("snekfetch");
const guild = require("guild");
const dateFormat = require("dateformat"); //npm i dateformat
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyC-cxrwR4E2lizvODfupRtCIFht7taB_FM");
const hastebins = require("hastebin-gen");
const getYoutubeID = require("get-youtube-id");
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require("table").table;
const Discord = require("discord.js");
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag} !`);
  client.user.setActivity("$help", { type: "playing" });
});

client.on("ready", () => {
  console.log("|===================================|");
  console.log(`|  Users Size ${client.users.size}  |`);
  console.log(`| Guilds Size ${client.guilds.size} |`);
  console.log(`|===================================|`);
  console.log(`| Created By <@532325977921945603>  |`);
  console.log(`|===================================|`);
  console.log(`|        ArtBot Log By You !        |`);
  console.log(`|===================================|`);
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    message.author.sendMessage(` **
Your server prefix is $
Commands list at : https://artbotb.glitch.me/commands
ArtBot website at : https://artbotb.glitch.me/
Join the support server at : discord.gg/Pfg2DtR
** `);
  }
});
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
    message.channel.sendMessage(`** ~~~Done chack your dm~~~  **`);
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "server")) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
      return message.channel.sand(``);
    if (!message.channel.guild)
      return message.channel.send(` | This Command is used only in servers!`);
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
    const days = millis / 1000 / 60 / 60 / 24;
    var embed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
      .addField(":id:** Server ID:**", `${message.guild.id} `, true)
      .addField(
        ":calendar:** Created On**",
        `${message.guild.createdAt.toLocaleString()}`,
        true
      )
      .addField(":crown: **Owner by**", `**${message.guild.owner}**`, true)
      .addField(
        `:busts_in_silhouette:** Members ** [${message.guild.members.size}]`,
        `**${
          message.guild.members.filter(c => c.presence.status !== "offline")
            .size
        }** **Online**`,
        true
      )
      .addField(
        ":speech_balloon:** Channels **",
        `**${message.guild.channels.filter(m => m.type === "text").size}**` +
          " text | voice  " +
          `**${message.guild.channels.filter(m => m.type === "voice").size}** `,
        true
      )
      .addField(":earth_africa:** Region **", ` ${message.guild.region}`, true)
      .setImage("")
      .addField(
        "**🔐 Roles **",
        `**[${message.guild.roles.size}]** Role `,
        true
      )

      .setColor("#000000");
    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content.startsWith("$avatar")) {
    if (message.author.bot) return;
    var mentionned = message.mentions.users.first();
    var cutie;
    if (mentionned) {
      var cutie = mentionned;
    } else {
      var cutie = message.author;
    }
    const embed = new Discord.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setColor("#51545b")
      .setTitle("Avatar Link")
      .setURL(`${cutie.avatarURL}`)
      .setImage(`${cutie.avatarURL}`)
      .setFooter("Requested by" + message.author.tag, message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});

client.on("message", function(message) {
  if (!message.channel.guild) return;
  if (message.author.bot) return;
  if (message.author.id === client.user.id) return;
  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.substring(prefix.length).split(" ");
  switch (args[0].toLocaleLowerCase()) {
    case "clear":
      message.delete();
      if (!message.channel.guild) return;
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.channel.send("").then(m => m.delete(800));
      var msg;
      msg = parseInt();
      if (message.member.hasPermissions(0x000)) {
        if (!args[1]) {
          message.channel.fetchMessages().then(messages => {
            message.channel.bulkDelete(messages);
            var messagesDeleted = messages.array().length;
            message.channel
              .sendMessage(" ```messages have been deleted.```  ")
              .then(m => m.delete(800));
          });
        } else {
          let messagecount = parseInt(args[1]);
          message.channel
            .fetchMessages({ limit: messagecount })
            .then(messages => message.channel.bulkDelete(messages));
          message.channel
            .sendMessage("" + "messages have been deleted." + args[1] + "")
            .then(m => m.delete(800));
          message.delete(1000);
        }
      } else {
        var manage = new Discord.RichEmbed()
          .setDescription("You Do Not Have Permission MANAGE_MESSAGES :(")
          .setColor("RANDOM");
        message.channel.sendEmbed(manage);
        return;
      }
  }
});

client.on("message", message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send("");

    let user = message.mentions.users.first();

    if (message.mentions.users.size < 1)
      return message.channel.sendMessage(
        "**:rolling_eyes: - I can't find this member**"
      );
    if (!message.guild.member(user).bannable)
      return message.reply(
        "✅**The rank of bot must be higher than the level of the person to be classified**"
      );

    message.guild.member(user).ban(7, user);

    message.channel.send(
      `:white_check_mark: ${user.username} banned from the server! :airplane: `
    );
  }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command == prefix + "unban") {
    if (!message.member.hasPermission("BAN_MEMBERS")) return;
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (args == "aasdalafal") {
      message.guild.fetchBans().then(zg => {
        zg.forEach(NoNo => {
          message.guild.unban(NoNo);
        });
      });
      return message.channel.send("**✅ Unbanned all Members**");
    }
    if (!args)
      return message.channel.send(
        "**:rolling_eyes: - I can find  in the ban list**"
      );
    message.guild
      .unban(args)
      .then(m => {
        message.channel.send(`**:white_check_mark: ${m.username} Unbanned**`);
      })
      .catch(stry => {
        message.channel.send(
          `**🙄 - I can't find \`${args}\` in the ban list**`
        );
      });
  }
});

client.on("message", message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("KICK_MEMBERS"))
      return message.channel.send("");

    let user = message.mentions.users.first();
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (message.mentions.users.size < 1)
      return message.channel.send(
        "****:rolling_eyes: - I can't find this member****"
      );
    if (!message.guild.member(user).kickable)
      return message.channel.send("***  :rolling_eyes:-  You can't kick ***");

    message.guild.member(user).kick();

    const kickembed = new Discord.RichEmbed();
    if (!message.guild.member(user).kicknable)
      return message.channel.send(`✅ kicked ${user.username} from the server`);
  }
});

client.on("message", async message => {
  const ms = require("ms");
  if (message.author.omar) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.channel.guild)
    return message.channel
      .send("**هذا الأمر فقط للسيرفرات**")
      .then(m => m.delete(5000));
  if (!message.member.hasPermission("MANAGE_ROLES")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES"))
    return message.channel.send("").then(msg => msg.delete(6000));
  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = message.content.split(" ").slice(1);
  if (command == "mute") {
    let tomute = message.guild.member(
      message.mentions.users.first() || message.guild.members.get(args[0])
    );
    if (!tomute)
      return message.channel.send(
        `**:rolling_eyes: - I can't find this member**`
      );
    if (tomute.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        `**:rolling_eyes: -  You can't mute ${tomute}**`
      );
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if (!muterole) {
      try {
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.channel.send(``);

    await tomute.addRole(muterole.id);
    message.channel.send(
      `:white_check_mark: <@${
        tomute.id
      }>  muted from the text! :zipper_mouth: ${ms(ms(mutetime))}`
    );
    setTimeout(function() {
      tomute.removeRole(muterole.id);
      message.channel.send(
        `:white_check_mark: <@${tomute.id}> **Done End Time** `
      );
    }, ms(mutetime));
  }
  if (command === `unmute`) {
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.sendMessage("").then(m => m.delete(5000));
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR"))
      return message.channel.send("").then(msg => msg.delete(6000));

    let toMute =
      message.guild.member(message.mentions.users.first()) ||
      message.guild.members.get(args[0]);
    if (!toMute)
      return message.channel.send(
        `**:rolling_eyes: - I can't find this member**`
      );

    let role = message.guild.roles.find(r => r.name === "Muted");

    if (!role || !toMute.roles.has(role.id))
      return message.channel.send(`**${toMute}  not muted.**`);

    await toMute.removeRole(role);
    message.channel.sendMessage(`**✅ ${toMute} unmuted!**`);

    return;
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "user")) {
    var args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    var men = message.mentions.users.first();
    var heg;
    if (men) {
      heg = men;
    } else {
      heg = message.author;
    }
    var mentionned = message.mentions.members.first();
    var h;
    if (mentionned) {
      h = mentionned;
    } else {
      h = message.member;
    }
    moment.locale("ar-TN");
    var id = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("#707070")
      .addField(
        ": دخولك لديسكورد قبل",
        `${moment(heg.createdTimestamp).format(
          "YYYY/M/D HH:mm:ss"
        )} **\n** \`${moment(heg.createdTimestamp).fromNow()}\``,
        true
      )
      .addField(
        ": انضمامك لسيرفر قبل",
        `${moment(h.joinedAt).format("YYYY/M/D HH:mm:ss")} \n \`${moment(
          h.joinedAt
        ).fromNow()}\``,
        true
      )
      .setFooter(
        `ArtBot`,
        "https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif"
      )
      .setThumbnail(heg.avatarURL);
    message.channel.send(id);
  }
});

let warning = JSON.parse(fs.readFileSync("./warning.json", "utf8"));
client.on("message", message => {
  if (
    message.author.bot ||
    message.channel.type == "dm" ||
    !message.channel.guild
  )
    return;
  let prefix = "$";
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  if (command == "warn") {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let T = warning[message.guild.id].warns;
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send(
        `**:rolling_eyes: I can't find this member**`
      );
    let reason = message.content
      .split(" ")
      .slice(2)
      .join(" ");
    if (!reason)
      return message.channel.send(
        `**:rolling_eyes: Please specify a reason.**`
      );
    let W = warning[message.guild.id].warns;
    let ID = 0;
    let leng = 0;
    W.forEach(w => {
      ID++;
      if (w.id !== undefined) leng++;
    });
    if (leng === 90)
      return message.channel.send(
        `** You Can't Give More than \`90\` Warns**, please reset the warn list.`
      );
    T.push({
      user: user.id,
      by: message.author.id,
      reason: reason,
      time: moment(Date.now()).format("llll"),
      id: ID + 1
    });
    message.channel.send(`**✅ @${user.username} warned!**`);
    fs.writeFile("./warning.json", JSON.stringify(warning), err => {
      if (err) console.error(err);
    });
    fs.writeFile("./warning.json", JSON.stringify(warning), err => {
      if (err) console.error(err);
    });
    user.send(
      new Discord.RichEmbed()
        .addField("**:warning: You were warned!**", reason)
        .setFooter(message.guild.name, message.guild.iconURL)
        .setTimestamp()
        .setColor("#fffe62")
    );
    return;
  }
  if (command == "warnings") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let count = 0;
    let page = message.content.split(" ")[1];
    if (!page || isNaN(page)) page = 1;
    if (page > 4)
      return message.channel.send("**Warnings are only recorded on 4 pages!**");
    let embed = new Discord.RichEmbed().setFooter(
      message.author.username,
      message.author.avatarURL
    );
    let W = warning[message.guild.id].warns;
    W.forEach(w => {
      if (!w.id) return;
      count++;
      if (page == 1) {
        if (count > 24) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 24)
          embed.addField(
            "**:sparkles: More ?**",
            `${message.content.split(" ")[0]} 2`
          );
      }
      if (page == 2) {
        if (count <= 24) return null;
        if (count > 45) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 45)
          embed.addField(
            "**:sparkles: More ?**",
            `${message.content.split(" ")[0]} 3`
          );
      }
      if (page == 3) {
        if (count <= 45) return null;
        if (count > 69) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 69)
          embed.addField(
            "**:sparkles: More ?**",
            `${message.content.split(" ")[0]} 4`
          );
      }
      if (page == 4) {
        if (count <= 69) return null;
        if (count > 92) return null;
        let reason = w.reason;
        let user = w.user;
        let ID = w.id;
        let By = w.by;
        let time = w.time;
        embed.addField(
          `⏱ ${time}`,
          `Warn ID (**${ID}**) - By <@${By}>
User: <@${user}>\n\`\`\`${reason}\`\`\``
        );
        if (count == 64) embed.addField("**FULL**", `** **`);
      }
    });
    embed.setTitle(`**${count} Warnings** [ ${page}/4 ]`);
    message.channel.send(embed);
  }
  if (command == "removewarns" || command == "rmwarns") {
    if (!message.member.hasPermission("MANAGE_GUILD")) return;
    if (!warning[message.guild.id]) warning[message.guild.id] = { warns: [] };
    let args = message.content.split(" ")[1];
    if (!args)
      return message.channel.send(
        `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`
      );
    let user = message.mentions.members.first();
    if (user) {
      let C = 0;
      let a = warning[message.guild.id].warns;
      a.forEach(w => {
        if (w.user !== user.id) return;
        delete w.user;
        delete w.reason;
        delete w.id;
        delete w.by;
        delete w.time;
        C++;
      });
      if (C === 0)
        return message.channel.send(
          `**:mag: I can't find the warning that you're looking for.**`
        );
      return message.channel.send(
        "**✅ " + C + " warnings has been removed.**"
      );
    }
    if (args == "all") {
      let c = 0;
      let W = warning[message.guild.id].warns;
      W.forEach(w => {
        if (w.id !== undefined) c++;
      });
      warning[message.guild.id] = { warns: [] };
      fs.writeFile("./warning.json", JSON.stringify(warning), err => {
        if (err) console.error(err);
      });
      fs.writeFile("./warning.json", JSON.stringify(warning), err => {
        if (err) console.error(err);
      });
      return message.channel.send(
        "**✅ " + c + " warnings has been removed.**"
      );
    }
    if (isNaN(args))
      return message.channel.send(
        `**:rolling_eyes: Please specify warning number or user mention or (all) to delete all warnings.**`
      );
    let W = warning[message.guild.id].warns;
    let find = false;
    W.forEach(w => {
      if (w.id == args) {
        delete w.user;
        delete w.reason;
        delete w.id;
        delete w.by;
        delete w.time;
        find = true;
        return message.channel.send("**✅ 1 warnings has been removed.**");
      }
    });
    if (find == false)
      return message.channel.send(
        `**:mag: I can't find the warning that you're looking for.**`
      );
  }
});

client.on("message", message => {
  if (message.content === "$sup") {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setColor("#9B59B6")
      .addField(
        " ** :gear: Server Support :gear: **",
        "  **https://discord.gg/8CU4W34**"
      );

    message.channel.sendEmbed(embed);
  }
});

client.on("message", message => {
  if (message.content === `${prefix}inv`) {
    let invitelink = `https://discordapp.com/api/oauth2/authorize?client_id=644973573332533276&permissions=8&scope=bot`;
    var embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setDescription(`[Add To Your Server](${invitelink})`);

    message.channel.send("✅ | Check Your DM.");
    message.author.send(embed);
  }
});

client.on("message", message => {
  if (!message.channel.guild) return;
  if (message.content.startsWith("$ping")) {
    if (!message.channel.guild) return;
    var msg = `${Date.now() - message.createdTimestamp}`;
    var api = `${Math.round(client.ping)}`;
    if (message.author.bot) return;
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .addField("**Time Taken:**", msg + " ms :signal_strength: ")
      .addField("**WebSocket:**", api + " ms :signal_strength: ");
    message.channel.send({ embed: embed });
  }
});

client.on("guildCreate", guild => {
  const embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle(`** Server Added ArtBot.**`).setDescription(`**  
    __Server Name__ → ${guild.name}
    __Server Owner__ → ${guild.owner}
    __Server ID__ → ${guild.id}
    __Users Size__ ${client.users.size}
    __Mebmers Count__ → ${guild.memberCount}
    __Server Count__ → ${client.guilds.size}**`);
  client.channels.get("671007994930003978").sendEmbed(embed);
});

client.on("message", message => {
  if (message.content === prefix + "createcolors") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send("").then(msg => msg.delete(6000));
    message.guild.createRole({
      name: "1",
      color: "#FFB6C1",
      permissions: []
    });
    message.guild.createRole({
      name: "2",
      color: "#FFC0CB",
      permissions: []
    });
    message.guild.createRole({
      name: "3",
      color: "#FF69B4",
      permissions: []
    });
    message.guild.createRole({
      name: "4",
      color: "#FF1493",
      permissions: []
    });
    message.guild.createRole({
      name: "5",
      color: "#DB7093",
      permissions: []
    });
    message.guild.createRole({
      name: "6",
      color: "#C71585",
      permissions: []
    });
    message.guild.createRole({
      name: "7",
      color: "#E6E6FA",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#D8BFD8",
      permissions: []
    });
    message.guild.createRole({
      name: "8",
      color: "#DDA0DD",
      permissions: []
    });
    message.guild.createRole({
      name: "9",
      color: "#DA70D6",
      permissions: []
    });
    message.guild.createRole({
      name: "10",
      color: "#EE82EE",
      permissions: []
    });
    message.guild.createRole({
      name: "11",
      color: "#FF00FF",
      permissions: []
    });
    message.guild.createRole({
      name: "12",
      color: "#BA55D3",
      permissions: []
    });
    message.guild.createRole({
      name: "13",
      color: "#9932CC",
      permissions: []
    });
    message.guild.createRole({
      name: "14",
      color: "#9400D3",
      permissions: []
    });
    message.guild.createRole({
      name: "15",
      color: "#8A2BE2",
      permissions: []
    });
    message.guild.createRole({
      name: "16",
      color: "#8B008B",
      permissions: []
    });
    message.guild.createRole({
      name: "17",
      color: "#800080",
      permissions: []
    });
    message.guild.createRole({
      name: "18",
      color: "#9370DB",
      permissions: []
    });
    message.guild.createRole({
      name: "19",
      color: "#7B68EE",
      permissions: []
    });
    message.guild.createRole({
      name: "20",
      color: "#6A5ACD",
      permissions: []
    });
    message.guild.createRole({
      name: "21",
      color: "#483D8B",
      permissions: []
    });
    message.guild.createRole({
      name: "22",
      color: "#663399",
      permissions: []
    });
    message.guild.createRole({
      name: "23",
      color: "#4B0082",
      permissions: []
    });
    message.guild.createRole({
      name: "24",
      color: "#FFA07A",
      permissions: []
    });
    message.guild.createRole({
      name: "25",
      color: "#FA8072",
      permissions: []
    });
    message.guild.createRole({
      name: "26",
      color: "#E9967A",
      permissions: []
    });
    message.guild.createRole({
      name: "27",
      color: "#F08080",
      permissions: []
    });
    message.guild.createRole({
      name: "28",
      color: "#CD5C5C",
      permissions: []
    });
    message.guild.createRole({
      name: "29",
      color: "#DC143C",
      permissions: []
    });
    message.guild.createRole({
      name: "30",
      color: "	#FF0000",
      permissions: []
    });
    message.guild.createRole({
      name: "31",
      color: "#B22222",
      permissions: []
    });
    message.guild.createRole({
      name: "32",
      color: "#8B0000",
      permissions: []
    });
    message.guild.createRole({
      name: "33",
      color: "#FFA500",
      permissions: []
    });
    message.guild.createRole({
      name: "34",
      color: "#FF8C00",
      permissions: []
    });
    message.guild.createRole({
      name: "35",
      color: "#FF7F50",
      permissions: []
    });
    message.guild.createRole({
      name: "36",
      color: "#FF6347",
      permissions: []
    });
    message.guild.createRole({
      name: "37",
      color: "#FF4500",
      permissions: []
    });
    message.guild.createRole({
      name: "38",
      color: "#FFD700",
      permissions: []
    });
    message.guild.createRole({
      name: "39",
      color: "#FFFFE0",
      permissions: []
    });
    message.guild.createRole({
      name: "40",
      color: "#FFFACD",
      permissions: []
    });
    message.guild.createRole({
      name: "41",
      color: "#FAFAD2",
      permissions: []
    });
    message.guild.createRole({
      name: "42",
      color: "	#FFEFD5",
      permissions: []
    });
    message.guild.createRole({
      name: "43",
      color: "#FFE4B5",
      permissions: []
    });
    message.guild.createRole({
      name: "44",
      color: "#FFDAB9",
      permissions: []
    });
    message.guild.createRole({
      name: "45",
      color: "#EEE8AA",
      permissions: []
    });
    message.guild.createRole({
      name: "46",
      color: "#F0E68C",
      permissions: []
    });
    message.guild.createRole({
      name: "47",
      color: "#BDB76B",
      permissions: []
    });
    message.guild.createRole({
      name: "48",
      color: "#ADFF2F",
      permissions: []
    });
    message.guild.createRole({
      name: "49",
      color: "#7FFF00",
      permissions: []
    });
    message.guild.createRole({
      name: "50",
      color: "#7CFC00",
      permissions: []
    });
    message.guild.createRole({
      name: "51",
      color: "#00FF00",
      permissions: []
    });

    message.guild.createRole({
      name: "52",
      color: "#32CD32",
      permissions: []
    });
    message.guild.createRole({
      name: "53",
      color: "#98FB98",
      permissions: []
    });
    message.guild.createRole({
      name: "54",
      color: "#90EE90",
      permissions: []
    });
    message.guild.createRole({
      name: "55",
      color: "#00FA9A",
      permissions: []
    });
    message.guild.createRole({
      name: "56",
      color: "#00FF7F",
      permissions: []
    });
    message.guild.createRole({
      name: "57",
      color: "#3CB371",
      permissions: []
    });
    message.guild.createRole({
      name: "58",
      color: "#2E8B57",
      permissions: []
    });
    message.guild.createRole({
      name: "59",
      color: "#2E8B57",
      permissions: []
    });
    message.guild.createRole({
      name: "60",
      color: "#008000",
      permissions: []
    });
    message.guild.createRole({
      name: "61",
      color: "#006400",
      permissions: []
    });
    message.guild.createRole({
      name: "62",
      color: "#9ACD32",
      permissions: []
    });
    message.guild.createRole({
      name: "63",
      color: "#6B8E23",
      permissions: []
    });
    message.guild.createRole({
      name: "64",
      color: "#556B2F",
      permissions: []
    });
    message.guild.createRole({
      name: "65",
      color: "#66CDAA",
      permissions: []
    });
    message.guild.createRole({
      name: "66",
      color: "#8FBC8F",
      permissions: []
    });
    message.guild.createRole({
      name: "67",
      color: "#20B2AA",
      permissions: []
    });
    message.guild.createRole({
      name: "68",
      color: "#008B8B",
      permissions: []
    });
    message.guild.createRole({
      name: "69",
      color: "#008080",
      permissions: []
    });
    message.guild.createRole({
      name: "70",
      color: "#00FFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "71",
      color: "#E0FFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "72",
      color: "#AFEEEE",
      permissions: []
    });
    message.guild.createRole({
      name: "73",
      color: "#7FFFD4",
      permissions: []
    });
    message.guild.createRole({
      name: "74",
      color: "#40E0D0",
      permissions: []
    });
    message.guild.createRole({
      name: "75",
      color: "#48D1CC",
      permissions: []
    });
    message.guild.createRole({
      name: "76",
      color: "#00CED1",
      permissions: []
    });
    message.guild.createRole({
      name: "77",
      color: "#5F9EA0",
      permissions: []
    });
    message.guild.createRole({
      name: "78",
      color: "#4682B4",
      permissions: []
    });
    message.guild.createRole({
      name: "79",
      color: "#B0C4DE",
      permissions: []
    });
    message.guild.createRole({
      name: "80",
      color: "#ADD8E6",
      permissions: []
    });
    message.guild.createRole({
      name: "81",
      color: "#B0E0E6",
      permissions: []
    });
    message.guild.createRole({
      name: "82",
      color: "#87CEFA",
      permissions: []
    });
    message.guild.createRole({
      name: "83",
      color: "#87CEEB",
      permissions: []
    });
    message.guild.createRole({
      name: "84",
      color: "#6495ED",
      permissions: []
    });
    message.guild.createRole({
      name: "85",
      color: "#00BFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "86",
      color: "#1E90FF",
      permissions: []
    });
    message.guild.createRole({
      name: "87",
      color: "#4169E1",
      permissions: []
    });
    message.guild.createRole({
      name: "88",
      color: "#0000FF",
      permissions: []
    });
    message.guild.createRole({
      name: "89",
      color: "#0000CD",
      permissions: []
    });
    message.guild.createRole({
      name: "90",
      color: "#00008B",
      permissions: []
    });
    message.guild.createRole({
      name: "91",
      color: "#000080",
      permissions: []
    });
    message.guild.createRole({
      name: "92",
      color: "#191970",
      permissions: []
    });
    message.guild.createRole({
      name: "93",
      color: "#FFF8DC",
      permissions: []
    });
    message.guild.createRole({
      name: "94",
      color: "#FFEBCD",
      permissions: []
    });
    message.guild.createRole({
      name: "95",
      color: "#FFE4C4",
      permissions: []
    });
    message.guild.createRole({
      name: "96",
      color: "#FFDEAD",
      permissions: []
    });
    message.guild.createRole({
      name: "97",
      color: "#F5DEB3",
      permissions: []
    });
    message.guild.createRole({
      name: "98",
      color: "#DEB887",
      permissions: []
    });
    message.guild.createRole({
      name: "99",
      color: "#D2B48C",
      permissions: []
    });
    message.guild.createRole({
      name: "100",
      color: "#BC8F8F",
      permissions: []
    });
    message.guild.createRole({
      name: "101",
      color: "#F4A460",
      permissions: []
    });
    message.guild.createRole({
      name: "102",
      color: "#DAA520",
      permissions: []
    });
    message.guild.createRole({
      name: "103",
      color: "#B8860B",
      permissions: []
    });
    message.guild.createRole({
      name: "104",
      color: "#CD853F",
      permissions: []
    });
    message.guild.createRole({
      name: "105",
      color: "#D2691E",
      permissions: []
    });
    message.guild.createRole({
      name: "106",
      color: "#808000",
      permissions: []
    });
    message.guild.createRole({
      name: "107",
      color: "#8B4513",
      permissions: []
    });
    message.guild.createRole({
      name: "108",
      color: "#A0522D",
      permissions: []
    });
    message.guild.createRole({
      name: "109",
      color: "#A52A2A",
      permissions: []
    });
    message.guild.createRole({
      name: "110",
      color: "#800000",
      permissions: []
    });
    message.guild.createRole({
      name: "111",
      color: "#FFFFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "112",
      color: "#FFFAFA",
      permissions: []
    });
    message.guild.createRole({
      name: "113",
      color: "#F0FFF0",
      permissions: []
    });
    message.guild.createRole({
      name: "114",
      color: "#F5FFFA",
      permissions: []
    });
    message.guild.createRole({
      name: "115",
      color: "#F0FFFF",
      permissions: []
    });
    message.guild.createRole({
      name: "116",
      color: "#F0F8FF",
      permissions: []
    });
    message.guild.createRole({
      name: "117",
      color: "#F8F8FF",
      permissions: []
    });
    message.guild.createRole({
      name: "118",
      color: "#F5F5F5",
      permissions: []
    });
    message.guild.createRole({
      name: "119",
      color: "#FFF5EE",
      permissions: []
    });
    message.guild.createRole({
      name: "120",
      color: "#F5F5DC",
      permissions: []
    });
    message.guild.createRole({
      name: "121",
      color: "#FDF5E6",
      permissions: []
    });
    message.guild.createRole({
      name: "122",
      color: "#FFFAF0",
      permissions: []
    });
    message.guild.createRole({
      name: "123",
      color: "#FFFFF0",
      permissions: []
    });
    message.guild.createRole({
      name: "124",
      color: "#FAEBD7",
      permissions: []
    });
    message.guild.createRole({
      name: "125",
      color: "#FAF0E6",
      permissions: []
    });
    message.guild.createRole({
      name: "126",
      color: "#FFF0F5",
      permissions: []
    });
    message.guild.createRole({
      name: "127",
      color: "#FFE4E1",
      permissions: []
    });
    message.guild.createRole({
      name: "128",
      color: "#DCDCDC",
      permissions: []
    });
    message.guild.createRole({
      name: "129",
      color: "#D3D3D3",
      permissions: []
    });
    message.guild.createRole({
      name: "130",
      color: "#C0C0C0",
      permissions: []
    });
    message.guild.createRole({
      name: "131",
      color: "#f7f7f7",
      permissions: []
    });
    message.guild.createRole({
      name: "132",
      color: "#b2b2b2",
      permissions: []
    });
    message.guild.createRole({
      name: "133",
      color: "#6f6c6c",
      permissions: []
    });
    message.guild.createRole({
      name: "134",
      color: "#4d4646",
      permissions: []
    });
    message.guild.createRole({
      name: "135",
      color: "#4c4c4c",
      permissions: []
    });
    message.guild.createRole({
      name: "136",
      color: "#2F4F4F",
      permissions: []
    });
    message.guild.createRole({
      name: "137",
      color: "#040000",
      permissions: []
    });

    message.channel.sendMessage({
      embed: new Discord.RichEmbed()
        .setColor("#502faf")
        .setAuthor(`${message.author.username}'`, message.author.avatarURL)
        .setDescription("``Colors Has Been Created``")
    });
  }

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "1");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "2");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "3");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "4");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "5");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "6");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "7");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "8");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "9");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "10");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "11");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "12");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "13");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "14");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "15");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "16");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "17");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "18");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "19");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "20");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith("+!deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "21");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "22");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "23");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "24");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "25");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "26");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "27");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "28");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "29");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "30");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "31");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "32");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "33");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "34");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "35");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "36");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "37");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "38");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "39");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "40");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "41");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "42");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "43");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "44");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "45");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "46");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "47");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "48");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "49");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "50");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "51");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "52");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "53");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "54");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "55");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "56");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "57");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "58");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "59");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "60");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "-61");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "62");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "63");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "64");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "65");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "66");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "67");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "68");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "69");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "70");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "71");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "72");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "73");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "74");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "75");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "76");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "77");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "78");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "79");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "80");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "81");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "82");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "83");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "84");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "85");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "86");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "87");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "88");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "89");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "90");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "91");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "92");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "93");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "94");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "95");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "96");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(">deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "97");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "98");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "99");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "100");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "101");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "102");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "103");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "104");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "105");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(">deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "106");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "107");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "108");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "109");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "110");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "111");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "112");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "113");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "114");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "115");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "116");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "117");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "118");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "119");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "121");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "122");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "123");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "124");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "125");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "126");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "127");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "128");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "129");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "130");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "131");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "132");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "133");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "134");

      role.delete();
    }
  });
  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "135");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "136");

      role.delete();
    }
  });

  client.on("message", async message => {
    let args = message.content.split(" ").slice(1);
    if (message.content.startsWith(prefix + "deletecolors")) {
      if (!message.member.hasPermission("ADMINISTRATOR")) return;
      let role = message.guild.roles.find("name", "137");

      role.delete();
    }
  });
});

client.on("message", message => {
  let args = message.content.split(" ").slice(1);
  if (message.content.split(" ")[0] == "$color") {
    const embedd = new Discord.RichEmbed()
      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Wrong color number**`)
      .setColor(`ff0000`);

    if (!isNaN(args) && args.length > 0)
      if (!message.guild.roles.find("name", `${args}`))
        return message.channel.sendEmbed(embedd);

    var a = message.guild.roles.find("name", `${args}`);
    if (!a) return;
    const embed = new Discord.RichEmbed()

      .setFooter(
        "Requested by " + message.author.username,
        message.author.avatarURL
      )
      .setDescription(`**Color has been changed successfully.**`)

      .setColor(`${a.hexColor}`);
    message.channel.sendEmbed(embed);
    if (!args) return;
    setInterval(function() {});
    let count = 0;
    let ecount = 0;
    for (let x = 1; x < 201; x++) {
      message.member.removeRole(message.guild.roles.find("name", `${x}`));
    }
    message.member.addRole(message.guild.roles.find("name", `${args}`));
  }
});

client.on("message", luxy => {
  if (luxy.content === "$color") {
    luxy.channel.send("**:rolling_eyes: - Please choose color number**");
  }
});

let spread = JSON.parse(fs.readFileSync("./spread.json", "utf8"));

client.on("message", message => {
  if (message.content.startsWith(prefix + "antilinks set off")) {
    if (!message.channel.guild)
      return message.reply("**هذا الامر للسيرفرات فقط**");
    spread[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔ The AntiSpread Is __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "antilinks set on")) {
    if (!message.channel.guild)
      return message.reply("**هذا الامر للسيرفرات فقط**");
    spread[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AntiSpread Is __𝐎𝐍__ !**`);
    fs.writeFile("./spread.json", JSON.stringify(spread), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http://www.gmail.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.snapchat.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.instagram.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.twitter.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("http://www.facebook.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.youtube.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://www.discordapp.com/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});
client.on("message", message => {
  var args = message.content.split(/[ ]+/);
  if (message.content.includes("https://discord.gg/")) {
    if (!spread[message.guild.id])
      spread[message.guild.id] = {
        onoff: "Off"
      };
    if (spread[message.guild.id].onoff === "Off") return;
    message.delete();
    return message.channel.send(``);
  }
});

const bannedwords = [
  "كس امك",
  "انيك امك",
  "يا ابن القحبة",
  "شرموط",
  "يا منيك",
  "بدي انيكك",
  "العاهرة"
];

client.on("message", message => {
  if (bannedwords.some(word => message.content.includes(word))) {
    message.delete();
    message.channel.send("").then(msg => {
      msg.delete(5000);
    });
  }
});

let antibots = JSON.parse(fs.readFileSync("./antibots.json", "utf8")); //require antihack.json file
client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots set on")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `ADMINISTRATOR`"
      );
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(`**✅ The AntiBots Is __𝐎𝐍__ !**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("message", message => {
  if (message.content.startsWith(prefix + "antibots set off")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `ADMINISTRATOR`"
      );
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(`**⛔ The AntiBots Is __𝐎𝐅𝐅__ !**`);
    fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});

client.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibots.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});
const Enmap = require("enmap");
let gdb = new Enmap({ name: "AutoReply" });
client.on("message", async message => {
  await db.ensure(message.guild.id, {
    r: []
  });
  if (message.content.startsWith(prefix + "autoreply")) {
    if (!message.member.hasPermission(16)) return message.channel.send("");
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let r = args.split(" | ");
    if (!r[0] || !r[1])
      return message.channel.send(
        "> **Usage:** " + prefix + "addred [msg] | [reply]"
      );
    await db.push(message.guild.id, { msg: r[0], reply: r[1] }, "r");
    await message.channel.send("**Done AutoReply**");
  } else if (message.content.startsWith(prefix + "delautoreply")) {
    if (!message.member.hasPermission(16)) return message.channel.send("");
    let args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    let xdb = await db.get(message.guild.id, "r");
    await db.set(message.guild.id, xdb.filter(w => w.msg != args), "r");
    await message.channel.send("**Done AutoReply remove**");
  }
});
client.on("message", async message => {
  let s = await db
    .get(message.guild.id, "r")
    .filter(x => x.msg == message.content);
  if (s.length == 0) return null;
  s = s[0];
  message.channel.send(s.reply);
});

client.on("message", message => {
  if (message.content === prefix + "lock" || message.content === "$قفل") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.sand("");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel.send(
          `**:lock: <#${message.channel.id}> has been locked.**`
        );
      });
  }

  if (message.content === prefix + "unlock" || message.content === "$فتح") {
    if (!message.channel.guild)
      return message.reply("** This command only for servers**");

    if (!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.sand("");
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true
      })
      .then(() => {
        message.channel.send(
          `**:unlock: <#${message.channel.id}> has been unlocked.**`
        );
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "embed")) {
    let args = message.content.split(" ");
    let embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(args.join(" "))
      .setFooter(client.user.tag, client.user.avatarURL);
    message.channel.send(embed);
  }
});

client.on("message", message => {
  if (!message.guild || message.author.bot) return;
  if (message.content == prefix + "colors") {
    var fsn = require("fs-nextra");
    fs.readdir("./colors", async (err, files) => {
      var f = files[Math.floor(Math.random() * files.length)];
      var { Canvas } = require("canvas-constructor");
      var x = 0;
      var y = 0;
      if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0)
        return;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(() => {
          x += 100;
          if (x > 100 * 12) {
            x = 100;
            y += 80;
          }
        });
      var image = await fsn.readFile(`./colors/${f}`);
      var xd = new Canvas(100 * 11, y + 350)
        .addBeveledImage(image, 0, 0, 100 * 11, y + 350, 100)
        .setTextBaseline("middle")
        .setColor("white")
        .setTextSize(60)
        .addText(`Colors List`, 375, 40);
      x = 0;
      y = 150;
      message.guild.roles
        .filter(role => !isNaN(role.name))
        .sort((b1, b2) => b1.name - b2.name)
        .forEach(role => {
          x += 75;
          if (x > 100 * 10) {
            x = 75;
            y += 80;
          }
          xd.setTextBaseline("middle")
            .setTextAlign("center")
            .setColor(role.hexColor)
            .addBeveledRect(x, y, 60, 60, 15)
            .setColor("white");
          if (`${role.name}`.length > 2) {
            xd.setTextSize(30);
          } else if (`${role.name}`.length > 1) {
            xd.setTextSize(40);
          } else {
            xd.setTextSize(50);
          }
          xd.addText(role.name, x + 30, y + 30);
        });
      message.channel.sendFile(xd.toBuffer());
    });
  }
});

client.login("");
