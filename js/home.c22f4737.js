(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{1582:function(e,t,a){"use strict";var n=a("ae60"),r=a.n(n);r.a},"2a0b":function(e,t,a){},"43ba":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",e._g({attrs:{href:e.to,target:e.target}},e.$listeners),[e._t("default")],2)},r=[],i=a("d4ec"),c=a("bee2"),o=a("99de"),s=a("7e84"),u=a("262e"),l=a("9ab4"),p=a("60a3"),d=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"target",get:function(){return this.external?"_blank":"_self"}}]),t}(p["d"]);l["a"]([Object(p["c"])({type:String}),l["b"]("design:type",String)],d.prototype,"to",void 0),l["a"]([Object(p["c"])({type:Boolean,default:!1}),l["b"]("design:type",Boolean)],d.prototype,"external",void 0),d=l["a"]([Object(p["a"])({name:"x-link.vue"})],d);var b=d,f=b,y=(a("1582"),a("2877")),g=Object(y["a"])(f,n,r,!1,null,"404f8167",null);t["a"]=g.exports},5496:function(e,t,a){"use strict";var n=a("918c"),r=a.n(n);r.a},5718:function(e,t,a){"use strict";a.r(t);var n,r,i,c,o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",[a("div",{staticClass:"hero"},[a("div",{staticClass:"wrapper"},[a("header",[a("h1",{staticClass:"title",domProps:{innerHTML:e._s(e.heroTitle)}}),a("p",{staticClass:"caption",domProps:{innerHTML:e._s(e.heroCaption)}})]),a("img",{staticClass:"photo",attrs:{src:e.me,alt:"César Alberca"}})])]),a("x-page",[a("h2",{staticClass:"articles"},[e._v(e._s(e.articlesTitle))]),e._l(e.articles,(function(t){return a("x-article-excerpt",{key:t.id.slug,attrs:{excerpt:t.getExcerpt()},on:{"on-action":e.navigateToArticleById}})}))],2)],1)},s=[],u=(a("d3b7"),a("96cf"),a("d4ec")),l=a("bee2"),p=a("99de"),d=a("7e84"),b=a("262e"),f=a("9ab4"),y=a("60a3"),g=a("7031"),v=a("f24d"),h=a("b3d7"),O=a("5b88"),j=a("d5f9"),_=a("9441"),m=a.n(_),x=a("af63"),T=a("a76d"),C=a("5b1b"),k=a("d023"),A=a("8e93"),w=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(p["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.articles=[],e.me=m.a,e}return Object(b["a"])(t,e),Object(l["a"])(t,[{key:"onLocaleChange",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(k["a"].instance().get(T["a"].GET_ALL_ARTICLES_USE_CASE).execute());case 2:this.articles=e.sent;case 3:case"end":return e.stop()}}),null,this)}},{key:"navigateToArticleById",value:function(e){this.navigateToArticle.execute(e)}},{key:"articlesTitle",get:function(){return this.translate("home_articles")}},{key:"heroTitle",get:function(){return this.translate("home_heroTitle")}},{key:"heroCaption",get:function(){return this.translate("home_heroCaption")}}]),t}(y["d"]);f["a"]([Object(C["a"])(T["a"].TRANSLATION_SERVICE),f["b"]("design:type","function"===typeof(n="undefined"!==typeof g["a"]&&g["a"])?n:Object)],w.prototype,"translationService",void 0),f["a"]([Object(C["a"])(T["a"].STATE_MANAGER),f["b"]("design:type","function"===typeof(r="undefined"!==typeof A["StateManager"]&&A["StateManager"])?r:Object)],w.prototype,"stateManager",void 0),f["a"]([Object(C["a"])(T["a"].TRANSLATE),f["b"]("design:type","function"===typeof(i="undefined"!==typeof v["Translate"]&&v["Translate"])?i:Object)],w.prototype,"translate",void 0),f["a"]([Object(C["a"])(T["a"].NAVIGATE_TO_ARTICLE),f["b"]("design:type","function"===typeof(c="undefined"!==typeof x["a"]&&x["a"])?c:Object)],w.prototype,"navigateToArticle",void 0),f["a"]([Object(y["e"])("stateManager.state.locale"),f["b"]("design:type",Function),f["b"]("design:paramtypes",[]),f["b"]("design:returntype",Promise)],w.prototype,"onLocaleChange",null),w=f["a"]([Object(y["a"])({name:"x-home",beforeRouteEnter:function(e,t,a){var n;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(k["a"].instance().get(T["a"].GET_ALL_ARTICLES_USE_CASE).execute());case 2:n=e.sent,a((function(e){e.articles=n}));case 4:case"end":return e.stop()}}))},components:{XHero:j["a"],XPage:O["a"],XArticleExcerpt:h["a"]}})],w);var E=w,S=E,L=(a("5c97"),a("2877")),R=Object(L["a"])(S,o,s,!1,null,"01577301",null);t["default"]=R.exports},"5b88":function(e,t,a){"use strict";var n,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page"},[a("div",{staticClass:"wrapper"},[e._t("default")],2)]),a("x-footer")],1)},i=[],c=a("d4ec"),o=a("bee2"),s=a("99de"),u=a("7e84"),l=a("262e"),p=a("9ab4"),d=a("60a3"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"wrapper"},[a("x-links",{staticClass:"links",attrs:{direction:e.direction}}),a("section",{staticClass:"info"},[a("small",{staticClass:"copy"},[e._v("© "+e._s(e.todaysYear)+" ‒ Made with "),a("x-link",{attrs:{to:"https://www.typescriptlang.org/",external:""}},[e._v("TypeScript")]),e._v(", "),a("x-link",{attrs:{to:"https://wikipedia.org/wiki/SOLID",external:""}},[e._v("SOLID")]),e._v(" and "),a("x-link",{attrs:{to:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",external:""}},[e._v("Clean Architecture")]),e._v(".")],1),a("small",{staticClass:"coverage"},[e._v(e._s(e.coverageLiteral)),a("span",{staticClass:"coverage-percentage"}),e._v(e._s(e.coverage)+"%")])])],1)])},f=[],y=a("2395"),g=a("51d6"),v=a("1ebc"),h=a("43ba"),O=a("f24d"),j=a("5b1b"),_=a("a76d"),m=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.direction=g["a"].VERTICAL,e}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"coverageLiteral",get:function(){return this.translate("_coverage")}},{key:"coverage",get:function(){return"90.95"}},{key:"todaysYear",get:function(){return v["a"].fromNow().year}}]),t}(d["d"]);p["a"]([Object(j["a"])(_["a"].TRANSLATE),p["b"]("design:type","function"===typeof(n="undefined"!==typeof O["Translate"]&&O["Translate"])?n:Object)],m.prototype,"translate",void 0),m=p["a"]([Object(d["a"])({name:"x-footer",components:{XLink:h["a"],XLinks:y["a"]}})],m);var x,T,C=m,k=C,A=(a("5496"),a("2877")),w=Object(A["a"])(k,b,f,!1,null,"38c38f3e",null),E=w.exports,S=a("8e93"),L=function(e){function t(){return Object(c["a"])(this,t),Object(s["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(o["a"])(t,[{key:"onShouldReloadChange",value:function(){this.stateManager.state.shouldReload&&this.window.location.reload(!0)}}]),t}(d["d"]);p["a"]([Object(j["a"])(_["a"].WINDOW),p["b"]("design:type","function"===typeof(x="undefined"!==typeof Window&&Window)?x:Object)],L.prototype,"window",void 0),p["a"]([Object(j["a"])(_["a"].STATE_MANAGER),p["b"]("design:type","function"===typeof(T="undefined"!==typeof S["StateManager"]&&S["StateManager"])?T:Object)],L.prototype,"stateManager",void 0),p["a"]([Object(d["e"])("stateManager.state.shouldReload"),p["b"]("design:type",Function),p["b"]("design:paramtypes",[]),p["b"]("design:returntype",void 0)],L.prototype,"onShouldReloadChange",null),L=p["a"]([Object(d["a"])({name:"x-page",components:{XFooter:E}})],L);var R=L,M=R,I=(a("6fd9"),Object(A["a"])(M,r,i,!1,null,"782f1426",null));t["a"]=I.exports},"5c97":function(e,t,a){"use strict";var n=a("fad6"),r=a.n(n);r.a},"6fd9":function(e,t,a){"use strict";var n=a("cf16"),r=a.n(n);r.a},"918c":function(e,t,a){},9441:function(e,t,a){e.exports=a.p+"img/me.62719b06.png"},"9d37":function(e,t,a){},ae60:function(e,t,a){},b3ac:function(e,t,a){"use strict";var n=a("9d37"),r=a.n(n);r.a},b3d7:function(e,t,a){"use strict";var n,r,i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("x-link",{staticClass:"excerpt",attrs:{tabindex:"0"},on:{click:e.onAction,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onAction(t)}}},[a("h3",[e._v(e._s(e.excerpt.title))]),a("div",{staticClass:"slugline"},[a("span",[e._v(e._s(e.excerpt.date))]),a("span",{staticClass:"accented-slugline"},[e._v(" / ")]),a("span",[e._v(e._s(e.excerpt.readingTime.minutes)+" "+e._s(e.minutes))])]),a("p",{domProps:{innerHTML:e._s(e.excerpt.body)}})])},c=[],o=a("d4ec"),s=a("bee2"),u=a("99de"),l=a("7e84"),p=a("262e"),d=a("9ab4"),b=a("60a3"),f=a("43ba"),y=a("f24d"),g=a("a76d"),v=a("5b1b"),h=function(e){function t(){return Object(o["a"])(this,t),Object(u["a"])(this,Object(l["a"])(t).apply(this,arguments))}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"onAction",value:function(){return this.excerpt.id}},{key:"minutes",get:function(){return this.translate("_minutes")}}]),t}(b["d"]);d["a"]([Object(b["c"])(),d["b"]("design:type","function"===typeof(n="undefined"!==typeof ReturnType&&ReturnType)?n:Object)],h.prototype,"excerpt",void 0),d["a"]([Object(v["a"])(g["a"].TRANSLATE),d["b"]("design:type","function"===typeof(r="undefined"!==typeof y["Translate"]&&y["Translate"])?r:Object)],h.prototype,"translate",void 0),d["a"]([Object(b["b"])(),d["b"]("design:type",Function),d["b"]("design:paramtypes",[]),d["b"]("design:returntype",void 0)],h.prototype,"onAction",null),h=d["a"]([Object(b["a"])({name:"x-article-excerpt",components:{XLink:f["a"]}})],h);var O=h,j=O,_=(a("c0f6"),a("2877")),m=Object(_["a"])(j,i,c,!1,null,"108da9f1",null);t["a"]=m.exports},c0f6:function(e,t,a){"use strict";var n=a("2a0b"),r=a.n(n);r.a},cf16:function(e,t,a){},d5f9:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"image",style:e.style},[a("div",{staticClass:"wrapper"},[e._t("default")],2)])},r=[],i=a("d4ec"),c=a("bee2"),o=a("99de"),s=a("7e84"),u=a("262e"),l=a("9ab4"),p=a("60a3"),d=function(e){function t(){return Object(i["a"])(this,t),Object(o["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"style",get:function(){return{"background-image":"url(".concat(this.image,")")}}}]),t}(p["d"]);l["a"]([Object(p["c"])({type:String,required:!0}),l["b"]("design:type",String)],d.prototype,"image",void 0),d=l["a"]([Object(p["a"])({name:"x-hero"})],d);var b=d,f=b,y=(a("b3ac"),a("2877")),g=Object(y["a"])(f,n,r,!1,null,"4bbd852c",null);t["a"]=g.exports},fad6:function(e,t,a){}}]);
//# sourceMappingURL=home.c22f4737.js.map