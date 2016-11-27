"use strict";

/**
 * The result of this function will be tained by Analysis (by name)
 */
function taint(x) {
	return x;
}

/**
 * Result of this function will be replaced with whether the value is taint
 */
function isTaint(x) { return false; }

var x = taint(5);
var y = 'Hello World';

console.log(x);
console.log(y);

var np = y;
y = x + y;
var z = y;


function DoDo() {
}

console.log('IsTaint DoDo: ' + isTaint(DoDo(5)));

DoDo = taint(DoDo);

console.log('IsTaint DoDo: ' + isTaint(DoDo(5)));
console.log('IsTaint: ' + isTaint(z) + ' ' + isTaint(np) + ' ' + z + ' ' + np);