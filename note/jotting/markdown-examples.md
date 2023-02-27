# <center> Top {#top}
# <center> [To Bottom](#bottom)
# 一、标题 的 Styles
> \# 一级标题  
> \## 二级标题  
> \### 三级标题  
> \#### 四级标题  
> \##### 五级标题  
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题      
# 二、段落 的 Styles
>Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。    
>
>千万不要被「标记」、「语言」吓到，Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

Markdown是一种轻量级标记语言，排版语法简洁，让人们更多地关注内容本身而非排版。它使用易读易写的纯文本格式编写文档，可与HTML混编，可导出 HTML、PDF 以及本身的 .md 格式的文件。因简洁、高效、易读、易写，Markdown被大量使用，如Github、Wikipedia、简书等。 

千万不要被「标记」、「语言」吓到，Markdown的语法十分简单，常用的标记符号不超过十个，用于日常写作记录绰绰有余，不到半小时就能完全掌握。

# 三、表格 的 Styles
> \|      ShotKey       |               US_en               |         CN_zh          |  
> \| :----------------: | :-------------------------------: | :--------------------: |  
> \|      Ctrl + S      |               Save                |          保存          |  
> \|      Ctrl + B      |      Close the main sidebar       |       关闭主侧栏       |  
> \| Ctrl + K，Ctrl + C | Comment the selected line of code | 对选择的代码行进行注释 |  
> \| Ctrl + K，Ctrl + U |    Uncomment the selected line    | 对选择的代码行取消注释 |   

|      ShotKey       |               US_en               |         CN_zh          |
| :----------------: | :-------------------------------: | :--------------------: |
|      Ctrl + S      |               Save                |          保存          |
|      Ctrl + B      |      Close the main sidebar       |       关闭主侧栏       |
| Ctrl + K，Ctrl + C | Comment the selected line of code | 对选择的代码行进行注释 |
| Ctrl + K，Ctrl + U |    Uncomment the selected line    | 对选择的代码行取消注释 |
# 四、图片、链接 的 Styles
> 简单的图片:  
> \![alt img]\(https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  
  
![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  

> 带链接的图片:  
> \[\![alt img]\(https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg\)\](https:\/\/w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  
   
 [![alt img](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)](https://w.wallhaven.cc/full/zy/wallhaven-zygeko.jpg)  

 > 链接:  
 > \[这是一个链接]\(https:\/\/www\.example\.com\)    

[这是一个链接](https://www.example.com)

# 五、代码 的 Styles

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
# 六、其他 的 Styles

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

# <center> [To Top](#top)       
# <center> bottom {#bottom}