//$(document).ready (jQueryMain);

chrome.storage.local.get("price", function (price) {
    console.log("HEllo from local storage")
    if (price['price']) {
        console.log(price['price']);
        jQueryMain(price['price'].slice(1, price['price'].indexOf("U")-1));
    } else {
        console.log("No price")
    }
})

function roundPrice(price_str) {
    var price = parseFloat(price_str)
    console.log(price)
    return (Math.ceil(price) - price).toFixed(2)
}


function jQueryMain(price_str) {
    console.log("Hello");
    $(".price").append(price_str);
    $(".donate").append(roundPrice(price_str));
    $("#amnt").val(String(roundPrice(price_str)));
}