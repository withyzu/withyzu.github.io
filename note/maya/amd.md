

| Syntax    | Description |           use |
| :-------- | :---------: | ------------: |
| Header    |    Title    |  #worlds flow |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |
| Paragraph |    Text     | say hello,sir |

# 标题一
## 标题二
### 标题三
#### 标题四
##### 标题五

Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。

千万不要被「标记」、「语言」吓到，Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

就是这十个不到的标记符号，却能让人优雅地沉浸式记录，专注内容而不是纠结排版，达到「心中无尘，码字入神」的境界。

让我们从 Markdown 标题语法开始学习吧。

[这是一个链接](https://www.example.com)

![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)

 [![alt img]()](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)

 [![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)

<p>这是一个普通的文本- <b>这是一个加粗文本</b>。</p>
<em>强调文本</em><br>
<b>粗体</b><br>
<strong>加粗文本</strong><br>
<dfn>定义项目</dfn><br>
<code>一段电脑代码 print("Hello World")</code><br>
<samp>计算机样本</samp><br>
使用<kbd>Ctrl</kbd>+<kbd>M</kbd>+<kbd>F</kbd>创建表格<br>
X<sup>2</sup>+X=X(X+1)<br>
K<sub>1</sub><br>
<var>变量</var>
<i>A</i><i>B</i><i>AB</i>



````
```
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
````

```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}

```js
var marked = require('marked');

var markdownString = 'js\n console.log("hello"); \n';

// Async highlighting with pygmentize-bundled
marked.setOptions({
  highlight: function (code, lang, callback) {
    require('pygmentize-bundled')({ lang: lang, format: 'html' }, code, function (err, result) {
      callback(err, result.toString());
    });
  }
});

// Using async version of marked
marked(markdownString, function (err, content) {
  if (err) throw err;
  console.log(content);
});

// Synchronous highlighting with highlight.js
marked.setOptions({
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
});

console.log(marked(markdownString));
```


[Heading IDs](#custom-id)




&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

