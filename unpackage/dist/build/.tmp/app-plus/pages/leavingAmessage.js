(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/leavingAmessage"],{"17e3":function(t,e,n){"use strict";var a=n("b3dc"),u=n.n(a);u.a},"33c7":function(t,e,n){"use strict";n.r(e);var a=n("e896"),u=n("724a");for(var i in u)"default"!==i&&function(t){n.d(e,t,function(){return u[t]})}(i);n("17e3");var c=n("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"724a":function(t,e,n){"use strict";n.r(e);var a=n("e19e"),u=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=u.a},b3dc:function(t,e,n){},cde7:function(t,e,n){"use strict";(function(t){n("ae81"),n("921b");a(n("66fd"));var e=a(n("33c7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e19e:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("components/topTab").then(n.bind(null,"3735"))},u={components:{SwiperTabHead:a},data:function(){return{tabIndex:0,tabBars:["给我的留言","我给的留言"],messageList:[[],[]]}},created:function(){this.getData()},methods:{getData:function(){var e=this;this.tabBars.map(function(n,a){t.apiRequest("/api/User/leavingList",{data:{is_my:a+1},success:function(t){return e.messageList[a]=t.data.result}})})},tabtap:function(t){this.tabIndex=t},tabChange:function(t){this.tabIndex=t.detail.current}}};e.default=u}).call(this,n("6e42")["default"])},e896:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})}},[["cde7","common/runtime","common/vendor"]]]);