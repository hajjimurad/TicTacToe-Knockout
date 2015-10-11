/**
 * Created by murad on 08/10/15.
 */

define('game', ['lib/knockout', 'player', 'board'], function (ko) {

    function Game(player1, player2, board) {

        var self = this;
        this._player1 = player1;
        this._player2 = player2;
        this._board = board;

        var step = ko.observable(0);

        var checkInitialState = function () {

            var boardSize = self._board.getSize();
            if (boardSize !== 3)
                throw ("not supported size of the board: " + boardSize);
        };

        this.stepCross = function (x, y) {
            self._board.setCell(x, y, 1);
        };

        this.stepNill = function (x, y) {
            self._board.setCell(x, y, 2);
        };

        this.next = function () {
            step(step()+1);
        };

        this.getState = function () {
            return {
                getCellsState: this._board.getCellsState,
                step: step
            };
        };

        checkInitialState();
    };

    return Game;
});