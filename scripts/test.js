requirejs(["lib/knockout", "testRunner", "board", "game", "player", "cell"], function (ko, TestRunner, Board, Game, Player, Cell) {

        function gameTestSet() {

            this.game_corectData_zeroStep = function () {

                var player1 = new Player(false);
                var player2 = new Player(true);

                var game = new Game(3, player1, player2);
                var stepNumber = game.getState().step;
                if (stepNumber() !== 0) {
                    console.log("stepNumber: " + stepNumber());
                    return false;
                }

                return true;
            };

            this.game_correctData_cellsCreated = function () {

                var player1 = new Player(false);
                var player2 = new Player(true);

                var game = new Game(3, player1, player2);
                var cells = game.getState().getCells();
                if (cells == undefined)
                    return false;

                return true;
            };

            this.game_correctData_correctSize = function () {

                var boardSize = 3;
                var player1 = new Player(false);
                var player2 = new Player(true);

                var game = new Game(boardSize, player1, player2);
                var cells = game.getState().getCells();

                return cells.length === (boardSize * boardSize);
            };

            this.game_correctData_initialCellsStateEmpty = function () {

                var boardSize = 3;
                var player1 = new Player(false);
                var player2 = new Player(true);

                var game = new Game(boardSize, player1, player2);
                var cells = game.getState().getCells();

                for (var cell in cells) {
                    if (cells[cell].getState() != 0)
                        return false;
                }
                return true;
            };
        };


        // Run set of tests
        var testRunner = new TestRunner(new gameTestSet());
        var testResults = testRunner.Run();

        // Show results
        ko.applyBindings(testResults);
    }
);