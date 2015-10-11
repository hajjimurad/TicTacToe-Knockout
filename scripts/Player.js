/**
 * Created by murad on 08/10/15.
 */

define('player',['knockout'],function(ko){

    function Player(isComputer) {
        this._isComputer = isComputer;
    };

    return Player;
})


