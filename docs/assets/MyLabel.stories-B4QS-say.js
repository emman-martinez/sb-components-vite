import{j as v}from"./jsx-runtime-D_zvdyIk.js";const C=({allCaps:h=!1,color:g,fontColor:x,label:o,size:T="normal"})=>v.jsx("span",{className:`${T} ${g} label`,style:{color:x},children:h?o.toLocaleUpperCase():o});C.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{allCaps:{required:!1,tsType:{name:"boolean"},description:"The allCaps property determines if the label text should be displayed in all uppercase letters.",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:`The color of the label
@default "text-primary"`},fontColor:{required:!1,tsType:{name:"string"},description:"The fontColor of the label"},label:{required:!0,tsType:{name:"string"},description:"The label text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:`The size of the label
@default "normal"`,defaultValue:{value:'"normal"',computed:!1}}}};const q={title:"UI/labels/MyLabel",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"inline-radio"},size:{control:"inline-radio"}}},e={args:{label:"Basic label"}},a={args:{label:"All Caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom Color label",fontColor:"#5517ac"}};var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Basic label"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var c,i,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "All Caps label",
    allCaps: true
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: "Secondary label",
    color: "text-secondary"
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var b,y,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: "Custom Color label",
    fontColor: "#5517ac"
  }
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const A=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,A as __namedExportsOrder,q as default};
