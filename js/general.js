$(document).ready(() => {
  var header_boot = "/boot/boot.json";
  json_to_header(header_boot);
  load_outline_bg();
});

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
  let o_i = document.querySelector(".outline-display-i"); //web_site 元素
  let o_b = document.querySelector(".outline-bg");

  if (parseInt(getComputedStyle(o, null)["width"]) > 0) {
    o.style.width = "0";
    o.style.opacity = "0";
    o_b.style.display = "none";
    s.style.width = "0";

    if (o_i) {
      o_i.style.right = "100%";
    }
  } else {
    o.style.width = "";
    o.style.opacity = "";
    o_b.style.display = "";
    s.style.width = "";

    if (o_i) {
      o_i.style.right = "";
    }
  }
} //outline display onclick 事件

function load_outline_bg() {
  let o_b = document.createElement("div");
  o_b.classList.add("outline-bg");
  o_b.setAttribute("onclick", "outline_display_onclick()");

  document.getElementById("grid-layout").appendChild(o_b);
} //加载outline 的关闭功能背景
