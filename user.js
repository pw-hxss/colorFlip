// ==UserScript==
// @name         colorFlip
// @namespace    https://krunker.io/
// @version      1.0
// @description  反转颜色，在视频游戏中更容易识别敌人
// @match        https://krunker.io/* //适用于所有网页
// @grant        GM_addStyle
// ==/UserScript==
(function() {
    var style = document.createElement('style');
    style.textContent = '* { filter: invert(1) !important; } img, video { filter: invert(1) !important; }';
    document.head.appendChild(style);
})();
