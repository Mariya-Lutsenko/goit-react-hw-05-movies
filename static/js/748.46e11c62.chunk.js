"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{748:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(689),i=r(791),o=r(447),p=r(623),f=r(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,a.Z)(t,2),u=r[0],h=r[1],v=(0,i.useState)(!1),d=(0,a.Z)(v,2),l=d[0],m=d[1],x=(0,i.useState)(null),w=(0,a.Z)(x,2),g=w[0],b=w[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,p.Hx)(e);case 4:r=t.sent,n=r.results,console.log(n),h(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),b(t.t0.massage);case 13:return t.prev=13,m(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),(0,f.jsxs)(f.Fragment,{children:[g&&(0,f.jsx)("p",{children:"Something goes wrong"}),l&&(0,f.jsx)(o.Z,{}),0!==u.length&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:u.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})}),0===u.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},623:function(e,t,r){r.d(t,{Hx:function(){return h},PQ:function(){return f},Y5:function(){return p},wr:function(){return i},yA:function(){return s},z1:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3bfeb78ba6df5af22a5c39d335985fa7",language:"en-US"}}),s="https://image.tmdb.org/t/p/w500",i=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(t){var r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=748.46e11c62.chunk.js.map