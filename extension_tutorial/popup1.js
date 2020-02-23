$(document).ready (jQueryMain);

// function getPrice(){
//     return "15.60"
// }


function roundPrice(){
    var price = parseFloat(getPrice())
    return (Math.ceil(price) - price).toFixed(2)
}


function jQueryMain () {
    // $(".price").append(getPrice());
    // $(".donate").append(roundPrice());
    // $("#amnt").value = toString(roundPrice());
}