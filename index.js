window.onload = function () {
  loadCategory();
};
function onresize() {
  document.getElementById("category").innerHTML = "";
  loadCategory();
}
function displayTxt() {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("showTxt").innerHTML = xmlhttp.responseText;
    }
  };
  xmlhttp.open("GET", "./1.txt", true);
  xmlhttp.send();
}
function displayMd() {
  document.getElementById("showMd").innerHTML = marked.parse("# Marked in the browser\n\nRendered by **marked**.");
}
function categoryAddChild() {
  var category_Width = document.getElementById("category").clientWidth;
  var category_Heigh = document.getElementById("category").clientHeight;

  var categoryNum = 2; //此Div中放多少个类目

  perRowCellNum_Aspect_Ratio = 0.7; //单元格比例
  var width_100px_CellNum = parseInt(category_Width / 100); //以100px为基础，计算此Div中可以放多少个宽100px的单元格
  if (width_100px_CellNum < 0) width_100px_CellNum++; //端元个至少为1
  var perRowCellNum = 0; //此Div中每行多少单元格
  do {
    width_100px_CellNum = width_100px_CellNum >> 1;
    perRowCellNum++;
  } while (width_100px_CellNum > 0); //当设备尺寸变化，以幂次方增加或减少单元格数量
  console.log(perRowCellNum);

  {
    c_w = 100 / perRowCellNum + "%"; //单元格宽度
    c_h = (1 / perRowCellNum) * category_Width * perRowCellNum_Aspect_Ratio + "px"; //单元格高度
    i = 0;
    while (i < categoryNum) {
      var div = document.createElement("div");
      var c_div = document.createElement("div");
      div.appendChild(c_div);
      div.style.width = c_w;
      div.style.height = c_h;
      document.getElementById("category").appendChild(div);
      i++;
    }
  }
}
function loadCategory() {
  var url = "1.json";
  var j;
  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.send();
  request.onload = function () {
    if (request.status == 200) {
      j = JSON.parse(request.responseText); //JSON.parse与eval和能将一个字符串解析成一个JSON对象
      console.log(j);
    }

    var category_Width = document.getElementById("category").clientWidth;
    var category_Heigh = document.getElementById("category").clientHeight;

    var categoryNum = Object.keys(j).length; //此Div中放多少个类目
    console.log(categoryNum);

    perRowCellNum_Aspect_Ratio = 0.8; //单元格比例
    var width_100px_CellNum = parseInt(category_Width / 100); //以100px为基础，计算此Div中可以放多少个宽100px的单元格
    if (width_100px_CellNum < 0) width_100px_CellNum++; //端元个至少为1
    var perRowCellNum = 0; //此Div中每行多少单元格
    do {
      width_100px_CellNum = width_100px_CellNum >> 1;
      perRowCellNum++;
    } while (width_100px_CellNum > 0); //当设备尺寸变化，以幂次方增加或减少单元格数量
    console.log(perRowCellNum);

    {
      c_w = 100 / perRowCellNum + "%"; //单元格宽度
      c_h = (1 / perRowCellNum) * category_Width * perRowCellNum_Aspect_Ratio + "px"; //单元格高度
      i = 0;
      while (i < categoryNum) {
        var div = document.createElement("div");
        var div_div = document.createElement("div");
        var div_div_a = document.createElement("a");
        var div_div_a_div = document.createElement("div");
        var div_div_a_div_h1 = document.createElement("h1");

        div_div_a.href = j[i].url;
        div_div_a_div.style.backgroundImage = "url(" + j[i].imgGrd + ")";
        div_div_a_div_h1.textContent = j[i].name;

        div_div_a_div.appendChild(div_div_a_div_h1);
        div_div_a.appendChild(div_div_a_div);
        div_div.appendChild(div_div_a);
        div.appendChild(div_div);
        div.style.width = c_w;
        div.style.height = c_h;
        document.getElementById("category").appendChild(div);
        i++;
      }
    }
  };
}
