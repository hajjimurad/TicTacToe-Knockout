/**
 * Created by murad on 08/10/15.
 */

define('cell', ['lib/knockout'], function (ko) {

    function Cell(state, board) {

        var self = this;
        self.state = ko.observable(state);
        self.board = board;

        self.setState = function(newState) {
            if(self.state() !== 0)
                return false;
            self.state(newState);
            return true;
        };

        self.getState = function() {
            return self.state();
        };

        self.showCellState = function () {

            var result;
            switch (self.state()) {
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

        self.onCellClicked = function () {
            if(self.setState(self.board.getCurrentStep()))
                self.board.next();
        };

    };

    return Cell;
})


