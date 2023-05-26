window.onload = () => {
  var url = "/boot/web_cate.boot.json";
  load_webcat_boot(url);
  // load_webcat_boot(url).catch ((e) => {
  //   console.log("err: " + e.message);
  // });
  use_loacal_stroage();
}; //当html加载完成

window.onbeforeunload = () => {
  save_loacal_stroage();
}; //当窗口关闭

async function load_webcat_boot(url) {
  let response = await fetch(url);
  let json = await response.json();

  for (var i = 0; i < json.length; i++) {
    await load_all_content(json[i].path, json[i].name, json[i].id);
  }
} //加载 boot.json

async function load_all_content(url, name, id) {
  let response = await fetch(url);
  let json = await response.json();

  load_MainContent(json);
  load_outlineContent(json, name, id);
} //将 json内容转换为内容

async function load_MainContent(json) {
  json.forEach((cate) => {
    var category_box = document.createElement("div");
    var c_n = document.createElement("div"); //分割线
    var c_c = document.createElement("div"); //网站链接、内容
    category_box.classList = "category-box";
    c_n.className = "cate-name"; //
    c_c.className = "cate-content"; //
    c_n.textContent = cate.name;
    category_box.dataset.aimId = cate.id;

    cate.website.forEach((site) => {
      var l_box = document.createElement("div"); //链接盒子
      var lb_a = document.createElement("a");
      var lb_img = document.createElement("img");
      var lb_intro = document.createElement("p");
      lb_img.setAttribute("alt", site.name);

      //图片加载
      if (!(site.name == "" || site.name == null || site.name == undefined)) {
        lb_img.dataset.src = "assets/img/" + site.name + ".png";
      } else {
        lb_img.src = "assets/img/" + "here-is-no-img" + ".png";
      }
      lb_img.classList.add("lazyload");

      //href, introduction加载
      var d = site.domain;
      reg = eval("/http/ig");
      if (site.domain.match(reg)) {
        lb_a.href = d;
      } else {
        lb_a.href = "https://" + site.domain;
      }
      lb_intro.textContent = site.introduc;

      lb_a.appendChild(lb_img);
      l_box.appendChild(lb_a);
      l_box.appendChild(lb_intro);
      c_c.appendChild(l_box);
    });
    category_box.appendChild(c_n);
    category_box.appendChild(c_c);
    document.getElementById("main-content").appendChild(category_box);
  });
} //加载#main-content的内容

async function load_outlineContent(json, json_name, json_id) {
  var e_0 = document.getElementById("outline-content");
  var e_1 = document.createElement("div"); //list-box
  var e_2 = document.createElement("div"); //list-item-box
  var e_3 = document.createElement("div"); //item-head
  var e_4 = document.createElement("i"); // item-head log-ico
  var e_5 = document.createElement("span"); //item-head name
  var e_6 = document.createElement("i"); //item-head arrow-ico
  var e_7 = document.createElement("div"); //item-content

  // #region json-->outline内容
  e_1.setAttribute("class", "list-box");
  e_2.setAttribute("class", "list-item-box");
  e_3.setAttribute("class", "item-head");
  e_3.setAttribute("onclick", "outline_head_Click(this)");
  e_3.setAttribute("id", json_id);
  e_4.setAttribute("class", "item-head-log iconfont" + " " + json_id);
  e_5.setAttribute("class", "item-head-name");
  e_5.appendChild(document.createTextNode(json_name));
  e_6.setAttribute("class", "item-head-arrow iconfont up-circle");
  e_7.setAttribute("class", "item-content");

  var i = 0;
  json.forEach((item) => {
    var e_10 = document.createElement("a");
    var e_6 = document.createElement("span");
    e_10.setAttribute("onclick", "goto_aim_on_page(this)");
    e_10.dataset.pointId = item.id;
    e_6.appendChild(document.createTextNode(item.name));
    e_10.appendChild(e_6);
    e_7.appendChild(e_10);
    i++;
  });
  e_7.style.height = i * 2 + "rem";
  //#endregion

  e_3.appendChild(e_4);
  e_3.appendChild(e_5);
  e_3.appendChild(e_6);
  e_2.appendChild(e_3);
  e_2.appendChild(e_7);
  e_1.appendChild(e_2);
  e_0.appendChild(e_1);
} //加载#outline-content的内容

function outline_head_Click(e) {
  let c = document.querySelector("#" + e.id + " ~ *");
  let i = document.querySelectorAll("#" + e.id + " ~ * a");
  let a = document.querySelector("#" + e.id + " .item-head-arrow");

  if (parseInt(getComputedStyle(c, null)["height"]) > 1) {
    c.style.height = "0rem";
    a.style.rotate = "180deg";
  } else {
    c.style.height = i.length * 2 + "rem";
    a.style = "";
  }
} //outline-display 点击事件

function use_loacal_stroage() {
  if (!window.localStorage) {
    alert("浏览器不支持localstorage");
    return false;
  } else {
    var s = window.localStorage;
    outline_display(); //控制outline display
    last_scrollview(); //自动跳转到上次的位置
  }

  function outline_display() {
    if (document.documentElement.clientWidth > 600) {
      if (s.outline_d <= 0) {
        outline_display_onclick();
      }
    } else {
      if (s.outline_d > 0) {
        outline_display_onclick();
      }
    }
  }

  function last_scrollview() {
    window.setTimeout(() => {
      var s = window.localStorage;
      var e = document.getElementById("main");

      if (e) {
        e.scrollTop = s.a_scrollview;
      } else {
        console.log("i no fing aim-element");
      }
    }, 800);
  }
} //使用本地存储 stroage

function save_loacal_stroage() {
  if (!window.localStorage) {
    alert("浏览器不支持localstorage");
    return false;
  } else {
    var storage = window.localStorage;
    var o = document.getElementById("outline");
    let m = document.getElementById("main");
    storage.setItem("outline_d", parseInt(getComputedStyle(o, null)["width"]));
    storage.setItem("a_scrollview", m.scrollTop.toFixed(2));
  }
} //保存本地存储 stroage

function goto_aim_on_page(e) {
  document
    .querySelector(
      ".category-box[data-aim-id = " + "'" + e.dataset.pointId + "'" + "]"
    )
    .scrollIntoView(true); //实现页内跳转
} //实现页内跳转
