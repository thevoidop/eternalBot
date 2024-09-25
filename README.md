# EternalBot

EternalBot is a versatile and interactive bot designed to enhance your Discord server experience. It comes with a variety of features and commands to keep your community engaged and entertained.

To see the bot in action, join the Discord server [here.](https://discord.gg/BGt6fTSv)

## Features

- **Interactive Games**: Play games like Tic-Tac-Toe directly in your Discord server.
- **Custom Commands**: Easily create and manage custom commands.
- **Keepalive Functionality**: Ensures the bot remains active and responsive.
- **User Interactions**: Handles various user interactions seamlessly.

## Commands

- roastme: Roasts the hell out of you with some nsfw comments
- getweather - Gets the weather details of the entered city/place
- rolldice - Simulates rolling of a dice for you
- tictactoe - Allows you to play a game of TicTacToe. You can challenge others or play against AI.

## Installation

To get started with EternalBot, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/thevoidop/eternalBot.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd eternalBot
    ```
3. **Install the dependencies**:
    ```bash
    npm install
    ```
4. **Create a Discord bot and get its Token Key and paste it in the `.env` file**
5. **Similarly get a OpenWeather API key and paste it in the `.env` file**

## Usage

After adding the bot to your server, run the following command to register the slash commands:
```bash
node commands.js
```
Then start the main file to run the bot:
```bash
node index.js
```

## License

This project is licensed under the MIT License.
