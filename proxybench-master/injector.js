chrome.storage.sync.get("jalangiInjector", function(item) {
  console.log(item);
  if (item.jalangiInjector != undefined) {
    var script = document.createElement("script");
    script.id = "ji";
    script.innerHTML = "var timeout = window.setTimeout(function() {if (typeof J$ !== 'undefined') {" + item.jalangiInjector + "window.clearInterval(timeout)}}, 10);";
    document.head.appendChild(script);
  } else {
    console.log("not found in LS");
  }
});