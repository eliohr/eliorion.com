// i took a vast majority of this code straight from papercuties.art

var tryCount = 0;
document.addEventListener("DOMContentLoaded", function() {
    let tryCount = 0; // Declare and initialize tryCount

    const elements = document.querySelectorAll('.random-position');

    elements.forEach(function (element) {
        setRandomPosition(element);

        element.addEventListener("mouseout", (event) => {
            setRandomPosition(event.target);
            tryCounter();
        });

        element.addEventListener("click", setRandomColor);
    });

    const elementsStatic = document.querySelectorAll('.random-position-static');

    elementsStatic.forEach(function (element) {
        setRandomPosition(element);
        element.addEventListener("click", setRandomColor);

        element.addEventListener("mouseout", (event) => {
        setRandomPosition(event.target);
    });
    });


    setRandomColor(); // Set initial color

    // ... (setRandomPosition and setRandomColor functions as shown above) ...
});

function tryCounter() {
    tryCount++;
    if (tryCount % 21 === 0) {
        const tryMessage = document.getElementsByClassName("try")[0];
        if (tryMessage) {
            tryMessage.style.opacity = "1";
            setTimeout(() => {
                tryMessage.style.opacity = "0";
            }, 1000);
        }
    }
}

// ... (setRandomPosition and setRandomColor functions as shown above) ...

function setRandomColor() {

    var hue = Math.random() * 360;

    document.body.style.backgroundColor = "hsl(" + hue + ", 65%, 25%)";

}

function setRandomPosition(element) {
    var scrollbarWidth = getScrollbarWidth();
    var buffer = 1;

    do {
        var left = Math.floor(Math.random() * (window.innerWidth - element.clientWidth - scrollbarWidth.vertical - buffer * 2)) + buffer;
        var top = Math.floor(Math.random() * (window.innerHeight - element.clientHeight - scrollbarWidth.horizontal - buffer * 2)) + buffer;
    } while (checkOverlap(left, top, element));

    element.style.left = left + 'px';
    element.style.top = top + 'px';
}

function getScrollbarWidth() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);

    var scrollbarWidth = {
        horizontal: scrollDiv.offsetHeight - scrollDiv.clientHeight,
        vertical: scrollDiv.offsetWidth - scrollDiv.clientWidth
    };

    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
}

function checkOverlap(left, top, element) {
    var overlap = false;
    var rect1 = {
        left: left,
        top: top,
        right: left + element.offsetWidth,
        bottom: top + element.offsetHeight
    };

    elements.forEach(function (otherElement) {
        if (otherElement !== element) {
            var rect2 = otherElement.getBoundingClientRect();
            overlap = !(rect1.right < rect2.left || 
                        rect1.left > rect2.right || 
                        rect1.bottom < rect2.top || 
                        rect1.top > rect2.bottom);
            if (overlap) return;
        }
    });

    setTimeout(100);

    return overlap;
}

var elements = document.querySelectorAll('.random-position');

window.addEventListener('resize', function () {
    elements.forEach(function (element) {
        setRandomPosition(element);
    });
});