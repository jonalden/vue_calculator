(function(t){function e(e){for(var r,c,i=e[0],u=e[1],s=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var s=0;s<i.length;s++)e(i[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"16d1":function(t,e,n){"use strict";var r=n("ed6b"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=n("4af9"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"calc-wrapper"},[n("div",{staticClass:"display"},[t._v(t._s(t.currentVal||0))]),n("div",{staticClass:"button",on:{click:function(e){return t.num("7")}}},[t._v("7")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("8")}}},[t._v("8")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("9")}}},[t._v("9")]),n("div",{staticClass:"button operator",on:{click:function(e){return t.add()}}},[t._v("+")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("4")}}},[t._v("4")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("5")}}},[t._v("5")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("6")}}},[t._v("6")]),n("div",{staticClass:"button operator",on:{click:function(e){return t.subtract()}}},[t._v("-")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("1")}}},[t._v("1")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("2")}}},[t._v("2")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("3")}}},[t._v("3")]),n("div",{staticClass:"button operator",on:{click:function(e){return t.multiply()}}},[t._v("*")]),n("div",{staticClass:"button",on:{click:function(e){return t.num("0")}}},[t._v("0")]),n("div",{staticClass:"button clear",on:{click:function(e){return t.clear()}}},[t._v("C")]),n("div",{staticClass:"button operator",on:{click:function(e){return t.calculateAndPost()}}},[t._v("=")]),n("div",{staticClass:"button operator",on:{click:function(e){return t.divide()}}},[t._v("/")])]),n("div",{staticClass:"post-container"},t._l(t.posts,(function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r},on:{dblclick:function(n){return t.deletePost(e._id)}}},[n("div",{staticClass:"created-at"},[t._v(" "+t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/"+e.createdAt.getFullYear())+" ")]),n("div",[n("p",{staticClass:"sum"},[t._v(" "+t._s(e.firstVal+" "+e.operator+" "+e.secondVal+" = "+e.sum)+" ")])])])})),0)])},c=[],i=(n("99af"),n("96cf"),n("1da1")),u=(n("d81d"),n("d3b7"),n("5530")),s=n("d4ec"),l=n("bee2"),p=n("bc3a"),f=n.n(p),d="api/posts",v=function(){function t(){Object(s["a"])(this,t)}return Object(l["a"])(t,null,[{key:"getPosts",value:function(){return new Promise((function(t,e){f.a.get(d).then((function(e){var n=e.data;t(n.map((function(t){return Object(u["a"])(Object(u["a"])({},t),{},{createdAt:new Date(t.createdAt)})})))})).catch((function(t){e(t)}))}))}},{key:"insertPost",value:function(t,e,n,r){return f.a.post(d,{sum:t,operator:e,firstVal:n,secondVal:r})}},{key:"deletePost",value:function(t){return f.a.delete("".concat(d,"/").concat(t))}}]),t}(),b=v,h={name:"CalculatorComponent",props:{},data:function(){return{posts:[],sum:"",previousVal:"",currentVal:"",operator:null,operation:null,operatorSelected:!1}},created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.getPosts();case 3:t.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),t.err=e.t0.message;case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()},methods:{num:function(t){this.operatorSelected&&(this.currentVal="",this.operatorSelected=!1),this.currentVal="".concat(this.currentVal).concat(t),console.log(this.currentVal)},clear:function(){this.currentVal="",this.previousVal="",this.operatorSelected=!1},setPreviousVal:function(){this.previousVal=this.currentVal,this.operatorSelected=!0},add:function(){this.operation=function(t,e){return t+e},this.setPreviousVal(),this.operator="+"},subtract:function(){this.operation=function(t,e){return t-e},this.setPreviousVal(),this.operator="-"},multiply:function(){this.operation=function(t,e){return t*e},this.setPreviousVal(),this.operator="*"},divide:function(){this.operation=function(t,e){return t/e},this.setPreviousVal(),this.operator="/"},calculateAndPost:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.currentVal,t.currentVal="".concat(t.operation(parseFloat(t.previousVal),parseFloat(t.currentVal))),!(t.currentVal&&t.previousVal&&t.operator&&n)){e.next=10;break}return e.next=5,b.insertPost(t.currentVal,t.operator,t.previousVal,n);case 5:return e.next=7,b.getPosts();case 7:t.posts=e.sent,e.next=12;break;case 10:alert("You must enter an appropriate operation"),t.clear();case 12:case"end":return e.stop()}}),e)})))()},deletePost:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.deletePost(t);case 2:return n.next=4,b.getPosts();case 4:e.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},m=h,_=(n("16d1"),n("2877")),k=Object(_["a"])(m,a,c,!1,null,"154ea374",null),g=k.exports;r["default"].use(o["a"]);var V=new o["a"]({routes:[{path:"/",name:"calculator",component:g}]}),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},w=[],P={name:"App"},y=P,x=(n("034f"),Object(_["a"])(y,C,w,!1,null,null,null)),O=x.exports,j=n("3e66"),S=n.n(j);n("b9bb");r["default"].use(S.a),r["default"].config.productionTip=!1,new r["default"]({router:V,render:function(t){return t(O)}}).$mount("#app")},"85ec":function(t,e,n){},ed6b:function(t,e,n){}});
//# sourceMappingURL=app.0cbeb85b.js.map