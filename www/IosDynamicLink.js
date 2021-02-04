var exec = require('cordova/exec');

var PLUGIN_NAME = "IosDynamicLink"; // This is just for code completion uses.

var IosDynamicLink = function() {}; // This just makes it easier for
// All of your plugin functions go below this. 
// Note: We are not passing any options in the [] block for this, so make sure you include the empty [] block.
IosDynamicLinkName.testName = function(onSuccess, onError) {
   exec(onSuccess, onError, PLUGIN_NAME, "testName", []);
};
module.exports = IosDynamicLink;