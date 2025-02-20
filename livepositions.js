window.onload = positions();

function positions() {

    for (let i = 1; i <= 7; i++) {
    setTimeout(
        x = Math.random() * 800 - 400
    , 100)
    setTimeout(
            y = Math.random() * 800 - 400
    , 100)
    setTimeout(
        document.getElementsById("showlink" + i).style.transform = "translate(" + x + "," + y + ")"
        
        , 100)
    }

}