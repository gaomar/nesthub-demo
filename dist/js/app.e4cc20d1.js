(function(t){function e(e){for(var r,l,s=e[0],u=e[1],i=e[2],f=0,p=[];f<s.length;f++)l=s[f],a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=n[0]))}return t}var r={},a={app:0},o=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("Nest Hub Demo")])])],1),n("v-content",[n("router-view")],1)],1)},l=[],s=n("2877"),u=n("6544"),i=n.n(u),c=n("7496"),f=n("549c"),p=n("71d9"),b=n("2a7f"),v={},d=Object(s["a"])(v,o,l,!1,null,null,null),m=d.exports;i()(d,{VApp:c["a"],VContent:f["a"],VToolbar:p["a"],VToolbarTitle:b["a"]});var h=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("HelloWorld")},y=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        こんにちはNest Hub！\n      ")]),n("v-btn",{attrs:{large:"",color:"success"},on:{click:t.bmiStart}},[t._v("BMI測定開始")])],1)],1)],1)},g=[],w={methods:{bmiStart:function(){assistantCanvas.sendTextQuery("bmi")}}},O=w,j=n("8336"),V=n("a523"),C=n("0e8f"),S=n("a722"),T=Object(s["a"])(O,_,g,!1,null,null,null),M=T.exports;i()(T,{VBtn:j["a"],VContainer:V["a"],VFlex:C["a"],VLayout:S["a"]});var P={components:{HelloWorld:M}},$=P,k=Object(s["a"])($,x,y,!1,null,null,null),E=k.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Result")},H=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[n("v-flex",{attrs:{"mb-4":""}},[n("h1",{staticClass:"display-3 font-weight-bold mb-3"},[t._v("\n        【BMI測定結果】\n      ")])]),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("h3",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n      "+t._s(t.result)+"\n      ")])]),n("v-flex",{attrs:{xs12:"","mb-5":""}},[n("v-btn",{attrs:{large:"",color:"success"},on:{click:t.bmiStart}},[t._v("もう一度やる")])],1)],1)],1)},I=[],J={data:function(){return{result:""}},created:function(){var t=this,e={onUpdate:function(e){"bmi"in e&&(t.result=e.bmi)}};assistantCanvas.ready(e)},methods:{bmiStart:function(){assistantCanvas.sendTextQuery("bmi")}}},L=J,N=Object(s["a"])(L,F,I,!1,null,null,null),Q=N.exports;i()(N,{VBtn:j["a"],VContainer:V["a"],VFlex:C["a"],VLayout:S["a"]});var R={components:{Result:Q}},W=R,A=Object(s["a"])(W,B,H,!1,null,null,null),D=A.exports;r["a"].use(h["a"]);var U=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:E},{path:"/result",name:"result",component:D}]});r["a"].config.productionTip=!1,new r["a"]({router:U,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.e4cc20d1.js.map