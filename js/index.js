window.onload = function () {
  var category = "/Asset/category.json";
  json_to_content(category);
  // loadCategory();
  // searchBoxVisibility();
};
// window.addEventListener("resize", debounce(reRender, 100)); //监听resize
// function reRender() {
//   document.getElementById("category").innerHTML = "";
//   loadCategory();
//   searchBoxVisibility();
// } //重新渲染Category

// function onresize() { }

// function divAddChild() {
//   var category_Width = document.getElementById("category").clientWidth;
//   var category_Heigh = document.getElementById("category").clientHeight;

//   var categoryNum = 2; //此Div中放多少个类目

//   perRowCellNum_Aspect_Ratio = 0.7; //单元格比例
//   var width_100px_CellNum = parseInt(category_Width / 100); //以100px为基础，计算此Div中可以放多少个宽100px的单元格
//   if (width_100px_CellNum < 0) width_100px_CellNum++; //端元个至少为1
//   var perRowCellNum = 0; //此Div中每行多少单元格
//   do {
//     width_100px_CellNum = width_100px_CellNum >> 1;
//     perRowCellNum++;
//   } while (width_100px_CellNum > 0); //当设备尺寸变化，以幂次方增加或减少单元格数量
//   console.log(perRowCellNum);

//   {
//     c_w = 100 / perRowCellNum + "%"; //单元格宽度
//     c_h = (1 / perRowCellNum) * category_Width * perRowCellNum_Aspect_Ratio + "px"; //单元格高度
//     i = 0;
//     while (i < categoryNum) {
//       var div = document.createElement("div");
//       var c_div = document.createElement("div");
//       div.appendChild(c_div);
//       div.style.width = c_w;
//       div.style.height = c_h;
//       document.getElementById("category").appendChild(div);
//       i++;
//     }
//   }
// }//自适应宽度高度比例

async function json_to_content(url) {
  async function run() {
    let response = await fetch(url);
    let json = await response.json();
    loadCategory(json);
  }

  run().catch((e) => {
    console.log("err: " + e.message);
  });
} // }将json内容转换为内容;

function loadCategory(json) {
  var categoryNum = Object.keys(json).length;
  var i = 0;
  while (i < categoryNum) {
    var a = document.createElement("a");
    var a_div = document.createElement("div");
    var a_h1 = document.createElement("h1");

    a.href = json[i].url;
    a_div.style.backgroundImage = "url(" + json[i].imgGrd + ")";
    a_h1.textContent = json[i].name;

    a_div.appendChild(a_h1);
    a.appendChild(a_div);
    document.getElementById("category-content").appendChild(a);
    i++;
  }
} //加载category

// function debounce(fn, wait) {
//   timer = null;
//   return function () {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     timer = setTimeout(fn, wait);
//   };
// } //防抖
