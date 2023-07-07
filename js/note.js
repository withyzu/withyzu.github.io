window.onload = () => {
  var boot_url = "/boot/note.boot.json";
  load_ini_content(boot_url);
  // use_loacal_stroage();
}; //当html加载完成

// window.onbeforeunload = () => {
//   save_loacal_stroage();
// }; //当窗口关闭

// window.addEventListener("resize", debounce(reset_js_style, 200), false); //当设备屏幕变化，令布局适配设备;

async function option_onclick(e) {
  let ntbkId = e.dataset.ntbkId;
  var h1 = document.querySelector("#combobox > h1");
  var note_list = document.getElementById("note-list");

  h1.textContent = e.textContent; //更换 h1 文本内容
  note_list.dataset.ntbkId = ntbkId;
  await load_note_list(ntbkId + "/" + ntbkId + ".json");
  let ntId = document.querySelector("#note-list .note:nth-of-type(1)").dataset
    .ntId;
  await load_note_content(ntbkId + "/" + ntId + ".md");

  let tc = document.querySelector(".option-checked");
  if (tc) tc.classList.remove("option-checked");
  e.classList.add("option-checked"); //已打开笔记本 option的样式
} //option点击事件
//向note - list添加内容

function note_onclick(e) {
  let tc = document.querySelector(".clicked_note");
  if (tc) tc.classList.remove("clicked_note");
  e.classList.add("clicked_note");

  var a = document.getElementById("note-list").dataset.ntbkId;
  load_note_content(a + "/" + e.dataset.ntId + ".md");
} //Note 点击事件
//向main添加内容

async function load_note_content(url) {
  let response = await fetch(url);
  let md_str = await response.text();
  let content = md_str.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""); //从文件开头删除最常见的零宽度字符,为marked做准备
  let c = document.getElementById("content");
  var fileName = url.replace(/(.*\/)*([^.]+).*/gi, "$2"); //获取ntId
  var n = document.querySelector('.note[data-nt-id="' + fileName + '"]');

  document.querySelector("#content-title > h1").textContent = n.textContent;
  document.querySelector("#content-title > span").textContent =
    n.dataset.ntDate;

  var load_animat = document.createElement("div");
  load_animat.setAttribute("id", "load-animat");
  document.querySelector("#main").appendChild(load_animat);

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }, //hljs.function用法: https://highlightjs.readthedocs.io/en/latest/api.html#highlightauto
  });
  marked.use(customHeadingId());
  c.innerHTML = "";
  c.innerHTML = marked.parse(content);

  setTimeout(() => {
    load_animat.style.display = "none";
  }, 500);
} //将md转为内容

async function load_notebook_list(json) {
  var box = document.getElementById("combobox");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode("笔记列表"));
  var options = document.createElement("div");
  var options_close = document.createElement("div");
  options.setAttribute("id", "options");
  options.setAttribute("class", "options");
  options.style.opacity = "0";
  options.appendChild(span);
  options_close.setAttribute("id", "options_close");
  box.appendChild(options_close);
  box.appendChild(options);

  json.forEach((item) => {
    var e = document.createElement("div");
    e.setAttribute("class", "option");
    e.dataset.ntbkId = item.id;
    e.setAttribute("onclick", "option_onclick(this)");
    e.appendChild(document.createTextNode(item.name));
    options.appendChild(e);
  });

  let tc = document.querySelector(".option-checked");
  if (tc) tc.classList.remove("option-checked");
  document
    .querySelector(".option:nth-of-type(1)")
    .classList.add("option-checked");
} //加载笔记本列表

