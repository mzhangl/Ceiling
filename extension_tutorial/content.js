var iFrame  = document.createElement ("iframe");
iFrame.align = "right";
iFrame.height = "700px";
iFrame.src  = chrome.extension.getURL ("popup1.html");

document.body.insertAdjacentElement("beforebegin", iFrame);


/*var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove;
};
(document.head || document.documentElement).appendChild(s);
*/
