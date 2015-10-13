/**
 * Created by murad on 08/10/15.
 */

define('game', ['lib/knockout', 'player', 'board'], function (ko, Player, Board) {

    function Game(boardSize, player1, player2) {

        var self = this;

        self.player1 = player1;
        self.player2 = player2;
        self.board = new Board(boardSize, self);

        self.step = ko.observable(0);

        this.next = function () {
            self.step(self.step() + 1);
        };

        this.getState = function () {
            return {
                getCells: self.board.getCells,
                step: self.step
            };
        };

        self.getCurrentStep = function() {
            return self.step() % 2 + 1;
        };

    };

    return Game;
});