
# 标题 & 段落 Styles
什么是标题？什么是段落？ 

## 标题
标题（title，head），读音为：biāotí。是标明文章、作品等内容的简短语句，一般分为总标题、副标题、分标题。常言道：看书先看皮，看报先看题。标题可以使读者了解到文章的主要内容和主旨。

### 标题的定义
理论上来说标题应该注意准确美、鲜明美、简洁美、形式美、韵律等。过去写的标题，确实工整、优美，文学性强，21世纪的新闻标题更加口语化、标新立异的特点也很突出，而且不大讲究工整对称，引主副三标齐全也比较少见。总之，较准确表达了新闻事实，有一定的文学性，比较有吸引力。

### 标题的分类
总标题是文章总体内容的体现。常见的写法有：
* 揭示课题的实。
* 交代内容范围。
* 用判断句式。
* 用形象化的语句。  


othe...
## 段落
段落，读音是duàn luò。
### 解释
1. (文章、事情)根据内容划分成的部分。     
2. (文章、事情)停顿或结束处。

以上，就是标题I、II、III，以及段落的样式。


# 表格 的 Styles
> \|      ShotKey       |               US_en               |         CN_zh          |  
> \| :----------------: | :-------------------------------: | :--------------------: |  
> \|      Ctrl + S      |               Save                |          保存          |  
> \|      Ctrl + B      |      Close the main sidebar       |       关闭主侧栏       |  
> \| Ctrl + K，Ctrl + C | Comment the selected line of code | 对选择的代码行进行注释 |  
> \| Ctrl + K，Ctrl + U |    Uncomment the selected line    | 对选择的代码行取消注释 |   
> 
|      ShotKey       |               US_en               |         CN_zh          |
| :----------------: | :-------------------------------: | :--------------------: |
|      Ctrl + S      |               Save                |          保存          |
|      Ctrl + B      |      Close the main sidebar       |       关闭主侧栏       |
| Ctrl + K，Ctrl + C | Comment the selected line of code | 对选择的代码行进行注释 |
| Ctrl + K，Ctrl + U |    Uncomment the selected line    | 对选择的代码行取消注释 |
# 图片、链接 的 Styles
> 简单的图片:  
> \![alt img]\(https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  
  
![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  

> 带链接的图片:  
> \[\![alt img]\(https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg\)\](https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  
   
 [![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  

 > 链接:  
 > \[这是一个链接]\(https:\/\/www\.example\.com\)    

这是一个链接[这是一个链接](https://www.example.com)这是一个链接

# 代码 的 Styles

> \```json  
> {     
> &emsp;&emsp;    "firstName": "John",  
> &emsp;&emsp;    "lastName": "Smith",  
> &emsp;&emsp;    "age": 25  
>  }   
> \```

 ```json  
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}  
```

>\```css  
>body {  
>  &emsp;&emsp;  height: 100vh;  
>  &emsp;&emsp;  overflow: hidden;  
>  &emsp;&emsp;  background: var(--note-content-backgrd);  
>}   
>\```  

```css
body {
  height: 100vh;
  overflow: hidden;
  background: var(--note-content-backgrd);
}  
```

>\```js   
>function customHeadingId() {   
>  &emsp;&emsp;return {   
>    &emsp;&emsp;&emsp;&emsp;renderer: {   
>      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;heading(text, level, raw, slugger) {   
>        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const headingIdRegex = /(?: +|^)\\{#(\[a-z\]\[\w-\]\*)\\}(?: +|$)/i;   
>        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;const hasId = text.match(headingIdRegex);   
>        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if (!hasId) {   
>          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;// fallback to original heading renderer   
>          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;;return false;   
>        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;}   
>        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return \`<h$\{level\} id="$\{hasId\[1\]\}">$\{text\.replace\(headingIdRegex, ""\)\}</h${level}>\n\`;   
>      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;},   
>    &emsp;&emsp;&emsp;&emsp;},   
>  &emsp;&emsp;};   
>}   
>\```

```js
function customHeadingId() {
  return {
    renderer: {
      heading(text, level, raw, slugger) {
        const headingIdRegex = /(?: +|^)\{#([a-z][\w-]*)\}(?: +|$)/i;
        const hasId = text.match(headingIdRegex);
        if (!hasId) {
          // fallback to original heading renderer
          return false;
        }
        return `<h${level} id="${hasId[1]}">${text.replace(headingIdRegex, "")}</h${level}>\n`;
      },
    },
  };
}
```
# 其他 的 Styles

> \<p>这是一个普通的文本- \<b>这是一个加粗文本\</b>。\</p>   
> \<em>强调文本\</em>   
> \<br>   
> \<b>粗体\</b>\<br>   
> \<strong>加粗文本\</strong>\<br>   
> \<dfn>定义项目\</dfn>\<br>   
> \<code>一段电脑代码 print("Hello World")\</code>\<br>   
> \<samp>计算机样本\</samp>\<br>   
> 使用\<kbd>Ctrl\</kbd>+\<kbd>M\</kbd>+\<kbd>F\</kbd>创建表格\<br>   
> X\<sup>2\</sup>+X=X(X+1)\<br>   
> K\<sub>1\</sub>\<br>   
> \<var>变量\</var>   
> \<i>A\</i>\<i>B\</i>\<i>AB\</i>   
> \&copy; \&  \&uml; \&trade; \&iexcl; \&pound;   
> \&amp; \&lt; \&gt; \&yen; \&euro; \&reg; \&plusmn; \&para; \&sect; \&brvbar; \&macr; \&laquo; \&middot;    
> X\&sup2; Y\&sup3; \&frac34; \&frac14;  \&times;  \&divide;   \&raquo;   
> 18\&ordm;C  \&quot;  \&apos;   

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
&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot; 
X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;
18&ordm;C  &quot;  &apos;  

##### <center> [To Bottom](#bottom)
##### <center> Top {#top}
###### <center> bottom {#bottom}
###### <center> [To Top](#top)   