/**
 * Created by murad on 08/10/15.
 */

define('game', ['knockout', 'player', 'board'], function (ko, player, board) {

    function Game(player1, player2, board) {

        var self = this;
        this._player1 = player1;
        this._player2 = player2;
        this._board = board;

        var step = 0;

        var checkInitialState = function () {

            var boardSize = self._board.getSize();
            if (boardSize !== 3)
                throw ("not supported size of the board: " + boardSize);

            self._board.setCell(1, 1, 1);
            var cellState = self._board.getCell(1, 1);
        };

        this.next = function () {
            step++;
        };

        this.getState = function () {
            return step;
        };

        checkInitialState();
    };

    return Game;
});