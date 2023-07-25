function keyword_display_onclick() {
  var e1 = document.getElementById("keyword-pad");
  var e2 = document.getElementById("keyword-display");
  var e4 = document.querySelector("#keyword-display>i");

  if (e1.style.visibility != "hidden") {
    e1.style.width = "0";
    e1.style.height = "0";
    e1.style.bottom = "calc(160px - var(--fix-icon-w-h) * 0.5)";
    e1.style.visibility = "hidden";
    e1.style.opacity = "0";

    e4.textContent = "🚫";
  }
  //////////////////
  else {
    e1.style.width = "";
    e1.style.height = "";
    e1.style.bottom = "calc(var(--fix-icon-w-h) / 2)";
    e1.style.visibility = "visible";
    e1.style.opacity = "1";

    e4.textContent = "👁️";
  }
} //关键词面板显示
