import{r as o,j as e,m as G,u as X,d as J,Q as D}from"./index-cb7c9cfe.js";import{d as K}from"./GridView-9d203a73.js";import"./index.esm-a80e06b2.js";import{d as W}from"./Add-a4ffd767.js";import{S as $}from"./react-select.esm-582e497c.js";import{c as w}from"./canboApi-0b5763d3.js";import{c as B,d as c,e as T,f as U,P as Z,h as ee,i as ae,j as te,k as le,u as ne,a as se,I as k,l as I,m as M,n as q,o as z}from"./LastPage-dbb82f1e.js";import"./dayjs.min-e2ae2d72.js";import{B as H}from"./Button-6c93a4ab.js";import"./createSvgIcon-fd86aae4.js";import"./ButtonBase-378bd36d.js";const re=({row:l,page:h,rowsPerPage:p,index:u,onHandleChangeItem:d,onHandleChangeText:x})=>{o.useState(null);const[r,f]=o.useState("null"),[m,b]=o.useState("");o.useEffect(()=>{l&&(f(l.thiduathang.result),b(l.thiduathang.ghichu))},[l]);const n=g=>{f(g.target.value),d(l,g.target.value)},j=g=>{b(g.target.value),x(l,g.target.value)};return e.jsxs(B,{children:[e.jsx(c,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:h*p+u}),e.jsx(c,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l.hoten}),e.jsx(c,{className:"border-r border-slate-300",align:"left",children:l.bachamPopulate[0].bacham}),e.jsx(c,{className:"border-r border-slate-300",align:"left",children:e.jsx("p",{className:"truncate",children:l.donviPopulate[0].tendonvi})}),e.jsx(c,{className:"border-r border-slate-300",align:"left",children:e.jsxs("select",{className:"outline-none p-2 w-full",onChange:g=>n(g),value:r,children:[e.jsx("option",{value:"null",children:"Chưa phân loại"}),e.jsx("option",{value:"red",children:"Cờ đỏ"}),e.jsx("option",{value:"blue",children:"Cờ xanh"}),e.jsx("option",{value:"yellow",children:"Cờ vàng"})]})}),e.jsx(c,{className:"border-r border-slate-300",align:"left",children:e.jsx("input",{type:"text",className:"w-full border p-2 rounded-md",value:m,onChange:g=>j(g)})})]},l._id)};function L(l){const h=ne(),{count:p,page:u,rowsPerPage:d,onPageChange:x}=l,r=n=>{x(n,0)},f=n=>{x(n,u-1)},m=n=>{x(n,u+1)},b=n=>{x(n,Math.max(0,Math.ceil(p/d)-1))};return e.jsxs(se,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(k,{onClick:r,disabled:u===0,"aria-label":"first page",children:h.direction==="rtl"?e.jsx(I,{}):e.jsx(M,{})}),e.jsx(k,{onClick:f,disabled:u===0,"aria-label":"previous page",children:h.direction==="rtl"?e.jsx(q,{}):e.jsx(z,{})}),e.jsx(k,{onClick:m,disabled:u>=Math.ceil(p/d)-1,"aria-label":"next page",children:h.direction==="rtl"?e.jsx(z,{}):e.jsx(q,{})}),e.jsx(k,{onClick:b,disabled:u>=Math.ceil(p/d)-1,"aria-label":"last page",children:h.direction==="rtl"?e.jsx(M,{}):e.jsx(I,{})})]})}L.propTypes={count:T.number.isRequired,onPageChange:T.func.isRequired,page:T.number.isRequired,rowsPerPage:T.number.isRequired};function ie({list:l,onHandleChangeAll:h,onHandleChangeItem:p,onHandleChangeText:u}){const[d,x]=o.useState(0),[r,f]=o.useState(10);d>0&&Math.max(0,(1+d)*r-l.length);const m=(n,j)=>{x(j)},b=n=>{f(parseInt(n.target.value,10)),x(0)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{component:Z,style:{overflowX:"scroll"},children:e.jsxs(ee,{"aria-label":"custom pagination table",children:[e.jsxs(ae,{children:[e.jsxs(B,{children:[e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"250px"},children:"Họ tên"}),e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"120px"},children:"Bậc hàm"}),e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"300px"},children:"Đơn vị công tác"}),e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"120px"},children:"Phân loại"}),e.jsx(c,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"300px"},children:"Ghi chú"})]}),e.jsxs(B,{children:[e.jsx(c,{colSpan:4,className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"}}),e.jsx(c,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e.jsxs("select",{onChange:n=>h(n.target.value),className:"outline-none p-2 w-full",children:[e.jsx("option",{value:"null",children:"Chưa phân loại"}),e.jsx("option",{value:"red",children:"Cờ đỏ"}),e.jsx("option",{value:"blue",children:"Cờ xanh"}),e.jsx("option",{value:"yellow",children:"Cờ vàng"})]})}),e.jsx(c,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"}})]})]}),e.jsx(te,{children:(r>0?l.slice(d*r,d*r+r):l).map((n,j)=>e.jsx(re,{row:n,page:d,rowsPerPage:r,index:j+1,onHandleChangeItem:p,onHandleChangeText:u},n._id))})]})}),e.jsx("div",{children:e.jsx(le,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:l.length,rowsPerPage:r,page:d,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:m,onRowsPerPageChange:b,ActionsComponent:L,labelRowsPerPage:"Số cán bộ hiển thị trên mỗi trang",labelDisplayedRows:function({from:j,to:g,count:C}){return`hiển thị ${j} đến ${g} cán bộ trong tổng số ${C!==-1?C:`more than ${g}`} cán bộ`}})})]})}const je=()=>{const[l,h]=o.useState([]),[p,u]=o.useState(1),[d,x]=o.useState(1),[r,f]=o.useState(1),[m,b]=o.useState(2022),[n,j]=o.useState([]),[g,C]=G(),[N,S]=o.useState([]),[_,O]=o.useState(""),Y=X();o.useEffect(()=>{(async()=>{try{let t=await w.fetchYearMonth();f(t.data.month),u(t.data.month),b(t.data.year),x(t.data.year);let s=[];for(let i=t.data.year;i>=2020;i--)s.push({label:i,value:i});j(s)}catch(t){t.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(Y("/login"),D.error(t.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})),console.log(t.message)}})()},[]);const A=async()=>{try{C(!0);let a=await w.fetchThiduathang({month:r,year:m});S(a.data),h(a.data),u(r),x(m),C(!1)}catch(a){console.log(a.message)}};o.useEffect(()=>{const a=setTimeout(()=>{let s=[...l].filter(i=>i.hoten.toLowerCase().includes(_.toLowerCase()));S(s)},500);return()=>clearTimeout(a)},[_]);const E=a=>{let t=[...N];t=t.map(i=>({...i,thiduathang:{ghichu:i.thiduathang.ghichu,result:a}})),S(t);let s=[...l];for(let i of t){let v=s.findIndex(P=>P._id.toString()===i._id.toString());s[v].thiduathang.result=i.thiduathang.result}h(s)},F=(a,t)=>{let s=[...N],i=s.findIndex(y=>y._id.toString()===a._id.toString());s[i].thiduathang.result=t;let v=[...l],P=s.findIndex(y=>y._id.toString()===a._id.toString());v[P].thiduathang.result=t,h(v),S(s)},V=(a,t)=>{let s=[...N],i=s.findIndex(y=>y._id.toString()===a._id.toString());s[i].thiduathang.ghichu=t,S(s);let v=[...l],P=v.findIndex(y=>y._id.toString()===a._id.toString());v[P].thiduathang.ghichu=t,h(v)},Q=async()=>{let a={doanviens:l,month:p,year:d};try{C(!0);let t=await w.updateThiduathang(a);D.success(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),C(!1)}catch(t){console.log(t.message)}},R=J(a=>a.authReducer.roles_quanlydoanvien);return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(K,{color:"primary",fontSize:"large"}),e.jsxs("h4",{className:"font-bold text-gray-800 text-lg",children:["Quản lý thi đua tháng ",p," - ",d]})]}),e.jsxs("div",{className:"flex space-x-2 md:flex-row justify-end items-start",children:[e.jsxs("div",{className:"flex-col flex md:basis-1/6",children:[e.jsx("label",{className:"underline font-semibold",children:"Tháng:"}),e.jsx($,{value:{label:r,value:r},required:!0,name:"thang",options:[{label:1,value:1},{label:2,value:2},{label:3,value:3},{label:4,value:4},{label:5,value:5},{label:6,value:6},{label:7,value:7},{label:8,value:8},{label:9,value:9},{label:10,value:10},{label:11,value:11},{label:12,value:12}],className:"basic-multi-select my-4",classNamePrefix:"select",onChange:a=>f(a.value)})]}),e.jsxs("div",{className:"flex-col flex md:basis-1/6",children:[e.jsx("label",{className:"underline font-semibold",children:"Năm:"}),e.jsx($,{value:{label:m,value:m},required:!0,name:"nam",options:n,className:"basic-multi-select my-4",classNamePrefix:"select",onChange:a=>b(a.value)})]}),e.jsx("div",{className:"flex-col flex md:basis-1/6",children:e.jsxs(H,{onClick:()=>A(),sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(W,{})," Lấy dữ liệu"]})})]}),e.jsxs("div",{className:"mx-8 flex space-x-2 items-center",children:[e.jsx("input",{type:"text",defaultValue:_,onChange:a=>O(a.target.value),placeholder:"Search họ tên",className:"p-2 border rounded-md"}),R&&R.includes("thêm thi đua")&&e.jsxs(H,{onClick:()=>Q(),sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(W,{})," Lưu dữ liệu"]})]}),e.jsx("div",{className:"mt-6 mx-8",children:e.jsx(ie,{list:N,onHandleChangeItem:F,onHandleChangeAll:E,onHandleChangeText:V})})]})};export{je as default};