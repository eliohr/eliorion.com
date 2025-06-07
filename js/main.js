

/*
function autoplayAmbience {
    const audio = document.querySelector('audio');
    const bandcampEmbed = document.querySelector('iframe[src*="bandcamp"]');
    const youtubeEmbed = document.querySelector('iframe[src*="youtube"]');
    const spotifyEmbed = document.querySelector('iframe[src*="spotify"]');
    
    bandcampEmbed.addEventListener('mouseover', function() {
        audio.pause();
    });

    youtubeEmbed.addEventListener('mouseover', function() {
        audio.pause();
    });

    spotifyEmbed.addEventListener('mouseover', function() {
        audio.pause();
    });
});
document.addEventListener('DOMContentLoaded', autoplayAmbience);
*/

// top section background selector
function setTopBackground() {
    const top = document.querySelector('.top');
    const randomNum = Math.floor(Math.random() * 1) + 8; // right now only image 8
    top.classList.add('img' + randomNum); 
}
document.addEventListener('DOMContentLoaded', setTopBackground);

// flipper scripter
function imageFlipper() {
    document.getElementById("flipper").onmouseover = function() {
        this.src = "media/images/facepalm.jpeg";
    }
    document.getElementById("flipper").onmouseout = function() {
        this.src = "media/images/vest.jpeg";
    }
}
document.addEventListener('DOMContentLoaded', imageFlipper);