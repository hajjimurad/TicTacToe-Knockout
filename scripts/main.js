requirejs(["board", "game", "player"], function (Board, Game, Player) {

        var player1 = new Player(false);
        var player2 = new Player(true);

        var boardClassic = new Board(3);

        var game = new Game(player1, player2, boardClassic);
        game.next();
        game.next();
        game.next();
        var gameState = game.getState();
    }
);