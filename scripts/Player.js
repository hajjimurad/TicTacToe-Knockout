/**
 * Created by murad on 08/10/15.
 */

define('player',['knockout'],function(ko){

    function Player(isComputer) {
        this._isComputer = isComputer;
    };

    //var playerModule = {
    //    init: Player
    //};
    //
    //return playerModule;

    return Player;
})


