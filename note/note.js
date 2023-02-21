var boot_url = "boot.json";
window.onload = () => {
  load_ini_content(boot_url);
};

window.addEventListener("resize", () => {
  layoutfitdevice;
});

function combobox_onclick(element) {
  element.classList.toggle("active");
} //ComboBox 点击事件

function option_onclick(e) {
  e_id = e.dataset.id;
  var h1 = document.querySelector("#combobox > h1");
  h1.textContent = e.textContent; //更换 h1 文本内容
  var note_list = document.getElementById("note-list");
  note_list.setAttribute("data-id", e_id); //设置 note-list 的 data-id
  note_list.innerHTML = "";

  var url = e_id + "/" + e_id + ".json";
  load_note_list(url);
} //NoteBook点击事件 向note-list添加内容

function note_onclick(e) {
  var e1 = document.getElementById("note-list");
  document.getElementById("note-content").innerHTML = "";

  load_note_content(e1.dataset.id + "/" + e.dataset.id + ".md");
  var c = document.querySelector("#catalog");
  if (document.documentElement.clientWidth < 600) {
    if (getComputedStyle(c, null)["left"] != "-210px") {
      c.style.left = "-210px";
    }
  }
} //Note 点击事件 先note-content添加内容

async function load_notebook_list(json) {
  var box = document.getElementById("combobox");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode("笔记列表"));
  var options = document.createElement("div");
  options.setAttribute("class", "options");
  options.appendChild(span);
  box.appendChild(options);

  json.forEach((item) => {
    var e = document.createElement("div");
    e.setAttribute("class", "option");
    e.setAttribute("data-id", item.id);
    e.setAttribute("onclick", "option_onclick(this)");
    e.appendChild(document.createTextNode(item.name));
    options.appendChild(e);
  });
} //加载笔记本列表

async function load_note_list(url) {
  let response = await fetch(url);
  let note_list = await response.json();
  var p = document.getElementById("note-list");
  note_list.forEach((item) => {
    var e1 = document.createElement("span");
    e1.setAttribute("class", "note");
    e1.setAttribute("data-id", item.id);
    e1.setAttribute("onclick", "note_onclick(this)");
    e1.appendChild(document.createTextNode(item.name));
    p.appendChild(e1);
  });
  var e2 = document.createElement("div");
  e2.style.height = "300px";
  p.appendChild(e2);
} //加载笔记目录

async function load_note_content(url) {
  document.getElementById("note-content").innerHTML = "";
  let response = await fetch(url);
  let md_str = await response.text();
  document.getElementById("note-content").innerHTML = marked.parse(md_str);
} //将md转为内容

async function load_ini_content(boot_url) {
  let response = await fetch(boot_url);
  let json = await response.json();
  //加载笔记本列表
  await load_notebook_list(json);
  var op = document.querySelector(".option");
  var h1 = document.querySelector("#combobox h1");
  h1.textContent = op.textContent;
  var note_list = document.getElementById("note-list");
  note_list.setAttribute("data-id", op.dataset.id); //设置 note-list 的 data-id
  //加载笔记列表
  var url = op.dataset.id + "/" + op.dataset.id + ".json";
  await load_note_list(url);
  //加载毕竟内容
  var e2 = document.querySelector("#note-list .note:nth-of-type(1)");
  await load_note_content(op.dataset.id + "/" + e2.dataset.id + ".md");
}
// 加载初始内容

// #region Others
function catalog_display_onclick() {
  var c = document.querySelector("#catalog");
  var d = document.getElementById("note-content");
  if (document.documentElement.clientWidth >= 600) {
    if (c.style.left == "" || c.style.left == "0px") {
      c.style.left = "-210px";
      d.style.marginLeft = "0";
    } else {
      c.style.left = "0px";
      d.style.marginLeft = "210px";
    }
  }
  if (document.documentElement.clientWidth < 600) {
    if (getComputedStyle(c, null)["left"] == "-210px") {
      c.style.left = "0px";
    } else {
      c.style.left = "-210px";
    }
  }
} //catalog 点击事件 显示

const debounce = (fn, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}; //防抖
const layoutfitdevice = debounce(layout_fit_device, 500);

function layout_fit_device() {
  var c = document.querySelector("#catalog");
  var d = document.getElementById("note-content");
  if (document.documentElement.clientWidth >= 600) {
    d.style.marginLeft = "210px";
    c.style.left = "0px";
  }
  if (document.documentElement.clientWidth < 600) {
    d.style.marginLeft = "0px";
    c.style.left = "-210px";
  }
} //令布局适配设备

// #endregion
