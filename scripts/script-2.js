//////////////////////////////////////////////////////////
//MENU
//////////////////////////////////////////////////////////

$(document).ready(function () {
    var hamburger = $('#hamburger-icon');
    hamburger.click(function () {
        hamburger.toggleClass('active');
        return false;
    });
});

//MENUBAR

document.getElementById("hamburger-icon").addEventListener("click", toggleNav);

function toggleNav() {
    navSize = document.getElementById("nav").style.width;
    if (navSize == "100%") {
        return closeMenu();
    }
    return openMenu();
}
/* Open the sidenav */
function openMenu() {
    document.getElementById("nav").style.width = "100%";
    document.getElementsByClassName("menu-links")[0].style.opacity = "1";
}

/* Close/hide the sidenav */
function closeMenu() {
    document.getElementById("nav").style.width = "0";
    document.getElementsByClassName("menu-links")[0].style.opacity = "0";
}

//////////////////////////////////////////////////////////
//SCROLLMAGIC
/////////////////////////////////////////////////////////


//BOLSO_FADE
var bolso_fadein = TweenMax.to('.b', 0.4, {
    opacity: 1
});
var bolso_fadeout = TweenMax.to('.b', 0.4, {
    opacity: 0
});


//INITALIZE SCROLLMAGIC
var controller = new ScrollMagic.Controller();

// build scene 01  LANDING goes up and...
new ScrollMagic.Scene({
        triggerElement: "#outcome",
        triggerHook: "onLeave",
        duration: 600,
        offset: 0
    })
    .setPin("#outcome")
    .setTween(".outcome-container", {
        y: -300,
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addIndicators()
    .addTo(controller);

// build scene 02  Scene 01 blendet aus
new ScrollMagic.Scene({
        triggerElement: "#outcome",
        triggerHook: "onLeave",
        offset: 200,
        duration: 0
    })
    .setPin("#outcome")
    .setTween("#outcome", {
        autoAlpha: 0
    })
    .addIndicators()
    .addTo(controller);

// build scene 03  appare testo bolsi
new ScrollMagic.Scene({
        triggerElement: "#bolso",
        triggerHook: "onLeave",
        duration: 500
    })
    .setPin("#outcome")
    .setTween("#bolso-container", {
        ease: Linear.easeNone
    })
    .addIndicators()
    .addTo(controller);

// build scene 04 - pinna testo bolsy
    new ScrollMagic.Scene({
            triggerElement: "#bolso",
            triggerHook: "onLeave",
            duration: 5000
        })
        .setPin("#bolso-container")
        .addIndicators()
        .addTo(controller);

// build scene 05  fadein bolsy
new ScrollMagic.Scene({
        triggerElement: "#bolso",
        triggerHook: "onLeave",
        reverse: true,
        duration: 300
    })
    .setPin("#outcome")
    .setTween(bolso_fadein)
    .addIndicators()
    .addTo(controller);

// build scene 06 - pinna bolsy
    new ScrollMagic.Scene({
            triggerElement: "#bolso",
            triggerHook: "onLeave",
            duration: 5000
        })
        .setPin(".b")
        .addIndicators()
        .addTo(controller);

//CARICAMENTO
window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
}