/**
 * Created by murad on 16/10/15.
 */

requirejs(["lib/knockout", "testRunner", "gametestset", "playertestset"],
    function (ko, TestRunner, GameTestSet, PlayerTestSet) {

        var testResults = ko.observableArray();

        // Run set of tests
        var testRunner = new TestRunner(new GameTestSet());
        testRunner.Run(testResults);

        // Run set of tests
        var testRunner = new TestRunner(new PlayerTestSet());
        testRunner.Run(testResults);

        // Show results
        ko.applyBindings(testResults);
    });