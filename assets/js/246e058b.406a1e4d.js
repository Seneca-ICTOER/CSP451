"use strict";(self.webpackChunkCSP451=self.webpackChunkCSP451||[]).push([[510],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),s=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),k=s(n),u=r,c=k["".concat(d,".").concat(u)]||k[u]||p[u]||i;return n?a.createElement(c,o(o({ref:e},m),{},{components:n})):a.createElement(c,o({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5816:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(3117),r=(n(7294),n(3905));const i={id:"markdown-intro",title:"Introduction to Markdown",sidebar_position:1,description:"TBD"},o=void 0,l={unversionedId:"tutorials-github/markdown-intro",id:"tutorials-github/markdown-intro",title:"Introduction to Markdown",description:"TBD",source:"@site/docs/tutorials-github/13-markdown-intro.md",sourceDirName:"tutorials-github",slug:"/tutorials-github/markdown-intro",permalink:"/CSP451/tutorials-github/markdown-intro",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/CSP451/tree/main/docs/tutorials-github/13-markdown-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"markdown-intro",title:"Introduction to Markdown",sidebar_position:1,description:"TBD"},sidebar:"courseNotesSidebar",previous:{title:"Cloning Repositories",permalink:"/CSP451/tutorials-github/repositories"},next:{title:"Basic Markdown Syntax",permalink:"/CSP451/tutorials-github/markdown-syntax"}},d={},s=[{value:"What is Markdown?",id:"what-is-markdown",level:2},{value:"Markdown Cheat Sheet",id:"markdown-cheat-sheet",level:2},{value:"Basic Syntax",id:"basic-syntax",level:3},{value:"Extended Syntax",id:"extended-syntax",level:3},{value:"Sources",id:"sources",level:2}],m={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-markdown"},"What is Markdown?"),(0,r.kt)("p",null,"Markdown is a lightweight markup language with plain-text formatting syntax designed for easy readability and writing. It allows you to format text using simple symbols and conventions, such as asterisks or underscores for emphasis, hash symbols for headings, and brackets for links. Markdown is commonly used for formatting text in various contexts, including writing documentation, creating web content, and writing messages on platforms like GitHub, Reddit, and Stack Overflow. Markdown's popularity can be contributed to its:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Simplicity:")," Markdown offers a simple and intuitive syntax that is easy to learn and use. It allows you to format text quickly without needing to memorize complex HTML tags."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Versatility:")," Markdown is widely supported across different platforms and applications, including text editors, blogging platforms, collaboration tools, and version control systems like Git and GitHub. Once you learn Markdown, you can use it in various contexts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Efficiency:")," Markdown allows you to focus on writing content without getting distracted by formatting options. Its lightweight syntax enables you to format text efficiently, saving time and effort."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Collaboration:")," Many online communities and collaborative platforms use Markdown for formatting text. By learning Markdown, you can effectively communicate and collaborate with others in these environments."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Documentation:")," Markdown is commonly used for writing documentation, readme files, and technical guides. Knowing Markdown can help you create clear and well-organized documentation for your projects.")),(0,r.kt)("p",null,"Learning Markdown can enhance your productivity, improve your communication skills, and makes you more effective in various professional and creative endeavors."),(0,r.kt)("h2",{id:"markdown-cheat-sheet"},"Markdown Cheat Sheet"),(0,r.kt)("h3",{id:"basic-syntax"},"Basic Syntax"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Markdown Syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#headings"},"Heading")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"# H1"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"## H2"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"### H3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#bold"},"Bold")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"**bold text**"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#italic"},"Italic")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_italicized text_"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#blockquotes-1"},"Blockquote")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"> blockquote"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#ordered-lists"},"Ordered List")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1. First item"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"2. Second item"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"3. Third item"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#unordered-lists"},"Unordered List")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"- First item"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"- Second item"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"- Third item"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#code"},"Code")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#horizontal-rules"},"Horizontal Rule")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"---"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#links"},"Link")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[title](https://www.example.com)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/basic-syntax/#images-1"},"Image")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"![alt text](image.jpg)"))))),(0,r.kt)("h3",{id:"extended-syntax"},"Extended Syntax"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Element"),(0,r.kt)("th",{parentName:"tr",align:null},"Markdown Syntax"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#tables"},"Table")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#fenced-code-blocks"},"Fenced Code Block")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"```"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"{"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'  "firstName": "John",'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'  "lastName": "Smith",'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},'  "age": 25'),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"}"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"```"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#footnotes"},"Footnote")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Here's a sentence with a footnote. [^1]"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"[^1]: This is the footnote."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#heading-ids"},"Heading ID")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"### My Great Heading {#custom-id}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#definition-lists"},"Definition List")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"term"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},": definition"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#strikethrough"},"Strikethrough")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~~The world is flat.~~"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#task-lists"},"Task List")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"- [x] Write the press release"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"- [ ] Update the website"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"- [ ] Contact the media"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#emoji"},"Emoji")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"That is so funny! :joy:"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#highlight"},"Highlight")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"I need to highlight these ==very important words==."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#subscript"},"Subscript")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"H~2~O"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.markdownguide.org/extended-syntax/#superscript"},"Superscript")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X^2^"))))),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("cite",null,"[Markdown Cheat Sheet][1]"))))}p.isMDXComponent=!0}}]);