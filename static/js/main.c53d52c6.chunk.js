(this["webpackJsonpsimple-mice"]=this["webpackJsonpsimple-mice"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},25:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=25},35:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(15),a=n.n(c),i=(n(22),n(8)),u=n(11),r=n(6),s=(n.p,n(23),n(2)),x=n.n(s),l=n(16),f=n(17),p=n(3),b=n(29),j=(n(10),n(14));n(32),n(33),n(34);function O(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}var m=function(){var t=Object(o.useState)({}),e=Object(r.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(null),s=Object(r.a)(a,2),m=s[0],v=s[1],d=Object(o.useState)(0),g=Object(r.a)(d,2),h=(g[0],g[1]),w=Object(o.useState)(null),k=Object(r.a)(w,2),y=k[0],D=k[1];return Object(o.useEffect)((function(){var t={},e=!1,n=null,o=x()({peers:["https://aarondotwork-gun-server.herokuapp.com/gun"],radisk:j||!1,localStorage:!1}).get("simple_mice").get("test_instance2");return D(o),requestAnimationFrame((function t(){e||(h(Date.now()),requestAnimationFrame(t))})),o.map().on((function(o,a,r){n=r,t[a]=o,c((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(i.a)({},a,o))})),e&&n.off()})),setTimeout((function(){var e=b.sortBy(Object.values(t),["t"]);e.length>0&&Date.now()-e[0].t>1e3?v(e[0].k||O()):v(O())}),3e3),function(){var t;e=!0,null===(t=n)||void 0===t||t.off()}}),[]),Object(p.jsx)("div",{className:"App",style:{width:"100vw",height:"100vh",background:"none"},onMouseMove:function(t){null!=y&&null!=m&&y.get(m).put({x:t.clientX,y:t.clientY,t:Date.now(),k:m})},children:Object(p.jsx)("div",{children:Object.values(n).map((function(t){return Date.now()-t.t<5e3&&t.k!=m?Object(p.jsx)(l.a,{icon:f.a,style:{pointerEvents:"none",position:"absolute",top:t.y+"px",left:t.x+"px",opacity:Math.min(1-(Date.now()-t.t)/5e3,1)}},t.k):null}))})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))};a.a.render(Object(p.jsx)(m,{}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.c53d52c6.chunk.js.map