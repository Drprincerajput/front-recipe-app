(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{214:function(e,t,r){e.exports=r.p+"img/placeholder.9a6b7b1.png"},218:function(e,t,r){"use strict";r.r(t);r(35);var n=r(14),o={head:function(){return{title:"Add Recipe"}},data:function(){return{recipe:{name:"",picture:"",ingredients:"",difficulty:"",prep_time:null,prep_guide:""},preview:""}},methods:{onFileChange:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.recipe.picture=t[0],this.createImage(t[0]))},createImage:function(e){var t=new FileReader,r=this;t.onload=function(e){r.preview=e.target.result},t.readAsDataURL(e)},submitRecipe:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(data in r={headers:{"content-type":"multipart/form-data"}},n=new FormData,e.recipe)n.append(data,e.recipe[data]);return t.prev=3,t.next=6,e.$axios.$post("/recipes/",n,r);case 6:t.sent,e.$router.push("/recipes/"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()}}},c=r(41),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"container my-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 text-center my-3"},[n("h2",{staticClass:"mb-3 display-4 text-uppercase"},[e._v(e._s(e.recipe.name))])]),e._v(" "),n("div",{staticClass:"col-md-6 mb-4"},[e.preview?n("img",{staticClass:"img-fluid",staticStyle:{width:"400px","border-radius":"10px","box-shadow":"0 1rem 1rem rgba(0,0,0,.7)"},attrs:{src:e.preview,alt:""}}):n("img",{staticClass:"img-fluid",staticStyle:{width:"400px","border-radius":"10px","box-shadow":"0 1rem 1rem rgba(0,0,0,.7)"},attrs:{src:r(214)}})]),e._v(" "),n("div",{staticClass:"col-md-4"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.submitRecipe(t)}}},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Recipe Name")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.name,expression:"recipe.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.name},on:{input:function(t){t.target.composing||e.$set(e.recipe,"name",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Ingredients")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.ingredients,expression:"recipe.ingredients"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.recipe.ingredients},on:{input:function(t){t.target.composing||e.$set(e.recipe,"ingredients",t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Food picture")]),e._v(" "),n("input",{attrs:{type:"file",name:"file"},on:{change:e.onFileChange}})]),e._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:""}},[e._v("Difficulty")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.recipe.difficulty,expression:"recipe.difficulty"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.recipe,"difficulty",t.target.multiple?r:r[0])}}},[n("option",{attrs:{value:"Easy"}},[e._v("Easy")]),e._v(" "),n("option",{attrs:{value:"Medium"}},[e._v("Medium")]),e._v(" "),n("option",{attrs:{value:"Hard"}},[e._v("Hard")])])])]),e._v(" "),n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"form-group"},[e._m(0),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_time,expression:"recipe.prep_time"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.recipe.prep_time},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_time",t.target.value)}}})])])]),e._v(" "),n("div",{staticClass:"form-group mb-3"},[n("label",{attrs:{for:""}},[e._v("Preparation guide")]),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.recipe.prep_guide,expression:"recipe.prep_guide"}],staticClass:"form-control",attrs:{rows:"8"},domProps:{value:e.recipe.prep_guide},on:{input:function(t){t.target.composing||e.$set(e.recipe,"prep_guide",t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{attrs:{for:""}},[this._v("\n                Prep time\n                "),t("small",[this._v("(minutes)")])])}],!1,null,"4359bb8f",null);t.default=component.exports}}]);