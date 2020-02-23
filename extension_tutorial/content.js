var iFrame  = document.createElement ("iframe");
iFrame.src  = chrome.extension.getURL ("popup1.html");

document.body.insertBefore(iFrame, document.body.firstChild);


/*var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove;
};
(document.head || document.documentElement).appendChild(s);
*/
