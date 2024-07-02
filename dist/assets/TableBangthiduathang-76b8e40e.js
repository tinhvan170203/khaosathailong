import{r as f,j as e}from"./index-af889cc1.js";import{e as h,f as w,P as C,h as N,i as T,c as p,d as r,j as k,k as W,u as S,a as R,I as b,l as j,m,n as u,o as P}from"./LastPage-dd44c61f.js";import{d as $}from"./dayjs.min-f7728a8e.js";import{d as B}from"./Flag-dbb098c8.js";import{B as v}from"./Button-37b8afe6.js";import{T as _}from"./Tooltip-0cb4e158.js";const M=o=>o.map((a,l)=>e.jsx(r,{className:"border-r border-slate-300",align:"center",children:a[`thang${l+1}`].result==="null"?"":e.jsx(_,{title:a[`thang${l+1}`].ghichu,children:e.jsx(B,{sx:{color:a[`thang${l+1}`].result}})})},l));function y(o){const a=S(),{count:l,page:n,rowsPerPage:c,onPageChange:d}=o,x=t=>{d(t,0)},s=t=>{d(t,n-1)},i=t=>{d(t,n+1)},g=t=>{d(t,Math.max(0,Math.ceil(l/c)-1))};return e.jsxs(R,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:x,disabled:n===0,"aria-label":"first page",children:a.direction==="rtl"?e.jsx(j,{}):e.jsx(m,{})}),e.jsx(b,{onClick:s,disabled:n===0,"aria-label":"previous page",children:a.direction==="rtl"?e.jsx(u,{}):e.jsx(P,{})}),e.jsx(b,{onClick:i,disabled:n>=Math.ceil(l/c)-1,"aria-label":"next page",children:a.direction==="rtl"?e.jsx(P,{}):e.jsx(u,{})}),e.jsx(b,{onClick:g,disabled:n>=Math.ceil(l/c)-1,"aria-label":"last page",children:a.direction==="rtl"?e.jsx(m,{}):e.jsx(j,{})})]})}y.propTypes={count:h.number.isRequired,onPageChange:h.func.isRequired,page:h.number.isRequired,rowsPerPage:h.number.isRequired};function E({list:o}){const[a,l]=f.useState(0),[n,c]=f.useState(10);a>0&&Math.max(0,(1+a)*n-o.length);const d=(s,i)=>{l(i)},x=s=>{c(parseInt(s.target.value,10)),l(0)};return e.jsxs(e.Fragment,{children:[e.jsx(w,{component:C,children:e.jsxs(N,{"aria-label":"custom pagination table",children:[e.jsx(T,{children:e.jsxs(p,{children:[e.jsx(r,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(r,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Họ tên"}),e.jsx(r,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày sinh"}),e.jsx(r,{align:"center",colSpan:12,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Tháng"}),e.jsx(r,{align:"right",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Chi tiết"})]})}),e.jsxs(k,{children:[e.jsxs(p,{children:[e.jsx(r,{}),e.jsx(r,{}),e.jsx(r,{align:"center",className:"border-r border-slate-300"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"1"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"2"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"3"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"4"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"5"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"6"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"7"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"8"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"9"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"10"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"11"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12",style:{fontWeight:"bold"},children:"12"}),e.jsx(r,{align:"center",className:"border-r border-slate-300 w-12"})]}),(n>0?o.slice(a*n,a*n+n):o).map((s,i)=>e.jsxs(p,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(r,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:a*n+i+1}),e.jsx(r,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:s.hoten})}),e.jsx(r,{className:"border-r border-slate-300",align:"left",children:$(s.ngaysinh).format("DD/MM/YYYY")}),M(s.resultThiduathang),e.jsx(r,{className:"border-r border-slate-300",align:"right",children:e.jsx(v,{variant:"contained",color:"info",size:"small",onClick:()=>window.open(`/dashboard/thong-tin-doan-vien/${s._id}`,"_blank","noreferrer"),children:"Trang cá nhân"})})]},s._id))]})]})}),e.jsx("div",{children:e.jsx(W,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:o.length,rowsPerPage:n,page:a,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:d,onRowsPerPageChange:x,ActionsComponent:y,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:i,to:g,count:t}){return`hiển thị ${i} đến ${g} bản ghi trong tổng số ${t!==-1?t:`more than ${g}`} bản ghi`}})})]})}export{E as T};
