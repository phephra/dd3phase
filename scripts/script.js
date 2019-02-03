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
//Altre funzioni
//////////////////////////////////////////////////////////


//Overlays
function viaOverlay1() {
    document.getElementsByClassName('overlay')[0].classList.add("hidden");
    document.getElementById('tutorial').style.display = "block";
    document.getElementById('counter').style.display = "block";
}

function vieniOverlay1() {
    closeNav();
    document.getElementsByClassName('overlay')[0].classList.remove("hidden");
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('counter').style.display = "none";
}

function viaOverlay2() {
    document.getElementsByClassName('overlay')[1].classList.add("hidden");
}

function vieniOverlay2() {
    closeNav();
    document.getElementsByClassName('overlay')[1].classList.remove("hidden");
    document.getElementById("hai_finito").style.display = "none";
    document.getElementById('tutorial').style.display = "none";
    document.getElementById('counter').style.display = "none";
}


//Cambiare contenuto agli scenari
function scenario1() {
    var a = "<p class='title-text'>License granted.</p><p class='base_text'>The plant can now work at its full power, 4,571 MW, which will produce energy for the whole region and prevent the production of CO2. On the other hand, the river’s flow will soon be affected by the dam, and the decrease of its discharge means a progressive decrease in energy production.</p><a href='bolso.html'><img src='/assets/img/scenario_1.svg' class='scenario-viz'><button type='button' class='btn-1'>Got it</button></a>"
    document.getElementsByClassName('contenuto_overlay_2')[0].innerHTML = a;
}

function scenario2() {
    var b = "<p class='title-text'>License denied.</p><p class='base_text'>Belo Monte will now be shut down. The damage caused by the construction of the dam can’t be reversed, but the Belo Monte case can be a legal previous for other projects of mega dams in Brazil. On the other hand, the emissions of CO2 will increase in the next years, as fossil fuels will be used to compensate for the lack of hydroelectric energy.</p><img src='/assets/img/scenario_2.svg' class='scenario-viz'><a href='bolso.html'><button type='button' class='btn-1'>Got it</button></a>"
    document.getElementsByClassName('contenuto_overlay_2')[0].innerHTML = b;
}
//////////////////////////////////////////////////////////
//SCROLLMAGIC
//////////////////////////////////////////////////////////



//WORLD_MAP_FADE
var fadein_tween_world = TweenMax.to('#world_map', 0.4, {
    opacity: 1
});
var fadeout_tween_world = TweenMax.to('#world_map', 0.4, {
    opacity: 0
});

//BRAZIL_MAP_FADE
var fadein_tween_brazil = TweenMax.to('#brazil_map', 0.4, {
    opacity: 1
});
var fadeout_tween_brazil = TweenMax.to('#brazil_map', 0.4, {
    opacity: 0
});

//RIVER_MAP_FADE
var fadein_tween_river = TweenMax.to('#river_map', 0.6, {
    opacity: 1
});
var fadeout_tween_river = TweenMax.to('#river_map', 0.6, {
    opacity: 0
});

//BELOMONTE_INTRO_FADE
var fadein_tween_belomonte = TweenMax.to('#belomonte_intro', 0.6, {
    opacity: 1
});
var fadeout_tween_belomonte = TweenMax.to('#belomonte_intro', 0.6, {
    opacity: 0
});


