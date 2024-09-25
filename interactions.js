const axios = require("axios");
require("dotenv").config();

async function roastMe(interaction) {
    try {
        const response = await axios.get(
            "https://evilinsult.com/generate_insult.php?lang=en&type=json"
        );
        await interaction.reply(response.data.insult);
    } catch (error) {
        console.error("Error fetching insult:", error);
        await interaction.reply("Sorry, I couldn't fetch an insult right now.");
    }
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
