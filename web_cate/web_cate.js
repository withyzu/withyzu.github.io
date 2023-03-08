window.onload = () => {
  var url = "boot.json";
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
  loadMain(json);
  loadSide(json, name, id);
} //将json内容转换为内容

async function loadMain(json) {
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
      lb_img.style.backgroundImage = "url(" + "assets/img/" + name + ".png" + ")";
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

async function loadSide(json, json_name, json_id) {
  var e_0 = document.querySelector(".side-content");
  var e_1 = document.createElement("div");
  e_1.setAttribute("class", "list-box");
  var e_2 = document.createElement("input");
  e_2.setAttribute("class", "trigger-btn");
  e_2.setAttribute("type", "checkbox");
  e_2.setAttribute("checked", "true");
  e_2.setAttribute("id", json_id + "btn");
  e_1.appendChild(e_2);
  var e_3 = document.createElement("label");
  e_3.setAttribute("for", json_id + "btn");
  var e_4 = document.createElement("i");
  e_4.setAttribute("class", "list-box-icon iconfont" + " " + json_id);
  e_3.appendChild(e_4);
  var e_5 = document.createElement("span");
  e_5.setAttribute("class", "list-item");
  e_5.appendChild(document.createTextNode(json_name));
  e_3.appendChild(e_5);
  var e_6 = document.createElement("i");
  e_6.setAttribute("class", "list-box-last iconfont up-circle");
  e_3.appendChild(e_6);
  e_1.appendChild(e_3);
  var e_7 = document.createElement("div");
  e_7.setAttribute("class", "item-content");

  var i = 0;
  json.forEach((item) => {
    var e_10 = document.createElement("a");
    e_10.setAttribute("href", "#" + item.id);
    var e_8 = document.createElement("div");
    var e_6 = document.createElement("span");
    var e_9 = document.createElement("i");
    e_9.appendChild(document.createTextNode("🍕"));
    e_6.appendChild(document.createTextNode(item.name));
    e_8.appendChild(e_9);
    e_8.appendChild(e_6);
    e_10.appendChild(e_8);
    e_7.appendChild(e_10);
    i++;
  });
  e_1.appendChild(e_7);
  e_7.style.height = i * 30 + "px";
  e_0.appendChild(e_1);
} //加载#mside-content的内容
