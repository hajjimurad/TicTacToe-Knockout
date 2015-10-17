/**
 * Created by murad on 17/10/15.
 */

QUnit.test("hello test", function (assert) {
    assert.ok(1 == "1");
});

QUnit.test("game created", function (assert) {

    var gameTests = new GameTestSet();
    assert.ok(gameTests.game_corectData_zeroStep());

});