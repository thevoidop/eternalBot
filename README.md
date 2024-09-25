# EternalBot

This project is a feature-rich Discord bot built using the **discord.js** library. It provides various fun interactions, including a **Tic Tac Toe** game, **weather fetching**, **random joke**, and a **roasting** feature. Designed for easy setup and extensibility, this bot will enhance your Discord server experience!

To see the bot in action, join the Discord server [here.](https://discord.gg/BGt6fTSv)

---

## Features

- **🕹️ Tic Tac Toe**: Play against a bot or challenge another user.
- **🌦️ Weather Information**: Get real-time weather data for any city.
- **🔥 Roasting**: Receive a random roast when you use the command.
- **🤡 Joke**: Get a completely random and unique joke.
- **🔧 Custom Commands**: Easily add more commands and functionalities.

---
## Commands
Here are the commands you can use with this bot:

- `/roastme:` Get a random roast.
- `/rolldice:` Roll a die and get a random number between 1 and 6.
- `/getweather:` Get the current weather for a specified city.
- `/joke:` Get a random and unique joke.
- `Options:`
    - `city` (required): Name of the city to fetch the weather for.
- `/tictactoe:` Play Tic Tac Toe.
    - **Options:**
        - `mode` (required): Choose game mode (single for playing against a bot or multi for multiplayer).
        - `opponent` (optional): Select your opponent for multiplayer mode.
---

## Prerequisites

Before you get started, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- A Discord account and a server where you can test the bot
---
## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/discord-bot.git
cd discord-bot
```

### 2. Install Dependencies
Run the following command to install the required packages:

```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory of your project and add the following variables:

```plaintext
BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
OPENWEATHERMAP_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
PORT=YOUR_PORT (optional, defaults to 8000)
```
_BOT_TOKEN:_ Your bot token obtained from the Discord Developer Portal.

_OPENWEATHERMAP_API_KEY_: Your API key for OpenWeatherMap to fetch weather data.

### 4. Start the Bot
Run the following command to register the commands and to start the bot:

```bash
npm start
```

### 5. Keep the Bot Alive
The `keepalive.js` module sets up an Express server to keep the bot running. Ensure that your hosting environment allows for persistent connections if you deploy this bot.

---

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

---

## Acknowledgments

- `discord.js:` The powerful library used for interacting with the Discord API.
- `OpenWeatherMap:` For providing weather data.

---

## License

This project is licensed under the MIT License.
