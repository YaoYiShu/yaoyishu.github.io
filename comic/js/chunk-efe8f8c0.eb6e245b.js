(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-efe8f8c0"],{"09d3":function(t,e,i){"use strict";i("c2e1")},"4de4":function(t,e,i){"use strict";var a=i("23e7"),o=i("b727").filter,s=i("1dde"),r=i("ae40"),n=s("filter"),c=r("filter");a({target:"Array",proto:!0,forced:!n||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8922:function(t,e,i){},c2e1:function(t,e,i){},c844:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"read",on:{click:function(e){e.stopPropagation(),t.toggle=!t.toggle,t.showOmit=!1},touchstart:function(e){return e.stopPropagation(),t.gtouchstart()},touchend:function(e){return e.stopPropagation(),t.gtouchend()}}},[i("div",{staticClass:"mk",staticStyle:{opacity:"0"}}),i("transition",{attrs:{name:"van-slide-down"}},[t.chapter[0]?i("ReadNav",{directives:[{name:"show",rawName:"v-show",value:t.toggle,expression:"toggle"}],attrs:{chapter_name:t.chapter[0].chapter_name,start:t.start,end_var:t.chapter[0].end_var},on:{toggleOmit:function(e){t.showOmit=!t.showOmit}}}):t._e()],1),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showOmit&&t.toggle,expression:"showOmit && toggle"}],staticClass:"omit"},[i("span",{staticClass:"triangle"}),i("ul",[i("li",{on:{click:function(e){e.stopPropagation(),t.$root.isHome=!0,t.$router.push("/")}}},[i("span",{staticClass:"iconfont icon-home"}),t._v("首页 ")]),t._m(0),t._m(1),t._m(2)])]),i("div",{ref:"imgOffsetHight"},t._l(t.chapterHighUrl,(function(e,a){return i("van-image",{key:a,attrs:{src:"https://mhpic.xiaomingtaiji.net/comic/"+e},scopedSlots:t._u([{key:"loading",fn:function(){return[i("div",{staticClass:"loading"})]},proxy:!0}],null,!0)})})),1),i("transition",{attrs:{name:"van-slide-up"}},[i("van-tabbar",{directives:[{name:"show",rawName:"v-show",value:this.chapter[0]&&t.toggle,expression:"this.chapter[0] && toggle"}],staticClass:"check",attrs:{"active-color":"#fff","inactive-color":"#999",border:!1},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("div",{staticClass:"progress"},[i("div",{staticClass:"left"},[i("van-icon",{attrs:{name:"arrow-left"}})],1),i("van-slider",{attrs:{min:"1","active-color":"#fc6454","inactive-color":"#999"},on:{change:t.onChange,click:function(e){return t.estop(e)}},scopedSlots:t._u([{key:"button",fn:function(){return[i("div",{staticClass:"custom-button"})]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t.chapter[0]?i("div",{staticClass:"right"},[i("span",[t._v(t._s(0==t.start?t.start+1:t.start)+"/"+t._s(t.chapter[0].end_var))]),i("van-icon",{attrs:{name:"arrow"}})],1):t._e()],1),i("div",{staticClass:"check"},[i("van-tabbar-item",{on:{click:function(e){e.stopPropagation(),t.toggle=t.toggle}}},[i("p",[i("span",{staticClass:"iconfont icon-shezhi"})]),i("span",[t._v("设置")])]),i("van-tabbar-item",{on:{click:function(e){e.stopPropagation(),t.flag=!t.flag,t.autoPLay()}}},[i("p",[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}],staticClass:"iconfont icon-play"}),i("span",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"iconfont icon-pause"})]),i("span",[t._v("自动")])]),i("van-tabbar-item",{on:{click:function(e){e.stopPropagation(),t.toggle=t.toggle}}},[i("p",[i("span",{staticClass:"iconfont icon-middle"})]),i("span",[t._v("画质")])]),i("van-tabbar-item",{on:{click:function(e){e.stopPropagation(),t.toggle=t.toggle}}},[i("p",[i("span",{staticClass:"iconfont icon-light"})]),i("span",[t._v("亮度")])]),i("van-tabbar-item",{on:{click:function(e){t.toggle=t.toggle,t.show=!t.show}}},[i("p",[i("span",{staticClass:"iconfont icon-mulu"})]),i("span",[t._v("目录")])])],1)])],1),i("van-popup",{staticClass:"menu",style:{width:"35%",height:"100%"},attrs:{position:"right"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("div",{staticClass:"top"},[i("p",[i("span",{staticClass:"iconfont icon-quanji"}),t._v("全集")]),i("p",[i("span",{staticClass:"iconfont icon-zhengxu"}),t._v("正序")])]),i("ul",{staticClass:"lists"},t._l(t.chapter_list,(function(e,a){return i("li",{key:a,class:{liActive:t.liActive==e.chapter_id},on:{click:function(i){i.stopPropagation(),t.liActive=t.chapter_list[a].chapter_id,t.toggleChapter(e.chapter_id)}}},[t._v(" "+t._s(e.chapter_name)+" "+t._s(e.chapter_title)+" ")])})),0),i("div",{staticClass:"bottom"},[i("p",[i("span",{staticClass:"iconfont icon-plus"}),t._v("添加")]),i("p",[i("span",{staticClass:"iconfont icon-shuqian"}),t._v("书签")])])])],1)},o=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",{staticClass:"iconfont icon-share"}),t._v("分享")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",{staticClass:"iconfont icon-feedback"}),t._v("反馈")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("span",{staticClass:"iconfont icon-help"}),t._v("帮助")])}],s=(i("4de4"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"read-nav"},[i("van-button",{on:{click:function(e){return t.$router.push({path:"/ComicDetails",query:{id:t.$route.query.id}})}}},[i("span",{staticClass:"iconfont icon-xiangzuofanhui"})]),i("span",[t._v(t._s(t.chapter_name)+" "),i("i",[t._v(t._s(0==t.start?t.start+1:t.start)+"/"+t._s(t.end_var))])]),i("van-icon",{attrs:{name:"ellipsis"},on:{click:function(e){return e.stopPropagation(),t.$emit("toggleOmit")}}})],1)}),r=[],n={props:["chapter_name","end_var","start"]},c=n,l=(i("09d3"),i("2877")),h=Object(l["a"])(c,s,r,!1,null,"bf7574e8",null),p=h.exports,u={components:{ReadNav:p},data:function(){return{active:0,liActive:this.$route.query.chapter_id,toggle:!0,i:0,value:1,scrollTop:null,flag:!1,show:!1,showOmit:!1,start:1,chapter_id:this.$route.query.chapter_id,comicChapterRecord:localStorage.comicChapterRecord?JSON.parse(localStorage.comicChapterRecord):[]}},mounted:function(){var t=this;this.$store.dispatch("getChapter_addr",this.$route.query.id),window.addEventListener("scroll",this.handleScroll,!0),this.timer2=setTimeout((function(){t.toggle=!1}),5e3)},activated:function(){this.$store.dispatch("getChapter_addr",this.$route.query.id)},computed:{chapter:{get:function(){var t=this;return this.$store.state.chapter.filter((function(e){return e.chapter_id==t.chapter_id}))},set:function(t){var e=this;console.log(t),this.chapter_id=t[0].chapter_id,this.$router.push({path:"/read",query:{id:this.$route.query.id,chapter_id:t[0].chapter_id}}),this.comicChapterRecord=this.comicChapterRecord.filter((function(t){return t.id!=e.$route.query.id})),this.comicChapterRecord.push({id:this.$route.query.id,chapter_id:t[0].chapter_id,chapter_name:t[0].chapter_name}),localStorage.comicChapterRecord=JSON.stringify(this.comicChapterRecord),this.$router.go(0)}},chapter_list:function(){return this.$store.state.chapter},chapterHighUrl:function(){var t,e=[];if(this.chapter[0])for(var i=1;i<=this.chapter[0].end_var;i++)t=this.chapter[0].chapter_addr+i+".jpg-zymk.high.webp",e.push(t);return e},chapterMiddleUrl:function(){var t,e=[];if(this.chapter[0])for(var i=1;i<=this.chapter[0].end_var;i++)t=this.chapter[0].chapter_addr+i+".jpg-zymk.middle.webp",e.push(t);return e},chapterLowUrl:function(){var t,e=[];if(this.chapter[0])for(var i=1;i<=this.chapter[0].end_var;i++)t=this.chapter[0].chapter_addr+i+".jpg-zymk.low.webp",e.push(t);return e}},methods:{text:function(){console.log(1)},handleScroll:function(){this.scrollTop=window.scrollY||window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var t=this.scrollTop-this.i;this.i=this.scrollTop,t<0?this.toggle=!0:t>0&&0==this.flag&&(this.toggle=!1)},autoPLay:function(){var t=this;this.timer2&&clearTimeout(this.timer2),this.flag?this.scrollTop<this.$refs.imgOffsetHight.offsetHeight&&(this.timer=setInterval((function(){t.scrollTop=t.scrollTop+1,document.body.scrollTo({top:t.scrollTop,behavior:"smooth"})}),50)):clearInterval(this.timer),this.timer2=setTimeout((function(){t.toggle=!1}),5e3)},gtouchstart:function(){var t=this;this.timer2&&clearTimeout(this.timer2),this.flag&&clearInterval(this.timer),this.timer2=setTimeout((function(){t.toggle=!1,t.showOmit=!1}),5e3)},gtouchend:function(){var t=this;this.flag&&(this.timer=setInterval((function(){t.scrollTop=t.scrollTop+1,document.body.scrollTo({top:t.scrollTop,behavior:"smooth"})}),50))},onChange:function(t){if(t>0){this.start=parseInt(t/100*this.chapter[0].end_var);var e=t/100*this.$refs.imgOffsetHight.offsetHeight;document.body.scrollTo({top:e,behavior:"smooth"})}},toggleChapter:function(t){this.chapter=this.$store.state.chapter.filter((function(e){return e.chapter_id==t}))}}},d=u,f=(i("db6c"),Object(l["a"])(d,a,o,!1,null,"abc3fc82",null));e["default"]=f.exports},db6c:function(t,e,i){"use strict";i("8922")}}]);
//# sourceMappingURL=chunk-efe8f8c0.eb6e245b.js.map