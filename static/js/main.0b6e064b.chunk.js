(this.webpackJsonpavpro=this.webpackJsonpavpro||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(29),s=n.n(a),o=(n(37),n(20)),i=n.n(o),u=n(28),j=n(14),l=(n(39),n(3)),b=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("h1",{children:"AVpro - TV sets"})})},d=function(e){var t=e.getSearchRequest,n=Object(c.useState)(""),r=Object(j.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),t(a)},children:[Object(l.jsx)("div",{className:"form-control",children:Object(l.jsx)("input",{type:"text",id:"header-search",placeholder:"TV model",value:a,onChange:function(e){return s(e.target.value)}})}),Object(l.jsx)("input",{type:"submit",value:"H\u013eada\u0165",className:"btn btn-block"})]})},h=n(68),O=n(65),f=n(66),p=n(69),x=n(70),m=n(67),v=function(e){var t=e.model,n=Object.keys(t);return Object(l.jsx)(f.a,{component:m.a,children:Object(l.jsx)(h.a,{sx:{minWidth:650},size:"small","aria-label":"simple table",children:Object(l.jsx)(p.a,{children:n.map((function(e){return Object(l.jsxs)(x.a,{children:[Object(l.jsx)(O.a,{children:e}),Object(l.jsx)(O.a,{align:"right",children:t[e]})]})}))})})})};v.defaultProps={model:{}};var g=v,k=function(e){var t=e.text,n=e.color,c=e.onClick,r=e.onKeyPress;return Object(l.jsxs)("div",{children:[Object(l.jsx)("input",{type:"hidden",onKeyPress:r}),Object(l.jsx)("button",{className:"btn btn-block",style:{backgroundColor:n},onClick:c,children:t})]})};var y=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),o=s[0],h=s[1],O=Object(c.useState)(0),f=Object(j.a)(O,2),p=f[0],x=f[1],m=Object(c.useState)(0),v=Object(j.a)(m,2),y=v[0],S=v[1],C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:8000/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:n=e.sent,r(n),h(!0),x(n.length);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){S(y===p-1?0:y+1)};return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(b,{}),Object(l.jsx)(d,{getSearchRequest:w}),o&&Object(l.jsxs)("h2",{children:["Model: ",y+1]}),o&&Object(l.jsx)(g,{model:n[y]}),o&&Object(l.jsx)(k,{text:"\u010ealej",color:"green",onClick:N,onKeyPress:function(e){13===e.keyCode&&N()}})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),S()}},[[46,1,2]]]);
//# sourceMappingURL=main.0b6e064b.chunk.js.map