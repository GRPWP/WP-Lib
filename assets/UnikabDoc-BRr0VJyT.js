import{$ as ae,B as oe,s as ne,a as ie,b as re,c as ue,d as de,e as ce,f as pe,Z as ve,g as fe,h as me,i as _e}from"./index-DwrNeKYf.js";import{r as o,o as xe,c as ge,w as Y,a as v,b as f,d as t,e as n,f as m,F as P,g as ye,h as be,t as p,n as A,i as he,u as w}from"./index-CC92J6G-.js";const we={class:"flex flex-col"},ke={class:"flex flex-wrap justify-center gap-4"},Ve={class:"grid grid-cols-12 gap-0"},De={class:"p-1 border border-surface-200 dark:border-surface-700 bg-surface-0 dark:bg-surface-900 rounded flex flex-col"},Ce={class:"bg-surface-50 flex justify-center rounded"},$e={class:"relative mx-auto"},Le=["src","alt","onClick"],Be={key:0,class:"pi pi-spin pi-clock absolute text-green-500 text-sm",style:{right:"4px",top:"4px"}},Ie={class:"pt-4"},Ue={class:"flex flex-row justify-between items-start gap-1"},Ne={class:"font-medium text-surface-500 dark:text-surface-400 text-sm"},Se={class:"p-1",style:{"border-radius":"15px"}},Fe={class:"bg-surface-0 flex items-center gap-2 justify-center py-1 px-2",style:{"border-radius":"15px","box-shadow":`0px 1px 2px 0px rgba(0, 0, 0, 0.04),\r
                                                    0px 1px 2px 0px rgba(0, 0, 0, 0.06)`}},Te={class:"text-surface-900 text-sm"},je={class:"flex flex-col gap-2"},Ye={class:"text-sm font-medium mt-3"},Pe={class:"flex flex-col"},Ae={class:"flex items-center justify-between px-6 pt-4 shrink-0"},Ee={class:"inline-flex items-center gap-2"},Ke={class:"font-semibold text-md text-primary"},ze={class:"flex-1 overflow-y-auto",style:{"padding-top":"15px","padding-left":"10px","padding-right":"10px"}},He={key:0},Ze={key:1},Me={class:"pdf-container",style:{"overflow-y":"auto","max-height":"80vh"}},We={key:2},qe={class:"inline-flex justify-center gap-2",style:{padding:"10px"}},Ge={class:"font-semibold text-md text-primary"},Je={class:"font-semibold text-md text-primary"},Oe={class:"mt-auto layout-footer"},Qe={style:{"padding-left":"2px","padding-right":"2px"}},Re={class:"flex items-center gap-2 mb-8"},Xe={class:"flex justify-end gap-2"},k="UNIKAB",lt={__name:"UnikabDoc",setup(et){const V=o(null),h=o(null),E=o(null),_=o(null),K=o(null),r=o(1),z=o("grid"),x=o(null),I=o(null),U=o(null),D=o(!1),H=o(12),Z=o([{icon:"pi pi-filter-fill",value:"Left"}]),M=o([{icon:"pi pi-refresh",value:"Left"}]),g=o(!1),C=o(""),$=o(!1),{pdf:W,pages:N}=ae(C),L=o([]),c=o({start:null,end:null});xe(()=>{oe.getBerandas().then(s=>{V.value=s,h.value=s.filter(a=>a.category===k),E.value=[s,[]],K.value=s;const e=s.filter(a=>a.category===k),d=Array.from(new Set(e.map(a=>a.year))).sort((a,u)=>parseInt(a,10)-parseInt(u,10)).map(a=>({name:a,value:a}));L.value=d})});const q=ge(()=>[...L.value].reverse()),G=s=>{const e=new Date(s.replace(" ","T")+":00");return(new Date-e)/(1e3*60*60)<=24},J=(s,e)=>{_.value=s,D.value=!0,r.value=1};Y(_,async s=>{s&&s.pdfile&&($.value=!0,C.value=s.pdfile,$.value=!1)});const O=s=>{switch(s.lang){case"EN":return"success";case"DUTCH":return"warn";case"ID":return"danger";default:return null}},Q=()=>{g.value=!0};Y(x,s=>{S()});const S=()=>{let s=V.value;x.value&&(s=s.filter(a=>a.title.toLowerCase().includes(x.value.toLowerCase())));const e=c.value.start?parseInt(c.value.start,10):null,d=c.value.end?parseInt(c.value.end,10):null;(e||d)&&(s=s.filter(a=>{const u=parseInt(a.year,10);return e&&d?u>=e&&u<=d:e?u>=e:d?u<=d:!0})),s=s.filter(a=>a.category===k),s=s.sort((a,u)=>parseInt(a.year,10)-parseInt(u.year,10)),h.value=s,g.value=!1},R=()=>{h.value=V.value.filter(s=>s.category===k),x.value=null,c.value={start:null,end:null}};return(s,e)=>{const d=re,a=ue,u=ie,F=de,X=ne,ee=ce,y=pe,te=fe,T=me,se=_e;return v(),f(P,null,[t("div",we,[n(ee,{value:h.value,layout:z.value,paginator:!0,rows:H.value},{header:m(()=>[t("div",ke,[n(u,null,{default:m(()=>[n(d,{class:"pi pi-search"}),n(a,{modelValue:x.value,"onUpdate:modelValue":e[0]||(e[0]=l=>x.value=l),placeholder:"Search"},null,8,["modelValue"])]),_:1}),n(F,{modelValue:U.value,"onUpdate:modelValue":e[1]||(e[1]=l=>U.value=l),options:M.value,onChange:R,optionLabel:"value",dataKey:"value"},{option:m(l=>[t("i",{class:A(l.option.icon)},null,2)]),_:1},8,["modelValue","options"]),n(F,{modelValue:I.value,"onUpdate:modelValue":e[2]||(e[2]=l=>I.value=l),options:Z.value,onChange:Q,optionLabel:"value",dataKey:"value","aria-labelledby":"custom"},{option:m(l=>[t("i",{class:A(l.option.icon)},null,2)]),_:1},8,["modelValue","options"])])]),grid:m(l=>[t("div",Ve,[(v(!0),f(P,null,ye(l.items,(i,b)=>(v(),f("div",{key:b,class:"col-span-6 sm:col-span-3 lg:col-span-2 p-2"},[t("div",De,[t("div",Ce,[t("div",$e,[t("img",{class:"rounded w-full",src:`${i.image}`,alt:i.title,style:{"max-width":"100%"},onClick:B=>J(i,b)},null,8,Le),G(i.datetime)?(v(),f("span",Be)):be("",!0),n(X,{value:i.lang,severity:O(i),class:"absolute dark:!bg-surface-900",style:{left:"4px",top:"4px"}},null,8,["value","severity"])])]),t("div",Ie,[t("div",Ue,[t("div",null,[t("span",Ne,p(i.author),1)]),t("div",Se,[t("div",Fe,[t("span",Te,p(i.year),1)])])]),t("div",je,[t("div",Ye,p(i.title),1)])])])]))),128))])]),_:1},8,["value","layout","rows"])]),n(te,{visible:D.value,"onUpdate:visible":e[5]||(e[5]=l=>D.value=l),position:"top",style:{height:"100%"}},{container:m(({closeCallback:l})=>{var i,b,B,j;return[t("div",Pe,[t("div",Ae,[t("span",Ee,[t("span",Ke,p(((i=_.value)==null?void 0:i.title)||"No Title"),1)]),t("span",null,[n(y,{type:"button",onClick:l,icon:"pi pi-times",rounded:"",outlined:""},null,8,["onClick"])])])]),t("div",ze,[$.value?(v(),f("div",He,e[10]||(e[10]=[t("p",{class:"text-center"},[t("i",{class:"pi pi-spin pi-spinner",style:{"font-size":"2rem"}}),t("br"),he("Loading PDF... ")],-1)]))):C.value&&((b=_.value)!=null&&b.pdfile)?(v(),f("div",Ze,[t("div",Me,[n(w(ve),{pdf:w(W),page:r.value,"fit-parent":"",onLoaded:s.onLoaded},null,8,["pdf","page","onLoaded"])])])):(v(),f("div",We,e[11]||(e[11]=[t("p",{class:"text-center"},"PDF not available for this item.",-1)])))]),t("span",qe,[t("span",Ge,"Author : "+p(((B=_.value)==null?void 0:B.author)||"No Title")+",",1),t("span",Je,p(((j=_.value)==null?void 0:j.year)||"No Title"),1)]),t("div",Oe,[n(y,{rounded:"",label:"Prev",icon:"pi pi-arrow-left",outlined:"",onClick:e[3]||(e[3]=le=>r.value=r.value>1?r.value-1:r.value)}),t("span",Qe,p(r.value)+" / "+p(w(N)),1),n(y,{rounded:"",label:"Next",icon:"pi pi-arrow-right",outlined:"",onClick:e[4]||(e[4]=le=>r.value=r.value<w(N)?r.value+1:r.value)})])]}),_:1},8,["visible"]),n(se,{visible:g.value,"onUpdate:visible":e[9]||(e[9]=l=>g.value=l),modal:"",header:"Filter Data",style:{width:"25rem"}},{default:m(()=>[t("div",Re,[n(T,{modelValue:c.value.start,"onUpdate:modelValue":e[6]||(e[6]=l=>c.value.start=l),options:L.value,optionLabel:"name",optionValue:"value",placeholder:"Start Year",class:"w-full md:w-56"},null,8,["modelValue","options"]),e[12]||(e[12]=t("span",{class:"text-surface-500"},"to",-1)),n(T,{modelValue:c.value.end,"onUpdate:modelValue":e[7]||(e[7]=l=>c.value.end=l),options:q.value,optionLabel:"name",optionValue:"value",placeholder:"End Year",class:"w-full md:w-56"},null,8,["modelValue","options"])]),t("div",Xe,[n(y,{type:"button",label:"Batal",severity:"secondary",onClick:e[8]||(e[8]=l=>g.value=!1)}),n(y,{type:"button",label:"Filter",onClick:S})])]),_:1},8,["visible"])],64)}}};export{lt as default};
