(function(t){function e(e){for(var n,r,o=e[0],s=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],i[r]&&f.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);h&&h(e);while(f.length)f.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var t,e=0;e<c.length;e++){for(var a=c[e],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(c.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i={app:0},c=[];function o(t){return s.p+"js/"+({about:"about","article~articles~home~talks":"article~articles~home~talks",article:"article",articles:"articles",home:"home",talks:"talks"}[t]||t)+"."+{about:"ad812280","article~articles~home~talks":"73749cb8",article:"4406c15d",articles:"1ade61bb",home:"d7483556",talks:"dc3cc342"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={article:1,talks:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var n="css/"+({about:"about","article~articles~home~talks":"article~articles~home~talks",article:"article",articles:"articles",home:"home",talks:"talks"}[t]||t)+"."+{about:"31d6cfe0","article~articles~home~talks":"31d6cfe0",article:"87bbab05",articles:"31d6cfe0",home:"31d6cfe0",talks:"1cfffe6f"}[t]+".css",i=s.p+n,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var l=c[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===i))return e()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){l=f[o],u=l.getAttribute("data-href");if(u===n||u===i)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||i,c=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete r[t],h.parentNode.removeChild(h),a(c)},h.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(h)}).then(function(){r[t]=0}));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var c=new Promise(function(e,a){n=i[t]=[e,a]});e.push(n[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=o(t),l=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");c.type=n,c.request=r,a[1](c)}i[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/blog/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var h=u;c.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"091c":function(t,e,a){},"1f48":function(t,e,a){},"21e9":function(t,e){},"25d2":function(t,e,a){"use strict";var n=a("8b80"),r=a.n(n);r.a},2802:function(t,e,a){"use strict";var n=a("80c4"),r=a.n(n);r.a},"2e17":function(t,e,a){},"301c":function(t,e,a){"use strict";a.d(e,"a",function(){return i});a("a481");var n=a("d225"),r=a("b0b4"),i=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,[{key:"encode",value:function(t){return encodeURIComponent(t).replace(/%20/g,"+")}}],[{key:"create",value:function(){return new t}}]),t}()},"33e6":function(t,e,a){},3611:function(t,e,a){"use strict";a.d(e,"a",function(){return c});var n=a("d225"),r=a("b0b4"),i=a("f798"),c=function(){function t(e){Object(n["a"])(this,t),this.translator=e}return Object(r["a"])(t,[{key:"translate",value:function(t,e){var a=this.translator.translations.get(t);if(void 0!==a){var n=a.get(e);if(void 0!==n)return n;var r=this.translator.getDefaultLocaleTranslation().get(e);if(void 0===r)throw new i["b"]('Translation for key "'.concat(e,'" in locale "').concat(t,'" could not be found'));return r}return this.translator.getDefaultLocaleTranslation().get(e)}},{key:"toString",value:function(t){switch(t){case i["a"].DEFAULT:case i["a"].EN:return"en";case i["a"].ES:return"es";default:throw new i["b"]("Locale ".concat(t," not found"))}}},{key:"toLocale",value:function(t){switch(t){case"en":return i["a"].EN;case"es":return i["a"].ES;default:throw new i["b"]("String ".concat(t," could not be mapped to a locale"))}}}],[{key:"create",value:function(e){return new t(e)}}]),t}()},5092:function(t,e,a){},"5bd1":function(t,e,a){},"65f5":function(t,e,a){"use strict";var n=a("a613"),r=a.n(n);r.a},"6e34":function(t,e,a){"use strict";var n=a("aaeb"),r=a.n(n);r.a},"6f17":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",[t._v("\n    "+t._s(t.languageLabel)+"\n    "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.locale,expression:"locale"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.locale=e.target.multiple?a:a[0]},function(e){return t.changeLocale(t.locale)}]}},t._l(t.locales,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0)]),a("label",[t._v("\n    "+t._s(t.themeLabel)+"\n    "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.theme=e.target.multiple?a:a[0]},function(e){return t.changeTheme(t.theme)}]}},t._l(t.themes,function(e){return a("option",{key:e.value,domProps:{value:e.value}},[t._v(t._s(e.text))])}),0)])])},r=[],i=a("d225"),c=a("b0b4"),o=a("308d"),s=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),h=a("799f"),d=a("f798"),b=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.theme=h["a"].DEFAULT,t.themes=[{text:t.light,value:h["a"].LIGHT},{text:t.dark,value:h["a"].DARK}],t.locale=d["a"].DEFAULT,t.locales=[{text:t.en,value:d["a"].EN},{text:t.es,value:d["a"].ES}],t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"changeLocale",value:function(t){this.state.locale=t}},{key:"changeTheme",value:function(t){this.state.theme=t}},{key:"en",get:function(){return this.translate("_en")}},{key:"es",get:function(){return this.translate("_es")}},{key:"light",get:function(){return this.translate("_light")}},{key:"dark",get:function(){return this.translate("_dark")}},{key:"themeLabel",get:function(){return this.translate("_theme")}},{key:"languageLabel",get:function(){return this.translate("_language")}}]),e}(f["f"]);u["a"]([Object(f["c"])()],b.prototype,"translate",void 0),u["a"]([Object(f["c"])()],b.prototype,"state",void 0),b=u["a"]([f["a"]],b);var v=b,p=v,m=(a("c11b"),a("2877")),g=Object(m["a"])(p,n,r,!1,null,"3581bea1",null),k=g.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar"},[a("div",{staticClass:"links"},[a("router-link",{attrs:{to:"/",exact:""}},[t._v(t._s(t.translations.home))]),a("router-link",{attrs:{to:"/articles"}},[t._v(t._s(t.translations.articles))]),a("router-link",{attrs:{to:"/talks"}},[t._v(t._s(t.translations.talks))]),a("router-link",{attrs:{to:"/about"}},[t._v(t._s(t.translations.about))])],1),a("Options",{staticClass:"options"})],1)},_=[],w=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"translations",get:function(){return{home:this.translate("home_title"),about:this.translate("about_title"),talks:this.translate("talks_title"),articles:this.translate("article_title")}}}]),e}(f["f"]);u["a"]([Object(f["c"])()],w.prototype,"translate",void 0),w=u["a"]([Object(f["a"])({components:{Options:k}})],w);var O=w,j=O,A=(a("65f5"),Object(m["a"])(j,y,_,!1,null,"71bb7fa0",null)),T=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"excerpt",attrs:{tabindex:"0"},on:{click:t.onAction,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAction(e)}}},[a("h3",[t._v(t._s(t.excerpt.title))]),a("div",{staticClass:"slugline"},[a("span",[t._v(t._s(t.excerpt.date))]),a("span",{staticClass:"accented-slugline"},[t._v(" / ")]),a("span",[t._v(t._s(t.excerpt.readingTime.minutes)+" minutes")])]),a("p",{domProps:{innerHTML:t._s(t.excerpt.body)}})])},S=[],L=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(s["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"onAction",value:function(){return this.excerpt.id}}]),e}(f["f"]);u["a"]([Object(f["d"])()],L.prototype,"excerpt",void 0),u["a"]([Object(f["b"])()],L.prototype,"onAction",null),L=u["a"]([f["a"]],L);var D=L,x=D,C=(a("d065"),Object(m["a"])(x,E,S,!1,null,"f4a8cdf4",null)),I=C.exports,P=a("a57a");a.d(e,"c",function(){return k}),a.d(e,"b",function(){return T}),a.d(e,"a",function(){return I}),a.d(e,"d",function(){return P["a"]})},7116:function(t,e,a){},"799f":function(t,e,a){"use strict";var n;a.d(e,"a",function(){return n}),function(t){t[t["LIGHT"]=0]="LIGHT",t[t["DARK"]=1]="DARK",t[t["DEFAULT"]=0]="DEFAULT"}(n||(n={}))},"80c4":function(t,e,a){},"8b80":function(t,e,a){},9723:function(t,e,a){},a2da:function(t,e,a){},a57a:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"wrapper"},[t._t("default")],2)])},r=[],i=a("d225"),c=a("308d"),o=a("6bb5"),s=a("4e2b"),l=a("9ab4"),u=a("60a3"),f=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(u["f"]);f=l["a"]([u["a"]],f);var h=f,d=h,b=(a("2802"),a("2877")),v=Object(b["a"])(d,n,r,!1,null,"230b7ee4",null);e["a"]=v.exports},a613:function(t,e,a){},aaeb:function(t,e,a){},c11b:function(t,e,a){"use strict";var n=a("2e17"),r=a.n(n);r.a},c23c:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=a("f79b"),i=a("d225"),c=a("b0b4"),o=a("9483"),s=function(){function t(e){Object(i["a"])(this,t),this.log=e}return Object(c["a"])(t,[{key:"register",value:function(){var t=this;Object(o["a"])("".concat("/blog/","service-worker.js"),{ready:function(){t.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){t.log("Service worker has been registered.")},cached:function(){t.log("Content has been cached for offline use.")},updatefound:function(){t.log("New content is downloading.")},updated:function(){t.log("New content is available; please refresh.")},offline:function(){t.log("No internet connection found. App is running in offline mode.")},error:function(e){t.log("Error during service worker registration:",e)}})}}]),t}(),l=a("8c4f");new r["b"](n["default"],r["d"].create(l["a"]),new s(window.console.log)).bootstrap(r["a"])},cd79:function(t,e){},d065:function(t,e,a){"use strict";var n=a("5092"),r=a.n(n);r.a},d663:function(t,e,a){"use strict";var n=a("d225"),r=a("b0b4"),i=a("f798"),c=a("799f"),o=function t(){Object(n["a"])(this,t),this.locale=i["a"].DEFAULT,this.theme=c["a"].DEFAULT},s=(a("ac6a"),a("d3d7")),l=a.n(s),u=function(){function t(){var e=this;Object(n["a"])(this,t),this.observers=[],this.state=new Proxy(new o,{set:function(t,a,n,r){return l()(t,a,n,r),e.notifyAll(),!0}})}return Object(r["a"])(t,[{key:"notifyAll",value:function(){this.observers.forEach(function(t){return t.notify()})}},{key:"register",value:function(t){this.observers.push(t)}}]),t}(),f=function(){function t(){Object(n["a"])(this,t),this._state=new o,this.stateManager=new u}return Object(r["a"])(t,[{key:"create",value:function(t){var e=this.stateManager.state;return this._state=t.observable(e),this}},{key:"register",value:function(t){this.stateManager.register(t)}},{key:"state",get:function(){return this._state}}],[{key:"instance",get:function(){return null===this._instance&&(this._instance=new t),this._instance}}]),t}();f._instance=null,a.d(e,"a",function(){return f})},f798:function(t,e,a){"use strict";a("cd79");var n,r=a("2d7d"),i=a.n(r),c=a("d225"),o=a("b0b4"),s=new i.a([["_theme","Tema"],["_language","Idioma"],["_en","Inglés"],["_es","Español"],["_dark","Oscuro"],["_light","Claro"],["home_title","Inicio"],["home_recentArticles","Artículos recientes"],["article_title","Artículos"],["article_via","vía"],["article_shareArticle","Compartir artículo"],["about_title","Acerca de mí"],["about_description","I'm a young programmer very interested in good practices, architecture, testing and SOLID principles. I work at [Autentia](https://www.autentia.com/) as a frontend developer (Vue, React, TypeScript, JavaScript, HTML, CSS, etc) although I have worked a bit in Java and Android. I'm continuously on the lookout for things to read, learn and [share](https://www.adictosaltrabajo.com/author/calberca/). I've talked at [JSDay Madrid](https://www.youtube.com/watch?v=aNf1Oos0ZB8&t=1s), Codenares 2018 and 2019, [Ritsi](https://www.youtube.com/watch?v=SuykoyC0T74&t=1s) and several internal talks at my company, like [this one](https://www.youtube.com/watch?v=RFQy-ud8Ec4&t=4477s)."],["talks_title","Charlas"],["talks_talkTitle","Title"],["talks_talkAbstract","Descripción"],["talks_talkTopics","Temas"],["talks_talkDifficulty","Dificultad"],["talks_talkLength","Duración"],["talks_talkDifficultyAdvanced","Avanzado"],["talks_talkDifficultyIntermediate","Intermedio"],["talks_talkDifficultyEasy","Iniciado"]]),l=new i.a([["_theme","Theme"],["_language","Language"],["_en","English"],["_es","Spanish"],["_dark","Dark"],["_light","Light"],["home_title","Home"],["home_recentArticles","Recent articles"],["article_title","Articles"],["article_shareArticle","Share article"],["article_via","via"],["about_title","About me"],["about_description","I'm a young programmer very interested in good practices, architecture, testing and SOLID principles. I work at [Autentia](https://www.autentia.com/) as a frontend developer (Vue, React, TypeScript, JavaScript, HTML, CSS, etc) although I have worked a bit in Java and Android. I'm continuously on the lookout for things to read, learn and [share](https://www.adictosaltrabajo.com/author/calberca/). I've talked at [JSDay Madrid](https://www.youtube.com/watch?v=aNf1Oos0ZB8&t=1s), Codenares 2018 and 2019, [Ritsi](https://www.youtube.com/watch?v=SuykoyC0T74&t=1s) and several internal talks at my company, like [this one](https://www.youtube.com/watch?v=RFQy-ud8Ec4&t=4477s)."],["talks_title","Talks"],["talks_talkTitle","Title"],["talks_talkAbstract","Abstract"],["talks_talkTopics","Topics"],["talks_talkDifficulty","Difficulty"],["talks_talkLength","Length"],["talks_talkDifficultyAdvanced","Advanced"],["talks_talkDifficultyIntermediate","Intermediate"],["talks_talkDifficultyEasy","Beginner"]]);(function(t){t[t["EN"]=0]="EN",t[t["ES"]=1]="ES",t[t["DEFAULT"]=0]="DEFAULT"})(n||(n={}));var u=function(){function t(){Object(c["a"])(this,t),this.translations=new i.a([[n.ES,s],[n.EN,l]])}return Object(o["a"])(t,[{key:"getDefaultLocaleTranslation",value:function(){return this.translations.get(n.DEFAULT)}}],[{key:"create",value:function(){return new t}}]),t}(),f=a("308d"),h=a("6bb5"),d=a("4e2b"),b=a("f28b"),v=function(t){function e(t){return Object(c["a"])(this,e),Object(f["a"])(this,Object(h["a"])(e).call(this,t))}return Object(d["a"])(e,t),e}(Object(b["a"])(Error));a("21e9");a.d(e,"c",function(){return u}),a.d(e,"a",function(){return n}),a.d(e,"b",function(){return v})},f79b:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default")],2)},r=[],i=a("d225"),c=a("308d"),o=a("6bb5"),s=a("4e2b"),l=a("9ab4"),u=a("60a3"),f=a("d663"),h=a("f798"),d=a("3611"),b=a("b0b4"),v=a("301c"),p=function(){function t(){Object(i["a"])(this,t)}return Object(b["a"])(t,[{key:"parseToPlainText",value:function(t){var e=(new DOMParser).parseFromString(t,"text/html");return e.body.textContent||""}}],[{key:"create",value:function(){return new t}}]),t}(),m=function(){function t(e,a,n){Object(i["a"])(this,t),this.encoderService=e,this.htmlParserService=a,this.translationService=n}return Object(b["a"])(t,[{key:"getShareUrlFromBody",value:function(e){return"https://twitter.com/intent/tweet?text=".concat(this.encoderService.encode(this.htmlParserService.parseToPlainText(e.body))," ").concat(e.url," ").concat(this.translationService.translate(e.locale,"article_via")," ").concat(t.USER_HANDLER)}}],[{key:"create",value:function(){return new t(v["a"].create(),p.create(),d["a"].create(h["c"].create()))}}]),t}();m.USER_HANDLER="@cesalberca";var g=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.translationService=d["a"].create(h["c"].create()),t.twitterSharerService=m.create(),t.state=f["a"].instance.create(u["f"]).state,t.window=window,t.translate=function(t){return h["c"].create().translations.get(f["a"].instance.state.locale).get(t)},t}return Object(s["a"])(e,t),e}(u["f"]);l["a"]([Object(u["e"])()],g.prototype,"translationService",void 0),l["a"]([Object(u["e"])()],g.prototype,"twitterSharerService",void 0),l["a"]([Object(u["e"])()],g.prototype,"state",void 0),l["a"]([Object(u["e"])()],g.prototype,"window",void 0),l["a"]([Object(u["e"])()],g.prototype,"translate",void 0),g=l["a"]([u["a"]],g);var k=g,y=k,_=a("2877"),w=Object(_["a"])(y,n,r,!1,null,null,null),O=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("Injector",[a("Theming",{staticClass:"full-height"},[a("Navbar"),a("Page",[a("router-view")],1)],1)],1)],1)},A=[],T=a("6f17"),E=a("a57a"),S=function(){var t,e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"wrapper",class:(t={},t[e.theme]=!0,t)},[e._t("default")],2)},L=[],D=a("799f"),x=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),Object(b["a"])(e,[{key:"theme",get:function(){switch(this.state.theme){case D["a"].DARK:return"dark";case D["a"].LIGHT:default:return"light"}}}]),e}(u["f"]);l["a"]([Object(u["c"])()],x.prototype,"state",void 0),x=l["a"]([u["a"]],x);var C=x,I=C,P=(a("25d2"),Object(_["a"])(I,S,L,!1,null,"4d3869c7",null)),N=P.exports,R=function(t){function e(){return Object(i["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(u["f"]);R=l["a"]([Object(u["a"])({components:{Page:E["a"],Injector:O,Navbar:T["b"],Theming:N}})],R);var F=R,U=F,M=(a("6e34"),Object(_["a"])(U,j,A,!1,null,"68dc479c",null)),H=M.exports,B=(a("33e6"),a("091c"),a("c23c"),a("5bd1"),a("1f48"),a("7116"),a("9723"),a("a2da"),a("8c4f")),J=function(){function t(e,a,n){Object(i["a"])(this,t),this.vue=e,this.router=a,this.serviceWorker=n}return Object(b["a"])(t,[{key:"bootstrap",value:function(t){this.vue.use(B["a"]),this.vue.config.productionTip=!1,this.serviceWorker.register(),new this.vue({router:this.router.value,render:function(e){return e(t)}}).$mount("#app")}}]),t}(),$=function(){function t(e){Object(i["a"])(this,t),this.vueRouter=e,this._value=new this.vueRouter({mode:"history",base:"/blog/",routes:[{path:"/",name:"home",component:function(){return Promise.all([a.e("article~articles~home~talks"),a.e("home")]).then(a.bind(null,"35fa"))}},{path:"/articles",name:"articles",component:function(){return Promise.all([a.e("article~articles~home~talks"),a.e("articles")]).then(a.bind(null,"1003"))}},{path:"/article/:id",name:"article",component:function(){return Promise.all([a.e("article~articles~home~talks"),a.e("article")]).then(a.bind(null,"daf0"))}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"1ac5"))}},{path:"/talks",name:"talks",component:function(){return Promise.all([a.e("article~articles~home~talks"),a.e("talks")]).then(a.bind(null,"d566"))}}]})}return Object(b["a"])(t,[{key:"value",get:function(){return this._value}}],[{key:"create",value:function(e){return new t(e)}}]),t}();a.d(e,"c",function(){return O}),a.d(e,"a",function(){return H}),a.d(e,"b",function(){return J}),a.d(e,"d",function(){return $})}});
//# sourceMappingURL=app.8db0320a.js.map