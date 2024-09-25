const TicTacToe = require("discord-tictactoe");

const games = {};

async function tictactoe(interaction, options) {
    const mode = options.getString("mode");
    const opponent = options.getUser("opponent");

    if (mode === "single") {
        await startGame(interaction, interaction.user, "AI");
    } else if (mode === "multi") {
        if (!opponent || opponent.id === interaction.user.id) {
            return interaction.reply("You cannot play against yourself!");
        }
        await startGame(interaction, interaction.user, opponent);
    }
}

async function startGame(interaction, player1, player2) {
    const gameId = `${player1.id}-${player2 === "AI" ? "AI" : player2.id}`;

    if (games[gameId]) {
        return interaction.reply("A game is already in progress!");
    }

    // Check if TicTacToe requires a different way to create an instance
    const game = new TicTacToe(
        player1.id,
        player2 === "AI" ? "AI" : player2.id
    );
    games[gameId] = game;

    await interaction.reply(
        `Game started! ${player1} vs ${
            player2 === "AI" ? "AI" : player2
        }\n${game.getBoard()}`
    );

    if (player2 === "AI") {
        await aiMove(interaction, gameId);
    }
}

async function aiMove(interaction, gameId) {
    const game = games[gameId];

    const emptyCells = game.getEmptyCells();
    if (emptyCells.length > 0) {
        const randomCell =
            emptyCells[Math.floor(Math.random() * emptyCells.length)];
        game.makeMove(randomCell, "AI");
        await interaction.followUp(`AI made its move!\n${game.getBoard()}`);

        if (game.isGameOver()) {
            await interaction.followUp(`Game Over! ${game.getWinner()} wins!`);
            delete games[gameId]; // Clean up
        }
    }
}

module.exports = { tictactoe, startGame, aiMove };
