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
var controller = new ScrollMagic.Controller({
    globalSceneOptions: { // options for every scene
        reverse: true,
        triggerHook: 'onLeave'
        },
        addIndicators: true
});

// build scene 01  LANDING goes up and...
new ScrollMagic.Scene({
        triggerElement: "#outcome",
        duration: 600,
        offset: 0
    })
    .setPin("#outcome")
    .setTween(".outcome-container", {
        y: -300,
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);

// build scene 03 - pinna div bolso
    new ScrollMagic.Scene({
        triggerElement: "#bolso",
    })
    .setPin("#bolso")
    .addTo(controller);

// build scene 04  fadein bolsy
new ScrollMagic.Scene({
        triggerElement: "#bolso",
        triggerHook: 'onEnter',
        duration: 0,
        offset: 200
    })
    .setTween(bolso_fadein)
    .addTo(controller);

// build scene 05 - pinna bolsy
new ScrollMagic.Scene({
    triggerElement: ".b",
})
.setPin(".b")
.addTo(controller);

//CARICAMENTO
window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
}