//XINGU_MAP_FADE
var fadein_tween_xingu = TweenMax.to('#xingu_map', 0.4, {
    opacity: 1
});
var fadeout_tween_xingu = TweenMax.to('#xingu_map', 0.4, {
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
        triggerElement: "#landing",
        duration: 600,
        offset: 0
    })
    .setPin("#landing")
    .setTween("#landing-text", {
        y: -300,
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);

// build scene 02  Scene 01 blendet aus
new ScrollMagic.Scene({
        triggerElement: "#landing",
        offset: 200,
        duration: 0
    })
    .setPin("#landing")
    .setTween("#landing", {
        autoAlpha: 0
    })
    .addTo(controller);

// build scene 03  Introduzione
new ScrollMagic.Scene({
        triggerElement: "#world-map-text",
        duration: 200
    })
    .setPin("#landing")
    .setTween("#world-map-text p", {
        y: -500,
        ease: Linear.easeNone
    })
    .addTo(controller);

// build scene 04 - map appears
new ScrollMagic.Scene({
        triggerElement: '#world-map-text',
        duration: 300,
    })
    .setPin("#landing")
    .setTween(fadein_tween_brazil)
    .addTo(controller);

// build scene 05 - pinna brasile
new ScrollMagic.Scene({
        triggerElement: "#world-map-text",
        duration: '200%'
    })
    .setPin("#brazil_map")
    .addTo(controller);

// build scene 06 - pinna belomonte intro
new ScrollMagic.Scene({
        triggerElement: "#world-map-text",
        duration: 3500
    })
    .setPin("#belomonte_intro")
    .addTo(controller);

// build scene 07 - overlay appears
new ScrollMagic.Scene({
        triggerElement: '#world-map-text',
        duration: 500,
        offset: 600
    })
    .setPin("#landing")
    .setTween(fadein_tween_river)
    .addTo(controller);

// build scene 08 - pinna overlay
new ScrollMagic.Scene({
        triggerElement: "#world-map-text",
        duration: 3000
    })
    .setPin("#river_map")
    .addTo(controller);

// build scene 09 - muovi testo
new ScrollMagic.Scene({
        triggerElement: "river_map",
        duration: 200,
        offset: 1000
    })
    .setPin("#landing")
    .setTween("#brazil-map-text", {
        y: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);

// build scene 10 - muovi testo
new ScrollMagic.Scene({
        triggerElement: "river_map",
        duration: 200,
        offset: 1000
    })
    .setPin("#landing")
    .setTween("#brazil-map-text", {
        y: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);

//build scene 11 - Appare belomonte intro
new ScrollMagic.Scene({
        triggerElement: '#brazil-map-text',
        offset: 100,
        duration: 200
    })
    .setPin("#landing")
    .setTween(fadein_tween_belomonte)
    .addTo(controller);

//build scene 12 - Appare XINGU_MAP
new ScrollMagic.Scene({
        triggerElement: '#brazil-map-text',
        offset: 1000,
        duration: 200
    })
    .setPin("#landing")
    .setTween(fadein_tween_xingu)
    .addTo(controller);

// build scene 13 - pinna mappa
new ScrollMagic.Scene({
        triggerElement: "#brazil-map-text",
        duration: 4000
    })
    .setPin("#xingu_map")
    .setTween("river_map", {
        autoAlpha: 0,
        ease: Linear.easeNone
    })
    .addTo(controller);



//////////////////////////////////////////////////////////
//MAPPA
//////////////////////////////////////////////////////////

//INIZIALIZZAZIONE DELLA MAPPA
var map = L.map('mapid', {
    crs: L.CRS.Simple,
    attributionControl: false,
    maxBoundsViscosity: 1,
    zoomControl: false
});

//CALCOLO BOUNDS CORRETTI
var h = window.innerHeight;
var boundH = h;
var boundW = boundH * 1.896;

//POSIZIONAMENTO IMMAGINE
var bounds = [
        [0, 0],
        [boundH, boundW]
    ];
var image = L.imageOverlay('mappina.png', bounds).addTo(map);


var ultima_mappa = L.imageOverlay('', bounds);

function cambiaMappa(argomento) {
    ultima_mappa = L.imageOverlay('/assets/img/mappina' + argomento + '.png', bounds).addTo(map);
}

function resetMappa() {
    map.removeLayer(ultima_mappa);
}

//IMPEDIMENTI ZOOM E PAN
map.scrollWheelZoom.disable()
map.fitBounds(bounds);
map.setMaxBounds(bounds);
map.setMaxZoom(2);

//ICONE

var popupAnchorX = 200;
var popupAnchorY = 0;

var iconAnchorX = 30;
var iconAnchorY = 30;

var iconAnchorXBig = 40;
var iconAnchorYBig = 40;

var iconScale = 60;
var iconScaleBig = 80;

var icona_altamira = L.icon({
    iconUrl: '/assets/icons/icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira_I = L.icon({
    iconUrl: '/assets/icons/icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira_now = L.icon({
    iconUrl: '/assets/icons/icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira2 = L.icon({
    iconUrl: '/assets/icons/icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira2_I = L.icon({
    iconUrl: '/assets/icons/icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira2_now = L.icon({
    iconUrl: '/assets/icons/icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira3 = L.icon({
    iconUrl: '/assets/icons/icona_altamira.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira3_I = L.icon({
    iconUrl: '/assets/icons/icona_altamira_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_altamira3_now = L.icon({
    iconUrl: '/assets/icons/icona_altamira_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga = L.icon({
    iconUrl: '/assets/icons/icona_diga.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga_I = L.icon({
    iconUrl: '/assets/icons/icona_diga_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga_now = L.icon({
    iconUrl: '/assets/icons/icona_diga_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga2 = L.icon({
    iconUrl: '/assets/icons/icona_diga.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga2_I = L.icon({
    iconUrl: '/assets/icons/icona_diga_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_diga2_now = L.icon({
    iconUrl: '/assets/icons/icona_diga_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente = L.icon({
    iconUrl: '/assets/icons/icona_ambiente.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente2 = L.icon({
    iconUrl: '/assets/icons/icona_ambiente.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente_I = L.icon({
    iconUrl: '/assets/icons/icona_ambiente_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente2_I = L.icon({
    iconUrl: '/assets/icons/icona_ambiente_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente_now = L.icon({
    iconUrl: '/assets/icons/icona_ambiente_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_ambiente2_now = L.icon({
    iconUrl: '/assets/icons/icona_ambiente_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios = L.icon({
    iconUrl: '/assets/icons/icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios2 = L.icon({
    iconUrl: '/assets/icons/icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios3 = L.icon({
    iconUrl: '/assets/icons/icona_indios.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios_I = L.icon({
    iconUrl: '/assets/icons/icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios2_I = L.icon({
    iconUrl: '/assets/icons/icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios3_I = L.icon({
    iconUrl: '/assets/icons/icona_indios_I.png',
    iconSize: [iconScale],
    iconAnchor: [iconAnchorX, iconAnchorY],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios_now = L.icon({
    iconUrl: '/assets/icons/icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios2_now = L.icon({
    iconUrl: '/assets/icons/icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});

var icona_indios3_now = L.icon({
    iconUrl: '/assets/icons/icona_indios_now.png',
    iconSize: [iconScaleBig],
    iconAnchor: [iconAnchorXBig, iconAnchorYBig],
    popupAnchor: [popupAnchorX, popupAnchorY]
});


// specify popup options 
var customOptions = {
    'maxWidth': '500',
    'className': 'custom-popup',
    'closeButton': false
}

//MARKERS
var altamira = L.latLng([(boundH/4)*2.62, (boundW/12)*3.1]);
var altamira2 = L.latLng([(boundH/4)*2.4, (boundW/12)*2.93]);
var altamira3 = L.latLng([(boundH/4)*2.3, (boundW/12)*2.50]);
var diga = L.latLng([(boundH/4)*2.97, (boundW/12)*6.42]);
var diga2 = L.latLng([(boundH/4)*1.4, (boundW/12)*5]);
var ambiente = L.latLng([(boundH/4)*1.4, (boundW/12)*6.9]);
var ambiente2 = L.latLng([(boundH/4)*2, (boundW/12)*7]);
var indios = L.latLng([(boundH/4)*1.26, (boundW/12)*6.1]);
var indios2 = L.latLng([(boundH/4)*0.89, (boundW/12)*6.75]);
var indios3 = L.latLng([(boundH/4)*0.6, (boundW/12)*7.2]);

var marker_altamira = L.marker(altamira, {
    icon: icona_altamira,
}).addTo(map).bindPopup('<p class="titolo_popup">Altamira</p><p>Altamira is one of one hundred and forty-four municipalities in the state of Pará, in northern Brazil.</p><p class="hint">Click to inspect</p>', customOptions);


var marker_altamira2 = L.marker(altamira2, {
    icon: icona_altamira2
}).addTo(map).bindPopup('<p class="titolo_popup">Altamira</p><p>Altamira is one of one hundred and forty-four municipalities in the state of Pará, in northern Brazil.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_altamira3 = L.marker(altamira3, {
    icon: icona_altamira3
}).addTo(map).bindPopup('<p class="titolo_popup">Altamira</p><p>Altamira is one of one hundred and forty-four municipalities in the state of Pará, in northern Brazil.</p><p class="hint">Click to inspect</p>', customOptions);


var marker_diga = L.marker(diga, {
    icon: icona_diga
}).addTo(map).bindPopup('<p class="titolo_popup">UHE Belo Monte</p><p>Belo Monte is one of the hydroelectric giants in the complex built by Norte Energia on the Xingu River.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_diga2 = L.marker(diga2, {
    icon: icona_diga2
}).addTo(map).bindPopup('<p class="titolo_popup">UHE Belo Monte</p><p>Belo Monte is one of the hydroelectric giants in the complex built by Norte Energia on the Xingu River.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_ambiente = L.marker(ambiente, {
    icon: icona_ambiente
}).addTo(map).bindPopup('<p class="titolo_popup">Xingu River</p><p>By diverting the flow of the river, the building of the dam caused deadly consequences on the fauna and flora of the Amazon.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_ambiente2 = L.marker(ambiente2, {
    icon: icona_ambiente2
}).addTo(map).bindPopup('<p class="titolo_popup">Xingu River</p><p>By diverting the flow of the river, the building of the dam caused deadly consequences on the fauna and flora of the Amazon.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_indios = L.marker(indios, {
    icon: icona_indios
}).addTo(map).bindPopup('<p class="titolo_popup">Indigenous Peoples</p><p>The native peoples who live along the Xingu river have been the fiercest of the dam opposers.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_indios2 = L.marker(indios2, {
    icon: icona_indios2
}).addTo(map).bindPopup('<p class="titolo_popup">Indigenous Peoples</p><p>The native peoples who live along the Xingu river have been the fiercest of the dam opposers.</p><p class="hint">Click to inspect</p>', customOptions);

var marker_indios3 = L.marker(indios3, {
    icon: icona_indios3
}).addTo(map).bindPopup('<p class="titolo_popup">Indigenous Peoples</p><p>The native peoples who live along the Xingu river have been the fiercest of the dam opposers.</p><p class="hint">Click to inspect</p>', customOptions);


//DO UN id AI MARKER

marker_altamira._icon.id = "markerID_altamira";
marker_altamira2._icon.id = "markerID_altamira2";
marker_altamira3._icon.id = "markerID_altamira3";
marker_diga._icon.id = "markerID_diga";
marker_diga2._icon.id = "markerID_diga2";
marker_ambiente._icon.id = "markerID_ambiente";
marker_ambiente2._icon.id = "markerID_ambiente2";
marker_indios._icon.id = "markerID_indios";
marker_indios2._icon.id = "markerID_indios2";
marker_indios3._icon.id = "markerID_indios3";



//APRO I POPUP AL MOUSEOVER
marker_altamira.on('mouseover', function (e) {
    this.openPopup();
});
marker_altamira.on('mouseout', function (e) {
    this.closePopup();
});
marker_altamira2.on('mouseover', function (e) {
    this.openPopup();
});

marker_altamira2.on('mouseout', function (e) {
    this.closePopup();
});

marker_altamira3.on('mouseover', function (e) {
    this.openPopup();
});

marker_altamira3.on('mouseout', function (e) {
    this.closePopup();
});

marker_diga.on('mouseover', function (e) {
    this.openPopup();
});

marker_diga.on('mouseout', function (e) {
    this.closePopup();
});

marker_diga2.on('mouseover', function (e) {
    this.openPopup();
});

marker_diga2.on('mouseout', function (e) {
    this.closePopup();
});

marker_ambiente.on('mouseover', function (e) {
    this.openPopup();
});

marker_ambiente.on('mouseout', function (e) {
    this.closePopup();
});

marker_ambiente2.on('mouseover', function (e) {
    this.openPopup();
});

marker_ambiente2.on('mouseout', function (e) {
    this.closePopup();
});

marker_indios.on('mouseover', function (e) {
    this.openPopup();
});

marker_indios.on('mouseout', function (e) {
    this.closePopup();
});

marker_indios2.on('mouseover', function (e) {
    this.openPopup();
});

marker_indios2.on('mouseout', function (e) {
    this.closePopup();
});

marker_indios3.on('mouseover', function (e) {
    this.openPopup();
});
marker_indios3.on('mouseout', function (e) {
    this.closePopup();
});


//Cambiare overlay mappa
marker_indios.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_indios2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_indios3.on('click', function (e) {
    resetMappa();
    cambiaMappa("_indios");
});
marker_altamira.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_altamira2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_altamira3.on('click', function (e) {
    resetMappa();
    cambiaMappa("_altamira");
});
marker_diga.on('click', function (e) {
    resetMappa();
    cambiaMappa("_diga");
});
marker_diga2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_diga");
});
marker_ambiente.on('click', function (e) {
    resetMappa();
    cambiaMappa("_ambiente");
});
marker_ambiente2.on('click', function (e) {
    resetMappa();
    cambiaMappa("_ambiente");
});

