	console.log("start listening");
	var port = chrome.runtime.connectNative('cn.c2fun.jalangi2');

	port.onMessage.addListener(function(msg) {
		console.log("Received" + msg);
    console.log(msg);
	});
	port.onDisconnect.addListener(function() {
		console.log("Disconnected");
  	console.log(chrome.runtime.lastError.message);
	});

	port.postMessage({ text: "Hello, my_application"});

  chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({cmd: "goodbye"});
  });
