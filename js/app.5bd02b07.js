(function(e){function t(t){for(var a,r,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function i(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c21f5a0d"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"057b45e9"}[e]+".css",o=u.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/date-app/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:" contenedor",attrs:{id:"app"}},[n("div",{staticClass:"d-flex justify-content-around pb-5"},[n("router-view")],1)])},o=[],s=(n("5d30"),n("2877")),i={},u=Object(s["a"])(i,r,o,!1,null,"b438894e",null),c=u.exports,l=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home my-5"},[n("MostrarUsuarios")],1)},f=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("div",{staticClass:"card",staticStyle:{width:"25rem"}},[n("img",{staticClass:"card-img-top",attrs:{src:e.usuarios[e.index].avatar,alt:"..."}}),n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[e._v(e._s(e.usuarios[e.index].first_name)+" "),n("small",[e._v(e._s(e.usuarios[e.index].last_name))])]),n("p",[e._v(e._s(e.usuarios[e.index].email))]),n("div",{staticClass:"d-flex justify-content-around mt-3"},[n("i",{staticClass:"fas fa-heart-broken fa-3x corazon",on:{click:e.recorrerArreglo}}),n("i",{staticClass:"far fa-comment-dots fa-3x mensaje",attrs:{disabled:!0},on:{click:function(t){e.mostrarMensaje=!e.mostrarMensaje}}}),n("i",{staticClass:"fas fa-heart fa-3x corazon",on:{click:e.recorrerArreglo}})]),e.mostrarMensaje?n("div",{staticClass:"input-group my-3"},[n("input",{staticClass:"form-control ",attrs:{type:"text",placeholder:"Envia un mensaje","aria-label":"Recipient's username","aria-describedby":"button-addon2"}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",id:"button-addon2"},on:{click:e.mensajeEnviado}},[e._v("Enviar")])])]):e._e(),e.enviado&&e.coins>0?n("div",{staticClass:"d-flex justify-content-around my-3"},[n("p",[e._v("¡Mensaje Enviado!")])]):e._e(),e.noCoins?n("div",{staticClass:"d-flex justify-content-around my-3"},[n("p",[e._v("Te has quedado sin monedas :(")])]):e._e()])]),n("div",{staticClass:"d-flex justify-content-around mt-3"},[n("div",[n("i",{staticClass:"fas fa-coins fa-2x monedas d-inline mx-2"}),n("p",{staticClass:"d-inline"},[e._v(e._s(e.coins))])]),n("button",{staticClass:"btn btn-success",on:{click:function(t){return e.paginaMonedas()}}},[e._v("Comprar mas monedas")])])])},m=[],v=n("5530"),h=n("2f62"),b={name:"MostrarUsuarios",data:function(){return{index:1,mostrarMensaje:!1,enviado:!1,noCoins:!1}},created:function(){this.obtenerUsuarios(),console.log(this.usuarios)},methods:Object(v["a"])(Object(v["a"])(Object(v["a"])({},Object(h["b"])(["obtenerUsuarios"])),Object(h["c"])(["quitarMoneda"])),{},{recorrerArreglo:function(){console.log(this.usuarios.length),this.index<this.usuarios.length-1?this.index++:this.index=0},mensajeEnviado:function(){var e=this;this.coins>0?(this.mostrarMensaje=!this.mostrarMensaje,this.enviado=!this.enviado,setTimeout((function(){e.enviado=!e.enviado}),2e3),this.quitarMoneda()):(this.noCoins=!0,setTimeout((function(){e.enviado=!e.enviado}),2e3))},paginaMonedas:function(){this.$router.push("/compras")}}),computed:Object(v["a"])({},Object(h["d"])(["usuarios","coins"]))},g=b,y=(n("8f03"),Object(s["a"])(g,p,m,!1,null,null,null)),j=y.exports,C={name:"Home",components:{MostrarUsuarios:j}},x=C,_=Object(s["a"])(x,d,f,!1,null,null,null),w=_.exports;a["a"].use(l["a"]);var O=[{path:"/",name:"Home",component:w},{path:"/compras",name:"Compras",component:function(){return n.e("about").then(n.bind(null,"4c1f"))}}],M=new l["a"]({mode:"history",base:"/date-app/",routes:O}),E=M,k=(n("96cf"),n("1da1"));a["a"].use(h["a"]);var S=new h["a"].Store({state:{usuarios:[],coins:3},mutations:{setUsuarios:function(e,t){e.usuarios=t},quitarMoneda:function(e){e.coins--},recargaMonedas:function(e,t){e.coins=e.coins+t}},actions:{obtenerUsuarios:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,fetch("https://reqres.in/api/users?page=2");case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,o=r.data,console.log(o),n("setUsuarios",o);case 10:case"end":return t.stop()}}),t)})))()}},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:E,store:S,render:function(e){return e(c)}}).$mount("#app")},"5d30":function(e,t,n){"use strict";var a=n("e352"),r=n.n(a);r.a},7751:function(e,t,n){},"8f03":function(e,t,n){"use strict";var a=n("7751"),r=n.n(a);r.a},e352:function(e,t,n){}});
//# sourceMappingURL=app.5bd02b07.js.map