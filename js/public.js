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
  var categoryNum = Object.keys(json).length;
  var i = 0;
  while (i < categoryNum) {
    var a = document.createElement("a");
    var a_h1 = document.createElement("h1");

    a.href = json[i].url;
    a_h1.textContent = json[i].name;

    a.appendChild(a_h1);
    document.getElementById("nav-bar-content").appendChild(a);
    i++;
  }
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
