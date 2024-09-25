const { REST, Routes } = require("discord.js");
const { TicTacToe } = require("discord-tictactoe");
require("dotenv").config();

const botToken = process.env.BOT_TOKEN;

const commands = [
    {
        name: "roastme",
        description: "Does epic roasts",
    },
    {
        name: "rolldice",
        description: "Rolls a Die",
    },
    {
        name: "getweather",
        description: "Get the weather in a city",
        options: [
            {
                name: "city",
                type: 3,
                description: "The name of the city",
                required: true,
            },
        ],
    },
    {
        name: "tictactoe",
        description: "Play a game of Tic Tac Toe",
        options: [
            {
                name: "mode",
                type: 3,
                description: "Choose game mode",
                required: true,
                choices: [
                    { name: "Single Player", value: "single" },
                    { name: "Multiplayer", value: "multi" },
                ],
            },
            {
                name: "opponent",
                type: 6,
                description: "Select your opponent (for multiplayer mode)",
                required: false,
            },
        ],
    },
];

const rest = new REST({ version: "9" }).setToken(botToken);

(async () => {
    try {
        console.log(
            `Started refreshing ${commands.length} application (/) commands.`
        );

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(
                "1286975708668887070",
                "1286974969657688095"
            ),
            { body: commands }
        );

        console.log(
            `Successfully reloaded ${data.length} application (/) commands.`
        );
    } catch (error) {
        console.error(error);
    }
})();
