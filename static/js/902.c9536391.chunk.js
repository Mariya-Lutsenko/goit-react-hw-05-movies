"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[902],{15:function(e,t,n){n.d(t,{Z:function(){return c}});var r="MoviesEditorList_movielink__feLcb",o="MoviesEditorList_link__aa2WZ",a=n(87),i=n(689),s=n(184),c=function(e){var t=e.movies,n=(0,i.TH)();return(0,s.jsx)("ul",{children:t&&t.map((function(e){var t=e.id,i=e.title;return(0,s.jsx)("li",{className:r,children:(0,s.jsx)(a.rU,{className:o,to:"/movies/".concat(t),state:{from:n},children:i})},t)}))})}},902:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(861),o=n(439),a=n(757),i=n.n(a),s=n(791),c=n(87);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},h=["theme","type"],g=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},T=function(e){return b(e)||E(e)?e:null},_=function(e){return(0,s.isValidElement)(e)||b(e)||E(e)||y(e)};function O(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,h=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),s.createElement(s.Fragment,null,r)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},x=function(e){var t=e.theme,n=e.type,r=d(e,h);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},I={info:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(x,f({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function L(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,m=function(e){return-1!==i.indexOf(e)},v=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function O(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=v.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var r=t.delay,o=t.staleId,a=d(t,g);if(_(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,p=a.data,m=v.props,h=function(){return O(i)},L=null==c;L&&v.count++;var k,R,S=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:i,updateId:c,data:p,closeToast:h,isIn:!1,className:T(a.className||m.toastClassName),bodyClassName:T(a.bodyClassName||m.bodyClassName),progressClassName:T(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(k=a.autoClose,R=m.autoClose,!1===k||y(k)&&k>0?k:R),deleteToast:function(){var e=C(l.get(i),"removed");l.delete(i),w.emit(4,e);var t=v.queue.length;if(v.count=null==i?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==i?v.props.limit:1;if(1===t||1===r)v.displayedToast++,x();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}});S.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(E(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):b(o)||y(o)?a=o:r?a=I.spinner():function(e){return e in I}(n)&&(a=I[n](i))),a}(S),E(a.onOpen)&&(S.onOpen=a.onOpen),E(a.onClose)&&(S.onClose=a.onClose),S.closeButton=m.closeButton,!1===a.closeButton||_(a.closeButton)?S.closeButton=a.closeButton:!0===a.closeButton&&(S.closeButton=!_(m.closeButton)||m.closeButton);var P=e;(0,s.isValidElement)(e)&&!b(e.type)?P=(0,s.cloneElement)(e,{closeToast:h,toastProps:S,data:p}):E(e)&&(P=e({closeToast:h,toastProps:S,data:p})),m.limit&&m.limit>0&&v.count>m.limit&&L?v.queue.push({toastContent:P,toastProps:S,staleId:o}):y(r)?setTimeout((function(){N(P,S,o)}),r):N(P,S,o)}}function N(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),w.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return v.containerId=e.containerId,w.cancelEmit(3).on(0,L).on(1,(function(e){return u.current&&O(e)})).on(5,h).emit(2,v),function(){l.clear(),w.emit(3,v)}}),[]),(0,s.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",w),document.addEventListener("touchmove",C),document.addEventListener("touchend",w);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=N(t.nativeEvent),d.y=k(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?O():_()}}function _(){a(!0)}function O(){a(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&O(),d.x=N(t),d.y=k(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function w(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",w);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",_,{once:!0}),E(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",_),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",_),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(x.onMouseEnter=O,x.onMouseLeave=_),y&&(x.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:_,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:x}}function S(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function P(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,i=e.hide,c=e.className,l=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,h=e.isIn,g=e.theme,y=i||d&&0===p,b=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var T=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),_=E(c)?c({rtl:m,type:a,defaultClassName:T}):v(T,c);return s.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:_,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){h&&r()}))}var j=function(e){var t=R(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,h=e.transition,g=e.position,y=e.className,b=e.style,T=e.bodyClassName,_=e.bodyStyle,O=e.progressClassName,C=e.progressStyle,w=e.updateId,x=e.role,I=e.progress,L=e.rtl,N=e.toastId,k=e.deleteToast,j=e.isIn,M=e.isLoading,D=e.iconOut,A=e.closeOnClick,Z=e.theme,B=v("Toastify__toast","Toastify__toast-theme--".concat(Z),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":A}),z=E(y)?y({rtl:L,position:g,type:d,defaultClassName:B}):v(B,y),F=!!I||!u,q={closeToast:m,type:d,theme:Z},H=null;return!1===i||(H=E(i)?i(q):(0,s.isValidElement)(i)?(0,s.cloneElement)(i,q):S(q)),s.createElement(h,{isIn:j,done:k,position:g,preventExitTransition:r,nodeRef:o},s.createElement("div",f(f({id:N,onClick:l,className:z},a),{},{style:b,ref:o}),s.createElement("div",f(f({},j&&{role:x}),{},{className:E(T)?T({type:d}):v("Toastify__toast-body",T),style:_}),null!=D&&s.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),s.createElement("div",null,c)),H,s.createElement(P,f(f({},w&&!F?{key:"pb-".concat(w)}:{}),{},{rtl:L,theme:Z,delay:u,isRunning:n,isIn:j,closeToast:m,hide:p,type:d,style:C,className:O,controlledProgress:F,progress:I||0}))))},M=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=O(M("bounce",!0)),A=(O(M("slide",!0)),O(M("zoom")),O(M("flip")),(0,s.forwardRef)((function(e,t){var n=L(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,u=e.rtl,l=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return E(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,T(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(j,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:S,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Z,B=new Map,z=[],F=1;function q(){return""+F++}function H(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:q()}function Q(e,t){return B.size>0?w.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function U(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:H(t)})}function V(e){return function(t,n){return Q(t,U(e,n))}}function W(e,t){return Q(e,U("default",t))}W.loading=function(e,t){return Q(e,U("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=b(o)?W.loading(o,n):W.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=b(t)?{render:t}:t;return r?W.update(r,f(f({},a),i)):W(i.render,f(f({},a),i)),o}W.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=V("success"),W.info=V("info"),W.error=V("error"),W.warning=V("warning"),W.warn=W.warning,W.dark=function(e,t){return Q(e,U("default",f({theme:"dark"},t)))},W.dismiss=function(e){B.size>0?w.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},W.isActive=function(e){var t=!1;return B.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=B.get(n||Z);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({},r),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,Q(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){Z=e.containerId||e,B.set(Z,e),z.forEach((function(e){w.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){B.delete(e.containerId||e),0===B.size&&w.off(0).off(1).off(5)}));var X=n(15),Y=n(623),G="Searchbar_searchbar__0FWoU",K="Searchbar_searchForm__Bt5yh",J="Searchbar_SearchForm__button__AL7uQ",$="Searchbar_SearchForm__button__label__ATtVM",ee="Searchbar_SearchForm__input__zcAHX",te=n(184),ne=function(e){var t=e.onSubmit,n=(0,s.useState)(""),r=(0,o.Z)(n,2),a=r[0],i=r[1];return(0,te.jsx)("div",{className:G,children:(0,te.jsxs)("form",{className:K,onSubmit:function(e){e.preventDefault(),t(a),i("")},children:[(0,te.jsx)("input",{className:ee,onChange:function(e){var t=e.target;i(t.value)},name:"query",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:a}),(0,te.jsx)("button",{type:"submit",className:J,children:(0,te.jsx)("span",{className:$,children:"Search"})})]})})},re=n(447),oe=function(){var e=(0,s.useState)([]),t=(0,o.Z)(e,2),n=t[0],a=t[1],u=(0,s.useState)(null),l=(0,o.Z)(u,2),f=l[0],d=l[1],p=(0,s.useState)(!1),m=(0,o.Z)(p,2),v=m[0],h=m[1],g=(0,c.lr)(),y=(0,o.Z)(g,2),b=y[0],E=y[1],T=b.get("query");(0,s.useEffect)((function(){if(T){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,Y.z1)(T);case 4:t=e.sent,0===(n=t.results).length&&W.error("There are no movies matching your request."),a(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),d(e.t0.massage);case 13:return e.prev=13,h(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[T]);return(0,te.jsxs)("div",{children:[(0,te.jsx)(ne,{onSubmit:function(e){""===e.trim()&&W.error("Enter a search term."),a([]),E({query:e})}}),(0,te.jsx)(A,{position:"top-right",autoClose:3e3}),v&&(0,te.jsx)(re.Z,{}),n&&(0,te.jsx)(X.Z,{movies:n}),f&&(0,te.jsx)("p",{children:"Something goes wrong"})]})}},623:function(e,t,n){n.d(t,{Hx:function(){return d},PQ:function(){return f},Y5:function(){return l},wr:function(){return c},yA:function(){return s},z1:function(){return u}});var r=n(861),o=n(757),a=n.n(o),i=n(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3bfeb78ba6df5af22a5c39d335985fa7",language:"en-US"}}),s="https://image.tmdb.org/t/p/w500",c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie",{params:{page:1,include_adult:!1,query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=902.c9536391.chunk.js.map