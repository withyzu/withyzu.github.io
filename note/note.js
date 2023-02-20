var boot_url = "boot.json";
window.onload = () => {};

function combobox_onclick(element) {
  element.classList.toggle("active");
  load_notebook_list(boot_url).catch((e) => {
    console.log("err: " + e.message);
  });
} //ComboBox点击事件

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

function option_onclick(e) {
  e_id = e.dataset.id;
  var h1 = document.querySelector("#combobox > h1");
  h1.textContent = e.textContent;
  var note_list = document.getElementById("note-list");
  note_list.setAttribute("data-id", e_id);
  note_list.innerHTML = "";

  var url = e_id + "/" + e_id + ".json";
  load_note_list(url);
} //ComboBox option点击事件

async function load_notebook_list(url) {
  let response = await fetch(url);
  let notebook_list = await response.json();

  var box = document.getElementById("combobox");
  var span = document.createElement("span");
  span.appendChild(document.createTextNode("笔记列表"));
  var options = document.createElement("div");
  options.setAttribute("class", "options");
  options.appendChild(span);
  box.appendChild(options);

  notebook_list.forEach((item) => {
    var e = document.createElement("div");
    e.setAttribute("class", "option");
    e.setAttribute("data-id", item.id);
    console.log(e.dataset.id);
    e.setAttribute("onclick", "option_onclick(this)");
    e.appendChild(document.createTextNode(item.name));
    options.appendChild(e);
  });
} //加载笔记本列表

function note_onclick(e) {
  var e1 = document.getElementById("note-list");
  load_note_content(e1.dataset.id + "/" + e.dataset.id + ".md");
} //note 点击事件

async function load_note_content(url) {
  let response = await fetch(url);
  let md_str = await response.text();
  document.getElementById("note-content").innerHTML = marked.parse(md_str);
} //将md转为内容
