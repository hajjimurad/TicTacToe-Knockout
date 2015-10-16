/**
 * Created by murad on 15/10/15.
 */

define("testRunner", ["lib/knockout"], function (ko) {

    function TestRunner(testSet) {

        // Execute the test
        this.Run = function (resultsContainer) {

            for (var testName in testSet) {
                if (typeof(testSet[testName]) === "function") {

                    // run single test and save the result
                    resultsContainer.push({
                        name: testName,
                        result: testSet[testName]()
                    });
                }
            }
        }
    };

    return TestRunner;
});