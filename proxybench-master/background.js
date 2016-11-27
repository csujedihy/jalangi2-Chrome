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
  if (request.cmd != undefined) {
    if (request.cmd == "run") {
      chrome.tabs.executeScript({
        file: 'content_injector.js'
      });
    } else if (request.cmd == "resetproxy") {
      var config = {
          mode: "system"
        };
      chrome.proxy.settings.set({value: config, scope: 'regular'}, function() {});
      console.log("set regular proxy!");
    }
  } else {
      var config = {
        mode: "fixed_servers",
        rules: {
          singleProxy: {
            scheme: "http",
            host: "127.0.0.1",
            port: 9999
          }
        }
      };

      chrome.proxy.settings.set({value: config, scope: 'regular'}, function() {});
      console.log("proxy settle");
  }
});

function tellMITM(filename, callback) {
  var HOST = 'localhost:';
  var PORT = '8000';
  var connection = new WebSocket('ws://' + HOST + PORT);

  connection.onerror = function (error) {
      console.log('reload connection got error' + JSON.stringify(error));
  };

  connection.onopen = function() {
    connection.send(filename);
  };

  connection.onmessage = callback;
}

