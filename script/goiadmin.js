module.exports.config = {
	name: "goiadminn",
	version: "1.0.0",
	role: 0,
	credits: "John Arida",
	description: "Bot will rep ng tag admin or rep ng tagbot",
	usages: "",
	hasPrefix: true,
	cooldown: 5
};

module.exports.handleEvent = function({ api, event, admin }) {
	if (event.senderID !== admin && event.mentions) {
		var aid = [admin];
		for (const id of aid) {
			if (event.mentions[id]) {
				var msg = [
					"Babe nalang iatawag mo sakanya",
					"I think she is lost again  😗",
					"My Creator is currently offline 😢",
					"𝖠𝗇𝗈𝗍𝗁𝖾𝗋 𝗍𝖺𝗀 to 𝗆𝗒 𝖺𝖽𝗆𝗂𝗇.  🙂",
					"busy pa ata yun kaya mag-antay ka",
					"😇",
					"Who sent you 👀",
					"👀"
				];
				api.setMessageReaction("😍", event.messageID, (err) => {}, true);
				return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
			}
		}
	}
};

module.exports.run = async function({ admin }) {
};