//SIDEBAR

var navState;

function openNav() {
    document.getElementById("mySidenav").style.width = "30vw";
    navState = true;
    document.getElementById("map-title").style.opacity = "1";
    document.getElementById("map-legenda").style.opacity = "1";
    document.getElementById('hai_finito').style.display = "block";
    document.getElementById('hai_finito').classList.add("move");

    document.getElementsByClassName("left")[0].style.display = "block";
    document.getElementsByClassName("right")[0].style.display = "block";
    document.getElementsByClassName("statement")[0].style.opacity = "1";
    document.getElementsByClassName("statement")[1].style.opacity = "1";
}   

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    navState = false;
    document.getElementById("map-title").style.opacity = "0";
    document.getElementById("map-legenda").style.opacity = "0";
    document.getElementById('hai_finito').classList.remove("move");
    document.getElementsByClassName("left")[0].style.display = "none";
    document.getElementsByClassName("right")[0].style.display = "none";
    document.getElementsByClassName("statement")[0].style.opacity = "0";
    document.getElementsByClassName("statement")[1].style.opacity = "0";
};

//CAMBIARE ICONE
var vecchia_icona;
var vecchio_marker;
var it_happened = false;

function cambiaIcone() {
    if (it_happened) {
        var nome_icona_I = window["icona_" + vecchia_icona + "_I"];
        vecchio_marker.setIcon(nome_icona_I);
    };
    var current_marker = window["marker_" + switchIcona];
    var nome_icona_now = window["icona_" + switchIcona + "_now"];
    current_marker.setIcon(nome_icona_now);
    vecchia_icona = switchIcona;
    vecchio_marker = current_marker;
    it_happened = true;
}

