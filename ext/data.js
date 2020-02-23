var nameofchar = "";
var char_id = "";
var logo = "";
var data = {
    "charities": [
        {
            "name": "The Mario Brothers Foundation",
            "charity_id": "G99YM4X3UVEK6",
            "logo_url": "https://mario.nintendo.com/assets/img/home/intro/mario-pose2.png"
        },
        {
            "name": "Ballmer Peak Research Foundation",
            "charity_id": "FRPQWDZGX75VL",
            "logo_url": "https://lybio.net/wp-content/uploads/Steve-Ballmer-Developers.jpg"
        },
        {
            "name": "Zamm Zatty Foundation",
            "charity_id": "PDC9NCQP4YTGU",
            "logo_url": "https://www.meme-arsenal.com/memes/3f617652c8b3fdb21bcefc67020cb45c.jpg"
        },
        {
            "name": "Farquaad Fund",
            "charity_id": "N6393EV2M4CHY",
            "logo_url": " https://i.pinimg.com/originals/fd/f2/1f/fdf21fcb90e55859c1da1fff8b6a9aa9.jpg"
        },
        {
            "name": "Yerba Relief",
            "charity_id": "MACEAG737RZSW",
            "logo_url": "https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_2fab5ac1-7fcd-44dd-8c86-79e9cfe839b9.png"
        }
    ]
};

$(function() {
    $.each(data.charities, function(i, f) {
        var row = "<option>" + f.name + "</option>";
        $('#charity-list').append(row);
    });
});




function getCharInfo(charity) {
    nameofchar = charity;
    console.log(nameofchar);

    $.each(data.charities, function(i, f) {
        if (f.name == nameofchar) {
            char_id = f.charity_id;
            logo = f.logo_url;
        }
    });

    document.getElementById("charID").value = char_id;
    document.getElementById("logoURL").value = logo;
    console.log(logo);
    console.log(char_id);
}
