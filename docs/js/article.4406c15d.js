(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["article"],{"33a5":function(e,t,a){"use strict";var n=a("47fc"),r=a.n(n);r.a},"416b":function(e,t){Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.js=Prism.languages.javascript},"47fc":function(e,t,a){},"5c81":function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript},6605:function(e,t){(function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))})(Prism)},"6cf3":function(e,t){Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s\/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup["tag"].inside["attr-value"].inside["entity"]=Prism.languages.markup["entity"],Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};n["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",r)}}),Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup},"7a9a":function(e,t,a){"use strict";var n=a("8da4"),r=a.n(n);r.a},"8c7a":function(e,t,a){(function(t){var a="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++a}),e["__id"]},clone:function e(t,a){var r,i,s=n.util.type(t);switch(a=a||{},s){case"Object":if(i=n.util.objId(t),a[i])return a[i];for(var o in r={},a[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],a));return r;case"Array":return i=n.util.objId(t),a[i]?a[i]:(r=[],a[i]=r,t.forEach(function(t,n){r[n]=e(t,a)}),r);default:return t}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e],s={};for(var o in i)if(i.hasOwnProperty(o)){if(o==t)for(var l in a)a.hasOwnProperty(l)&&(s[l]=a[l]);a.hasOwnProperty(o)||(s[o]=i[o])}var c=r[e];return r[e]=s,n.languages.DFS(n.languages,function(t,a){a===c&&t!=e&&(this[t]=s)}),s},DFS:function e(t,a,r,i){i=i||{};var s=n.util.objId;for(var o in t)if(t.hasOwnProperty(o)){a.call(t,o,t[o],r||o);var l=t[o],c=n.util.type(l);"Object"!==c||i[s(l)]?"Array"!==c||i[s(l)]||(i[s(l)]=!0,e(l,a,o,i)):(i[s(l)]=!0,e(l,a,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r);for(var i,s=r.elements||e.querySelectorAll(r.selector),o=0;i=s[o++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){var s,o,l=a;while(l&&!t.test(l.className))l=l.parentNode;l&&(s=(l.className.match(t)||[,""])[1].toLowerCase(),o=n.languages[s]),a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,a.parentNode&&(l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s));var c=a.textContent,u={element:a,language:s,grammar:o,code:c},g=function(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),i&&i.call(u.element)};if(n.hooks.run("before-sanity-check",u),u.code)if(n.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var d=new Worker(n.filename);d.onmessage=function(e){g(e.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else g(n.highlight(u.code,u.grammar,u.language));else g(n.util.encode(u.code));else n.hooks.run("complete",u)},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,i,s,o,l){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){if(c==l)return;var u=a[c];u="Array"===n.util.type(u)?u:[u];for(var g=0;g<u.length;++g){var d=u[g],p=d.inside,f=!!d.lookbehind,h=!!d.greedy,m=0,b=d.alias;if(h&&!d.pattern.global){var y=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,y+"g")}d=d.pattern||d;for(var v=i,w=s;v<t.length;w+=t[v].length,++v){var k=t[v];if(t.length>e.length)return;if(!(k instanceof r)){if(h&&v!=t.length-1){d.lastIndex=w;var F=d.exec(e);if(!F)break;for(var C=F.index+(f?F[1].length:0),x=F.index+F[0].length,A=v,P=w,j=t.length;A<j&&(P<x||!t[A].type&&!t[A-1].greedy);++A)P+=t[A].length,C>=P&&(++v,w=P);if(t[v]instanceof r)continue;S=A-v,k=e.slice(w,P),F.index-=w}else{d.lastIndex=0;F=d.exec(k);var S=1}if(F){f&&(m=F[1]?F[1].length:0);C=F.index+m,F=F[0].slice(m),x=C+F.length;var O=k.slice(0,C),_=k.slice(x),$=[v,S];O&&(++v,w+=O.length,$.push(O));var E=new r(c,p?n.tokenize(F,p):F,b,F,h);if($.push(E),_&&$.push(_),Array.prototype.splice.apply(t,$),1!=S&&n.matchGrammar(e,t,a,v,w,!0,c),o)break}else if(o)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(a){return r.stringify(a,t,e)}).join("");var i={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}n.hooks.run("wrap",i);var o=Object.keys(i.attributes).map(function(e){return e+'="'+(i.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+(o?" "+o:"")+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,s=a.immediateClose;e.postMessage(n.highlight(i,n.languages[r],r)),s&&e.close()},!1),n):n;var i=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return i&&(n.filename=i.src,n.manual||i.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),n}(a);e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n)}).call(this,a("c8ba"))},"8da4":function(e,t,a){},"95c4":function(e,t,a){"use strict";var n=a("a117"),r=a.n(n);r.a},a117:function(e,t,a){},bb94:function(e,t,a){e.exports=a.p+"img/twitter.a3a8574a.svg"},bfde:function(e,t,a){e.exports=a.p+"img/github.dbe44e38.svg"},cb55:function(e,t){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/}},daf0:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.article?a("div",[a("h1",[e._v(e._s(e.article.title))]),a("header",[a("span",{staticClass:"date"},[e._v(e._s(e.article.date.format()))]),a("span",{staticClass:"locale"},[e._v(e._s(e.articleLocale))])]),a("div",{staticClass:"article",domProps:{innerHTML:e._s(e.body)}}),a("SocialLinks",{attrs:{body:e.article.getSummary()}})],1):e._e()},r=[],i=(a("7f7f"),a("6b54"),a("96cf"),a("3b8d")),s=a("d225"),o=a("b0b4"),l=a("308d"),c=a("6bb5"),u=a("4e2b"),g=a("9ab4"),d=a("60a3"),p=a("9cd5"),f=a("d663"),h=a("8c7a"),m=a.n(h),b=(a("cb55"),a("416b"),a("6605"),a("6cf3"),a("5c81"),a("9788")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"separator"}),a("div",{staticClass:"share"},[a("p",[e._v(e._s(e.shareArticle)+" "),a("span",[e._v("—")])]),a("section",{staticClass:"links"},[a("a",{attrs:{target:"_blank",href:e.twitterLink}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",viewBox:"0 0 24 20"}},[a("path",{attrs:{fill:"currentColor","fill-rule":"evenodd",d:"M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"}})])]),a("a",{attrs:{target:"_blank",href:"https://github.com/cesalberca"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 23 23"}},[a("path",{attrs:{fill:"currentColor","fill-rule":"evenodd",d:"M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"}})])])])])])},v=[],w=a("bfde"),k=a.n(w),F=a("bb94"),C=a.n(F),x=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.githubIcon=k.a,e.twitterIcon=C.a,e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"shareArticle",get:function(){return this.translate("article_shareArticle")}},{key:"twitterLink",get:function(){return this.twitterSharerService.getShareUrlFromBody({body:this.body,url:this.window.location.href,locale:this.state.locale})}}]),t}(d["f"]);g["a"]([Object(d["c"])()],x.prototype,"translate",void 0),g["a"]([Object(d["c"])()],x.prototype,"state",void 0),g["a"]([Object(d["c"])()],x.prototype,"twitterSharerService",void 0),g["a"]([Object(d["c"])()],x.prototype,"window",void 0),g["a"]([Object(d["d"])({type:String,required:!0})],x.prototype,"body",void 0),x=g["a"]([d["a"]],x);var A=x,P=A,j=(a("33a5"),a("2877")),S=Object(j["a"])(P,y,v,!1,null,"11c59adb",null),O=S.exports,_=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.article=null,e}return Object(u["a"])(t,e),Object(o["a"])(t,[{key:"onLocaleChange",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b["b"].create({id:p["a"].fromValue(this.$route.params.id),locale:f["a"].instance.state.locale}).execute();case 2:this.article=e.sent,this.highlight();case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"highlight",value:function(){this.$nextTick(function(){m.a.highlightAll()})}},{key:"articleLocale",get:function(){return this.translationService.toString(this.article.locale)}},{key:"title",get:function(){return this.article.title}},{key:"body",get:function(){return this.article.body.toHtml()}}]),t}(d["f"]);g["a"]([Object(d["c"])()],_.prototype,"state",void 0),g["a"]([Object(d["c"])()],_.prototype,"translationService",void 0),g["a"]([Object(d["g"])("state.locale")],_.prototype,"onLocaleChange",null),_=g["a"]([Object(d["a"])({beforeRouteEnter:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,a,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!==t.name){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,b["b"].create({id:p["a"].fromValue(t.params.id),locale:f["a"].instance.state.locale}).execute();case 4:r=e.sent,n(function(e){e.article=r,e.highlight()});case 6:case"end":return e.stop()}},e)}));function t(t,a,n){return e.apply(this,arguments)}return t}(),components:{SocialLinks:O}})],_);var $=_,E=$,L=(a("7a9a"),a("95c4"),Object(j["a"])(E,n,r,!1,null,"79a24f0a",null));t["default"]=L.exports}}]);
//# sourceMappingURL=article.4406c15d.js.map