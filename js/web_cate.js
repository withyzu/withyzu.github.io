window.onload = () => {
  var url = "/boot/web_cate.boot.json";
  load_catalog(url).catch((e) => {
    console.log("err: " + e.message);
  });
};

async function load_catalog(url) {
  let response = await fetch(url);
  let json = await response.json();
  console.log(json);
  for (var i = 0; i < json.length; i++) {
    await load_all_content(json[i].path, json[i].name, json[i].id);
  }
} //加载分类网站目录

async function load_all_content(url, name, id) {
  let response = await fetch(url);
  let json = await response.json();
  console.log(json);
  load_MainContent(json);
  load_SideContent(json, name, id);
} //将json内容转换为内容

async function load_MainContent(json) {
  json.forEach((cate) => {
    var category_box = document.createElement("div");
    var c_n = document.createElement("div"); //分割线
    var c_c = document.createElement("div"); //网站链接、内容
    category_box.classList = "category-box";
    c_n.className = "cate-name"; //
    c_c.className = "cate-content"; //
    c_n.textContent = cate.name;
    category_box.id = cate.id;

    cate.website.forEach((site) => {
      var l_b = document.createElement("div"); //链接盒子
      var lb_img = document.createElement("a");
      var lb_intro = document.createElement("p");

      var name = site.name.toLowerCase();
      lb_img.href = site.href;
      lb_img.style.backgroundImage =
        "url(" + "assets/img/" + name + ".png" + ")";
      lb_intro.textContent = site.introduc;

      l_b.appendChild(lb_img);
      l_b.appendChild(lb_intro);
      c_c.appendChild(l_b);
    });
    category_box.appendChild(c_n);
    category_box.appendChild(c_c);
    document.getElementById("main-content").appendChild(category_box);
  });
} //加载#main-content的内容

async function load_SideContent(json, json_name, json_id) {
  var e_0 = document.getElementById("side-content");
  var e_1 = document.createElement("div"); //list-box
  var e_2 = document.createElement("div"); //list-item-box
  var e_3 = document.createElement("div"); //item-hand
  var e_4 = document.createElement("i"); // item-hand log-ico
  var e_5 = document.createElement("span"); //item-hand name
  var e_6 = document.createElement("i"); //item-hand arrow-ico
  var e_7 = document.createElement("div"); //item-content

  // #region 设置class 加载内容
  e_1.setAttribute("class", "list-box");
  e_2.setAttribute("class", "list-item-box");
  e_3.setAttribute("class", "item-hand");
  e_3.setAttribute("onclick", "side_hand_Click(this)");
  e_3.setAttribute("id", json_id);
  e_4.setAttribute("class", "item-hand-log iconfont" + " " + json_id);
  e_5.setAttribute("class", "item-hand-name");
  e_5.appendChild(document.createTextNode(json_name));
  e_6.setAttribute("class", "item-hand-arrow iconfont up-circle");
  e_7.setAttribute("class", "item-content");

  var i = 0;
  json.forEach((item) => {
    var e_10 = document.createElement("a");
    var e_6 = document.createElement("span");

    e_10.setAttribute("href", "#" + item.id);
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
} //加载#side-content的内容

function side_display_Click() {
  let s = document.getElementById("side");
  let sv = document.getElementById("side-vacancy");
  if (getComputedStyle(sv, null)["width"] != "210px") {
    sv.style.width = "210px";
    s.style.width = "210px";
  } else {
    sv.style.width = "0";
    s.style.width = "0";
  }
} //side-display 点击事件

function side_hand_Click(e) {
  let c = document.querySelector("#" + e.id + " ~ *");
  let i = document.querySelectorAll("#" + e.id + " ~ * a");

  if (parseInt(getComputedStyle(c, null)["height"]) > 1) {
    c.style.height = "0rem";
  } else {
    c.style.height = i.length * 2 + "rem";
  }
} //side-display 点击事件
