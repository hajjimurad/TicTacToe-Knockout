/**
 * Created by murad on 08/10/15.
 */

define('board', ['lib/knockout'], function (ko) {

    function Board(size) {

        self = this;

        this._size = size;

        var cells = new Array(this._size * this._size);

        for (var i = 0; i < this._size * this._size; i++) {
            cells[i] = ko.observable(0);
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

            if (cells[(x) * this._size + (y)]() !== 0)
                throw "Cell already specified exception";

            cells[(x) * this._size + (y)](status);
        };

        /*
         * Get cell info
         */
        this.getCell = function (x, y) {
            return cells[(x) * this._size + (y)]();
        };

        this.getCellsState = function() {
            return cells;
        };

        this.getCoords = function(cellNumber) {

            var yCoord = cellNumber / this._size;

            return {
                x : (cellNumber - yCoord) / this._size,
                y : yCoord
            };
        }
    };

    return Board;
});