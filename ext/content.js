setTimeout(() => {   
var iFrame  = document.createElement ("iframe");
iFrame.align = "right";
iFrame.height = "700px"
iFrame.width = "300px"
iFrame.src  = chrome.extension.getURL ("popup1.html");

document.body.insertBefore(iFrame, document.body.firstChild);

function getPrice(){
    console.log('get price');
    return document.getElementsByClassName("Header_cartAmount_sR7sZ").item(0).textContent;
}

var price = getPrice();
console.log(document.getElementsByClassName("Header_cartAmount_sR7sZ"));
console.log(price);

chrome.storage.local.set({price: price});
/*var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
s.onload = function() {
    this.remove;
};
(document.head || document.documentElement).appendChild(s);
*/
}, 1000);
