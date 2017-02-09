function twitch() {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/search/streams?query=starcraft", createStr);
    //createStr(test);
}

function createStr(data) {
    prtAlert(data);
}

function prtAlert(msg) {
    document.getElementById("main").innerHTML = JSON.stringify(msg, null, 3)
    console.log(JSON.stringify(msg, null, 3));
}

twitch();