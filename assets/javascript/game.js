console.log("linked")

var randomTarget = 0;
var loss = 0;
var win = 0;
var totalCrystalsValue = 0;
var images = [//wpgp//
"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/68905708_10215973875802835_3870082661196234752_n.jpg?_nc_cat=106&_nc_oc=AQlIqrKfwWVTUz6v20kTEiSKwPa8IamBY8nbGjfCBOIHR9eZQVnRKLynXkSW7Fb7aDG_jMJVXH5ATFSyYICZ__hI&_nc_ht=scontent-iad3-1.xx&oh=6d4898f1e6456b8bc5fffa8dadfb4e90&oe=5DD2D865",
"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/68588487_10215973874162794_2773653355354914816_n.jpg?_nc_cat=109&_nc_oc=AQmkNiMzu2tgCdwqH9Z6GlAkPePHoUi5TbImEH4BEd3rkkQvxu5NegkeXs2sn3Vn3AR2nJtjMyKcLlsTTQKuuien&_nc_ht=scontent-iad3-1.xx&oh=48ea721f6dcfc1c4dac01be9e8ce18e0&oe=5DEDBF3C",
"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67888253_10215973876802860_8276999104400195584_n.jpg?_nc_cat=104&_nc_oc=AQlcqoHP9IPbzaPoKOm2OjKsCQiJ57TWZoDGOgSBxp64L1evo_y3KVA3dbBKS5uzJcbHsCRdzxta2a10EljSXdQn&_nc_ht=scontent-iad3-1.xx&oh=1632c3ee6ed907946fa3eb54476e4b32&oe=5DDEA818",
"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/67942580_10215973871722733_8510818588578283520_n.jpg?_nc_cat=111&_nc_oc=AQkY0skNUxska_SSMSjMrx_FzqLSbzNfmX6Tple5zKJ9-Cmgr-QQRzABBsV_Hv_dMZiOuhlDXVv1Ps20_5y8xibO&_nc_ht=scontent-iad3-1.xx&oh=49e52f4885254027dd1ae7600f3f7ee2&oe=5DE8A045",
];

var startResetGame = function () {

    $(".crystals").empty(); // zeros individual  crystal value


    randomTarget = Math.floor(Math.random() * 99) + 22; //?? starts at 21 - 120 (how do I get it to start at 19?)
    console.log(randomTarget)


    $("#randomNumberTarget").html( "Target: " + "<br>" + "<br>" + randomTarget);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 12) + 1; // should show 1-12
        console.log(random);

        var crystalV = $("<div>");

        crystalV.attr({
            "class": 'crystalV',
            "data-random": random
        });
        crystalV.css({
            "background-image":"url('" + images[i] + "')",
            
        });


        $(".crystals").append(crystalV);

    }
    $("#totalCrystalV").html("Crystals Total: " + "<br>" + totalCrystalsValue);
}


startResetGame();

$(document).on("click", ".crystalV", function () {

    var numGen = parseInt($(this).attr('data-random')); // parseint makes a number

    totalCrystalsValue += numGen;
    console.log(totalCrystalsValue);
    $("#totalCrystalV").html("Crystals Total: " + "<br>" +  totalCrystalsValue);

    if (totalCrystalsValue > randomTarget) {
        console.log("lost!");
        loss++;
        $("#loss").html("Losses: " + loss);
        totalCrystalsValue = 0;
        startResetGame();
    }
    else if (totalCrystalsValue === randomTarget) {
        console.log("win!");
        win++;
        $("#win").html("Wins: " + win);
        totalCrystalsValue = 0;
        startResetGame();
    }
    console.log(totalCrystalsValue); //makes crystal value add to it's own random value
}); 