$(document).ready(() => {
  var header_boot = "/boot/boot.json";
  json_to_header(header_boot);
  creat_outline_bg();
});

window.addEventListener("resize", debounce(reset_js_style, 200), false); //当设备屏幕变化，令布局适配设备;

async function json_to_header(url) {
  async function run() {
    let response = await fetch(url);
    let json = await response.json();
    load_header(json);
  }
  run().catch((e) => {
    console.log("err: " + e.message);
  });
} // }将json内容转换为header

function load_header(json) {
  var e1 = document.createElement("div");
  e1.setAttribute("id", "header-content");

  json.forEach((item) => {
    var a = document.createElement("a");
    var a_h1 = document.createElement("h1");
    ///////////////////////////////////////////////////////
    if (!item.name.localeCompare(document.title)) {
      a.classList.add("current_web");
    } else {
      a.classList.remove("current_web");
    } //当前网页标题突出显示
    ///////////////////////////////////////////////////////当前网页标题突出显示
    a.href = item.url;
    a_h1.textContent = item.name;
    a.appendChild(a_h1);
    e1.appendChild(a);
  });
  document.getElementById("header").appendChild(e1);

  e1.addEventListener(
    "wheel",
    function (e) {
      v = parseFloat(getComputedStyle(e1, null)["width"]); //获得元素宽度
      if (e.deltaY > 0) {
        e1.scrollLeft += v * 0.4;
        return 0;
      } else {
        e1.scrollLeft -= v * 0.4;
      }
    },
    { passive: true }
  );
} //加载header 添加降水平滚动事件

function outline_display_onclick() {
  var o = document.getElementById("outline");
  var s = document.getElementById("split-line");
  let o_i = document.querySelector(".outline-display-i"); //web_site的独有元素
  let o_b = document.querySelector(".outline-bg");

  if (document.body.clientWidth > 600) {
    if (parseInt(getComputedStyle(o, null)["width"]) > 0) {
      o.style.width = "0";
      o.style.opacity = "0";
      s.style.width = "0";
      if (o_i) {
        o_i.style.left = "0";
      }
    } else {
      o.style.width = "";
      o.style.opacity = "";

      s.style.width = "";
      if (o_i) {
        o_i.style.left = "";
      }
    }
  } else {
    if (parseInt(getComputedStyle(o, null)["width"]) > 0) {
      o.style.width = "";
      o.style.opacity = "";
      o.style.visibility = "";

      o_b.style.display = "";
      o_b.style.display = "";
      if (o_i) {
        o_i.style.left = "";
      }
    } else {
      o.style.width = "300px";
      o.style.opacity = "1";
      o.style.visibility = "visible";

      o_b.style.display = "block";
      o_b.style.background = "#282c34a0";

      if (o_i) {
        o_i.style.left = "100%";
      }
    }
  }
} //outline display onclick 事件

function creat_outline_bg() {
  var o_b = document.createElement("div");
  o_b.classList.add("outline-bg");
  o_b.setAttribute("onclick", "outline_display_onclick()");
  document.getElementById("grid-layout").appendChild(o_b);
} //创建 outline黑色背景

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
    data = +new Date();
    if (!datar) {
      datar = setTimeout(task, delay);
    }
  };
} // 防抖;

function reset_js_style() {
  var o = document.getElementById("outline");
  var s = document.getElementById("split-line");
  let o_b = document.querySelector(".outline-bg");

  o.style = "";
  s.style = "";
  o_b.style = "";

  var o_i = document.querySelector(".outline-display-i");
  if (o_i) {
    let o_i = document.querySelector(".outline-display-i");
    o_i.style = "";
  } //web_site的独有元素
} //令布局适配设备
