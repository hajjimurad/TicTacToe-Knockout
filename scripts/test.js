/**
 * Created by murad on 16/10/15.
 */

requirejs(["lib/knockout", "testRunner", "gametestset", "playertestset"],
    function (ko, TestRunner, GameTestSet, PlayerTestSet) {

        var testResults = ko.observableArray();
        ko.applyBindings(testResults);

        this.run = function (setsToRun) {

            for (var index in setsToRun) {

                var testRunner = new TestRunner(new setsToRun[index]);
                testRunner.Run(testResults);
            }
        };

        this.run([
            GameTestSet,
            PlayerTestSet
        ]);
    });