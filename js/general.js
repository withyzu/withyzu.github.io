$(document).ready(() => {
  var nav_side = "/boot/boot.json";
  json_to_navbar(nav_side);
});

async function json_to_navbar(url) {
  async function run() {
    let response = await fetch(url);
    let json = await response.json();
    load_navbar(json);
  }
  run().catch((e) => {
    console.log("err: " + e.message);
  });
} // }将json内容转换为nav-side;

function load_navbar(json) {
  var e1 = document.createElement("div");
  e1.setAttribute("id", "nav-bar-content");

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
  document.getElementById("nav-bar").appendChild(e1);

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
  ); //水平滚动事件
} //加载nav-side
