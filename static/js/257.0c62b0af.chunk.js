"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{774:function(e,r,t){t.d(r,{Ai:function(){return u},Hx:function(){return v},Ny:function(){return s},Y5:function(){return p},xc:function(){return d}});var n=t(861),c=t(757),a=t.n(c),o=t(340),i="e926cdb4dd272fa0b0f6dba82218461b",s=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching data:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"e926cdb4dd272fa0b0f6dba82218461b",e.prev=1,e.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("e926cdb4dd272fa0b0f6dba82218461b","&query=").concat(r));case 4:return t=e.sent,e.abrupt("return",t.data.results||[]);case 8:e.prev=8,e.t0=e.catch(1),console.error("Error fetching data:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(i));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(r){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(i));case 3:return t=e.sent,n=t.data.results,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(r){return e.apply(this,arguments)}}()},257:function(e,r,t){t.r(r);var n=t(861),c=t(439),a=t(757),o=t.n(a),i=t(791),s=t(689),u=t(87),p=t(774),d=t(184);r.default=function(){var e,r,t=(0,s.UO)().movieId,a=(0,i.useState)(null),v=(0,c.Z)(a,2),h=v[0],f=v[1],l=(0,s.TH)(),m=(0,i.useRef)(l);return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Y5)(t);case 3:r=e.sent,f(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),h?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{children:(0,d.jsx)(u.rU,{to:null!==(e=null===(r=m.current.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/",children:(0,d.jsx)("b",{children:"Back to home"})})}),h.backdrop_path&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h.backdrop_path),alt:h.title}),(0,d.jsx)("p",{children:h.overview}),(0,d.jsx)("p",{children:h.genres.name}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"cast",children:"Credits"})}),(0,d.jsx)("li",{children:(0,d.jsx)(u.OL,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(s.j3,{})]}):(0,d.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=257.0c62b0af.chunk.js.map