function keyword_display_onclick() {
  var e1 = document.getElementById("keyword-pad");
  var e2 = document.getElementById("keyword-display");
  var e3 = document.querySelector(".fix-lb-theme-change ");
  var e4 = document.querySelector("#keyword-display>i");

  if (e1.style.visibility != "hidden") {
    e1.style.width = "var(--fix-icon-w-h)";
    e1.style.height = "var(--fix-icon-w-h)";
    e1.style.bottom = "calc(160px - var(--fix-icon-w-h) * 0.5)";
    e1.style.visibility = "hidden";

    e2.style.backgroundColor = "var(--accent-color-no-alpha)";
    e2.style.outline = "1.5px var(--foregrd-no-alpha) solid";

    e3.style.visibility = "visible";
    e3.style.opacity = "1";
    e4.textContent = "🚫";
  }
  //////////////////
  else {
    e1.style.backgroundColor = "var(--keyword-backgrd)";
    e1.style.width = "calc(100% - var(--fix-icon-w-h))";
    e1.style.height = "160px";
    e1.style.bottom = "calc(var(--fix-icon-w-h) / 2)";
    e1.style.visibility = "visible";

    e2.style.backgroundColor = "transparent";
    e2.style.outline = "0";

    e3.style.display = "hidden";
    e3.style.opacity = "0";
    e4.textContent = "👁️";
  }
}
