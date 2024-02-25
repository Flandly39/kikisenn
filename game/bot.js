//Dev Mode
function bot() {
    if (palyBot == true) {
        if ($("#b0").attr("value")) {
            const b0 = $("#b0").attr("value");
            const b1 = $("#b1").attr("value");
            const b2 = $("#b2").attr("value");
            const b3 = $("#b3").attr("value");
            const list = [100 - b0, 100 - b1, 100 - b2, 100 - b3]
            let index = list.indexOf(Math.min(...list));
            $(`#b${index}`).click();
        } else {
            //game overしたらコンテニューする。
            $("#continue").click();
        }
    }
}

let palyBot = false;
function play() {
    switch (palyBot) {
        case false:
            palyBot = true;
            break;

        default:
            palyBot = false;
            break;
    }
}
setInterval("bot();", 600);