//CONTENUTO

//CONTA SE HAI LETTO TUTTO
var altamira_letto = false;
var altamira2_letto = false;
var altamira3_letto = false;
var diga_letto = false;
var diga2_letto = false;
var ambiente_letto = false;
var ambiente2_letto = false;
var indios_letto = false;
var indios2_letto = false;
var indios3_letto = false;

var array_icone = ["altamira", "altamira2", "altamira3", "diga", "diga2", "ambiente", "ambiente2", "indios", "indios2", "indios3"];


function contaLetture() {

    if (altamira_letto & altamira2_letto & altamira3_letto & diga_letto & diga2_letto & ambiente_letto & ambiente2_letto & indios_letto & indios2_letto & indios3_letto) {
        closeNav();
        document.getElementsByClassName('overlay')[1].classList.remove("hidden");
        document.getElementById("hai_finito").style.display = "none";

        document.getElementById("title_overlay2").innerHTML = "Time to Decide...";
        document.getElementById("text_overlay2").innerHTML = "If you were in charge of the dam's future, would you grant the Operational License?";
        document.getElementsByClassName("btn-1")[1].style.display = "block";
        document.getElementsByClassName("btn-1")[2].style.display = "block";
        document.getElementsByClassName("btn-3")[0].style.display = "none";
        document.getElementsByClassName("btn-3")[1].style.display = "none";
    } else {
        closeNav();
        document.getElementsByClassName('overlay')[1].classList.remove("hidden");
        document.getElementById("hai_finito").style.display = "none";

        document.getElementById("title_overlay2").innerHTML = "Are you sure?";
        document.getElementById("text_overlay2").innerHTML = "You haven't checked all the problems of the dam, do you still want to take a decision?";
        document.getElementsByClassName("btn-1")[1].style.display = "none";
        document.getElementsByClassName("btn-1")[2].style.display = "none";
        document.getElementsByClassName("btn-3")[0].style.display = "block";
        document.getElementsByClassName("btn-3")[1].style.display = "block";
    }
}

