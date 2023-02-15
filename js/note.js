window.onload = () => {
  var md_url = "/note/jotting/markdown.md";

  md_to_content(md_url);
};

async function md_to_content(url) {
  async function run() {
    //加载数据
    let response = await fetch(url);
    let md_str = await response.text();
    //处理数据任务
    console.log(md_str);
    load_md_content(md_str);
  }

  run().catch((e) => {
    console.log("err: " + e.message);
  });
}
//将md转为内容

function load_md_content(md_str) {
  document.getElementById("note-content").innerHTML = marked.parse(md_str);
}
