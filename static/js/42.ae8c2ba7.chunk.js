"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{42:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(861),a=t(439),s=t(757),u=t.n(s),c="MovieDetailsPage_button__mSHH6",i="MovieDetailsPage_movieContainer__eXMkA",o="MovieDetailsPage_notFound__bS-BD",f=t(421),l=t(791),p=t(689),v=t(623),d=t(692),h=t(983),m=t(184),x=function(){var e,n=(0,l.useState)(null),t=(0,a.Z)(n,2),s=t[0],x=t[1],g=(0,p.UO)().movieId,b=(0,l.useState)(!1),k=(0,a.Z)(b,2),w=k[0],_=k[1],j=(0,l.useState)(null),Z=(0,a.Z)(j,2),y=Z[0],S=Z[1],P=(0,p.TH)(),C=(0,p.s0)(),D=(null===(e=P.state)||void 0===e?void 0:e.from)||"movies";(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,v.Y5)(g);case 4:n=e.sent,x(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),S(e.t0.massage);case 11:return e.prev=11,_(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]);return(0,m.jsxs)(m.Fragment,{children:[s?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("button",{className:c,type:"button",onClick:function(){C(D)},children:[(0,m.jsx)(h.Pd.Provider,{value:{color:"white",size:22,className:"global-class-name"},children:(0,m.jsx)("div",{children:(0,m.jsx)(d.UX4,{})})}),(0,m.jsx)("span",{children:"Go back"})]}),(0,m.jsx)("div",{className:i})]}):(0,m.jsx)("div",{className:o,children:"This movie is not found"}),y&&(0,m.jsx)("p",{children:"Something goes wrong"}),w&&(0,m.jsx)(f.Z,{})]})}},623:function(e,n,t){t.d(n,{Y5:function(){return o},wr:function(){return c},z1:function(){return i}});var r=t(861),a=t(757),s=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3bfeb78ba6df5af22a5c39d335985fa7",language:"en-US"}}),c=function(){var e=(0,r.Z)(s().mark((function e(){var n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("search/movie",{params:{page:1,include_adult:!1,query:n}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.ae8c2ba7.chunk.js.map