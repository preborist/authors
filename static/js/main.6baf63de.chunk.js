(this.webpackJsonpauthors=this.webpackJsonpauthors||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(12),n(5)),j=n.n(i),l=n(7),u=n(2),o=n(0);var b=function(e){var t,n=e.totalPages,c=e.page,a=e.itemsPerPage,r=e.totalItems,s=e.handleNextPageClick,i=e.handlePrevPageClick,j=(c-1)*a+1;return t=a*c>r?r:j+a-1,Object(o.jsx)("div",{children:n>1?Object(o.jsxs)("div",{children:[c>1?Object(o.jsx)("button",{onClick:function(){return i(c)},children:"prev"}):null,Object(o.jsx)("div",{children:"".concat(j," - ").concat(t)}),c<n?Object(o.jsx)("button",{onClick:function(){return s(c)},children:"next"}):null]}):null})},h=10;n(15);var d=function(){return Object(o.jsx)("div",{className:"lds-dual-ring"})},O=n(3),v=n.n(O);var x=function(e){var t=e.data,n=e.page,a=e.topThreeAuthors,r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],j=s[1],l=Object(c.useState)([]),b=Object(u.a)(l,2),d=b[0],O=b[1],x=Object(c.useState)(1),g=Object(u.a)(x,2),p=g[0],f=g[1],m=Object(c.useState)("pageviews"),w=Object(u.a)(m,2),P=w[0],S=w[1],C=(n-1)*h,k=function(e){S(e);var t=d.slice(C,C+h);j(t),f(1===p?-1:1)};return Object(c.useEffect)((function(){var e=t.concat().sort((function(e,t){return(e[P]>t[P]?-1:e[P]<t[P]?1:0)*p}));O(e);var n=e.slice(C,C+h);j(n)}),[t,C,n,P,p]),Object(o.jsx)("div",{children:Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:"Letter"}),Object(o.jsxs)("th",{onClick:function(){return k("name")},children:["Name","name"===P?Object(o.jsx)("small",{children:"sort"}):null]}),Object(o.jsx)("th",{children:"awards"}),Object(o.jsxs)("th",{onClick:function(){return k("pageviews")},children:["pageviews","pageviews"===P?Object(o.jsx)("small",{children:"sort"}):null]})]})}),Object(o.jsx)("tbody",{children:i?i.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:C+t+1}),Object(o.jsx)("td",{children:e.name.charAt(0)}),Object(o.jsxs)("td",{children:[e.name," ",Object(o.jsxs)("span",{children:[e.count_pub," \u043f\u0443\u0431\u043b."]})]}),Object(o.jsx)("td",{className:e.pageviews===a[0].pageviews?v.a.first:e.pageviews===a[1].pageviews?v.a.second:e.pageviews===a[2].pageviews?v.a.third:"empty"}),Object(o.jsx)("td",{children:e.pageviews})]},e.Name+Date()+e.pageviews.toString())})):null})]})})};var g=function(e){var t=e.inputFilterName,n=e.changeFilter;return Object(o.jsxs)("label",{children:["Find authors by name",Object(o.jsx)("input",{name:"filter",type:"text",value:t,onChange:n})]})};var p=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],O=s[1],v=Object(c.useState)(null),p=Object(u.a)(v,2),f=p[0],m=p[1],w=Object(c.useState)([]),P=Object(u.a)(w,2),S=P[0],C=P[1],k=Object(c.useState)(1),_=Object(u.a)(k,2),N=_[0],T=_[1],F=Object(c.useState)(""),y=Object(u.a)(F,2),A=y[0],L=y[1],E=Object(c.useState)(0),I=Object(u.a)(E,2),M=I[0],B=I[1],J=function(e){var t=e.concat().sort((function(e,t){return e.pageviews<t.pageviews?1:e.pageviews>t.pageviews?-1:0})).slice(0,3);C(t)};return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,fetch("data.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,O(n),J(n),B(Math.ceil(n.length/h)),a(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{children:"Authors List"}),n?Object(o.jsx)(d,{}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{inputFilterName:A,changeFilter:function(e){L(e.currentTarget.value);var t=e.currentTarget.value.toLowerCase();console.log(t);var n=i.filter((function(e){return e.name.toLowerCase().includes(t)}));console.log(n),m(n),B(Math.ceil(n.length/h))}}),Object(o.jsx)(x,{data:f||i,page:N,totalPages:M,topThreeAuthors:S}),Object(o.jsx)(b,{totalPages:M,itemsPerPage:h,page:N,totalItems:f?f.length:i.length,handleNextPageClick:function(e){e!==M&&T(e+=1)},handlePrevPageClick:function(e){1!==e&&T(e-=1)}})]})]})};var f=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(p,{})})};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={first:"Table_first__3CToh",second:"Table_second__i-oUB",third:"Table_third__2X436"}}},[[16,1,2]]]);
//# sourceMappingURL=main.6baf63de.chunk.js.map