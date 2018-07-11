"use strict";
var apps = [
    {
        url: "http://localhost:8081/micro-app-a.js",
        element: "micro-app-a"
    },
    {
        url: "http://localhost:8085/micro-app-e.js",
        element: "micro-app-e"
    }
];
var loadedApps = new Array();
var loadApp = function (app) {
    debugger;
    delete window["webpackJsonp"];
    var content = document.getElementById("micro-app");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    if (loadedApps.indexOf(app.element) < 0) {
        var script_1 = document.createElement("script");
        script_1.id = app.element;
        script_1.onerror = function () { return console.error("error loading micro-app " + app.url); };
        script_1.onload = function () {
            loadedApps.push(script_1.id);
            var element = document.createElement(app.element);
            if (content)
                content.appendChild(element);
        };
        script_1.src = app.url;
        if (content)
            content.appendChild(script_1);
    }
    else {
        var element = document.createElement(app.element);
        if (content)
            content.appendChild(element);
    }
};
var onNavigationClick = function (event) {
    event.preventDefault();
    loadApp(event.srcElement.dataset);
};
window.onNavigationClick = onNavigationClick;
var doBootstrap = function () {
    if (!window['Zone']) {
        var url = "https://cdnjs.cloudflare.com/ajax/libs/zone.js/0.8.26/zone.min.js";
        var content = document.getElementsByTagName("body")[0];
        var script = document.createElement("script");
        script.onerror = function () { return console.error("error loading zone.js library " + url); };
        script.onload = function () {
            loadApp(apps[0]);
        };
        script.src = url;
        if (content)
            content.appendChild(script);
    }
};
doBootstrap();
