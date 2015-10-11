/**
 * Created by murad on 08/10/15.
 */

define('board', ['lib/knockout'], function (ko) {

    function Board(size) {

        self = this;

        this._size = size;

        this.cells = new Array(this._size * this._size);

        for (var i = 0; i < this._size * this._size; i++) {
            self.cells[i] = ko.observable(0);
        }

        this.getSize = function () {
            return this._size;
        };

        /*
         * Get if cell is used
         */
        this.isCellEmpty = function (x, y) {
            return this.getCell(x, y) === undefined;
        };

        /*
         * Sets info to cell
         */
        this.setCell = function (x, y, status) {

            if (self.cells[(x) * this._size + (y)]() !== 0)
                throw "Cell already specified exception";

            self.cells[(x) * this._size + (y)](status);
        };

        /*
         * Get cell info
         */
        this.getCell = function (x, y) {
            return self.cells[(x) * this._size + (y)]();
        };
    };

    return Board;
});