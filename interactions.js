const axios = require("axios");
require("dotenv").config();
const fetch = require("node-fetch");

const insults = [
    "Go drown in a lake of diet coke you neutered asshole.",
    "Two wrongs don't make a right, take your parents as an example.",
    "If I wanted to kill myself I'd climb your ego and jump to your IQ.",
    "After meeting you, I’ve decided I am in favor of abortion in cases of incest.",
    "If a zombie was looking for brains, he'd walk right by you.",
    "You're about as useful as a knitted condom.",
    "Are you always this stupid, or is this a special occasion?",
    "You're so full of shit, the toilet is jealous.",
    "If my dog had a face like yours I'd shave its ass and make it walk backwards.",
    "You look like something I drew with my left hand.",
    "You are proof that God has a sense of humour.",
    "You're about as sharp as a bowling ball and twice as dense.",
    "It is clear that you have been educated beyond your intelligence.",
    "You're so stupid, you'd get lost in a one-way street.",
    "It's my fault, I underestimated your stupidity.",
    "You are the human equivalent of a participation award.",
];

async function roastMe(interaction) {
    let index = Math.floor(Math.random() * insults.length);
    await interaction.reply(insults[index]);
}

async function rollDice(interaction) {
    let roll = Math.floor(Math.random() * 6) + 1;
    await interaction.reply(`The die rolled: ${roll}`);
}

async function getWeather(interaction, apiKey) {
    const city = interaction.options.getString("city");
    console.log("Fetching weather for city:", city);
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const weather = response.data;

        const weatherMessage =
            `Current weather in **${weather.name}**:\n` +
            `Temperature: ${weather.main.temp}°C\n` +
            `Weather: ${weather.weather[0].description}\n` +
            `Humidity: ${weather.main.humidity}%\n` +
            `Wind Speed: ${weather.wind.speed} m/s`;

        await interaction.reply(weatherMessage);
    } catch (error) {
        console.error(
            "Weather fetch error:",
            error.response ? error.response.data : error.message
        );
        await interaction.reply(
            "Could not fetch weather data. Please make sure the city name is correct."
        );
    }
}

async function fetchJoke(interaction) {
    try {
        const response = await axios.get("https://icanhazdadjoke.com/slack", {
            headers: {
                Accept: "application/json",
            },
        });
        await interaction.reply(response.data.attachments[0].text);
    } catch (error) {
        console.error("Error fetching joke:", error);
    }
}

module.exports = {
    roastMe,
    rollDice,
    getWeather,
    fetchJoke,
};
