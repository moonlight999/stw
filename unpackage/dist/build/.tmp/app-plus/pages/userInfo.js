(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userInfo"],{"1cc4":function(t,e,a){"use strict";a.r(e);var n=a("5017"),s=a("a045");for(var o in s)"default"!==o&&function(t){a.d(e,t,function(){return s[t]})}(o);a("35d1");var u=a("2877"),i=Object(u["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},"27dd":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return a.e("components/uni-popup").then(a.bind(null,"5886"))},s=function(){return a.e("components/uni-nav-bar/uni-nav-bar").then(a.bind(null,"5505"))},o={components:{uniPopup:n,uniNavBar:s},data:function(){return{avatar:"",isOrganization:!1,userInfo:{},title:"会员信息",userId:null,userType:null,accountInfo:t.getStorageSync("accountInfo"),inputValue:{message:""},messageFlag:!1,followFlag:!1}},onLoad:function(t){this.userId=t.userId,this.userType=t.type,this.isOrganization=2!=t.type},onShow:function(){var e=this;this.isOrganization&&(this.title="组织信息"),t.apiRequest("/api/User/user_info",{data:{user_id:this.userId,type:this.userType},success:function(t){e.userInfo=t.data.result}})},methods:{inputState:function(t){this.inputValue[t.currentTarget.dataset.type]=t.detail.value},openPopup:function(){this.$refs.popup_leavingMessage.open()},closePopup:function(){this.$refs.popup_leavingMessage.close()},goBack:function(){t.navigateBack()},gotoFans:function(){t.navigateTo({url:"/pages/accountList?pageType=fans"})},edit:function(){t.navigateTo({url:"/pages/editData?type=".concat(this.userType)})},confirm:function(){var e=this;this.messageFlag||(this.messageFlag=!0,t.apiRequest("/api/User/leavingAdd",{data:{user_id:this.userId,type:this.userType,content:this.inputValue.message},success:function(a){t.showToast({title:a.data.msg,icon:200==a.data.code?"success":"none",success:function(t){e.closePopup(),e.messageFlag=!1}})}}))},follow:function(){var e=this;this.followFlag||(this.followFlag=!0,t.apiRequest("/api/Dynamic/follow",{data:{user_id:this.userId,type:this.userType,is_follow:Number(!this.userInfo.is_follow)},success:function(a){t.showToast({title:a.data.msg,icon:200==a.data.code?"success":"none",success:function(t){200==a.data.code&&(e.followFlag=!1,e.userInfo.is_follow=Number(!e.userInfo.is_follow))}})}}))},changeAvatar:function(){var e=this;t.chooseImage({count:1,success:function(a){t.uploadFile({url:t.requestUrl+"/files/image/upload",filePath:a.tempFiles[0].path,name:"image",complete:function(a){var n=JSON.parse(a.data);n.data.path=t.requestUrl+n.data.path,200==n.code&&t.apiRequest("/api/User/".concat(2==e.userType?"update_info":"update_organization"),{data:{logo:n.data.id},complete:function(a){t.showToast({title:a.data.msg,icon:200==a.data.code?"success":"none",duration:1200,success:function(t){200==a.data.code&&(e.avatar=n.data.path)}})}})}})}})}}};e.default=o}).call(this,a("6e42")["default"])},"35d1":function(t,e,a){"use strict";var n=a("596b"),s=a.n(n);s.a},5017:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.userInfo.nickname.substr(0,5));t.$mp.data=Object.assign({},{$root:{g0:a}})},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},"596b":function(t,e,a){},a045:function(t,e,a){"use strict";a.r(e);var n=a("27dd"),s=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=s.a},c35a:function(t,e,a){"use strict";(function(t){a("ae81"),a("921b");n(a("66fd"));var e=n(a("1cc4"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])}},[["c35a","common/runtime","common/vendor"]]]);