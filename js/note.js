var boot_url = "/boot/note.boot.json";
window.onload = () => {
  load_ini_content(boot_url);
};

// window.addEventListener("resize", debounce(reset_js_style, 200), false); //当设备屏幕变化，令布局适配设备;

function option_onclick(e) {
  e_id = e.dataset.id;
  var h1 = document.querySelector("#combobox > h1");
  h1.textContent = e.textContent; //更换 h1 文本内容
  var note_list = document.getElementById("note-list");
  note_list.setAttribute("data-id", e_id); //设置 note-list 的 data-id
  note_list.innerHTML = "";

  var url = e_id + "/" + e_id + ".json";
  load_note_list(url);

  if (document.querySelector(".option.option-checked")) {
    let p3 = document.querySelector(".option.option-checked");
    // console.log(p3);
    p3.classList.remove("option-checked");
  } //是否存在 已打开笔记本 option的样式

  // console.log(p.dataset.id);
  var p1 = document.querySelector(
    '.option[data-id="' + note_list.dataset.id + '"]'
  );
  p1.classList.add("option-checked"); //已打开笔记本 option的样式
} //option 点击事件 向note-list添加内容

function note_onclick(e) {
  if (document.getElementById("clicked_note")) {
    var e3 = document.getElementById("clicked_note");
    e3.removeAttribute("id");
  }
  e.setAttribute("id", "clicked_note");

  var e1 = document.getElementById("note-list");
  document.getElementById("content").innerHTML = "";

  load_note_content(e1.dataset.id + "/" + e.dataset.id + ".md");
  // var c = document.querySelector("#outline");
  // if (document.documentElement.clientWidth < 600) {
  //   if (getComputedStyle(c, null)["left"] != "-210px") {
  //     c.style.left = "-210px";
  //   }
  // }
} //Note 点击事件 main添加内容

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
    e1.setAttribute("data-data", item.data);
    p.appendChild(e1);
  });

  var e2 = document.createElement("div");
  p.appendChild(e2);

  if (document.getElementById("clicked_note")) {
    var e13 = document.getElementById("clicked_note");
    e13.removeAttribute("id");
  }
  var e11 = document.querySelector("#note-list span:nth-of-type(1)");
  e11.setAttribute("id", "clicked_note"); //默认 notelist 第一个 span 为 clicked note样式
} //加载笔记目录

async function load_note_content(url) {
  document.getElementById("content").innerHTML = "";

  var fileName = url.replace(/(.*\/)*([^.]+).*/gi, "$2");
  var p1 = document.querySelector('.note[data-id="' + fileName + '"]');
  document.querySelector("#content-title > h1 ").textContent = p1.textContent;
  document.querySelector("#content-title > span ").textContent =
    p1.dataset.data;

  let response = await fetch(url);
  let md_str = await response.text();
  let content = md_str.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""); //从文件开头删除最常见的零宽度字符

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }, //hljs.function用法: https://highlightjs.readthedocs.io/en/latest/api.html#highlightauto
  });

  marked.use(customHeadingId());
  document.getElementById("content").innerHTML = marked.parse(content);
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

  //加载笔记内容
  var e2 = document.querySelector("#note-list .note:nth-of-type(1)");
  await load_note_content(op.dataset.id + "/" + e2.dataset.id + ".md");

  if (!document.querySelector(".option.option-checked")) {
    var p1 = document.querySelector(
      '.option[data-id="' + note_list.dataset.id + '"]'
    );
    p1.classList.add("option-checked");
  } //已打开笔记本 option的样式
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
    o.style.height = "420px";
    o.style.visibility = "visible";
    o.style.opacity = "1";

    o_c.style.display = "block";
  }
} //ComboBox 点击事件

function debounce(operate, delay) {
  let data = null;
  let datar = null;
  let newTime = null;
  function task() {
    newTime = +new Date();
    if (newTime - data < delay) {
      datar = setTimeout(task, delay);
    } else {
      operate();
      datar = null;
    }
    data = newTime;
  }
  return function () {
    data = +new Date();
    if (!datar) {
      datar = setTimeout(task, delay);
    }
  };
} // 防抖;

function reset_js_style() {
  var c = document.getElementById("outline");
  var o = document.getElementById("options");
  var os = document.getElementById("options_close");
  var cc = document.getElementById("outline-close");

  c.style = "";
  d.style = "";
  o.style = "";
  os.style = "";
  cc.style = "";

  o.style.opacity = "0";
} //令布局适配设备
