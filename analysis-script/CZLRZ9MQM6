var port = chrome.runtime.connectNative('cn.c2fun.jalangi2');

port.onMessage.addListener(function(msg) {
  console.log("Received" + msg);
  console.log(msg);
});

port.onDisconnect.addListener(function() {
  console.log("Disconnected");
  console.log(chrome.runtime.lastError.message);
});

chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  console.log(request.code);
  chrome.runtime.sendNativeMessage('cn.c2fun.jalangi2', { code: request.code },
    function(nativeResponse) {
      console.log("Received " + nativeResponse.status);
      sendResponse({cmd: "200"});
    });
});
