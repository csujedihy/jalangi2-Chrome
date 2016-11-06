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

function reloadPage() {
	var options = {
	    ignoreCache: true,
	    userAgent: undefined
	};
	chrome.devtools.inspectedWindow.reload(options);
}

var startTimeInSec = 0.0, ttfbTime = 0.0;
function listen() {
  
	var actionButton = document.querySelector('#actionButton');
	var clearButton = document.querySelector('#clearButton');
	var reloadButton = document.querySelector('#reloadButton');
	var bodyDom = document.querySelector('#detailBody');
	   	
	clearButton.addEventListener("click", function() {
		bodyDom.innerHTML = "";
	});

	reloadButton.addEventListener("click", function() {
	   	bodyDom.innerHTML = "";
		reloadPage();
	});



	actionButton.addEventListener("click", function(){
		chrome.devtools.network.getHAR(function (log) {
			

		});
	});

	chrome.devtools.network.onRequestFinished.addListener(function(request) {
		
	});

  	console.log('listen');
}


window.addEventListener('load', listen);

