var readFile = require('fs').readFile;
var assert = require('assert');
var exec = require('child_process').exec;
var join = require('path').join;
var os = require('os');

// Test the expected output.
exec('node .', function(err, stdout, stderr) {
    if (err) {
        throw err;
    }

    readFile(join(__dirname, 'expected.txt'), 'UTF-8', function(err, exp) {
        if (err) {
            throw err;
        }

        var expected = exp.split(os.EOL);
        var actual = stdout.split('\n');

        for (var i = 0, mx = expected.length; i < mx; i++) {
            assert.equal(actual[i], expected[i],
                "Expected '" + actual[i] + "' to be '" + expected[i] + "' on line " + (i + 1) + ".");
        }

        console.log('All tests pass!');
    });
});
