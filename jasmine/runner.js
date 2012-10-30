// from https://github.com/geddesign/amd-testing/tree/master/jasmine
var requirejs = require('requirejs');
requirejs.config({
    nodeRequire: require
//    paths: {
//        fixtures      : 'test/spec/fixtures'
//      , units         : 'test/spec/units'
//      , cs            : 'src/plugins/cs'
//      , CoffeeScript  : 'src/libs/CoffeeScript'
//    }
//	baseUrl: 'js'
});

//make define available globally like it is in the browser
global.define = require('requirejs');

//make jasmine available globally like it is in the browser
global.describe = require('../lib/jasmine-1.1.0.rc1/jasmine').describe;
global.it = require('../lib/jasmine-1.1.0.rc1/jasmine').it;
global.expect = require('../lib/jasmine-1.1.0.rc1/jasmine').expect;


//bring in and list all the tests to be run
requirejs(['./spec/ModuleSpec'], function(ModuleSpec) {
	console.log("Spec running: ", ModuleSpec);
	var jasmine = require('../lib/jasmine-1.1.0.rc1/jasmine').jasmine;
	var ConsoleJasmineReporter2 = require('../lib/consoleJasmineReporter2').ConsoleJasmineReporter;
	jasmine.getEnv().addReporter(new ConsoleJasmineReporter2());
	jasmine.getEnv().execute();
});