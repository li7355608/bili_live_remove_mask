// ==UserScript==
// @name         哔哩哔哩去除直播间马赛克
// @description  将哔哩哔哩直播间的马赛克删除
// @match        https://live.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @version      1.0
// @license      MIT
// @namespace https://greasyfork.org/users/1390050
// ==/UserScript==
 
(function() {
    'use strict';
 
    function removeElementsByClassName(className) {
        const elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].remove();
        }
        console.log('直播间遮罩删除完毕');
    }
 
    setTimeout(function() {
        removeElementsByClassName("web-player-module-area-mask");
    }, 5000);
})();
