window.addEventListener("resize", debounce(layout_fit_device, 50), false); //令布局适配设备;

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
    e1.style.opacity = "0";

    e2.style.backgroundColor = "var(--accent-color-no-alpha)";
    e2.style.outline = "1.5px var(--foregrd-no-alpha) solid";

    e3.style.visibility = "visible";
    e3.style.opacity = "1";
    e4.textContent = "🚫";
  }
  //////////////////
  else {
    e1.style.backgroundColor = "var(--keyword-backgrd)";
    if (document.documentElement.clientWidth < 600) {
      e1.style.width = "calc(100% - var(--fix-icon-w-h) * 1)";
    }
    if (
      document.documentElement.clientWidth >= 600 &&
      document.documentElement.clientWidth <= 1400
    ) {
      e1.style.width = "calc(100% - var(--fix-icon-w-h) * 1)";
    }
    if (document.documentElement.clientWidth > 1400) {
      e1.style.width = "calc(1200px + var(--fix-icon-w-h) * 4)";
    }
    e1.style.height = " calc(var(--fix-icon-w-h) + 240px)";
    e1.style.bottom = "calc(var(--fix-icon-w-h) / 2)";
    e1.style.visibility = "visible";
    e1.style.opacity = "1";

    e2.style.backgroundColor = "transparent";
    e2.style.outline = "0";

    e3.style.display = "hidden";
    e3.style.opacity = "0";
    e4.textContent = "👁️";
  }
} //关键词面板显示

function debounce(operate, delay) {
  let data = null;
  let datar = null;
  let newTime = null;
  function task() {
    newTime = +new Date();
    if (newTime - data < delay) {
      datar = setTimeout(task, delay);
    } else {
      operate();
      datar = null;
    }
    data = newTime;
  }
  return function () {
    // 更新时间戳
    data = +new Date();
    if (!datar) {
      datar = setTimeout(task, delay);
    }
  };
}
//防抖

function layout_fit_device() {
  var e1 = document.getElementById("keyword-pad");
  if (e1.style.visibility != "hidden") {
    if (document.documentElement.clientWidth < 600) {
      e1.style.width = "calc(100% - var(--fix-icon-w-h) * 1)";
    }
    if (
      document.documentElement.clientWidth >= 600 &&
      document.documentElement.clientWidth <= 1400
    ) {
      e1.style.width = "calc(100% - var(--fix-icon-w-h) * 1)";
    }
    if (document.documentElement.clientWidth > 1400) {
      e1.style.width = "calc(1200px + var(--fix-icon-w-h) * 4)";
    }
  }
} //令布局适配设备
