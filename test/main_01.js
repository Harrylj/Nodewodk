'use strict';

var abc = require('./hello_01');
var a = 'lijian';
var b = 'xiaozhi';
var c = 'shanbao';

process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
abc.greet(a);
abc.hi(b);
abc.goodbye(c);
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}