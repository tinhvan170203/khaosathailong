import{r as j,j as e,d as R,k as L,m as I,u as Q,Q as C}from"./index-af889cc1.js";import{d as G}from"./GridView-81a883b8.js";import"./index.esm-a80e06b2.js";import{u as $,C as K}from"./index.esm-c3d487d5.js";import{d as z}from"./Add-2c2882de.js";import{S as J,D as U,a as X,h as Y,d as Z,b as ee,c as se,f as te,g as ae,e as le}from"./DialogDelete-4539fb54.js";import{I as k,a as E,c as D,d as h,e as v,f as re,P as ne,h as oe,i as ie,j as de,k as ce,u as ue,l as w,m as O,n as B,o as _}from"./LastPage-dd44c61f.js";import{S as q}from"./Switch-1ae57a2d.js";import{B as y}from"./Button-37b8afe6.js";import{s as he}from"./ButtonBase-df984b9e.js";import{k as N}from"./khoiApi-2479baca.js";import"./createSvgIcon-c7fd463f.js";const ge=j.forwardRef(function(t,o){return e.jsx(J,{direction:"up",ref:o,...t})}),xe=he(k)({position:"absolute",right:"16px",top:"4px"});function me({open:r,item:t,onCloseDialogEdit:o,onSubmit:s}){const{register:i,handleSubmit:l,control:d,resetField:m,setValue:p,watch:c,formState:{errors:a}}=$({defaultValues:{tenkhoi:"",thutu:1,status:!0}});j.useEffect(()=>{t&&(p("tenkhoi",t.tenkhoi,{shouldValidate:!0}),p("thutu",t.thutu,{shouldValidate:!0}),p("status",t.status,{shouldValidate:!0}))},[t]);const f=async g=>{if(s){const u={...g,id_edit:t._id};await s(u),o()}};return e.jsx(e.Fragment,{children:e.jsxs(U,{maxWidth:"lg",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(g,u)=>{u!=="backdropClick"&&o(g,u)},open:r,TransitionComponent:ge,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[e.jsxs(X,{style:{display:"flex",borderBottom:"1px solid #ccc",backgroundColor:"rgb(30, 41, 59 )",margin:"0px"},children:[e.jsx(Y,{style:{color:"white",fontSize:"24px",marginRight:"8px"}}),e.jsx("span",{className:"text-white text-[18px]",children:"Chỉnh sửa khối, hệ, lực lượng"}),e.jsx(xe,{onClick:()=>o(),children:e.jsx(Z,{style:{color:"white"}})})]}),e.jsx(ee,{children:e.jsx(E,{children:e.jsxs("form",{className:"mt-2 mx-8",onSubmit:l(f),children:[e.jsxs("div",{className:"flex-col flex",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Khối, hệ, lực lượng: "]}),e.jsx("input",{...i("tenkhoi",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex-col flex md:basis-1/2",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Thứ tự xuất hiện: "]}),e.jsx("input",{...i("thutu",{required:!0}),type:"number",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col flex md:basis-1/2",children:[e.jsx("label",{className:"underline font-semibold",children:"Trạng thái hiển thị:"}),e.jsx(K,{name:"status",control:d,render:({field:{value:g,onChange:u}})=>e.jsx(q,{checked:g,onChange:u})})]})]}),e.jsx(se,{children:e.jsxs(y,{color:"primary",variant:"contained",type:"submit",style:{margin:"4px auto"},children:[e.jsx(z,{}),e.jsx("span",{children:"Cập nhật"})]})})]})})})]})})}const pe=({row:r,page:t,rowsPerPage:o,index:s,onClickOpenDialogEdit:i,onClickOpenDialogDelete:l})=>{j.useState(null);const d=R(m=>m.authReducer.roles_quanlydoanvien);return e.jsxs(D,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(h,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:t*o+s}),e.jsx(h,{className:"border-r border-slate-300",align:"left",children:r.tenkhoi}),e.jsx(h,{className:"border-r border-slate-300",align:"left",children:r.thutu}),e.jsx(h,{className:"border-r border-slate-300",align:"left",children:r.status===!0?e.jsx(y,{color:"success",children:"Đang hiển thị"}):e.jsx(y,{color:"warning",children:"Không hiển thị"})}),e.jsxs(h,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1 hover:bg-slate-500 transition duration-300",style:{width:"180px"},children:[d&&d.includes("sửa mô hình tổ chức")&&e.jsx(y,{variant:"contained",color:"info",size:"small",onClick:()=>i(r),children:e.jsx(te,{style:{fontSize:"20px"}})}),d&&d.includes("xóa mô hình tổ chức")&&e.jsx(y,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>l(r._id),children:e.jsx(ae,{style:{fontSize:"20px"}})})]})]},r._id)};function H(r){const t=ue(),{count:o,page:s,rowsPerPage:i,onPageChange:l}=r,d=a=>{l(a,0)},m=a=>{l(a,s-1)},p=a=>{l(a,s+1)},c=a=>{l(a,Math.max(0,Math.ceil(o/i)-1))};return e.jsxs(E,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(k,{onClick:d,disabled:s===0,"aria-label":"first page",children:t.direction==="rtl"?e.jsx(w,{}):e.jsx(O,{})}),e.jsx(k,{onClick:m,disabled:s===0,"aria-label":"previous page",children:t.direction==="rtl"?e.jsx(B,{}):e.jsx(_,{})}),e.jsx(k,{onClick:p,disabled:s>=Math.ceil(o/i)-1,"aria-label":"next page",children:t.direction==="rtl"?e.jsx(_,{}):e.jsx(B,{})}),e.jsx(k,{onClick:c,disabled:s>=Math.ceil(o/i)-1,"aria-label":"last page",children:t.direction==="rtl"?e.jsx(O,{}):e.jsx(w,{})})]})}H.propTypes={count:v.number.isRequired,onPageChange:v.func.isRequired,page:v.number.isRequired,rowsPerPage:v.number.isRequired};function fe({list:r,onClickOpenDialogEdit:t,onClickOpenDialogDelete:o}){const[s,i]=j.useState(0),[l,d]=j.useState(10),m=s>0?Math.max(0,(1+s)*l-r.length):0,p=(a,f)=>{i(f)},c=a=>{d(parseInt(a.target.value,10)),i(0)};return e.jsxs(e.Fragment,{children:[e.jsx(re,{component:ne,children:e.jsxs(oe,{"aria-label":"custom pagination table",children:[e.jsx(ie,{children:e.jsxs(D,{children:[e.jsx(h,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(h,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Khối, hệ, lực lượng"}),e.jsx(h,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Thứ tự"}),e.jsx(h,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Trạng thái hiển thị"}),e.jsx(h,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",maxWidth:"150px"},children:"Thao tác"})]})}),e.jsxs(de,{children:[(l>0?r.slice(s*l,s*l+l):r).map((a,f)=>e.jsx(pe,{row:a,page:s,rowsPerPage:l,index:f+1,onClickOpenDialogEdit:t,onClickOpenDialogDelete:o},a._id)),m>0&&e.jsx(D,{style:{height:53*m},children:e.jsx(h,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(ce,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:r.length,rowsPerPage:l,page:s,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:p,onRowsPerPageChange:c,ActionsComponent:H,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:f,to:g,count:u}){return`hiển thị ${f} đến ${g} bản ghi trong tổng số ${u!==-1?u:`more than ${g}`} bản ghi`}})})]})}const _e=()=>{L();const[r,t]=j.useState([]),[o,s]=I(),i=Q(),[l,d]=j.useState({status:!1,item:null}),m=()=>{d({...l,status:!1})},p=n=>{d({item:n,status:!0})},[c,a]=j.useState({status:!1,id_Delete:null}),f=n=>{a({status:!0,id_Delete:n})},g=()=>{a({...c,status:!1})},u=()=>{a({...c,status:!1})},{register:S,handleSubmit:F,control:M,resetField:P,watch:be,formState:{errors:je}}=$({defaultValues:{tenkhoi:"",thutu:1,status:!0}});j.useEffect(()=>{(async()=>{try{s(!0);let x=await N.getKhois();t(x.data),setTimeout(()=>{s(!1)},400)}catch(x){x.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(i("/login"),s(!1),C.error(x.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}})()},[]);const V=async n=>{let x={...n};s(!0);try{let b=await N.addKhoi(x);t(b.data.khois),setTimeout(()=>{s(!1)},400),P("tenkhoi"),P("thutu"),P("status"),C.success(b.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(b){C.error(b.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(!1)}},W=async n=>{let x={...n};s(!0);try{let b=await N.editKhoi(x);t(b.data.khois),setTimeout(()=>{s(!1)},400),C.success(b.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(b){C.error(b.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(!1)}},A=async()=>{s(!0);try{let n=await N.deleteKhoi(c.id_Delete);t(n.data.khois),setTimeout(()=>{s(!1)},400),a({...c,status:!1}),C.success(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(n){a({...c,status:!1}),C.error(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),s(!1)}},T=R(n=>n.authReducer.roles_quanlydoanvien);return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(G,{color:"primary",fontSize:"large"}),e.jsx("h4",{className:"font-bold text-gray-800 text-lg",children:"Quản lý khối, hệ, lực lượng"})]}),T&&T.includes("thêm mô hình tổ chức")&&e.jsxs("form",{className:"mt-2 mx-8",onSubmit:F(V),children:[e.jsxs("div",{className:"flex-col flex",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Khối, hệ, lực lượng: "]}),e.jsx("input",{...S("tenkhoi",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex space-x-2",children:[e.jsxs("div",{className:"flex-col flex md:basis-1/2",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Thứ tự xuất hiện: "]}),e.jsx("input",{...S("thutu",{required:!0}),type:"number",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col flex md:basis-1/2",children:[e.jsx("label",{className:"underline font-semibold",children:"Trạng thái sử dụng:"}),e.jsx(K,{name:"status",control:M,render:({field:{value:n,onChange:x}})=>e.jsx(q,{checked:n,onChange:x})})]})]}),e.jsx("div",{className:"md:space-x-2 space-y-2 md:space-y-0 md:block flex flex-col items-center",children:e.jsxs(y,{type:"submit",sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(z,{})," Thêm mới"]})})]}),e.jsx("div",{className:"mt-6 mx-8",children:e.jsx(fe,{list:r,onClickOpenDialogDelete:f,onClickOpenDialogEdit:p})}),e.jsx(me,{open:l.status,item:l.item,onCloseDialogEdit:m,onSubmit:W}),e.jsx(le,{open:c.status,onCloseDialogDelete:u,onConfirmDelete:A,onCancelDelete:g})]})};export{_e as default};