function areYouSure(decisione) {

    if (decisione === "torna") {
        document.getElementsByClassName('overlay')[1].classList.add("hidden");
    }

    if (decisione === "avanti") {
        document.getElementById("title_overlay2").innerHTML = "Time to Decide...";
        document.getElementById("text_overlay2").innerHTML = "What would you do if you were in charge of the dam's future? Would you grant the license or would you deny it?";
        document.getElementsByClassName("btn-1")[1].style.display = "block";
        document.getElementsByClassName("btn-1")[2].style.display = "block";
        document.getElementsByClassName("btn-3")[0].style.display = "none";
        document.getElementsByClassName("btn-3")[1].style.display = "none";
    }
}

var switchIcona;

marker_altamira.addEventListener("click", function (e) {
    switchIcona = "altamira";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira_letto = true;
});
marker_altamira2.addEventListener("click", function (e) {
    switchIcona = "altamira2";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira2_letto = true;
});
marker_altamira3.addEventListener("click", function (e) {
    switchIcona = "altamira3";
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    altamira3_letto = true;
});

marker_diga.addEventListener("click", function (e) {
    switchIcona = "diga";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    diga_letto = true;
});
marker_diga2.addEventListener("click", function (e) {
    switchIcona = "diga2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    diga2_letto = true;
});

