const { Client, Events, GatewayIntentBits } = require("discord.js");
const TicTacToe = require("discord-tictactoe");
const { roastMe, rollDice, getWeather } = require("./interactions");
const { tictactoe, startGame, aiMove } = require("./tictactoe");

require("dotenv").config();

const botToken = process.env.BOT_TOKEN;
const apiKey = process.env.OPENWEATHERMAP_API_KEY;
const game = new TicTacToe({ language: "en" });

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on("guildMemberAdd", (member) => {
    const channel = member.guild.systemChannel;
    if (channel) {
        setTimeout(() => {
            channel.send(`Welcome to the server, ${member}! 🎉`);
        }, 2000);
    }
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (
        message.content.toLowerCase() === "hello" ||
        message.content.toLowerCase() === "hey" ||
        message.content.toLowerCase() === "hi"
    ) {
        message.reply({
            content: `Hello! <@${message.author.id}>`,
        });
        console.log(message);
    }
});

client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) return;
    const { commandName, options } = interaction;
    if (commandName === "roastme") {
        roastMe(interaction);
    }
    if (commandName === "rolldice") {
        rollDice(interaction);
    }
    if (commandName === "getweather") {
        getWeather(interaction, apiKey);
    }
    if (commandName === "tictactoe") {
        const mode = options.getString("mode");
        const opponent = options.getUser("opponent");

        if (mode === "single") {
            game.handleInteraction(interaction, { opponent: "bot" });
        } else if (mode === "multi") {
            if (opponent) {
                game.handleInteraction(interaction, { opponent });
            } else {
                game.handleInteraction(interaction);
            }
        }
    }
});

client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(
        (channel) => channel.name === "general"
    );
    if (channel) {
        channel.send(`Welcome to the server, ${member}! 🎉`);
    }
});

client.login(botToken);
