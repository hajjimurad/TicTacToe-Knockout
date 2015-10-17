/**
 * Created by murad on 17/10/15.
 */

requirejs(["gametestset","qunit-1.19.0.js"], function (GameTestSet,QUnit) {

    QUnit.test("hello test", function (assert) {
        assert.ok(1 == "1");
    });

    QUnit.test("game created", function (assert) {

        var gameTests = new GameTestSet();
        assert.ok(gameTests.game_corectData_zeroStep());

    });

})

