(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"0f7f":function(t,e,i){"use strict";i.r(e);var n=i("5d10"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4d6b":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSteps:i("bd27").default,uniCard:i("ab98").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"top"},[i("uni-steps",{attrs:{options:t.stepsOption,active:t.stepsActive}})],1),i("v-uni-view",{staticClass:"main"},[i("uni-card",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveImage(1)}}},[t.imgPositive?i("v-uni-image",{attrs:{mode:"scaleToFill",src:t.imgPositive}}):i("v-uni-text",[t._v("上传身份证(人像面)")])],1),i("uni-card",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.saveImage(2)}}},[t.imgNegative?i("v-uni-image",{attrs:{mode:"scaleToFill",src:t.imgNegative}}):i("v-uni-text",[t._v("上传身份证(国徽面)")])],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-button",{attrs:{type:"primary",plain:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toVideo.apply(void 0,arguments)}}},[t._v("下 一 步")])],1)],1)},o=[]},"5d10":function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{stepsOption:[{title:"上传身份证"},{title:"实人检测"},{title:"等待审核"}],stepsActive:0,imgPositive:void 0,imgNegative:void 0,base64url:void 0}},onLoad:function(){},methods:{saveImage:function(t){var e=this;uni.chooseImage({count:1,sizeType:["ompressed"],sourceType:["camera"],success:function(i){e.dealImage(i.tempFilePaths[0]),1===t?(e.imgPositive=i.tempFilePaths[0],console.log(i)):e.imgNegative=i.tempFilePaths[0]},fail:function(t){}})},dealImage:function(t,e){var i=new Image;i.src=t,i.onload=function(){var t=this,i=t.width,n=t.height,a=document.createElement("canvas"),o=a.getContext("2d");a.width=i,a.height=n,o.drawImage(t,0,0,i,n);var c=a.toDataURL("image/jpeg",.9),s=c.length,r=parseInt(s-s/8*2),u=(r/1024).toFixed(2);if(console.log(u),alert(u),u>=1024)return 1===e?this.imgPositive=void 0:this.imgNegative=void 0,void alert("图片大于1MB,请重新拍照")}},toVideo:function(){uni.navigateTo({url:"./videoRecording"})}}};e.default=n},b5b5:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".container[data-v-2c669098]{display:flex;flex-direction:column;padding-top:%?50?%}.container .top[data-v-2c669098]{text-align:center;height:%?100?%}.container .main[data-v-2c669098]{color:#fff}.container .main .uni-card--shadow[data-v-2c669098]{height:%?260?%;background-color:#1678ff}.container .main uni-text[data-v-2c669098]{text-align:center;font-size:13px;color:#fff;height:%?220?%;line-height:%?220?%}.container .main uni-image[data-v-2c669098]{height:%?220?%}.container .footer[data-v-2c669098]{padding:0 %?30?%}",""]),t.exports=e},bb00:function(t,e,i){"use strict";i.r(e);var n=i("4d6b"),a=i("0f7f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e6dd");var c,s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"2c669098",null,!1,n["a"],c);e["default"]=r.exports},e6dd:function(t,e,i){"use strict";var n=i("e83c"),a=i.n(n);a.a},e83c:function(t,e,i){var n=i("b5b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("507279b4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);