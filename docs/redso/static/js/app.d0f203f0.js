(function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],p=0,g=[];p<a.length;p++)s=a[p],i[s]&&g.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(g.length)g.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==i[l]&&(o=!1)}o&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},i={app:0},r=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/f2e-exam/redso/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o,i,r,s,a=n("2b0e"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.displayPage?t._e():n("HelloWorld",{on:{getAns:t.getAns}}),t.displayPage?n("MainPage",{attrs:{mainPos:t.mainPos}}):t._e()],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"landing"}},[n("article",[t.userLoc?[n("p",[t._v(t._s(t.waitingTxt))])]:[n("h2",[t._v("尋找附近餐廳")]),t._m(0),n("a",{staticClass:"btn solid",attrs:{href:"javascript:void(0)"},on:{click:t.getLocation}},[t._v("我知道了！")])]],2)])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("幫你找出步行一百公尺的附近餐廳，"),n("br"),t._v("但需要您的允許存取位置的同意。")])}],g={name:"HelloWorld",data:function(){return{nowPlace:[],userLoc:!1,waitingTxt:""}},methods:{getLocation:function(){var t=this;t.userLoc=!0,t.waitingTxt="等待中...","geolocation"in navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){e?(t.nowPlace=[e.coords.latitude,e.coords.longitude],t.$emit("getAns",t.nowPlace),t.userLoc=!1):t.userLoc=!0},function(){t.waitingTxt="您拒絕存取位置T^T"}):t.waitingTxt="您的瀏覽器不支援 顯示地理位置 API ，請使用其它瀏覽器開啟 這個網址"}}},d=g,f=n("2877"),m=Object(f["a"])(d,u,p,!1,null,null,null),v=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"main"}},[n("div",{attrs:{id:"shopFilter"}},[t.totalStore?[n("div",{staticClass:"sortTab"},[n("p",[t._v("附近有"),n("span",[t._v(" "+t._s(t.totalStore)+" ")]),t._v("間店")]),n("ul",{staticClass:"sortNav"},[n("li",{ref:"rate",staticClass:"active",on:{click:function(e){return t.sortBy("rate")}}},[t._v("評價")]),n("li",{ref:"distance",on:{click:function(e){return t.sortBy("distance")}}},[t._v("距離")]),n("li",{ref:"time",on:{click:function(e){return t.sortBy("time")}}},[t._v("步行時間")])])]),t.storeList&&t.storeList.length>0?n("ul",{attrs:{id:"shopList"}},t._l(t.storeList,function(e){return n("li",{key:e.id,ref:e.name,refInFor:!0},[n("dl",{staticClass:"shopCard"},[n("dt",{class:["shopImg",e.photos&&e.photos.length>=0?"":"emptyBox"]},["rate"===t.sortType?n("span",[t._v(t._s(e.rating))]):t._e(),"distance"===t.sortType?n("span",[t._v(t._s(e.distance)+" 公尺")]):t._e(),"time"===t.sortType?n("span",[t._v("約 "+t._s(e.time)+" 分")]):t._e(),e.photos&&e.photos.length>=0?[n("img",{attrs:{src:e.photos[0].getUrl(),alt:e.name}})]:t._e()],2),n("dd",{staticClass:"shopInfo"},[n("h6",[t._v(t._s(e.name))]),n("p",[t._v(t._s(e.vicinity))])])])])}),0):t._e()]:[n("p",{staticClass:"emptyResult"},[t._v("附近一百公尺內沒有餐廳喔！")])]],2),n("div",{attrs:{id:"map"}})])},y=[],_=(n("55dd"),n("7f7f"),{name:"HelloWorld",props:["mainPos"],data:function(){return{storeList:[],sortList:[],sortType:"rate",count:!1}},computed:{totalStore:function(){var t;return this.storeList&&this.storeList.length>0&&(t=this.storeList.length),t}},watch:{sortType:function(t,e){t!==e&&(this.$refs[t].classList+="active",this.$refs[e].classList="")}},methods:{initMap:function(t){var e=this,n=new google.maps.LatLng(t[0],t[1]);s=new google.maps.InfoWindow,o=new google.maps.Map(document.getElementById("map"),{center:n,zoom:17,disableDefaultUI:!0}),e.whereAmI(n);var a={location:o.getCenter(),radius:100,type:["restaurant"]};i=new google.maps.places.PlacesService(o),r=new google.maps.DirectionsService,i.nearbySearch(a,function(t,o){if(o===google.maps.places.PlacesServiceStatus.OK){for(var i=0;i<t.length;i++)e.storeList.unshift(t[i]),e.storeMarker(t[i]),e.fromAToB({id:i,a:n,b:t[i].geometry.location});e.sortBy(e.sortType)}})},storeMarker:function(t){console.log("/f2e-exam/redso/");var e={url:"/f2e-exam/redso/images/store.svg",size:new google.maps.Size(32,32),scaledSize:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,0)},n=new google.maps.Marker({map:o,position:t.geometry.location,type:"store",icon:e,title:t.name});google.maps.event.addListener(n,"click",function(){s.setContent(t.name),s.open(o,this)})},whereAmI:function(t){var e=this,n={url:"/f2e-exam/redso/images/me.svg",size:new google.maps.Size(32,32),scaledSize:new google.maps.Size(32,32),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,0)},i={coords:[1,1,1,20,18,20,18,1],type:"poly"},r=new google.maps.Marker({map:o,position:t,type:"pos",icon:n,shape:i,draggable:!0});o.setCenter(t),o.addListener("dragend",function(){e.storeList=[],r.setPosition(o.getCenter()),e.initMap([r.getPosition().lat(),r.getPosition().lng()])}),r.addListener("dragend",function(){e.storeList=[],o.setCenter(r.getPosition()),e.initMap([r.getPosition().lat(),r.getPosition().lng()])})},fromAToB:function(t){var e,n,o=this,i=0,s=0,a={origin:t.a,destination:t.b,travelMode:"WALKING"};r.route(a,function(r,a){if("OK"==a){for(var l=r.routes[0].legs[0].steps,c=0;c<l.length;c++)e=l[c].distance?l[c].distance.value:0,n=l[c].duration?l[c].duration.value:0,i+=e,s+=n;o.transTimer(s),o.storeList[t.id]["distance"]=i,o.storeList[t.id]["time"]=o.transTimer(s),o.$forceUpdate()}else console.log(a)})},sortBy:function(t){var e,n,o,i,r=this;switch(t){case"rate":i="rating";break;case"distance":i="distance";break;case"time":i="duration";break}r.count=!r.count,r.sortType=t,r.storeList.sort(function(t,s){return e=t[i],n=s[i],o=r.count?n-e:e-n,o})},transTimer:function(t){var e;return e=Math.ceil(t/60),e<=1&&(e=1),e}},mounted:function(){this.initMap(this.mainPos),this.sortBy(this.sortType)}}),w=_,P=Object(f["a"])(w,h,y,!1,null,null,null),b=P.exports,L={name:"app",data:function(){return{mainPos:Array,displayPage:!1}},components:{HelloWorld:v,MainPage:b},methods:{getAns:function(t){t&&t.length>0&&(this.mainPos=t,this.displayPage=!0)}}},T=L,x=Object(f["a"])(T,l,c,!1,null,null,null),S=x.exports;n("5aea");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(S)}}).$mount("#app")},"5aea":function(t,e,n){}});
//# sourceMappingURL=app.d0f203f0.js.map