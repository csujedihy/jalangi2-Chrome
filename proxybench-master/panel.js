// Copyright 2013 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var count = 0;

function calcTimeInSec(h,m,s,ms) {
	var timeInSec = parseFloat(h) * 3600 + parseFloat(m) * 60 + parseFloat(s) + parseFloat(ms)/1000;
	return timeInSec;
}

/* round function */
function toDecimal2(x) {  
    var f = parseFloat(x);  
    if (isNaN(f)) {  
        return false;  
    }  
    var f = Math.round(x*100)/100;  
    var s = f.toString();  
    var rs = s.indexOf('.');  
    if (rs < 0) {  
        rs = s.length;  
        s += '.';  
    }  
    while (s.length <= rs + 2) {  
        s += '0';  
    }  
    return s;  
}  

function setProxyAndReloadPage() {
	var options = {
	    ignoreCache: true,
	    userAgent: undefined
	};
	chrome.devtools.inspectedWindow.reload(options);
}

var startTimeInSec = 0.0, ttfbTime = 0.0;
function listen() {
  	var editor = CodeMirror(document.getElementById("editor"), {
	  lineNumbers: true,
	  mode: "javascript",
	  matchBrackets: true
	});

	var editor1 = CodeMirror(document.getElementById("editor1"), {
	  lineNumbers: true,
	  mode: "text",
	  matchBrackets: false
	});

	var actionButton = document.querySelector('#actionButton');
	var clearButton = document.querySelector('#clearButton');
	var refreshButton = document.querySelector('#refreshButton');
	var bodyDom = document.querySelector('#detailBody');

	refreshButton.addEventListener("click", function() {
		chrome.runtime.sendMessage({cmd: "resetproxy"}, function(response) {
			setProxyAndReloadPage();
		});
	});


	clearButton.addEventListener("click", function() {
		chrome.runtime.sendMessage({cmd: "resetproxy"}, function(response) {
			console.log(response);
		});
	});

	actionButton.addEventListener("click", function(){
		chrome.runtime.sendMessage({code: ""}, function(response) {
			
		});
		chrome.storage.sync.set({'jalangiInjector': editor.getValue()}, function() {
  			console.log('storage saved');
		});
	});

  	console.log('listen');
}


window.addEventListener('load', listen);

