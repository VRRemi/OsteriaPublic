const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const clean = (text) => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`js" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }

    try {
        const code = args.join(" ");
        let evaled = eval(code);
    
        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
    
        message.channel.send(clean(evaled), { code: "js" });
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
      }
}