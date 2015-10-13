requirejs(["lib/knockout", "board", "game", "player"], function (ko, Board, Game, Player) {

        var player1 = new Player(false);
        var player2 = new Player(true);

        var game = new Game(player1, player2);

        ko.applyBindings(game);
    }
);