marker_ambiente.addEventListener("click", function (e) {
    switchIcona = "ambiente";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    ambiente_letto = true;
});
marker_ambiente2.addEventListener("click", function (e) {
    switchIcona = "ambiente2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    ambiente2_letto = true;
});

marker_indios.addEventListener("click", function (e) {
    switchIcona = "indios";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios_letto = true;
});
marker_indios2.addEventListener("click", function (e) {
    switchIcona = "indios2";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios2_letto = true;
});
marker_indios3.addEventListener("click", function (e) {
    switchIcona = "indios3";
    console.log(switchIcona);
    openNav();
    unveilStatements(switchIcona);
    unveilVersions(switchIcona);
    cambiaIcone()
    indios3_letto = true;
});


//MANDO AVANTI LE ICONE CON LA FRECCETTA
var posizione = 0;

function avanti() {
    posizione = array_icone.indexOf(switchIcona);
    posizione++;
    switchIcona = array_icone[posizione];
    document.getElementById('markerID_' + switchIcona).click();
    map.closePopup();
};

function indietro() {
    posizione = array_icone.indexOf(switchIcona);
    posizione--;
    if (posizione < 0) {
        posizione = 7;
    };
    switchIcona = array_icone[posizione];
    document.getElementById('markerID_' + switchIcona).click();
    map.closePopup();
};

var loco = '<i class="fas fa-map-marker-alt" style="font-size:1.2rem;color:#ffffff;"></i>'

function unveilStatements(switchIcona) {
    switch (switchIcona) {
        case "altamira":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Norte Energia invested in the construction and renovation of hospitals, which have already been delivered and equipped." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Hospitals ';
            break;
        case "altamira2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Belo Monte built a modern system of sewage collection and treatment, with more than 200 km of network, and expanded the water supply system." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Sewage and Water Supply ';
            break;
        case "altamira3":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The construction of five new neighborhoods in Altamira was completed in 2015. In total, 3,700 houses were built." ';
            document.getElementById("location-name").innerHTML = loco + ' Altamira ';
            document.getElementById("topic-name").innerHTML = ' Housing ';
            break;
        case "diga":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "60 million people are going to be reached." ';
            document.getElementById("location-name").innerHTML = loco + ' Belo Monte Dam, Main Site ';
            document.getElementById("topic-name").innerHTML = ' Energy Production ';
            break;
        case "diga2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "Brazil needs to increase its installed capacity by 50% by 2021. A dam like Belo Monte, with its installed capacity of 11,233 MW of production, supplies about 17.6% of the necessary increase in installed capacity." ';
            document.getElementById("location-name").innerHTML = loco + ' Belo Monte Dam, Main Site ';
            document.getElementById("topic-name").innerHTML = ' Efficiency ';
            break;
        case "ambiente":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "More than 395 thousand wild animals were rescued. Healthy animals (92%) were returned to the natural habitat, while the rest were sent to scientific institutions or breeding grounds for conservation purposes. " ';
            document.getElementById("location-name").innerHTML = loco + ' Big Bend of the Xingu ';
            document.getElementById("topic-name").innerHTML = ' Impacts on Fauna ';
            break;
        case "ambiente2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The environmental conditions around Volta Grande are kept stable by a "hydrograph of consensus" - a model that establishes the minimum river flow rate to keep the area environmentally healthy." ';
            document.getElementById("location-name").innerHTML = loco + ' Big Bend of the Xingu ';
            document.getElementById("topic-name").innerHTML = ' River Flow ';
            break;
        case "indios":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The evolution of the Belo Monte project ensured that no centimeter of the more than 5 million hectares occupied by 9 ethnic groups was flooded by the reservoirs of the Plant." ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Territories ';
            document.getElementById("topic-name").innerHTML = ' Displacement of people ';
            break;
        case "indios2":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The indigenous communities actively participate in the discussions to define the actions that will be carried out in their territories. " ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Territories ';
            document.getElementById("topic-name").innerHTML = ' Cooperation with Local Communities ';
            break;
        case "indios3":
            console.log(switchIcona);
            document.getElementsByClassName("actor-icon")[0].src = "assets/img/norte_icon.svg";
            document.getElementsByClassName("actor-name")[0].innerHTML = "Norte Energia";
            document.getElementsByClassName("actor-type")[0].innerHTML = "The company running the dam";
            document.getElementsByClassName("statement-text")[0].innerHTML = ' "The Basic Indigenous Environmental Component Project has been guaranteeing fundamental rights, promoting the quality of life and integrity of some 4,000 indigenous people." ';
            document.getElementById("location-name").innerHTML = loco + ' Indigenous Territories ';
            document.getElementById("topic-name").innerHTML = ' Human Rights ';
            break;
        default:
            console.log("Non sto andando");
    }
}