async function load_note_list(url) {
  let response = await fetch(url);
  let note_list = await response.json();
  let n = document.getElementById("note-list");
  n.innerHTML = "";

  note_list.forEach((item) => {
    var e1 = document.createElement("span");
    e1.setAttribute("class", "note");
    e1.dataset.ntId = item.id;
    e1.setAttribute("onclick", "note_onclick(this)");
    e1.appendChild(document.createTextNode(item.name));
    e1.dataset.ntDate = item.date;
    n.appendChild(e1);
  });
  let e2 = document.createElement("div");
  n.appendChild(e2);

  let tc = document.querySelector(".clicked_note");
  if (tc) tc.classList.remove("clicked_note");
  document
    .querySelector("#note-list span:nth-of-type(1)")
    .classList.add("clicked_note");
} //加载笔记目录

async function load_ini_content(boot_url) {
  let response = await fetch(boot_url);
  let json = await response.json();

  //加载笔记本列表
  await load_notebook_list(json);
  var op = document.querySelector(".option");
  var h1 = document.querySelector("#combobox h1");
  h1.textContent = op.textContent;
  let nl = document.getElementById("note-list");
  let ntbkId = op.dataset.ntbkId;
  nl.dataset.ntbkId = ntbkId;

  //加载笔记列表
  await load_note_list(ntbkId + "/" + ntbkId + ".json");

  //加载笔记内容
  let ntId = document.querySelector("#note-list .note:nth-of-type(1)").dataset
    .ntId;
  await load_note_content(ntbkId + "/" + ntId + ".md");
} // 加载初始内容

function combobox_onclick() {
  let o = document.getElementById("options");
  let o_c = document.getElementById("options_close");

  if (o.style.opacity != 0) {
    o.style.height = "";
    o.style.visibility = "";
    o.style.opacity = "";

    o_c.style.display = "";
  } else {
    o.style.height = "calc(30% + var(--header-height) + var(--ele-gap) * 3)";
    o.style.visibility = "visible";
    o.style.opacity = "1";

    o_c.style.display = "block";
  }
} //ComboBox 点击事件

// function debounce(operate, delay) {
//   let data = null;
//   let datar = null;
//   let newTime = null;
//   function task() {
//     newTime = +new Date();
//     if (newTime - data < delay) {
//       datar = setTimeout(task, delay);
//     } else {
//       operate();
//       datar = null;
//     }
//     data = newTime;
//   }
//   return function () {
//     data = +new Date();
//     if (!datar) {
//       datar = setTimeout(task, delay);
//     }
//   };
// } // 防抖;

// function reset_js_style() {
//   var c = document.getElementById("outline");
//   var o = document.getElementById("options");
//   var os = document.getElementById("options_close");
//   var cc = document.getElementById("outline-close");

//   c.style = "";
//   d.style = "";
//   o.style = "";
//   os.style = "";
//   cc.style = "";

//   o.style.opacity = "0";
// } //令布局适配设备

// function use_loacal_stroage() {
//   if (!window.localStorage) {
//     alert("浏览器不支持localstorage");
//     return false;
//   } else {
//     // var s = window.localStorage;
//     // outline_display(); //控制outline display
//     last_scrollview(); //自动跳转到上次的位置
//   }

//   function outline_display() {
//     if (document.documentElement.clientWidth > 600) {
//       if (s.outline_d <= 0) {
//         outline_display_onclick();
//       }
//     } else {
//       if (s.outline_d > 0) {
//         outline_display_onclick();
//       }
//     }
//   }

//   function last_scrollview() {
//     window.setTimeout(() => {
//       var s = window.localStorage;
//       var e = document.getElementById("note-content");

//       if (e) {
//         e.scrollTop = s.a_scrollview;
//       } else {
//         console.log("i no fing aim-element");
//       }
//     }, 800);
//   }
// } //使用本地存储 stroage

// function save_loacal_stroage() {
//   if (!window.localStorage) {
//     alert("浏览器不支持localstorage");
//     return false;
//   } else {
//     var storage = window.localStorage;
//     var o = document.getElementById("outline");
//     let m = document.getElementById("main");
//     storage.setItem("outline_d", parseInt(getComputedStyle(o, null)["width"]));
//     storage.setItem("a_scrollview", m.scrollTop.toFixed(2));
//   }
// } //保存本地存储 stroage
