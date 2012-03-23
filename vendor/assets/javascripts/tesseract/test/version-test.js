var vows = require("vows"),
    assert = require("assert"),
    tesseract = require("../");

var suite = vows.describe("version");

suite.addBatch({
  "version": {
    topic: tesseract.version,
    "has the form major.minor.patch": function(version) {
      assert.match(version, /^[0-9]+\.[0-9]+\.[0-9]+$/);
    }
  }
});

suite.export(module);