function unveilVersions(switchIcona) {
    switch (switchIcona) {
        case "altamira":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_internetpress.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Internet Press Service";
            document.getElementsByClassName("actor-type")[1].innerHTML = "News Agency";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The hospital was already there, and it had shut its doors in April 2014, leaving the 22,000 people of Brasil Novo without a hospital." ';
            break;
        case "altamira2":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_mongabay.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Mongabay";
            document.getElementsByClassName("actor-type")[1].innerHTML = "News";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Over the past year, Norte Energia´s license has been suspended because of its failure to fulfill the building of an adequate sewer and water system for the city of Altamira." ';
            break;
        case "altamira3":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/img/icona_ministerio.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Ministério Público Federal";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Brazilian Ministry";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The houses proposed by Norte Energia violated the Altamira municipality Construction Code. " ';
            break;
        case "diga":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_antunes.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Walter Coronado Antunes";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Former Secretary of the Environment of the state of São Paulo";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Belo Monte Dam Complex is one of the least efficient hydro-power projects in the history of Brazil." ';
            break;
        case "diga2":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_amazonwatch.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Amazon Watch";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Only 70% of the energy will go to the Brazilian population. The remaining 30% will be sold to power mining and industrial companies." ';
            break;
        case "ambiente":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_survival.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Survival International";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The proposed flow through the Volta Grande meant the river will not be capable of maintaining species diversity, risking extinction of hundreds of species." ';
            break;
        case "ambiente2":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_amazonconservation.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Amazon Conservation";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "A canal diverts much (up to 80%) of the river’s flow from the main reservoir to the canal reservoir, which feeds the turbines generating the electricity. As a result, downstream of the main dam is left with a much reduced flow (20%) for a stretch of 100 km." ';
            break;
        case "indios":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_internationalrivers.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "International Rivers";
            document.getElementsByClassName("actor-type")[1].innerHTML = "NGO";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "20,000 people were displaced by the dam." ';
            break;
        case "indios2":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_facingfinance.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Facing Finance";
            document.getElementsByClassName("actor-type")[1].innerHTML = "News";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "The meetings held to explain the impacts of the dam were highly inadequate—indigenous people had two days to review 26,000 pages of the technical study, with no interpreters." ';
            break;
        case "indios3":
            document.getElementsByClassName("actor-icon")[1].src = "/assets/icons/icona_ministerio.png";
            document.getElementsByClassName("actor-name")[1].innerHTML = "Ministério Público Federal";
            document.getElementsByClassName("actor-type")[1].innerHTML = "Brazilian Ministry";
            document.getElementsByClassName("statement-text")[1].innerHTML = ' "Norte Energia violated 55 different obligations it had agreed to in order to guarantee the survival of indigenous groups, farmers and fishermen whose homes and lands will be lost." ';
            break;
        default:
    }
}


//CARICAMENTO
window.onload = function () {
    document.getElementById('loading-mask').style.display = 'none';
}
