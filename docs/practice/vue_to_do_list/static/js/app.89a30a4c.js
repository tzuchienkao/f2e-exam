(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,f=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-todo-list/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page"}},[n("orderTop",{on:{getItem:e.getItem}}),n("orderList",{attrs:{newItem:e.newItem}})],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._m(0),n("p",{staticClass:"order-place"},[n("i",{staticClass:"fa fa-coffee"}),e._v("我想要點...\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newOrder,expression:"newOrder"}],attrs:{type:"text"},domProps:{value:e.newOrder},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addOrder()},input:function(t){t.target.composing||(e.newOrder=t.target.value)}}})])])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("午茶時光\n    "),n("i",{staticClass:"fa fa-cookie-bite"})])}],c={name:"top",data:function(){return{newOrder:""}},methods:{addOrder:function(){var e=this.newOrder&&this.newOrder.trim();e&&(this.$emit("getItem",this.newOrder),this.newOrder="")}},directives:{inputFocus:{inserted:function(e){e.focus()}}}},u=c,d=n("2877"),l=Object(d["a"])(u,a,s,!1,null,null,null),f=l.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("ul",{staticClass:"flex-box tabs"},[n("li",{on:{click:function(t){return e.sortBy("all")}}},[n("a",{class:{active:"all"===e.sort},attrs:{href:"javascript:void(0)"}},[e._v("所有訂單 ("+e._s(e.totalSum)+")")])]),n("li",{on:{click:function(t){return e.sortBy("nodo")}}},[n("a",{class:{"active color-red":"nodo"===e.sort},attrs:{href:"javascript:void(0)"}},[e._v("未完成 ("+e._s(e.nodoSum)+")")])]),n("li",{on:{click:function(t){return e.sortBy("done")}}},[n("a",{class:{"active color-green":"done"===e.sort},attrs:{href:"javascript:void(0)"}},[e._v("已完成 ("+e._s(e.doneSum)+")")])])]),n("ul",{staticClass:"order-list"},e._l(e.list,function(t,r){return n("li",{key:"item-"+r,staticClass:"flex-box flex-h-align"},[t===e.editItem?[n("input",{directives:[{name:"model",rawName:"v-model",value:t.item,expression:"item.item"},{name:"input-focus",rawName:"v-input-focus"}],attrs:{type:"text"},domProps:{value:t.item},on:{keydown:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.doneEdit(t)},function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"esc",27,n.key,["Esc","Escape"])?null:e.cancelEdit(t)}],blur:function(n){return e.cancelEdit(t)},input:function(n){n.target.composing||e.$set(t,"item",n.target.value)}}})]:[n("div",{staticClass:"flex-box flex-h-align flex-v-align order-item"},[n("dt",{staticClass:"item-status"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.done,expression:"item.done"}],attrs:{type:"checkbox",id:"item-"+r},domProps:{checked:Array.isArray(t.done)?e._i(t.done,null)>-1:t.done},on:{change:function(n){var r=t.done,o=n.target,i=!!o.checked;if(Array.isArray(r)){var a=null,s=e._i(r,a);o.checked?s<0&&e.$set(t,"done",r.concat([a])):s>-1&&e.$set(t,"done",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(t,"done",i)}}}),n("label",{attrs:{for:"item-"+r}},[n("i",{class:["fa",t.done?"fa-bell-slash color-green":"fa-bell color-red"]})]),n("p",{staticClass:"item-name",on:{dblclick:function(n){return e.doEdit(t)}}},[e._v("\n                "+e._s(t.item)+"\n              ")])]),n("dd",{staticClass:"order-date"},[e._v(e._s(e.orderDate(t.time)))])]),n("div",{staticClass:"btn-group"},[n("button",{on:{click:function(n){return e.doEdit(t)}}},[e._v("修改")]),n("button",{on:{click:function(n){return e.removeOrder(t)}}},[e._v("結單")])])]],2)}),0)])},p=[],h=(n("6b54"),n("55dd"),{name:"list",data:function(){return{sort:"nodo",orderData:[{item:"烏龍綠茶",done:!0,time:1567609941820},{item:"紅茶",done:!0,time:1567609966596},{item:"綠茶",done:!1,time:1567609982215}],isEdit:!1,editItem:null}},props:["newItem"],computed:{list:function(){var e=this.sort;switch(e){case"all":return this.orderData;case"nodo":return this.orderData.filter(function(e){return!e.done});case"done":return this.orderData.filter(function(e){return e.done})}},newOrder:function(){return this.$nextTick(function(){}),this.newItem},totalSum:function(){return this.orderData.length},nodoSum:function(){var e=this.orderData.filter(function(e){return!e.done});return e.length},doneSum:function(){var e=this.orderData.filter(function(e){return e.done});return e.length}},watch:{newOrder:function(e){this.orderData.push({item:e,done:!1,time:Date.now()})}},methods:{sortBy:function(e){this.sort=e},orderDate:function(e){var t=new Date(e),n=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return n.toString().length<2&&(n="0".concat(n)),r.toString().length<2&&(r="0".concat(r)),o.toString().length<2&&(o="0".concat(o)),"".concat(n," : ").concat(r," : ").concat(o)},doEdit:function(e){this.editItem=e,this.beforeEditCache=e.item},cancelEdit:function(e){this.isEdit||(this.editItem=null,e.item=this.beforeEditCache),this.isEdit=!1},doneEdit:function(e){this.editItem&&(this.editItem=null,e.item=e.item.trim(),e.item||this.removeOrder(e),this.isEdit=!0)},removeOrder:function(e){var t=this.orderData.indexOf(e);this.orderData.splice(t,1)}},directives:{inputFocus:{inserted:function(e){e.focus()}}}}),v=h,g=Object(d["a"])(v,m,p,!1,null,null,null),y=g.exports,b={name:"page",components:{orderTop:f,orderList:y},data:function(){return{newItem:""}},methods:{getItem:function(e){this.newItem=e}}},w=b,_=Object(d["a"])(w,o,i,!1,null,null,null),O=_.exports;n("5aea");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(O)}}).$mount("#page")},"5aea":function(e,t,n){}});
//# sourceMappingURL=app.89a30a4c.js.map