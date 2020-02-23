let changeColor = document.getElementById('changeColor');
$(document).ready(jQueryMain);

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                hostContains: 'paypal'
            },
        })],
        actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

/*
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.price) {
            sendResponse({
                msg: "Price received from background script"
            });
            console.log(request.price);
            sendResponse({msg: "good price"});
            jQueryMain(price.slice(1, price.indexOf(" ")));
        }
    }
);
*/

chrome.storage.local.get("count", function (price) {
    console.log("HEllo from local storage")
    if (price) {
        console.log(price);
        jQueryMain(price.slice(1, price.indexOf(" ")));
    } else {
        console.log("No price")
    }
})

function roundPrice(price_str) {
    var price = parseFloat(price_str)
    return (Math.ceil(price) - price).toFixed(2)
}


function jQueryMain(price_str) {
    console.log("Hello");
    $(".price").append(price_str);
    $(".donate").append(roundPrice(price_str));
    $("#amnt").value = toString(roundPrice(price_str));
}