// require('requirejs') gets the requirejs node module
var requirejs = require('requirejs');
requirejs.config({
    baseUrl: '.',
    nodeRequire: require
});

//make define available globally like it is in the browser
global.define = require('requirejs');

//make jasmine available globally like it is in the browser
global.describe = require('../lib/jasmine-1.1.0.rc1/jasmine').describe;
global.it = require('../lib/jasmine-1.1.0.rc1/jasmine').it;
global.expect = require('../lib/jasmine-1.1.0.rc1/jasmine').expect;

//bring in and list all the tests to be run
var specs = [
  './spec/SomeTest'
]

requirejs(specs, function(ModuleSpec) {
    console.log("ModuleSpec: ", ModuleSpec);
	var jasmine = require('../lib/jasmine-1.1.0.rc1/jasmine').jasmine;
	var ConsoleJasmineReporter2 = require('../lib/consoleJasmineReporter2').ConsoleJasmineReporter;
	jasmine.getEnv().addReporter(new ConsoleJasmineReporter2());
	jasmine.getEnv().execute();
});