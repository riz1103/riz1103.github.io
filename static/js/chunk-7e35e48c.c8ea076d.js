(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e35e48c"],{"1a9a":function(e,t,n){},"33d0":function(e,t,n){"use strict";var i=n("1a9a"),a=n.n(i);a.a},"3fae":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return c}));var i=n("b775");function a(e){return Object(i["a"])({url:"changenotice/post-changenotice",method:"post",data:e})}function o(e){return Object(i["a"])({url:"changenotice/post-changenotice-review?cid="+e.cid+"&isAgree="+e.isAgree,method:"post"})}function r(e){return Object(i["a"])({url:"changenotice/post-changenotice-approval?cnid="+e.cid+"&isAgree="+e.isAgree,method:"post"})}function c(e){return Object(i["a"])({url:"changenotice/get-changenotice",method:"post",filter:e})}},bdc0:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("b-card",{staticClass:"overflow",attrs:{title:"Change Notice List"}},[n("b-table",{staticClass:"overflow",attrs:{items:e.CNLists,fields:e.fields},scopedSlots:e._u([{key:"cell(isapprove)",fn:function(t){return[1==t.item.isapprove?n("div",[n("svg-icon",{attrs:{"icon-class":"check"}}),e._v(" Approved\r\n                ")],1):e._e(),e._v(" "),null==t.item.isapprove?n("div",[n("svg-icon",{attrs:{"icon-class":"pending"}}),e._v(" Ongoing\r\n                ")],1):e._e(),e._v(" "),0==t.item.isapprove?n("div",[n("svg-icon",{attrs:{"icon-class":"error"}}),e._v(" Denied\r\n                ")],1):e._e()]}}])})],1)],1)},a=[],o=(n("5c96"),n("3fae")),r={data:function(){return{CNLists:[],CNFilter:{isapprove:null,brancode:null},loading:!1,fields:[{key:"deptname",label:"Department"},{key:"description",label:"Description"},{key:"objective",label:"Objective"},{key:"nature",label:"Nature"},{key:"initiatorname",label:"Initiator"},{key:"approvername",label:"Approver"},{key:"createdate",label:"Date"},{key:"isapprove",label:"Status"}]}},methods:{getCNLists:function(){var e=this;e.loading=!0,Object(o["a"])(this.CNFilter).then((function(t){e.CNLists=t.data,e.loading=!1})).catch((function(t){e.$message({showClose:!0,message:"Unable to get Change Notice Lists!("+t+")",type:"error"})}))}},created:function(){this.getCNLists()}},c=r,s=(n("33d0"),n("2877")),l=Object(s["a"])(c,i,a,!1,null,"7dc5eedb",null);t["default"]=l.exports}}]);