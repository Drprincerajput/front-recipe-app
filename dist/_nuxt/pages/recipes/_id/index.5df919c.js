(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{219:function(e,t,r){"use strict";r.r(t);r(35);var n=r(14),c={head:function(){return{title:"View Recipe"}},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,t.prev=1,t.next=4,r.$get("/recipes/".concat(n.id));case 4:return c=t.sent,t.abrupt("return",{recipe:c});case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",{recipe:[]});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},data:function(){return{recipe:{name:"",picture:"",ingredients:"",difficulty:"",prep_time:null,prep_guide:""}}}},l=r(41),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"container my-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center my-3"},[r("h2",{staticClass:"mb-3 display-4 text-uppercase"},[e._v(e._s(e.recipe.name))])]),e._v(" "),r("div",{staticClass:"col-md-6 mb-4"},[r("img",{staticClass:"img-fluid",staticStyle:{width:"400px","border-radius":"10px","box-shadow":"0 1rem 1rem rgba(0,0,0,.7)"},attrs:{src:e.recipe.picture,alt:""}})]),e._v(" "),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"recipe-details"},[r("h4",[e._v("Ingredients")]),e._v(" "),r("p",[e._v(e._s(e.recipe.ingredients))]),e._v(" "),r("h4",[e._v("Preparation time ⏱")]),e._v(" "),r("p",[e._v(e._s(e.recipe.prep_time)+" mins")]),e._v(" "),r("h4",[e._v("Difficulty")]),e._v(" "),r("p",[e._v(e._s(e.recipe.difficulty))]),e._v(" "),r("h4",[e._v("Preparation guide")]),e._v(" "),r("textarea",{staticClass:"form-control",attrs:{rows:"10",disabled:""},domProps:{innerHTML:e._s(e.recipe.prep_guide)}})])])])])}),[],!1,null,null,null);t.default=component.exports}}]);