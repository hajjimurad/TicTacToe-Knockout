/**
 * Created by murad on 08/10/15.
 */

define('board', ['lib/knockout', 'cell'], function (ko, Cell) {

    function Board(size, game) {

        var self = this;

        self.size = size;
        self.game = game;

        var cells = new Array(this.size * this.size);

        // init cells
        for (var i = 0; i < this.size * this.size; i++) {
            cells[i] = new Cell(0, self);
        };

        // allow access to cells
        self.getCells = function() {
            return cells;
        };

        self.getCurrentStep = function() {
            return self.game.getCurrentStep();
        };

        self.next = function() {
            return self.game.next();
        }

    };

    return Board;
});