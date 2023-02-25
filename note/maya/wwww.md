# Head {#custom-id}

| Syntax    | Description |           use |
| :-------- | :---------: | ------------: |
| Header    |    Title    |  #worlds flow |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |




```c#
internal class Program
{
    private static void Main(string[] args)
    {
        var pathStr = "assets";
        string exeRunPath = System.IO.Directory.GetCurrentDirectory()+ "\\"+ pathStr;
        var files = Directory.GetFiles(exeRunPath, "*.json");
        foreach (var file   in files)
        {
            var fileName =  Path.GetFileNameWithoutExtension(file); 
            var fileInfo = new FileInfo();
            fileInfo.id = fileName;
            fileInfo.name = "";
            fileInfo.path = pathStr + "/" + Path.GetFileName(file);

            string strjson = JsonConvert.SerializeObject(fileInfo);
            Console.WriteLine(strjson);
            Console.WriteLine("hellojojojsdffd");
        }
    }
}
```

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```

```js
async function load_note_content(url) {
  document.getElementById("content").innerHTML = "";

  var fileName = url.replace(/(.*\/)*([^.]+).*/gi, "$2");
  var p1 = document.querySelector('.note[data-id="' + fileName + '"]');
  document.querySelector("#content-title > h1 ").textContent = p1.textContent;
  document.querySelector("#content-title > span ").textContent = p1.dataset.time;

  let response = await fetch(url);
  let md_str = await response.text();
  let content = md_str.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""); //从文件开头删除最常见的零宽度字符

  marked.setOptions({
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    },
  });
}
```

```js
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Am I really running a server?!');
}).listen(8080, '127.0.0.1');

console.log('running server!');
```




&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;



[To Head](#custom-id)