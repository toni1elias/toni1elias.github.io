!function (l) {
    "use strict";
    function getPreferredTheme() {
        var savedTheme = localStorage.getItem("theme");
        if (savedTheme) { return savedTheme; }
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    function applyTheme(theme) {
        if (theme === "dark") {
            l("body").addClass("dark-mode"); l(".color-mode-icon").addClass("active");
        } else {
            l("body").removeClass("dark-mode"); l(".color-mode-icon").removeClass("active");
        }
    }
    var currentTheme = getPreferredTheme(); applyTheme(currentTheme);
    if (window.matchMedia) {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
            if (!localStorage.getItem("theme")) { applyTheme(e.matches ? "dark" : "light"); }
        });
    }
    l(".color-mode").click(function () {
        var isDarkNow = l("body").hasClass("dark-mode");
        var nextTheme = isDarkNow ? "light" : "dark";
        localStorage.setItem("theme", nextTheme);
        applyTheme(nextTheme);
    });
    l(".navbar").headroom();
    l(".owl-carousel").owlCarousel({ items: 1, loop: !0, margin: 10, nav: !0 });
    l(function () {
        l(".nav-link, .custom-btn-link").on("click", function (o) {
            var t = l(this);
            l("html, body").stop().animate({ scrollTop: l(t.attr("href")).offset().top - 49 }, 1e3);
            o.preventDefault();
        });
    });
    l(".social-links a").tooltip();
}(jQuery);
$(document).ready(function () {
    $('.navbar-collapse a').on('click', function () {
        if ($('.navbar-toggler').is(':visible')) { $('.navbar-collapse').collapse('hide'); }
    }); $('.color-mode').on('click', function () {
        if ($('.navbar-toggler').is(':visible')) { $('.navbar-collapse').collapse('hide'); }
    });
});
function copyAddress() {
    const addressBTC = document.getElementById('btc-address').textContent.trim();
    navigator.clipboard.writeText(addressBTC); const lang = document.documentElement.lang.toLowerCase();
    if (lang === "de") { alert("Bitcoin‑Adresse wurde kopiert."); } else { alert("Bitcoin address copied."); }
}