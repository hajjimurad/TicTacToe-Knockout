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

        /**
         * Board size
         */
        this.getSize = function () {
            return this._size;
        };

        /*
         * Get if cell is used
         */
        this.isCellEmpty = function (x, y) {
            return this.getCell(x, y) === undefined;
        };

        /**
         * Set cell status
         */
        this.setCell = function (x, y, status) {

            if (cells[(x) * this._size + (y)]() !== 0)
                return false;

            cells[(x) * this._size + (y)](status);
            return true;
        };

        /**
         * Get cell info
         */
        this.getCell = function (x, y) {
            return cells[(x) * this._size + (y)]();
        };

        this.getCellsState = function () {
            return cells;
        };

        /**
         * Returns the cell symbol according to data
         */
        this.showCellState = function (state) {

            var result;
            switch (state) {
                case 1:
                    result = "x";
                    break;
                case 2:
                    result = "o";
                    break;
                default:
                    result = null;
                    break;
            }
            return result;
        };

        /**
         * Callback for clicking cells
         */
        this.onCellClicked = function (number, state) {
            var coords = self.getCoords(number);
            return self.setCell(coords.x, coords.y, state);
        }

        /**
         * Get cell coords by number
         */
        this.getCoords = function (cellNumber) {

            var yCoord = (cellNumber) % this._size;

            return {
                x: (cellNumber - yCoord) / this._size,
                y: yCoord
            };
        }
    };

    return Board;
});