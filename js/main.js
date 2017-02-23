var type = ["channels", "streams"];
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

function twitch() {
    users.forEach(function(user) {
        type.forEach(function (name) {
            $.getJSON('https://wind-bow.gomix.me/twitch-api/' + name + '/' + user + '?callback=?', prtAlert);
        });
    });
}

function prtAlert(msg) {
    document.getElementById("main").innerHTML = JSON.stringify(msg, null, 3);
    console.log(JSON.stringify(msg, null, 3));
}

$(document).ready(function () {
    twitch();
});
