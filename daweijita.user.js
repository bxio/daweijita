// ==UserScript==
// @name         DaWeiJiTa Downloader
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Displays and downloades
// @author       You
// @match        http://*.daweijita.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  //are you on a tab page?
  let tabPageMatch = /(\d+)\.html/.exec(window.location.href);

  if (tabPageMatch != null) {
    var input = document.createElement("input");
    input.type = "button";
    input.value = "Show Download Links";
    input.onclick = showAlert;
    input.setAttribute("style", "font-size:18px;position:absolute;top:120px;right:40px;");
    document.body.appendChild(input);
  }

  function getDownloadLinks(){
    var els = document.querySelectorAll("a[href^='http://cdn.daweijita.com']");
    for (var i = 0, l = els.length; i < l; i++) {
      var el = els[i];
      //el.innerHTML = el.innerHTML.replace(/link/gi, 'dead link');
      window.open(el.href);
    }
  }

  function showAlert() {
    if (tabPageMatch != null) {
      if(confirm("in guitar page. Pageid:" + tabPageMatch[1]+"\n Open sheets in new tabs?")){
        // alert("opening.");
        getDownloadLinks();
      }else{
        alert("not opening.");
      }
    }
  }


})();
