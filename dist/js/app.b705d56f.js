(function(e){function t(t){for(var o,n,s=t[0],i=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],o=!0,s=1;s<c.length;s++){var i=c[s];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=n(n.s=c[0]))}return e}var o={},a={app:0},r=[];function n(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=o,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(c,o,function(t){return e[t]}.bind(null,o));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var b=i;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"012c":function(e,t,c){},"0d64":function(e,t,c){"use strict";c("012c")},1195:function(e,t,c){e.exports=c.p+"img/avatar.43fd5cd9.png"},"19d4":function(e,t,c){"use strict";c("f3be")},"1f5e":function(e,t,c){},"278b":function(e,t,c){"use strict";c("b9c2")},4151:function(e,t,c){"use strict";c("9517")},"47c9":function(e,t,c){"use strict";c("1f5e")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var o=c("7a23"),a={class:"nav"},r={class:"ul-nav"},n={class:"nav-item "},s={class:"main"};function i(e,t,c,i,l,b){var d=Object(o["resolveComponent"])("router-link"),u=Object(o["resolveComponent"])("router-view");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",a,[Object(o["createVNode"])("ul",r,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.menu,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:e.route,to:{name:e.route}},{default:Object(o["withCtx"])((function(t){var c=t.route,a=t.isExactActive,r=t.navigate;return[Object(o["createVNode"])("li",n,[Object(o["createVNode"])("a",{class:["underline",a?"active":""],href:c.fullPath,onClick:r},Object(o["toDisplayString"])(e.title),11,["href","onClick"])])]})),_:2},1032,["to"])})),128))])]),Object(o["createVNode"])("div",s,[Object(o["createVNode"])(o["Transition"],{name:"page"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(u)]})),_:1})])],64)}var l={data:function(){return{menu:[{route:"Home",title:"Home"},{route:"Skils",title:"Skils"},{route:"Services",title:"Services"},{route:"Team",title:"Team"}]}}};c("19d4");l.render=i;var b=l,d=c("6c02"),u={class:"home"},O=Object(o["createVNode"])("h2",{class:"home-h"},[Object(o["createVNode"])("span",{class:"home-underline "},[Object(o["createTextVNode"])("OUR "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" WORKS.")])],-1),j={class:"filters"},p={class:"catalog"},m={key:0,class:"hover"},f={class:"bold"},v={class:"regular"};function h(e,t,c,a,r,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",u,[O,Object(o["createVNode"])("div",j,[Object(o["createVNode"])("button",{onClick:t[1]||(t[1]=function(){return e.clickFilter&&e.clickFilter.apply(e,arguments)}),class:"filter btn","data-tags":"All"}," All "),Object(o["createVNode"])("button",{onClick:t[2]||(t[2]=function(){return e.clickFilter&&e.clickFilter.apply(e,arguments)}),class:"filter btn","data-tags":"Websites"}," Websites "),Object(o["createVNode"])("button",{onClick:t[3]||(t[3]=function(){return e.clickFilter&&e.clickFilter.apply(e,arguments)}),class:"filter btn","data-tags":"SPA"}," SPA ")]),Object(o["createVNode"])("div",p,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.items,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:["catalog-item",t.class],onMouseenter:function(c){return e.hoverOn(t.title)},onMouseleave:function(c){return e.hoverOut(t.title)},key:t.title},[Object(o["createVNode"])(o["Transition"],{name:"fade"},{default:Object(o["withCtx"])((function(){return[t.hover?(Object(o["openBlock"])(),Object(o["createBlock"])("div",m,[Object(o["createVNode"])("h3",f,[Object(o["createVNode"])("a",{href:t.a,class:"bold home_a",target:"_blank"},Object(o["toDisplayString"])(t.title),9,["href"])]),Object(o["createVNode"])("span",v,"Develop by "+Object(o["toDisplayString"])(t.author),1)])):Object(o["createCommentVNode"])("",!0)]})),_:2},1024)],42,["onMouseenter","onMouseleave"])})),128))])])}var N=c("5530"),V=c("5502"),k={computed:Object(N["a"])(Object(N["a"])({},Object(V["c"])("home",{items:"all"})),Object(V["c"])("home",{tgActive:"tgActive"})),methods:Object(N["a"])(Object(N["a"])(Object(N["a"])({},Object(V["b"])("home",{hoverOn:"hoverOn"})),Object(V["b"])("home",{hoverOut:"hoverOut"})),Object(V["b"])("home",{clickFilter:"clickOnFilter"}))};c("d70c");k.render=h;var g=k,y={class:"services"},B={class:"top"},C=Object(o["createVNode"])("h2",null,[Object(o["createVNode"])("span",{class:"top-underline ser-h"},[Object(o["createTextVNode"])("OUR "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" SERVICES.")])],-1),w={class:"top-right"},x={class:"feature"},T={class:"icon-br"},S=Object(o["createTextVNode"])(),_=Object(o["createVNode"])("span",null,[Object(o["createVNode"])("h3",null," FEATURE 1")],-1),A=Object(o["createTextVNode"])(),F=Object(o["createVNode"])("span",null,"Communicating politely with clients",-1),M={class:"feature"},E={class:"icon-br"},P=Object(o["createTextVNode"])(),H=Object(o["createVNode"])("span",null,[Object(o["createVNode"])("h3",null," FEATURE 2")],-1),D=Object(o["createTextVNode"])(),R=Object(o["createVNode"])("span",null," If the product does not meet the agreed terms of reference, we will refund your money ",-1),I={class:"feature"},L={class:"icon-br"},U=Object(o["createTextVNode"])(),J=Object(o["createVNode"])("span",null,[Object(o["createVNode"])("h3",null," FEATURE 3")],-1),K=Object(o["createTextVNode"])(),W=Object(o["createVNode"])("span",null," Fast execution of assigned tasks ",-1),z={class:"feature"},Y={class:"icon-br"},Q=Object(o["createTextVNode"])(),q=Object(o["createVNode"])("span",null,[Object(o["createVNode"])("h3",null," FEATURE 4")],-1),G=Object(o["createTextVNode"])(),X=Object(o["createVNode"])("span",null," Lower prices than competitors ",-1),Z={class:"stat"},$={class:"stat-items"},ee=Object(o["createVNode"])("span",null,"0",-1),te=Object(o["createVNode"])("span",null,"Perspiciatis",-1),ce={class:"stat-items"},oe=Object(o["createVNode"])("span",null,"0",-1),ae=Object(o["createVNode"])("span",null,"Comments",-1),re={class:"stat-items"},ne=Object(o["createVNode"])("span",null,"0",-1),se=Object(o["createVNode"])("span",null,"Coffee cups",-1),ie={class:"stat-items"},le=Object(o["createVNode"])("span",null,"0",-1),be=Object(o["createVNode"])("span",null,"Awards",-1);function de(e,t,c,a,r,n){var s=Object(o["resolveComponent"])("fa-icon");return Object(o["openBlock"])(),Object(o["createBlock"])("div",y,[Object(o["createVNode"])("div",B,[C,Object(o["createVNode"])("div",w,[Object(o["createVNode"])("span",x,[Object(o["createVNode"])("span",T,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","cloud"]})]),S,_,A,F]),Object(o["createVNode"])("span",M,[Object(o["createVNode"])("span",E,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","gavel"]})]),P,H,D,R]),Object(o["createVNode"])("span",I,[Object(o["createVNode"])("span",L,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","bolt"]})]),U,J,K,W]),Object(o["createVNode"])("span",z,[Object(o["createVNode"])("span",Y,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","utensils"]})]),Q,q,G,X])])]),Object(o["createVNode"])("div",Z,[Object(o["createVNode"])("div",$,[Object(o["createVNode"])("span",null,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","gift"]})]),ee,te]),Object(o["createVNode"])("div",ce,[Object(o["createVNode"])("span",null,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","comments"]})]),oe,ae]),Object(o["createVNode"])("div",re,[Object(o["createVNode"])("span",null,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","coffee"]})]),ne,se]),Object(o["createVNode"])("div",ie,[Object(o["createVNode"])("span",null,[Object(o["createVNode"])(s,{class:"top-icon",icon:["fas","trophy"]})]),le,be])])])}var ue=c("ad3d"),Oe={components:{FaIcon:ue["a"]}};c("0d64");Oe.render=de;var je=Oe,pe={class:"skils"},me=Object(o["createVNode"])("div",{class:"skils-top"},[Object(o["createVNode"])("div",{class:"h "},[Object(o["createVNode"])("h2",{class:"skils-h "},[Object(o["createVNode"])("span",{class:"home-underline"},[Object(o["createTextVNode"])("OUR "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" SKILS.")])])])],-1),fe={class:"skils-bottom"},ve={class:"skils-left"},he={class:"skils-left_p-bars"},Ne=Object(o["createVNode"])("div",{class:"skils-left_about"},[Object(o["createVNode"])("h3",{class:"skils-left_about-h"},"About our skills"),Object(o["createVNode"])("span",null," You can order a SPA, layout, business card site or multi-page site from us. They will be developed in HTML, Css (Scss or Sass), Js (Native, JQuery or Vue). ")],-1),Ve={class:"skils-right"},ke={key:0,class:"desc"};function ge(e,t,c,a,r,n){var s=Object(o["resolveComponent"])("ve-progress"),i=Object(o["resolveComponent"])("fa-icon");return Object(o["openBlock"])(),Object(o["createBlock"])("div",pe,[me,Object(o["createVNode"])("div",fe,[Object(o["createVNode"])("div",ve,[Object(o["createVNode"])("div",he,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.pBars,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"p-bar",key:e},[Object(o["createVNode"])(s,{progress:e.progress,line:e.line,color:e.color,thickness:e.thickness,legendClass:"progB",emptyColor:e.emptyColor,size:150},null,8,["progress","line","color","thickness","emptyColor"])])})),128))]),Ne]),Object(o["createVNode"])("div",Ve,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.boosts,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:t},[Object(o["createVNode"])("div",{class:["skils-right_item",{active:t.active}]},[Object(o["createVNode"])(i,{class:"skils-right_item-icon",icon:t.icon,style:{color:t.color}},null,8,["icon","style"]),Object(o["createVNode"])("span",null,Object(o["toDisplayString"])(t.h),1),Object(o["createVNode"])("button",{class:"skils-btn btn",onClick:function(c){return e.setActive(t)}},"+",8,["onClick"])],2),Object(o["createVNode"])(o["Transition"],{name:"slide"},{default:Object(o["withCtx"])((function(){return[t.active?(Object(o["openBlock"])(),Object(o["createBlock"])("div",ke,Object(o["toDisplayString"])(t.desc),1)):Object(o["createCommentVNode"])("",!0)]})),_:2},1024)])})),128))])])])}var ye={components:{FaIcon:ue["a"]},computed:Object(N["a"])(Object(N["a"])({},Object(V["c"])("skils",{pBars:"all"})),Object(V["c"])("skils",{boosts:"boosts"})),methods:Object(N["a"])(Object(N["a"])({},Object(V["d"])("skils",{setActive:"setActive"})),Object(V["d"])("skils",{mark:"markActive"}))};c("47c9");ye.render=ge;var Be=ye,Ce={class:"contacts"},we=Object(o["createVNode"])("h3",{class:"h"},[Object(o["createVNode"])("span",{class:"home-underline"},[Object(o["createTextVNode"])(" MY "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" CONTACTS. ")])],-1),xe={class:"contact_icons"},Te={class:"form-wrap"},Se={class:"form"},_e=Object(o["createStaticVNode"])('<div class="form-left"><div class="wrap"><input type="email" placeholder="Email" class="email"><input type="text" placeholder="Name" class="name"></div><div class="wrap"><textarea name="" id="" cols="30" rows="10" placeholder="Massage" class="massage"></textarea></div></div>',1),Ae={class:"form-right"},Fe={class:"sub"},Me=Object(o["createVNode"])("input",{type:"submit",class:"submit",value:"Submit"},null,-1);function Ee(e,t,c,a,r,n){var s=Object(o["resolveComponent"])("fa-icon");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Ce,[we,Object(o["createVNode"])("span",xe,[Object(o["createVNode"])(s,{class:"contact_icon",icon:["fab","instagram"],style:{color:"red"}}),Object(o["createVNode"])(s,{class:"contact_icon",icon:["fab","discord"],style:{color:"red"}}),Object(o["createVNode"])(s,{class:"contact_icon",icon:["fab","github"],style:{color:"red"}})]),Object(o["createVNode"])("div",Te,[Object(o["createVNode"])("form",Se,[_e,Object(o["createVNode"])("div",Ae,[Object(o["createVNode"])("div",Fe,[Me,Object(o["createVNode"])(s,{class:"sub_icon",icon:["fas","check-circle"],style:{color:"red"}})])])])])])}var Pe={components:{FaIcon:ue["a"]}};c("4151");Pe.render=Ee;var He=Pe,De=(c("b0c0"),c("1195")),Re=c.n(De),Ie={class:"team"},Le=Object(o["createVNode"])("h2",null,[Object(o["createVNode"])("span",{class:"home-underline h"},[Object(o["createTextVNode"])(" OUR "),Object(o["createVNode"])("br"),Object(o["createTextVNode"])(" TEAM. ")])],-1),Ue={class:"teammates"},Je={class:"card_top"},Ke=Object(o["createVNode"])("div",{class:"card_top-avatar"},[Object(o["createVNode"])("img",{class:"img",src:Re.a,alt:""})],-1),We={key:0,class:"card_top-icons"},ze={class:"icons inst"},Ye={class:"icons twtr"},Qe={class:"icons git"},qe={class:"card_bottom "},Ge={class:"card_bottom-name"},Xe={class:"card_bottom-post"},Ze={class:"card_bottom-about"};function $e(e,t,c,a,r,n){var s=Object(o["resolveComponent"])("fa-icon");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Ie,[Le,Object(o["createVNode"])("div",Ue,[(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],null,Object(o["renderList"])(e.teammates,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{class:"card ",onMouseenter:function(c){return e.hoverOn(t.name)},onMouseleave:function(c){return e.hoverOut(t.name)},key:t},[Object(o["createVNode"])("div",Je,[Ke,Object(o["createVNode"])(o["Transition"],{name:"rotate"},{default:Object(o["withCtx"])((function(){return[t.hover?(Object(o["openBlock"])(),Object(o["createBlock"])("div",We,[Object(o["createVNode"])("span",ze,[Object(o["createVNode"])("a",{class:"icons_img",href:t.inst},[Object(o["createVNode"])(s,{class:"icon",icon:["fab","instagram"],style:{color:"white"}})],8,["href"])]),Object(o["createVNode"])("span",Ye,[Object(o["createVNode"])("a",{class:"icons_img",href:t.twtr},[Object(o["createVNode"])(s,{class:"icon",icon:["fab","facebook"],style:{color:"white"}})],8,["href"])]),Object(o["createVNode"])("span",Qe,[Object(o["createVNode"])("a",{class:"icons_img",href:t.git},[Object(o["createVNode"])(s,{class:"icon",icon:["fab","github"],style:{color:"white"}})],8,["href"])])])):Object(o["createCommentVNode"])("",!0)]})),_:2},1024)]),Object(o["createVNode"])("div",qe,[Object(o["createVNode"])("h3",Ge,Object(o["toDisplayString"])(t.name),1),Object(o["createVNode"])("span",Xe,Object(o["toDisplayString"])(t.post),1),Object(o["createVNode"])("span",Ze,Object(o["toDisplayString"])(t.about),1)])],40,["onMouseenter","onMouseleave"])})),128))])])}var et={components:{FaIcon:ue["a"]},computed:Object(N["a"])({},Object(V["c"])("team",{teammates:"teammates"})),methods:Object(N["a"])(Object(N["a"])({},Object(V["b"])("team",{hoverOn:"hoverOn"})),Object(V["b"])("team",{hoverOut:"hoverOut"}))};c("278b");et.render=$e;var tt=et,ct=[{path:"/",name:"Home",component:g},{path:"/Skils",name:"Skils",component:Be},{path:"/Contacts",name:"Contacts",component:He},{path:"/Services",name:"Services",component:je},{path:"/Team",name:"Team",component:tt}],ot=Object(d["a"])({routes:ct,history:Object(d["b"])("/")}),at=(c("159b"),c("4de4"),{namespaced:!0,state:{items:rt()},getters:{all:function(e){return e.items}},mutations:{onHover:function(e,t){e.items.forEach((function(e){t==e.title&&(e.hover=!0)}))},outHover:function(e,t){e.items.forEach((function(e){t==e.title&&(e.hover=!1)}))},filterJobs:function(e,t){e.items="All"==t?rt():rt().filter((function(e){return e.tags==t}))}},actions:{clickOnFilter:function(e,t){e.commit("filterJobs",t.target.dataset.tags)},hoverOn:function(e,t){e.commit("onHover",t)},hoverOut:function(e,t){e.commit("outHover",t)}}});function rt(){return[{title:"Financial Сalculator",author:"Me",date:"19.09.2020",hover:!0,class:"first",a:"http://kinko.epizy.com/indexOne.html",tags:"Websites"},{title:"Business website",author:"Me",date:"24.07.2020",hover:!1,class:"three",a:"http://kinko.epizy.com/three.html",tags:"Websites"},{title:"Blog",author:"Me",date:"12.09.2021",hover:!1,class:"four",a:"https://blog-js-6a0bc.web.app",tags:"SPA"},{title:"To Do List",author:"Me",date:"10.12.2021",hover:!1,class:"five",a:"https://kinkotodolist.web.app/",tags:"SPA"}]}var nt={namespaced:!0,state:{team:[{name:"Nikita Kov",post:"Frontend-developer",about:"Hi! I am a junior front-end developer. I will be glad to work with you",inst:"#",twtr:"#",git:"https://github.com/Kin0-0Ko",hover:!1}]},getters:{teammates:function(e){return e.team}},mutations:{onHover:function(e,t){e.team.forEach((function(e){t==e.name&&(e.hover=!0)}))},outHover:function(e,t){e.team.forEach((function(e){t==e.name&&(e.hover=!1)}))}},actions:{hoverOn:function(e,t){e.commit("onHover",t)},hoverOut:function(e,t){e.commit("outHover",t)}}},st={namespaced:!0,state:{pBars:[{progress:75,color:"#ca3c3c",line:"butt",thickness:"7%",emptyColor:"#cccccc"},{progress:25,color:"#ca3c3c",line:"butt",thickness:"7%",emptyColor:"#cccccc"},{progress:75,color:"#ca3c3c",line:"butt",thickness:"7%",emptyColor:"#cccccc"},{progress:50,color:"#ca3c3c",line:"butt",thickness:"7%",emptyColor:"#cccccc"}],boosts:[{icon:"rocket",h:"Execution speed",desc:"For an additional fee, you can speed up the work\t(within reasonable limits)",active:!0,color:"red"},{icon:"unlock",h:"Edits",desc:"Corrections of the already agreed terms of reference are paid. (After 2 edits)",active:!1,color:"gray"},{icon:"location-arrow",h:"Prepaid expense",desc:" Advance payment is 50 % of the order price ",active:!1,color:"gray"},{icon:"phone-alt",h:"Communication",desc:"Communication takes place through your chosen method",active:!1,color:"gray"}]},getters:{all:function(e){return e.pBars},boosts:function(e){return e.boosts}},mutations:{setActive:function(e,t){t.active?(t.active=!1,t.color="gray"):(t.active=!0,t.color="red")},markActive:function(e,t){var c="";return t.active&&(c="active"),c}},actions:{setActive:function(e,t){e.commit("setActive",t)},markActive:function(e,t){e.commit("markActive",t)}}},it=Object(V["a"])({modules:{home:at,team:nt,skils:st},strict:!1}),lt=c("6bf9"),bt=c.n(lt),dt=c("ecee"),ut=c("f2d1"),Ot=c("c074");Object(o["createApp"])(b).use(it).use(ot).use(bt.a).mount("#app"),dt["c"].add(Ot["g"],Ot["n"],Ot["a"],Ot["d"],ut["b"],ut["c"],ut["d"],Ot["f"],Ot["h"],Ot["e"],Ot["l"],Ot["k"],Ot["m"],Ot["i"],Ot["j"],Ot["b"],ut["a"],Ot["c"])},"5a2c":function(e,t,c){},9517:function(e,t,c){},b9c2:function(e,t,c){},d70c:function(e,t,c){"use strict";c("5a2c")},f3be:function(e,t,c){}});
//# sourceMappingURL=app.b705d56f.js.map