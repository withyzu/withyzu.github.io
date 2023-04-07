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
      a.style.backgroundColor = "var(--accent-color-no-alpha-havor)";
    } //当前网页标题突出显示
    ///////////////////////////////////////////////////////当前网页标题突出显示
    a.href = item.url;
    a_h1.textContent = item.name;
    a.appendChild(a_h1);
    e1.appendChild(a);
  });
  document.getElementById("nav-bar").appendChild(e1);
} //加载nav-side
