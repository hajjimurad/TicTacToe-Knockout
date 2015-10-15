/**
 * Created by murad on 15/10/15.
 */


define("testRunner", ["lib/knockout"], function (ko) {

    function TestRunner(testSet) {

        // Prepare container for results
        var testResults = ko.observableArray();

        // Execute the test
        this.Run = function () {

            for (var testName in testSet) {
                if (typeof(testSet[testName]) === "function") {

                    // run single test and save the result
                    testResults.push({
                        name: testName,
                        result: testSet[testName]()
                    });
                }
            }

            return testResults;
        }
    };

    return TestRunner;
});