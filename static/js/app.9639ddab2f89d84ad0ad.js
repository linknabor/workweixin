webpackJsonp([1],{"/Iee":function(t,e){},"4/7K":function(t,e){},"5OHe":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},r,!1,function(t){a("OS1m")},null,null).exports,o=a("/ocq"),n={name:"message",data:function(){return{data:"",showBadge:!1,params:{userId:this.$route.query.userId}}},methods:{toKefu:function(){this.$router.push({name:"kefu",query:{userId:this.params.userId}})}},mounted:function(){var t=this;this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/getNotLookOrder?userId="+this.params.userId,method:"get"}).then(function(e){0==e.data.success?(t.$refs.ppp.innerHTML=e.data.message,t.showBadge=!1):(t.data=e.data.result,t.showBadge=!0)}),console.log(this.userid)}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message",on:{click:t.toKefu}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:a("UqMK")}}),t._v(" "),s("mt-badge",{directives:[{name:"show",rawName:"v-show",value:t.showBadge,expression:"showBadge"}],staticClass:"badge",attrs:{size:"small",color:"#df0303"}},[t._v(t._s(t.data.count))])],1),t._v(" "),s("div",{staticClass:"middle"},[s("p",[t._v("报修订单")]),t._v(" "),s("p",{ref:"ppp",staticStyle:{"margin-top":"15px",color:"#919191","font-size":"10px"}},[t._v("有"+t._s(t.data.count)+"条最新的报修信息")])]),t._v(" "),s("div",{staticClass:"right"},[s("p",[t._v(t._s(t.data.date))])])])},staticRenderFns:[]};var d=a("VU/8")(n,c,!1,function(t){a("fl5G")},"data-v-7cb78970",null).exports,l=a("wSez"),u=a.n(l),p={data:function(){return{axiosParams:{userId:this.$route.query.userId},list:[],repairId:"",pageNum:1,allLoaded:!1,bottomText:"上拉加载更多",wrapperHeight:0}},methods:{toDingdan:function(t){this.$router.push({name:"dingdan",query:{repairId:t.repairId}})},getRepairlist:function(){var t=this;this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList?userId="+this.axiosParams.userId,method:"get"}).then(function(e){t.list=e.data.result.list})},getLook:function(){this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/updateIsLook?userId="+this.axiosParams.userId,method:"get"}).then(function(t){})},loadBottom:function(){var t=this;this.pageNum++,setTimeout(function(){t.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList?userId="+t.axiosParams.userId+"&pageNum="+t.pageNum,method:"get"}).then(function(e){var a=e.data.result;t.pageNum>a.pages?t.allLoaded=!0:t.list=t.list.concat(a.list)}),t.$refs.loadmore.onBottomLoaded()},1e3)},getDataform:function(){var t=this;this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderList?userId="+this.axiosParams.userId+"&pageNum=1",method:"get"}).then(function(e){t.list=e.data.result.list})},getScreenheight:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top}},mounted:function(){this.getRepairlist(),this.getLook(),this.getScreenheight()},created:function(){this.getDataform()}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{ref:"wrapper",staticClass:"kefu",style:{height:t.wrapperHeight+"px"}},[a("mt-loadmore",{ref:"loadmore",attrs:{"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"auto-fill":!1,bottomPullText:t.bottomText}},[a("ul",t._l(t.list,function(e,s){return a("li",{on:{click:function(a){t.toDingdan(e)}}},[a("span",{staticClass:"left"},[a("img",{attrs:{src:e.repairPepoleImg}})]),t._v(" "),a("span",{staticClass:"middle",staticStyle:{display:"block","margin-left":"76px",height:"100%"}},[a("p",{staticStyle:{float:"left","margin-top":"0","font-size":"18px",color:"#000","font-weight":"600",width:"100%","text-align":"left"}},[t._v(t._s(e.repairPepoleName))]),t._v(" "),a("p",{staticClass:"right"},[t._v(t._s(e.repairDate))]),t._v(" "),a("p",{staticClass:"where"},[a("i",{staticClass:"iconfont icon-location2"}),t._v(" "+t._s(e.repairAddress))])])])}))])],1)])},staticRenderFns:[]};var h=a("VU/8")(p,m,!1,function(t){a("/Iee")},"data-v-19cc6657",null).exports,A={data:function(){return{params:{repairId:this.$route.query.repairId,userId:this.$route.query.userId},data:"",imageUrl:[],overWork:!0}},methods:{over:function(){var t=this;this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/repairOrderSuccess?repairId="+this.params.repairId,method:"get"}).then(function(e){1==e.data.success?l.MessageBox.confirm("完工成功").then(function(e){t.overWork=!1}):0==e.data.success&&l.MessageBox.confirm("完工失败").then(function(e){t.overWork=!0})})},getRepairdetail:function(){var t=this;this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/getRepairOrderDetail?repairId="+this.params.repairId,method:"get"}).then(function(e){t.imageUrl=e.data.result.list,t.data=e.data.result.repairOrder,t.repairStatus=e.data.result.repairOrder.repairStatus,3==t.repairStatus&&(t.overWork=!1)})},updateDetail:function(){this.$axios({url:"https://test.e-shequ.com/msa/crm/repairOder/updateIsLookById?repairId="+this.params.repairId+"&userId="+this.params.userId,method:"get"}).then(function(t){})}},mounted:function(){this.getRepairdetail(),this.updateDetail()}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("ul",[a("li",[a("span",{staticStyle:{"letter-spacing":"3px"}},[t._v("报修类型 :")]),t._v(" "),0==t.data.repairType?a("span",{staticClass:"right"},[t._v("公共部位报修")]):t._e(),1==t.data.repairType?a("span",{staticClass:"right"},[t._v("私家部位报修")]):t._e()]),t._v(" "),a("li",[a("span",{staticStyle:{"letter-spacing":"3px"}},[t._v("报修地址 :")]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(t.data.repairAddress))])]),t._v(" "),a("li",[a("span",[t._v("报修人电话 :")]),t._v(" "),a("span",{staticClass:"right"},[t._v(t._s(t.data.repairPhone))])]),t._v(" "),t._m(0),t._v(" "),a("li",[a("span",{staticStyle:{"font-size":"14px",color:"#8e8e8e"}},[t._v(t._s(t.data.repairContent))])]),t._v(" "),t._l(t.imageUrl,function(t){return a("li",{staticStyle:{height:"130px",width:"33.3%","text-align":"center",float:"left","margin-top":"20px"}},[a("img",{staticStyle:{width:"90%",height:"130px"},attrs:{src:t.filePath}})])})],2),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.overWork,expression:"overWork"}],staticClass:"btn",attrs:{type:"button"},on:{click:t.over}},[t._v("完工")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("span",{staticStyle:{"letter-spacing":"3px"}},[this._v("报修内容 :")])])}]};var v=a("VU/8")(A,g,!1,function(t){a("4/7K")},"data-v-4c11cfdc",null).exports;s.default.use(o.a);var f=new o.a({routes:[{path:"/",name:"message",component:d,meta:{title:"消息中心"}},{path:"/kefu",name:"kefu",component:h,meta:{title:"报修订单"}},{path:"/dingdan",name:"dingdan",component:v,meta:{title:"订单详情"}}]});f.beforeEach(function(t,e,a){var s;s=(s=t.meta.title)||"企业微信",window.document.title=s,a()});var Q=f,I=(a("lf9d"),a("5OHe"),a("aozt")),R=a.n(I),x=a("9rMa");s.default.use(x.a);var U=new x.a.Store({state:{userid:""},mutations:{getUser:function(t,e){t.userid=e}},actions:{getUserinfo:function(t){var e=t.commit;R.a.get("https://test.e-shequ.com/msa/crm/oauth/getuser").then(function(t){e("getUser",t.data.userid)})}},getters:{userid:function(t){return t.userid}}});s.default.prototype.$axios=R.a,s.default.config.productionTip=!1,s.default.use(u.a),new s.default({el:"#app",router:Q,store:U,components:{App:i},template:"<App/>"})},OS1m:function(t,e){},UqMK:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMxaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0MCA3OS4xNjA0NTEsIDIwMTcvMDUvMDYtMDE6MDg6MjEgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyRjFEREJFQkEyQjExRTg4NkY5QjYxODk5RTc1QzQ2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyRjFEREJGQkEyQjExRTg4NkY5QjYxODk5RTc1QzQ2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjJGMUREQkNCQTJCMTFFODg2RjlCNjE4OTlFNzVDNDYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjJGMUREQkRCQTJCMTFFODg2RjlCNjE4OTlFNzVDNDYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQD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"},fl5G:function(t,e){},lf9d:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9639ddab2f89d84ad0ad.js.map