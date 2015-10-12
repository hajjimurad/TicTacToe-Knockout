/**
 * Created by murad on 08/10/15.
 */

define('game', ['lib/knockout', 'player', 'board'], function (ko) {

    function Game(player1, player2, board) {

        var self = this;
        this._player1 = player1;
        this._player2 = player2;
        this._board = board;

        self.step = ko.observable(0);

        this.next = function () {
            self.step(self.step() + 1);
        };

        this.getState = function () {
            return {
                getCellsState: this._board.getCellsState,
                step: self.step
            };
        };

        this.showCellState = function(data) {
            return self._board.showCellState(data);
        };

        this.onCellClicked = function (cellState, event) {
            if(self._board.onCellClicked(event.currentTarget.id, self.step() % 2 + 1))
                self.next();
        };

        var getCoords = function(cellNumber) {
            return self._board.getCoords(cellNumber);
        };
    };

    return Game;
});