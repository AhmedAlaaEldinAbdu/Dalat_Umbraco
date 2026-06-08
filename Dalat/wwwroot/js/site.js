var lang = "ar";
var isEn = lang === "en";
var textAlign = isEn ? "left" : "right";
var dir = isEn ? "ltr" : "rtl";

// Set CSS variables on the root element
document.documentElement.style.setProperty('--text-align', textAlign);
document.documentElement.style.setProperty('--dir', dir);