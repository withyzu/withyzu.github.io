window.onload = function () {
  var tofind = "/web_cate/Asset/To Find.json";
  var onlinetools = "/web_cate/Asset/Online Tools.json";
  var others = "/web_cate/Asset/Others.json";

  json_to_content(tofind);
  json_to_content(onlinetools);
  json_to_content(others);
};
async function json_to_content(url) {
  async function run() {
    let response = await fetch(url);
    let json = await response.json();
    loadMain(json);

    var url_name = url.replace(/(.*\/)*([^.]+).*/gi, "$2");
    loadSide(json, url_name);
  }

  run().catch((e) => {
    console.log("err: " + e.message);
  });
} //将json内容转换为内容
function loadMain(json) {
  perRowCellNum_Aspect_Ratio = 0.8; //单元格比例
  var categoryNum = Object.keys(json).length; //此Div中放多少个类目
  // console.log(categoryNum);
  // console.log(Object.keys(json[0].website).length);

  var i = 0;
  while (i < categoryNum) {
    var category_box = document.createElement("div");
    var c_n = document.createElement("div"); //分割线
    var c_c = document.createElement("div"); //网站链接、内容
    category_box.classList = "category-box";
    c_n.className = "cate-name"; //id:cate-name
    c_c.className = "cate-content"; //id:cate-content
    c_n.textContent = json[i].name;
    c_n.id = json[i].id;

    var j = 0;
    while (j < Object.keys(json[i].website).length) {
      var l_b = document.createElement("div"); //链接盒子
      var lb_img = document.createElement("a");
      var lb_intro = document.createElement("p");

      var name = json[i].website[j].name;
      lb_img.href = json[i].website[j].href;
      lb_img.style.backgroundImage = "url(" + "/web_cate/Asset/img-zip/" + name + ".png" + ")";
      lb_intro.textContent = json[i].website[j].introduc;

      l_b.appendChild(lb_img);
      l_b.appendChild(lb_intro);
      c_c.appendChild(l_b);
      j++;
    }
    category_box.appendChild(c_n);
    category_box.appendChild(c_c);
    document.getElementById("main-content").appendChild(category_box);
    i++;
  }
} //加载#main-content的内容
function loadSide(json, json_name) {
  var json_str = json_name.toLowerCase().replace(/\s*/g, "");
  var e_0 = document.querySelector(".side-content");
  var e_1 = document.createElement("div");
  e_1.setAttribute("class", "list-box");
  var e_2 = document.createElement("input");
  e_2.setAttribute("class", "trigger-btn");
  e_2.setAttribute("type", "checkbox");
  e_2.setAttribute("checked", "true");
  e_2.setAttribute("id", json_str + "btn");
  e_1.appendChild(e_2);
  var e_3 = document.createElement("label");
  e_3.setAttribute("for", e_2.getAttribute("id"));
  var e_4 = document.createElement("i");
  e_4.setAttribute("class", "list-box-icon iconfont" + " " + json_str);
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
  var json_h = Object.keys(json).length;
  while (i < json_h) {
    var e_10 = document.createElement("a");
    e_10.setAttribute("href", "#" + json[i].id);
    var e_8 = document.createElement("div");
    var e_6 = document.createElement("span");
    var e_9 = document.createElement("i");
    e_9.appendChild(document.createTextNode("🍕"));
    e_6.appendChild(document.createTextNode(json[i].name));
    e_8.appendChild(e_9);
    e_8.appendChild(e_6);
    e_10.appendChild(e_8);
    e_7.appendChild(e_10);
    i++;
  }
  e_1.appendChild(e_7);
  e_7.style.height = json_h * 30 + "px";
  e_0.appendChild(e_1);
} //加载#mside-content的内容
function click_change_theme() {
  if (document.body.classList.contains("theme-dark")) {
    document.body.classList.remove("theme-dark");
  } else {
    document.body.classList.add("theme-dark");
  }
} //改变主题
