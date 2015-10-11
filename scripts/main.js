requirejs(["lib/knockout", "board", "game", "player"], function (ko, Board, Game, Player) {

        var player1 = new Player(false);
        var player2 = new Player(true);

        var boardClassic = new Board(3);

        var game = new Game(player1, player2, boardClassic);

        game.stepCross(1, 1);
        game.next();
        game.stepNill(0, 1);
        game.next();
        game.stepCross(1, 0);
        game.next();

        ko.applyBindings(game);
    }
);