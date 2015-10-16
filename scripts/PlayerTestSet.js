/**
 * Created by murad on 16/10/15.
 */

define('playertestset', ["lib/knockout", "testRunner", "board", "game", "player"], function (ko, TestRunner, Board, Game, Player) {
        function PlayerTestSet() {
            this.player_initialData_created = function () {
                var player = new Player(false);
                var isComputer = player.isComputer();

                return isComputer === false;
            };
        };

        return PlayerTestSet;
    }
);