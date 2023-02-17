$(document).ready(() => {
  var nav_side = "/Asset/category.json";
  json_to_navbar(nav_side);
  add_theme_change_btn();
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
      a.style.background = "var(--accent-color-no-alpha-havor)";
    }
    ///////////////////////////////////////////////////////当前网页标题突出显示
    a.href = item.url;
    a_h1.textContent = item.name;
    a.appendChild(a_h1);
    e1.appendChild(a);
  });

  var e3 = document.createElement("label");
  e3.setAttribute("for", "nav-side-display-btn");
  var e2 = document.createElement("input");
  e2.setAttribute("id", "nav-side-display-btn");
  e2.setAttribute("type", "checkbox");
  e2.setAttribute("class", "trigger-btn");
  document.getElementById("nav-bar").appendChild(e2);
  document.getElementById("nav-bar").appendChild(e1);
  document.getElementById("nav-bar").appendChild(e3);
} //加载nav-side

function add_theme_change_btn() {
  var e_0 = document.createElement("div");
  var e_1 = document.createElement("label");
  e_1.setAttribute("for", "change-theme-btn");
  e_1.setAttribute("class", "fix-lb fix-lb-theme-change");
  var e_2 = document.createElement("i");
  e_2.setAttribute("class", "fix-i");
  e_2.appendChild(document.createTextNode("🌞"));
  e_1.appendChild(e_2);
  e_0.appendChild(e_1);
  var e_3 = document.createElement("input");
  e_3.setAttribute("id", "change-theme-btn");
  e_3.setAttribute("class", "trigger-btn");
  e_3.setAttribute("type", "checkbox");
  e_3.setAttribute("onclick", "click_change_theme()");
  e_0.appendChild(e_3);
  document.getElementById("body").appendChild(e_0);
} //添加主题更换的按钮

function click_change_theme() {
  if (document.body.classList.contains("theme-dark")) {
    document.body.classList.remove("theme-dark");
  } else {
    document.body.classList.add("theme-dark");
  }
} //改变主题

function GetUrlRelativePath() {
  var url = document.location.toString();
  var arrUrl = url.split("//");

  var start = arrUrl[1].indexOf("/");
  var relUrl = arrUrl[1].substring(start); //stop省略，截取从start开始到结尾的所有字符

  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  return relUrl;
} //获取当前相对路径的方法
