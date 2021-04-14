var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,i)=>{for(var s in i||(i={}))a.call(i,s)&&n(e,s,i[s]);if(t)for(var s of t(i))l.call(i,s)&&n(e,s,i[s]);return e};import{r as s,c as r,l as o,o as p,w as c,a as u,b as d,d as g,e as m,f,v,g as b,F as y,h as w,i as h,t as k,j as E,k as T,m as C,n as R,p as O}from"./vendor.135833cb.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const l=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,i)=>{const s=new URL(e,l);if(self[a].moduleMap[s])return t(self[a].moduleMap[s]);const r=new Blob([`import * as m from '${s}';`,`${a}.moduleMap['${s}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){i(new Error(`Failed to import: ${e}`)),n(o)},onload(){t(self[a].moduleMap[s]),n(o)}});document.head.appendChild(o)})),self[a].moduleMap={}}}("assets/");const S={id:"36ec601ba440417ead12dc49d612665d"},j=s(null),D=r((async()=>{const[e]=await o(["esri/layers/FeatureLayer"]);return new e(j.value)})),L=r((async()=>{const[e]=await o(["esri/WebMap"]);return new e({portalItem:S})}));const M=s(null);function _(e){e.popup.dockEnabled=!0,e.popup.dockOptions.buttonEnabled=!1,e.popup.collapsed=!1,e.popup.dockOptions.collapseEnabled=!1}const U=u({loading:!1,error:"",data:[]}),x=r((()=>U.data.map((({attributes:e})=>e)))),P=s(null),N=r((()=>U.data.find((e=>{var a;return(null==(a=e.attributes)?void 0:a.objectid)==P.value}))));function A(e){P.value=e,M.value.scrollIntoView()}const F=u({page:1,limit:10}),I=s(0),V=r((()=>F.limit*(F.page-1))),$=r((()=>Math.ceil(I.value/F.limit))),G=u({upcoming:!1,search:""});c([F,G],(()=>{if(F.page>$.value)return F.page=1;J()}));const q=r((()=>["DATE_OPENED >= CURRENT_TIMESTAMP+1",G.search?`STREET like '%${G.search}%'`:null,G.upcoming?"DATE_CLOSED > CURRENT_TIMESTAMP":"(DATE_CLOSED <= CURRENT_TIMESTAMP)"].filter(Boolean).join(" AND "))),B=r((()=>({where:q.value,f:"json",outFields:"*",orderByFields:["DATE_CLOSED asc","DATE_OPENED asc","STREET asc"],returnGeometry:!0,num:F.limit,start:V.value})));async function J(){console.log("queryClosures"),U.error="",U.loading=!0;try{const e=await D.value;I.value=await e.queryFeatureCount({where:q.value});const{features:a}=await e.queryFeatures(B.value);U.data=a.map((a=>i(i({},a.toJSON()),{popupTemplate:e.popupInfo})))}catch(e){U.error=e.message}finally{U.loading=!1}}const H={setup:()=>({filters:G})},W={class:"d-flex justify-content-between align-items-center flex-wrap"},Y={class:"flex-grow-1"},z={class:"p-2"},K={class:"form-check form-check-inline"},Q=m("label",{class:"form-check-label",for:"inlineRadio1"}," Current Closures ",-1),X={class:"form-check form-check-inline"},Z=m("label",{class:"form-check-label",for:"inlineRadio2"}," Upcoming Closures ",-1);H.render=function(e,a,t,l,n,i){return d(),g("div",W,[m("div",Y,[f(m("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>l.filters.search=e),type:"text",class:"form-control",placeholder:"Filter by street name"},null,512),[[v,l.filters.search]])]),m("div",z,[m("div",K,[f(m("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>l.filters.upcoming=e),class:"form-check-input",type:"radio",name:"currentOrUpcomingRadioGroup",id:"inlineRadio1",value:!1},null,512),[[b,l.filters.upcoming]]),Q]),m("div",X,[f(m("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>l.filters.upcoming=e),class:"form-check-input",type:"radio",name:"currentOrUpcomingRadioGroup",id:"inlineRadio2",value:!0},null,512),[[b,l.filters.upcoming]]),Z])])])};const ee={setup:()=>({closures:x,activeClosure:P,activateClosure:A}),methods:{formatDate:e=>new Date(e).toLocaleString()}},ae={key:0,class:"table-responsive"},te={class:"table table-striped table-sm small"},le=m("thead",null,[m("tr",null,[m("th",null,"Street"),m("th",null,"Type"),m("th",null,"Closed"),m("th",null,"Opened")])],-1),ne=m("br",null,null,-1),ie=E(" from "),se=E(" to "),re={key:1,class:"text-center py-5"},oe=m("p",{class:"h4"},"No Closures",-1),pe=m("p",null,"Try refining your search.",-1);ee.render=function(e,a,t,l,n,i){return l.closures.length?(d(),g("div",ae,[m("table",te,[le,m("tbody",null,[(d(!0),g(y,null,w(l.closures,(e=>(d(),g("tr",{key:e.objectid,id:`closure-${e.objectid}`},[m("td",null,[m("strong",null,[m("a",{href:"#map",onClick:h((a=>l.activateClosure(e.objectid)),["prevent"])},k(e.STREET),9,["onClick"])]),ne,m("small",null,[ie,m("strong",null,k(e.FROM_STREET),1),se,m("strong",null,k(e.TO_STREET),1)])]),m("td",null,k(e.CLOSURE_TYPE.split("_").join(" ")),1),m("td",null,k(i.formatDate(e.DATE_CLOSED)),1),m("td",null,k(i.formatDate(e.DATE_OPENED)),1)],8,["id"])))),128))])])])):(d(),g("div",re,[oe,pe]))};const ce={setup:()=>({pagination:F,pages:$})},ue={key:0},de={class:"row align-items-center"},ge={class:"col-sm-9"},me={"aria-label":"Page navigation"},fe={class:"m-0 pagination justify-content-center"},ve=m("span",{"aria-hidden":"true"},"«",-1),be={key:0,class:"page-item disabled"},ye=m("span",{class:"page-link"},"...",-1),we={key:1,class:"page-item disabled"},he=m("span",{class:"page-link"},"...",-1),ke=m("span",{"aria-hidden":"true"},"»",-1),Ee={class:"col-sm-3"};ce.render=function(e,a,t,l,n,i){return l.pages>1?(d(),g("div",ue,[m("div",de,[m("div",ge,[m("nav",me,[m("ul",fe,[m("li",{class:["page-item",1==l.pagination.page?"disabled":null]},[m("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":1==l.pagination.page,onClick:a[1]||(a[1]=h((e=>l.pagination.page--),["prevent"])),"aria-label":"Previous"},[ve],8,["aria-disabled"])],2),m("li",{class:["page-item",1==l.pagination.page?"active":null],"aria-current":1==l.pagination.page&&"page"},[m("a",{class:"page-link",href:"#",onClick:a[2]||(a[2]=h((e=>l.pagination.page=1),["prevent"]))}," 1 ")],10,["aria-current"]),l.pagination.page>3?(d(),g("li",be,[ye])):T("",!0),(d(!0),g(y,null,w(l.pages,(e=>(d(),g(y,{key:e},[1!=e&&e!=l.pages&&Math.abs(l.pagination.page-e)<3?(d(),g("li",{key:0,class:["page-item",l.pagination.page==e?"active":null],"aria-current":l.pagination.page==e&&"page"},[m("a",{class:"page-link",href:"#",onClick:h((a=>l.pagination.page=e),["prevent"])},k(e),9,["onClick"])],10,["aria-current"])):T("",!0)],64)))),128)),l.pagination.page<l.pages-3?(d(),g("li",we,[he])):T("",!0),m("li",{class:["page-item",l.pagination.page==l.pages?"active":null],"aria-current":l.pagination.page==l.pages&&"page"},[m("a",{class:"page-link",href:"#",onClick:a[3]||(a[3]=h((e=>l.pagination.page=l.pages),["prevent"]))},k(l.pages),1)],10,["aria-current"]),m("li",{class:["page-item",l.pagination.page==l.pages?"disabled":null]},[m("a",{class:"page-link",href:"#","aria-disabled":l.pagination.page==l.pages,onClick:a[4]||(a[4]=h((e=>l.pagination.page++),["prevent"])),"aria-label":"Next"},[ke],8,["aria-disabled"])],2)])])]),m("div",Ee,[f(m("select",{"onUpdate:modelValue":a[5]||(a[5]=e=>l.pagination.limit=e),class:"form-select form-control","aria-label":"Results per page"},[(d(),g(y,null,w([10,25,50],(e=>m("option",{key:e,value:e},k(`${e} results per page`),9,["value"]))),64))],512),[[C,l.pagination.limit]])])])])):T("",!0)};const Te={setup:()=>(p((async()=>{const[e,a,t,l,n]=await o(["esri/views/MapView","esri/widgets/Home","esri/widgets/Legend","esri/Graphic","esri/widgets/Expand"]),i=await L.value;let s=new e({map:i,container:M.value});await s.when(),_(s),s.on("click",(()=>{_(s),s.popup.close(),P.value=null}));const r=i.layers.getItemAt(0),p=await s.whenLayerView(r);c((()=>q.value),(()=>{p.filter={where:q.value}})),c((()=>N.value),(async()=>{s.popup.close();const e=l.fromJSON(N.value);e&&s.popup.open({features:[e]})}));const u=new a({view:s});s.ui.add(u,"top-left");const d=new t({view:s,layerInfos:[{layer:r,title:"Legend"}],container:document.createElement("div")}),g=new n({expandIconClass:"esri-icon-layer-list",expandTooltip:"Expand Legend",view:s,content:d.domNode});s.ui.add(d,"bottom-left"),s.ui.add(g,"top-left")})),{mapRef:M})},Ce={class:"ratio ratio-16x9"},Re={id:"map",ref:"mapRef",class:"embed-responsive-item"};Te.render=function(e,a,t,l,n,i){return d(),g("div",Ce,[m("div",Re,null,512)])};const Oe={setup:()=>(async function(){const e=await L.value;await e.load(),j.value=e.layers.items[0].toJSON()}().then(J),{appState:U}),components:{Filters:H,ClosuresTable:ee,Pagination:ce,ClosuresMap:Te}},Se={key:0,class:"py-5"},je={class:"alert alert-warning",role:"alert"},De={key:1},Le={key:0,class:"p-5 text-center"},Me=m("div",{class:"spinner-border text-dark",role:"status"},[m("span",{class:"visually-hidden"},"Loading...")],-1);Oe.render=function(e,a,t,l,n,i){const s=R("ClosuresMap"),r=R("Filters"),o=R("ClosuresTable"),p=R("Pagination");return l.appState.error?(d(),g("div",Se,[m("div",je,k(l.appState.error),1)])):(d(),g("div",De,[m(s),m(r,{class:"my-3"}),l.appState.loading?(d(),g("div",Le,[Me])):(d(),g(o,{key:1})),m(p)]))};O(Oe).mount("#app");
