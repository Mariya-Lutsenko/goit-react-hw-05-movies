"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),i=n(757),s=n.n(i),c={button:"MovieDetailsPage_button__mSHH6",title:"MovieDetailsPage_title__63V3V",link:"MovieDetailsPage_link__rhdjc",active:"MovieDetailsPage_active__52Wu-",notFound:"MovieDetailsPage_notFound__bS-BD",container:"MovieDetailsPage_container__fntPy",movieDetalis:"MovieDetailsPage_movieDetalis__QesEx",list:"MovieDetailsPage_list__xeLC8",itemLink:"MovieDetailsPage_itemLink__iJBZT"},o=n(447),u=n(791),l=n(87),d=n(689),v=n(623),p=n(692),h=n(983),f=n(184),m=function(){var e,t=(0,u.useState)(null),n=(0,a.Z)(t,2),i=n[0],m=n[1],x=(0,d.UO)().movieId,_=(0,u.useState)(!1),g=(0,a.Z)(_,2),j=g[0],w=g[1],b=(0,u.useState)(null),k=(0,a.Z)(b,2),y=k[0],D=k[1],P=(0,d.TH)(),Z=(0,d.s0)(),N=(null===(e=P.state)||void 0===e?void 0:e.from)||"movies";(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,(0,v.Y5)(x);case 4:t=e.sent,m(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),D(e.t0.massage);case 11:return e.prev=11,w(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);return(0,f.jsxs)(f.Fragment,{children:[y&&(0,f.jsx)("p",{children:"Something goes wrong"}),j&&(0,f.jsx)(o.Z,{}),i?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("button",{className:c.button,type:"button",onClick:function(){Z(N)},children:[(0,f.jsx)(h.Pd.Provider,{value:{color:"white",size:22,className:"global-class-name"},children:(0,f.jsx)("div",{children:(0,f.jsx)(p.UX4,{})})}),(0,f.jsx)("span",{children:"Go back"})]}),(0,f.jsxs)("div",{className:c.container,children:[(0,f.jsxs)("div",{className:c.movieDetalis,children:[(0,f.jsx)("div",{className:c.movieImg,children:(0,f.jsx)("img",{src:i.poster_path?v.yA+i.poster_path:"https://bitsofco.de/content/images/2018/12/broken-1.png",alt:i.original_title,widht:"300px"})}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h2",{className:c.title,children:i.title}),(0,f.jsxs)("p",{children:["User Score: ","".concat(i.vote_average.toFixed(1))]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:"".concat(i.overview)}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:"".concat(i.genres.map((function(e){return e.name})).join(" / "))})]})]}),(0,f.jsx)("hr",{}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{className:c.list,children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{className:c.itemLink,to:"cast",state:{from:N},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{className:c.itemLink,to:"reviews",state:{from:N},children:"Reviews"})})]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)(d.j3,{})]})]}):(0,f.jsx)("div",{className:c.notFound,children:"This movie is not found"})]})}},623:function(e,t,n){n.d(t,{Hx:function(){return v},PQ:function(){return d},Y5:function(){return l},wr:function(){return o},yA:function(){return c},z1:function(){return u}});var r=n(861),a=n(757),i=n.n(a),s=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3bfeb78ba6df5af22a5c39d335985fa7",language:"en-US"}}),c="https://image.tmdb.org/t/p/w500",o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.1a2c57ac.chunk.js.map