"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[550],{550:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),s=n(757),c=n.n(s),u=n(791),i=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3bfeb78ba6df5af22a5c39d335985fa7",language:"en-US"}}),o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=n(87),l=n(689),p=n(184),h=function(e){var t=e.movies,n=(0,l.TH)();return(0,p.jsx)("ul",{children:t&&t.map((function(e){var t=e.id,r=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(f.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})},d=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,u.useState)(null),f=(0,a.Z)(i,2),l=f[0],d=f[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o();case 3:t=e.sent,n=t.results,s(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(n),(0,p.jsxs)("main",{children:[(0,p.jsx)("h1",{children:"Tranding today"}),n&&(0,p.jsx)(h,{movies:n}),l&&(0,p.jsx)("p",{children:"Something goes wrong"})]})}}}]);
//# sourceMappingURL=550.e04c15c3.chunk.js.map