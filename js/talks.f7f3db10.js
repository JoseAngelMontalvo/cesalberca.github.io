(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["talks"],{"536c":function(t,e,a){},"62b2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("x-page",[a("h1",[t._v(t._s(t.title))]),t._l(t.talks,function(e){return a("x-talk",{key:e.id.value,attrs:{detail:t.talkDetail(e)}})})],2)},i=[],s=(a("96cf"),a("3b8d")),r=a("d225"),l=a("b0b4"),c=a("308d"),o=a("6bb5"),u=a("4e2b"),f=a("9ab4"),p=a("60a3"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"talk"},[a("section",[a("p",[a("strong",[t._v(t._s(t.translations.title))])]),a("p",[t._v(t._s(t.detail.title))])]),a("section",[a("p",[a("strong",[t._v(t._s(t.translations.abstract))])]),a("div",{domProps:{innerHTML:t._s(t.detail.abstract)}})]),a("section",[a("p",[a("strong",[t._v(t._s(t.translations.topics))])]),a("p",t._l(t.detail.topics,function(e){return a("span",{key:e},[t._v(t._s(e))])}),0)]),a("section",[a("p",[a("strong",[t._v(t._s(t.translations.length))])]),a("p",[t._v(t._s(t.detail.length))])]),a("section",[a("p",[a("strong",[t._v(t._s(t.translations.difficulty))])]),a("p",[t._v(t._s(t.translations.detailDifficulty))])])])},d=[],_=function(t){function e(){return Object(r["a"])(this,e),Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"translations",get:function(){return{title:this.translate("talks_talkTitle"),abstract:this.translate("talks_talkAbstract"),topics:this.translate("talks_talkTopics"),length:this.translate("talks_talkLength"),difficulty:this.translate("talks_talkDifficulty"),detailDifficulty:this.translate(this.detail.difficulty)}}}]),e}(p["f"]);f["a"]([Object(p["d"])({type:Object})],_.prototype,"detail",void 0),f["a"]([Object(p["c"])()],_.prototype,"translate",void 0),_=f["a"]([Object(p["a"])({name:"XTalk"})],_);var k=_,v=k,h=(a("ac21"),a("2877")),j=Object(h["a"])(v,b,d,!1,null,"a8cd5082",null),y=j.exports,O=(a("6b54"),a("309a")),g=function(){function t(){Object(r["a"])(this,t)}return Object(l["a"])(t,null,[{key:"fromTalk",value:function(t){return{id:t.id,title:t.title,abstract:t.abstract.toHtml(),length:t.length.minutes,difficulty:O["a"].create().toString(t.difficulty),language:t.language,topics:t.topics,references:t.references}}}]),t}(),m=a("9788"),w=a("d663"),x=a("c35d"),T=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(o["a"])(e).apply(this,arguments)),t.talks=[],t}return Object(u["a"])(e,t),Object(l["a"])(e,[{key:"talkDetail",value:function(t){return g.fromTalk(t)}},{key:"title",get:function(){return this.translate("talks_title")}}]),e}(p["f"]);f["a"]([Object(p["c"])()],T.prototype,"translationService",void 0),f["a"]([Object(p["c"])()],T.prototype,"state",void 0),f["a"]([Object(p["c"])()],T.prototype,"translate",void 0),T=f["a"]([Object(p["a"])({beforeRouteEnter:function(){var t=Object(s["a"])(regeneratorRuntime.mark(function t(e,a,n){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m["c"].create({locale:w["a"].instance.state.locale}).execute();case 2:i=t.sent,n(function(t){t.talks=i});case 4:case"end":return t.stop()}},t)}));function e(e,a,n){return t.apply(this,arguments)}return e}(),components:{XPage:x["a"],XTalk:y}})],T);var D=T,E=D,R=Object(h["a"])(E,n,i,!1,null,null,null);e["default"]=R.exports},ac21:function(t,e,a){"use strict";var n=a("536c"),i=a.n(n);i.a}}]);
//# sourceMappingURL=talks.f7f3db10.js.map