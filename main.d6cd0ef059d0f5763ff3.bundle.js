webpackJsonp([2],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";function t(l){return v._38(0,[(l()(),v._18(0,null,null,1,"p",[],null,null,null,null,null)),(l()(),v._36(null,["\n    Online chat may refer to any kind of communication over the Internet that offers a real-time transmission of text messages from sender to receiver. Chat messages are generally short in order to enable other participants to respond quickly. Thereby, a feeling similar to a spoken conversation is created, which distinguishes chatting from other text-based online communication forms such as Internet forums and email. Online chat may address point-to-point communications as well as multicast communications from one sender to many receivers . Online chat in a less stringent definition may be primarily any direct text-based, one-on-one chat or one-to-many group chat (formally also known as synchronous conferencing)\n"])),(l()(),v._36(null,["\n\n"]))],null,null)}function e(l){return v._38(0,[(l()(),v._18(0,null,null,1,"app-about",[],null,null,null,t,x)),v._16(114688,null,0,k,[],null,null)],function(l,n){l(n,1,0)},null)}function o(l){return w._38(0,[(l()(),w._18(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),w._18(0,null,null,0,"img",[["height","200"],["width","200"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,1,0,w._21(1,"",n.context.$implicit.url,""))})}function i(l){return w._38(0,[(l()(),w._18(0,null,null,7,"div",[["id","list_div"]],null,null,null,null,null)),(l()(),w._36(null,["\n    "])),(l()(),w._18(0,null,null,4,"ul",[["id","list"]],null,null,null,null,null)),(l()(),w._36(null,["\n      "])),(l()(),w._12(16777216,null,null,1,null,o)),w._16(802816,null,0,j.j,[w._0,w.X,w.z],{ngForOf:[0,"ngForOf"]},null),(l()(),w._36(null,["\n    "])),(l()(),w._36(null,["\n  "])),(l()(),w._36(null,["\n"]))],function(l,n){l(n,5,0,n.component.image)},null)}function r(l){return w._38(0,[(l()(),w._18(0,null,null,1,"app-gallery",[],null,null,null,i,M)),w._16(49152,null,0,O,[],null,null)],null,null)}function a(l){return F._38(0,[(l()(),F._18(0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.login()&&t}return t},null,null)),(l()(),F._36(null,["Anonymous Login"]))],null,null)}function _(l){return F._38(0,[(l()(),F._18(0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.logout()&&t}return t},null,null)),(l()(),F._36(null,["Logout"]))],null,null)}function c(l){return F._38(0,[(l()(),F._18(0,null,null,5,"input",[["id","message"],["placeholder","Start Chatting Here!"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==F._32(l,1)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==F._32(l,1).onTouched()&&t}if("compositionstart"===n){t=!1!==F._32(l,1)._compositionStart()&&t}if("compositionend"===n){t=!1!==F._32(l,1)._compositionEnd(u.target.value)&&t}if("keyup.enter"===n){t=!1!==e.Send(u.target.value)&&t}if("ngModelChange"===n){t=!1!==(e.msgVal=u)&&t}return t},null,null)),F._16(16384,null,0,G.b,[F.O,F.o,[2,G.a]],null,null),F._34(1024,null,G.d,function(l){return[l]},[G.b]),F._16(671744,null,0,G.g,[[8,null],[8,null],[8,null],[2,G.d]],{model:[0,"model"]},{update:"ngModelChange"}),F._34(2048,null,G.e,null,[G.g]),F._16(16384,null,0,G.f,[G.e],null,null)],function(l,n){l(n,3,0,n.component.msgVal)},function(l,n){l(n,0,0,F._32(n,5).ngClassUntouched,F._32(n,5).ngClassTouched,F._32(n,5).ngClassPristine,F._32(n,5).ngClassDirty,F._32(n,5).ngClassValid,F._32(n,5).ngClassInvalid,F._32(n,5).ngClassPending)})}function s(l){return F._38(0,[(l()(),F._18(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),F._36(null,["",""])),(l()(),F._18(0,null,null,0,"br",[],null,null,null,null,null))],null,function(l,n){l(n,1,0,n.context.$implicit.message)})}function f(l){return F._38(0,[(l()(),F._36(null,["\n"])),(l()(),F._18(0,null,null,22,"div",[["class","row columns"]],null,null,null,null,null)),(l()(),F._36(null,["\n    "])),(l()(),F._12(16777216,null,null,2,null,a)),F._16(16384,null,0,H.k,[F._0,F.X],{ngIf:[0,"ngIf"]},null),F._33(131072,H.b,[F.i]),(l()(),F._36(null,["\n    "])),(l()(),F._12(16777216,null,null,2,null,_)),F._16(16384,null,0,H.k,[F._0,F.X],{ngIf:[0,"ngIf"]},null),F._33(131072,H.b,[F.i]),(l()(),F._36(null,["\n  \n    "])),(l()(),F._12(16777216,null,null,2,null,c)),F._16(16384,null,0,H.k,[F._0,F.X],{ngIf:[0,"ngIf"]},null),F._33(131072,H.b,[F.i]),(l()(),F._36(null,["\n    "])),(l()(),F._18(0,null,null,7,"div",[["id","details-container"]],null,null,null,null,null)),(l()(),F._36(null,["\n        "])),(l()(),F._12(16777216,null,null,2,null,s)),F._16(802816,null,0,H.j,[F._0,F.X,F.z],{ngForOf:[0,"ngForOf"]},null),F._33(131072,H.b,[F.i]),(l()(),F._36(null,["\n        "])),(l()(),F._18(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),F._36(null,["\n    "])),(l()(),F._36(null,["\n  "]))],function(l,n){var u=n.component,t=null;l(n,4,0,!(null==(t=F._37(n,4,0,F._32(n,5).transform(u.user)))?null:t.uid));var e=null;l(n,8,0,null==(e=F._37(n,8,0,F._32(n,9).transform(u.user)))?null:e.uid);var o=null;l(n,12,0,null==(o=F._37(n,12,0,F._32(n,13).transform(u.user)))?null:o.uid),l(n,18,0,F._37(n,18,0,F._32(n,19).transform(u.items)))},null)}function g(l){return F._38(0,[(l()(),F._18(0,null,null,1,"app-start-chatting",[],null,null,null,f,E)),F._16(49152,null,0,B,[V.a,z.a],null,null)],null,null)}function d(l){return X._38(0,[(l()(),X._36(null,["\n\n\n\n"])),(l()(),X._18(0,null,null,29,"div",[["style","text-align:center"]],null,null,null,null,null)),(l()(),X._36(null,["\n    "])),(l()(),X._18(0,null,null,4,"h1",[],null,null,null,null,null)),(l()(),X._36(null,["\n     "])),(l()(),X._18(0,null,null,1,"p",[["style","color:#b3a6db"]],null,null,null,null,null)),(l()(),X._36(null,[" Welcome to ","!"])),(l()(),X._36(null,["\n    "])),(l()(),X._36(null,["\n   "])),(l()(),X._18(0,null,null,3,"button",[],null,null,null,null,null)),(l()(),X._18(0,null,null,2,"a",[["routerLink","/About"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==X._32(l,11).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),X._16(671744,null,0,Y.l,[Y.k,Y.a,T.h],{routerLink:[0,"routerLink"]},null),(l()(),X._36(null,["About"])),(l()(),X._36(null,["\n   "])),(l()(),X._18(0,null,null,3,"button",[],null,null,null,null,null)),(l()(),X._18(0,null,null,2,"a",[["routerLink","/Gallery"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==X._32(l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),X._16(671744,null,0,Y.l,[Y.k,Y.a,T.h],{routerLink:[0,"routerLink"]},null),(l()(),X._36(null,["Gallery"])),(l()(),X._36(null,["\n   "])),(l()(),X._18(0,null,null,3,"button",[],null,null,null,null,null)),(l()(),X._18(0,null,null,2,"a",[["routerLink","/StartChatting"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){t=!1!==X._32(l,21).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&t}return t},null,null)),X._16(671744,null,0,Y.l,[Y.k,Y.a,T.h],{routerLink:[0,"routerLink"]},null),(l()(),X._36(null,["StartChatting"])),(l()(),X._36(null,["\n   "])),(l()(),X._18(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),X._36(null,["\n   "])),(l()(),X._18(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),X._36(null,["\n   "])),(l()(),X._18(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),X._16(212992,null,0,Y.n,[Y.b,X._0,X.l,[8,null],X.i],null,null),(l()(),X._36(null,["\n  "]))],function(l,n){l(n,11,0,"/About");l(n,16,0,"/Gallery");l(n,21,0,"/StartChatting"),l(n,29,0)},function(l,n){l(n,6,0,n.component.title),l(n,10,0,X._32(n,11).target,X._32(n,11).href),l(n,15,0,X._32(n,16).target,X._32(n,16).href),l(n,20,0,X._32(n,21).target,X._32(n,21).href)})}function m(l){return X._38(0,[(l()(),X._18(0,null,null,1,"app-root",[],null,null,null,d,W)),X._16(49152,null,0,b,[],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var p={production:!0},h=function(){function l(){}return l}(),b=function(){function l(){this.title="Vchat"}return l}(),y=[""],k=function(){function l(){}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}(),v=u("/oeL"),C=[y],x=v._15({encapsulation:0,styles:C,data:{}}),I=v._13("app-about",k,e,{},{},[]),L=["#list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline;padding-right:2px;padding-left:2px}"],O=function(){function l(){this.image=[{url:"./assets/Images/image1.jpg"},{url:"./assets/Images/image2.jpg"},{url:"./assets/Images/image3.jpg"},{url:"./assets/Images/image4.jpg"},{url:"./assets/Images/image5.jpg"}]}return l}(),w=u("/oeL"),j=u("qbdv"),A=[L],M=w._15({encapsulation:0,styles:A,data:{}}),P=w._13("app-gallery",O,r,{},{},[]),S=["input#message[_ngcontent-%COMP%]{background:#ba8a8a;border:none;outline:none;font-size:1.6em;font-weight:100;margin-bottom:3em;padding:1.2em .7em}#details-container[_ngcontent-%COMP%]{display:inline;width:50%}#details-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{background:#fff;padding:1.4em;color:#696969;margin:12px;width:auto;min-width:200px}img[_ngcontent-%COMP%]{float:left;margin-bottom:12px}"],q=u("HAwn"),K=u("2LMR"),B=function(){function l(l,n){this.afAuth=l,this.af=n,this.msgVal="",this.items=n.list("/messages",{query:{limitToLast:50}}),this.user=this.afAuth.authState}return l.prototype.login=function(){this.afAuth.auth.signInAnonymously()},l.prototype.logout=function(){this.afAuth.auth.signOut()},l.prototype.Send=function(l){this.items.push({message:l}),this.msgVal=""},l.ctorParameters=function(){return[{type:K.a},{type:q.a}]},l}(),F=u("/oeL"),G=u("bm2B"),H=u("qbdv"),V=u("2LMR"),z=u("HAwn"),D=[S],E=F._15({encapsulation:0,styles:D,data:{}}),N=F._13("app-start-chatting",B,g,{},{},[]),R=["button[_ngcontent-%COMP%]{font-weight:bolder;background-color:#fff}"],X=u("/oeL"),Y=u("BkNc"),T=u("qbdv"),U=[R],W=X._15({encapsulation:0,styles:U,data:{}}),$=X._13("app-root",b,m,{},{},[]),J=u("/oeL"),Q=u("n3h3"),Z=u("qbdv"),ll=u("fc+i"),nl=u("bm2B"),ul=u("13je"),tl=u("HAwn"),el=u("2LMR"),ol=u("BkNc"),il=u("D5uu"),rl=u("vCt3"),al=J._14(h,[b],function(l){return J._29([J._30(512,J.l,J._10,[[8,[Q.a,I,P,N,$]],[3,J.l],J.F]),J._30(5120,J.B,J._28,[[3,J.B]]),J._30(4608,Z.m,Z.l,[J.B]),J._30(5120,J.c,J._19,[]),J._30(5120,J.z,J._25,[]),J._30(5120,J.A,J._26,[]),J._30(4608,ll.b,ll.s,[Z.d]),J._30(6144,J.R,null,[ll.b]),J._30(4608,ll.e,ll.f,[]),J._30(5120,ll.c,function(l,n,u,t){return[new ll.k(l),new ll.o(n),new ll.n(u,t)]},[Z.d,Z.d,Z.d,ll.e]),J._30(4608,ll.d,ll.d,[ll.c,J.H]),J._30(135680,ll.m,ll.m,[Z.d]),J._30(4608,ll.l,ll.l,[ll.d,ll.m]),J._30(6144,J.P,null,[ll.l]),J._30(6144,ll.p,null,[ll.m]),J._30(4608,J.Y,J.Y,[J.H]),J._30(4608,ll.g,ll.g,[Z.d]),J._30(4608,ll.i,ll.i,[Z.d]),J._30(4608,nl.i,nl.i,[]),J._30(5120,ul.b,ul.f,[ul.c,ul.d]),J._30(5120,tl.a,tl.c,[ul.b]),J._30(5120,el.a,el.c,[ul.b]),J._30(5120,ol.a,ol.w,[ol.k]),J._30(4608,ol.d,ol.d,[]),J._30(6144,ol.f,null,[ol.d]),J._30(135680,ol.o,ol.o,[ol.k,J.E,J.j,J.x,ol.f]),J._30(4608,ol.e,ol.e,[]),J._30(5120,ol.h,ol.z,[ol.x]),J._30(5120,J.b,function(l){return[l]},[ol.h]),J._30(4608,il.a,il.a,[]),J._30(512,Z.c,Z.c,[]),J._30(1024,J.p,ll.q,[]),J._30(1024,J.G,function(){return[ol.s()]},[]),J._30(512,ol.x,ol.x,[J.x]),J._30(1024,J.d,function(l,n,u){return[ll.r(l,n),ol.y(u)]},[[2,ll.h],[2,J.G],ol.x]),J._30(512,J.e,J.e,[[2,J.d]]),J._30(131584,J._17,J._17,[J.H,J._11,J.x,J.p,J.l,J.e]),J._30(2048,J.g,null,[J._17]),J._30(512,J.f,J.f,[J.g]),J._30(512,ll.a,ll.a,[[3,ll.a]]),J._30(512,nl.h,nl.h,[]),J._30(512,nl.c,nl.c,[]),J._30(512,ul.a,ul.a,[]),J._30(512,tl.b,tl.b,[]),J._30(512,el.b,el.b,[]),J._30(1024,ol.r,ol.u,[[3,ol.k]]),J._30(512,ol.q,ol.c,[]),J._30(512,ol.b,ol.b,[]),J._30(256,ol.g,{},[]),J._30(1024,Z.h,ol.t,[Z.o,[2,Z.a],ol.g]),J._30(512,Z.g,Z.g,[Z.h]),J._30(512,J.j,J.j,[]),J._30(512,J.E,J.V,[J.j,[2,J.W]]),J._30(1024,ol.i,function(){return[[{path:"About",component:k},{path:"Gallery",component:O},{path:"StartChatting",component:B},{path:"",component:k}]]},[]),J._30(1024,ol.k,ol.v,[J.g,ol.q,ol.b,Z.g,J.x,J.E,J.j,ol.i,ol.g,[2,ol.p],[2,ol.j]]),J._30(512,ol.m,ol.m,[[2,ol.r],[2,ol.k]]),J._30(512,rl.a,rl.a,[]),J._30(512,h,h,[]),J._30(256,ul.c,{apiKey:"AIzaSyDdq4REXtbIxaZBAN9M5xU_aCQN9AY3G80",authDomain:"vchat-4f108.firebaseapp.com",databaseURL:"https://vchat-4f108.firebaseio.com",projectId:"vchat-4f108",storageBucket:"",messagingSenderId:"479398819553"},[]),J._30(256,ul.d,void 0,[])])}),_l=u("/oeL"),cl=u("fc+i");p.production&&Object(_l._4)(),Object(cl.j)().bootstrapModuleFactory(al)},gFIY:function(l,n){function u(l){return new Promise(function(n,u){u(new Error("Cannot find module '"+l+"'."))})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);