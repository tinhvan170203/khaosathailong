import{r as g,j as e,d as G,m as ue,k as ge,u as me,Q as j}from"./index-af889cc1.js";import{d as xe}from"./GridView-81a883b8.js";import{c as pe}from"./chidoanApi-f62ed492.js";import{d as A}from"./Search-2a58d6d5.js";import"./index.esm-a80e06b2.js";import{u as Y,C as D}from"./index.esm-c3d487d5.js";import{d as U}from"./Add-2c2882de.js";import{d as fe}from"./Close-b74d4c7a.js";import{q as be}from"./base-e8aaf39e.js";import{S as ke,D as ye,a as je,h as Ce,d as Ne,b as ve,c as De,f as Se,g as Te,e as Pe}from"./DialogDelete-4539fb54.js";import{S}from"./react-select.esm-34b6099d.js";import{I as N,a as X,c as $,d,e as O,f as Be,P as we,h as _e,i as Oe,j as He,k as Qe,u as qe,l as W,m as F,n as I,o as L}from"./LastPage-dd44c61f.js";import{B as T}from"./Button-37b8afe6.js";import{s as $e}from"./ButtonBase-df984b9e.js";import{k as w}from"./khenthuongApi-ef658fa2.js";import{d as Re}from"./dayjs.min-f7728a8e.js";import{D as ze}from"./DialogEditKhentapthe-b876d51f.js";import{C as Ee,d as Ke}from"./FileDownload-0dedbaf1.js";import"./createSvgIcon-c7fd463f.js";import"./Link-f05ffa2b.js";const Ve=g.forwardRef(function(i,m){return e.jsx(ke,{direction:"up",ref:m,...i})}),Me=$e(N)({position:"absolute",right:"16px",top:"4px"});function Ae({open:s,onCloseDialogAdd:i,onSubmit:m,chidoans:r}){const{register:x,handleSubmit:c,control:p,resetField:f,setValue:v,watch:k,formState:{errors:u}}=Y({defaultValues:{}});g.useState([]);const o=async b=>{if(m){const y={...b};await m(y),i(),f("soQD"),f("noidung")}};return e.jsx(e.Fragment,{children:e.jsxs(ye,{maxWidth:"xl",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(b,y)=>{y!=="backdropClick"&&i(b,y)},open:s,TransitionComponent:Ve,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[e.jsxs(je,{style:{display:"flex",borderBottom:"1px solid #ccc",backgroundColor:"rgb(30, 41, 59 )",margin:"0px"},children:[e.jsx(Ce,{style:{color:"white",fontSize:"24px",marginRight:"8px"}}),e.jsx("span",{className:"text-white text-[18px]",children:"Thêm mới khen thưởng tập thể"}),e.jsx(Me,{onClick:()=>i(),children:e.jsx(Ne,{style:{color:"white"}})})]}),e.jsx(ve,{children:e.jsx(X,{children:e.jsx("form",{className:"mt-2 mx-8",onSubmit:c(o),children:e.jsxs("div",{className:"flex flex-wrap xl:flex-row flex-col flex-1 p-2",children:[e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Số QĐ khen thưởng: "]}),e.jsx("input",{...x("soQD",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Ngày ký: "]}),e.jsx("input",{...x("ngayky",{required:!0}),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Người ký: "]}),e.jsx("input",{...x("nguoiky",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Nội dung khen thưởng: "]}),e.jsx("input",{...x("noidung",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/2 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Hình thức khen: "]}),e.jsx(D,{control:p,name:"hinhthuc",render:({field:b})=>e.jsx(S,{options:[{label:"Giấy khen",value:"Giấy khen"},{label:"Bằng khen",value:"Bằng khen"},{label:"Cờ",value:"Cờ"},{label:"Huân chương",value:"Huân chương"},{label:"Huy chương",value:"Huy chương"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn hình thức",required:!0,...b})})]}),e.jsxs("div",{className:"flex-col md:basis-1/2 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"}),"Cấp khen: "]}),e.jsx(D,{control:p,name:"capkhen",render:({field:b})=>e.jsx(S,{options:[{label:"Công an tỉnh",value:"Công an tỉnh"},{label:"UBND tỉnh",value:"UBND tỉnh"},{label:"Tỉnh đoàn",value:"Tỉnh đoàn"},{label:"Ban thanh niên Công an tỉnh",value:"Ban thanh niên Công an tỉnh"},{label:"Bộ Công an",value:"Bộ Công an"},{label:"Trung ương",value:"Trung ương"},{label:"Chính phủ",value:"Chính phủ"},{label:"Khác",value:"Khác"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn cấp khen",required:!0,...b})})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"}),"Tập thể được khen thưởng: "]}),e.jsx(D,{control:p,name:"nhomchidoanduockhenthuong",render:({field:b})=>e.jsx(S,{isMulti:!0,options:r,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn chi đoàn được khen",required:!0,...b})})]}),e.jsx(De,{children:e.jsxs(T,{color:"primary",variant:"contained",type:"submit",style:{margin:"4px auto"},children:[e.jsx(U,{}),e.jsx("span",{children:"Thêm mới"})]})})]})})})})]})})}const We=({row:s,page:i,rowsPerPage:m,index:r,onClickOpenDialogEdit:x,onClickOpenDialogDelete:c})=>{g.useState(null);const p=G(f=>f.authReducer.roles_quanlydoanvien);return e.jsxs($,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:i*m+r}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:s.soQD})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.hinhthuc}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.capkhen}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.nguoiky}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.nhomchidoanduockhenthuong.map(f=>e.jsxs("span",{children:[f.tenchidoan," ,"]},f._id))}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:Re(s.ngayky).format("DD/MM/YYYY")}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.noidung}),e.jsxs(d,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1 hover:bg-slate-500 transition duration-300",style:{width:"180px"},children:[p&&p.includes("sửa khen thưởng, kỉ luật")&&e.jsx(T,{variant:"contained",color:"info",size:"small",onClick:()=>x(s),children:e.jsx(Se,{style:{fontSize:"20px"}})}),p&&p.includes("xóa khen thưởng, kỉ luật")&&e.jsx(T,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>c(s._id),children:e.jsx(Te,{style:{fontSize:"20px"}})})]})]},s._id)};function J(s){const i=qe(),{count:m,page:r,rowsPerPage:x,onPageChange:c}=s,p=u=>{c(u,0)},f=u=>{c(u,r-1)},v=u=>{c(u,r+1)},k=u=>{c(u,Math.max(0,Math.ceil(m/x)-1))};return e.jsxs(X,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(N,{onClick:p,disabled:r===0,"aria-label":"first page",children:i.direction==="rtl"?e.jsx(W,{}):e.jsx(F,{})}),e.jsx(N,{onClick:f,disabled:r===0,"aria-label":"previous page",children:i.direction==="rtl"?e.jsx(I,{}):e.jsx(L,{})}),e.jsx(N,{onClick:v,disabled:r>=Math.ceil(m/x)-1,"aria-label":"next page",children:i.direction==="rtl"?e.jsx(L,{}):e.jsx(I,{})}),e.jsx(N,{onClick:k,disabled:r>=Math.ceil(m/x)-1,"aria-label":"last page",children:i.direction==="rtl"?e.jsx(F,{}):e.jsx(W,{})})]})}J.propTypes={count:O.number.isRequired,onPageChange:O.func.isRequired,page:O.number.isRequired,rowsPerPage:O.number.isRequired};function Fe({list:s,onClickOpenDialogEdit:i,onClickOpenDialogDelete:m}){const[r,x]=g.useState(0),[c,p]=g.useState(10),f=r>0?Math.max(0,(1+r)*c-s.length):0,v=(u,o)=>{x(o)},k=u=>{p(parseInt(u.target.value,10)),x(0)};return e.jsxs(e.Fragment,{children:[e.jsx(Be,{component:we,children:e.jsxs(_e,{"aria-label":"custom pagination table",children:[e.jsx(Oe,{children:e.jsxs($,{children:[e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Cấp khen"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Tập thể được khen"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung khen"}),e.jsx(d,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",maxWidth:"150px"},children:"Thao tác"})]})}),e.jsxs(He,{children:[(c>0?s.slice(r*c,r*c+c):s).map((u,o)=>e.jsx(We,{row:u,page:r,rowsPerPage:c,index:o+1,onClickOpenDialogEdit:i,onClickOpenDialogDelete:m},u._id)),f>0&&e.jsx($,{style:{height:53*f},children:e.jsx(d,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(Qe,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:s.length,rowsPerPage:c,page:r,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:v,onRowsPerPageChange:k,ActionsComponent:J,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:o,to:b,count:y}){return`hiển thị ${o} đến ${b} bản ghi trong tổng số ${y!==-1?y:`more than ${b}`} bản ghi`}})})]})}let Ie=[{label:"STT",key:"stt"},{label:"Số quyết định",key:"soQD"},{label:"Hình thức",key:"hinhthuc"},{label:"Cấp khen",key:"capkhen"},{label:"Người ký",key:"nguoiky"},{label:"Tập thể được khen",key:"nhomchidoanduockhenthuong"},{label:"Ngày ký",key:"ngayky"},{label:"Nội dung khen",key:"noidung"}];const fn=()=>{const[s,i]=g.useState([]),[m,r]=g.useState([]),[x,c]=g.useState(!1),[p,f]=g.useState([]);let[v,k]=g.useState([]);const[u,o]=ue();let[b,y]=ge();const[R,z]=g.useState({status:!1}),E=me(),Z=n=>{z({status:!0})},ee=()=>{z({...R,status:!1})},[H,K]=g.useState({status:!1,item:null}),[C,P]=g.useState({status:!1,id_Delete:null}),ne=n=>{K({item:n,status:!0})},ae=()=>{K({...H,status:!1})},se=()=>{P({...C,status:!1})},le=()=>{P({...C,status:!1})},te=n=>{P({status:!0,id_Delete:n})};g.useEffect(()=>{(async()=>{try{let l=await pe.getChidoanOfUser();r(l.data.map(a=>({label:a.tenchidoan,value:a._id}))),f([{label:"Tất cả",value:""}].concat(l.data.map(a=>({value:a._id,label:a.tenchidoan}))))}catch(l){l.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(E("/login"),j.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})),console.log(l.message)}})()},[]);const{register:B,handleSubmit:oe,control:Q,resetField:Le,setValue:Ge,watch:V,formState:{errors:Ye}}=Y({defaultValues:{hinhthuc:{label:"Tất cả",value:""},capkhen:{label:"Tất cả",value:""},nhomchidoanduockhenthuong:{label:"Tất cả",value:""}}}),ie=n=>{y({..._,...n,capkhen:n.capkhen.value,hinhthuc:n.hinhthuc.value,nhomchidoanduockhenthuong:n.nhomchidoanduockhenthuong.value})},_=g.useMemo(()=>{const n=be.parse(location.search);return{...n,soQD:n.soQD||"",ngayky:n.ngayky||"",nguoiky:n.nguoiky||"",noidung:n.noidung||"",hinhthuc:n.hinhthuc||"",capkhen:n.capkhen||"",tungay:n.tungay||"",denngay:n.denngay||"",nhomchidoanduockhenthuong:n.nhomchidoanduockhenthuong||""}},[location.search]);g.useEffect(()=>{(async()=>{try{o(!0);let l=await w.getKhentapthes(_);i(l.data),k(l.data.map((a,t)=>({stt:t+1,soQD:a.soQD,ngayky:a.ngayky,noidung:a.noidung,nguoiky:a.nguoiky,hinhthuc:a.hinhthuc,capkhen:a.capkhen,nhomchidoanduockhenthuong:a.nhomchidoanduockhenthuong.map(h=>h.tenchidoan).toString()}))),setTimeout(()=>{o(!1)},400)}catch(l){l.message==="Token không hợp lệ hoặc đã hết hạn. Vui lòng đăng nhập lại"&&(E("/login"),o(!1),j.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})),console.log(l.message)}})()},[_]);const re=async n=>{try{o(!0),await w.addKhentapthe(n);let l=await w.getKhentapthes(_);i(l.data),k(l.data.map((a,t)=>({stt:t+1,soQD:a.soQD,ngayky:a.ngayky,noidung:a.noidung,hinhthuc:a.hinhthuc,nguoiky:a.nguoiky,capkhen:a.capkhen,nhomchidoanduockhenthuong:a.nhomchidoanduockhenthuong.map(h=>h.tenchidoan).toString()}))),o(!1),j.success(l.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(l){j.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),o(!1)}},ce=async()=>{o(!0);try{let n=await w.deleteKhentapthe(C.id_Delete),a=[...s].filter(t=>t._id.toString()!==C.id_Delete);i(a),k(a.map((t,h)=>({stt:h+1,soQD:t.soQD,ngayky:t.ngayky,nguoiky:t.nguoiky,noidung:t.noidung,hinhthuc:t.hinhthuc,capkhen:t.capkhen,nhomchidoanduockhenthuong:t.nhomchidoanduockhenthuong.map(q=>q.tenchidoan).toString()}))),setTimeout(()=>{o(!1)},400),P({...C,status:!1}),j.success(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(n){P({...C,status:!1}),j.error(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),o(!1)}},de=async n=>{try{o(!0);let l=await w.editKhentapthe(n),a=[...s],t=s.findIndex(h=>h._id.toString()===n.id_edit);a[t].soQD=n.soQD,a[t].ngayky=n.ngayky,a[t].hinhthuc=n.hinhthuc.value,a[t].capkhen=n.capkhen.value,a[t].nguoiky=n.nguoiky,a[t].noidung=n.noidung,a[t].nhomchidoanduockhenthuong=n.nhomchidoanduockhenthuong.map(h=>({_id:h.value,tenchidoan:h.label})),i(a),k(a.map((h,q)=>({stt:q+1,soQD:h.soQD,ngayky:h.ngayky,noidung:h.noidung,hinhthuc:h.hinhthuc,nguoiky:h.nguoiky,capkhen:h.capkhen,nhomchidoanduockhenthuong:h.nhomchidoanduockhenthuong.map(he=>he.tenchidoan).toString()}))),o(!1),j.success(l.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(l){j.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),o(!1)}},M=G(n=>n.authReducer.roles_quanlydoanvien);return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(xe,{color:"primary",fontSize:"large"}),e.jsx("h4",{className:"font-bold text-gray-800 text-lg",children:"Quản lý khen thưởng đối với tập thể chi đoàn, liên chi đoàn"})]}),e.jsxs("div",{className:"mt-4 text-end md:space-x-2 space-y-2 md:space-y-0 md:block flex flex-col items-center",children:[M&&M.includes("thêm khen thưởng, kỉ luật")&&e.jsxs(T,{type:"submit",sx:{width:"350px",backgroundColor:"gray"},onClick:()=>Z(),color:"primary",variant:"contained",children:[e.jsx(U,{})," Thêm mới khen thưởng tập thể"]}),e.jsxs(T,{sx:{width:"300px",backgroundColor:"darkgray"},onClick:()=>c(!0),color:"info",variant:"contained",children:[e.jsx(A,{})," Chức năng tìm kiếm nâng cao"]}),e.jsx(N,{children:e.jsx(Ee,{data:v,headers:Ie,filename:`danhsachkhentapthe_${V("tungay")}_${V("denngay")}`,children:e.jsxs("div",{className:"flex items-center shadow-md space-x-2 bg-green-300 px-2 py-1 rounded-md",children:[e.jsx(Ke,{}),e.jsx("span",{className:"text-sm text-green-800",children:"Xuất file excel"})]})})})]}),x&&e.jsxs("form",{onSubmit:oe(ie),className:"my-2 mt-4 mx-8 bg-slate-100 p-4 rounded-lg shadow-xl","data-aos":"zoom-in-down","data-aos-once":"true",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h5",{className:"text-[18px] font-semibold",children:"Tìm kiếm nâng cao"}),e.jsx(N,{onClick:()=>c(!1),sx:{backgroundColor:"#333"},children:e.jsx(fe,{sx:{color:"white"}})})]}),e.jsxs("div",{className:"flex flex-wrap xl:flex-row flex-col flex-1 p-2",children:[e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Số QĐ khen thưởng: "}),e.jsx("input",{...B("soQD"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                    focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Từ ngày: "}),e.jsx("input",{...B("tungay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Đến ngày: "}),e.jsx("input",{...B("denngay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Người ký: "}),e.jsx("input",{...B("nguoiky"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Nội dung khen thưởng: "}),e.jsx("input",{...B("noidung"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Hình thức khen: "}),e.jsx(D,{control:Q,name:"hinhthuc",render:({field:n})=>e.jsx(S,{options:[{label:"Tất cả",value:""},{label:"Giấy khen",value:"Giấy khen"},{label:"Bằng khen",value:"Bằng khen"},{label:"Cờ",value:"Cờ"},{label:"Huân chương",value:"Huân chương"},{label:"Huy chương",value:"Huy chương"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn hình thức",...n})})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Cấp khen: "}),e.jsx(D,{control:Q,name:"capkhen",render:({field:n})=>e.jsx(S,{options:[{label:"Tất cả",value:""},{label:"Công an tỉnh",value:"Công an tỉnh"},{label:"Tỉnh đoàn",value:"Tỉnh đoàn"},{label:"Ban thanh niên Công an tỉnh",value:"Ban thanh niên Công an tỉnh"},{label:"Bộ Công an",value:"Bộ Công an"},{label:"Trung ương",value:"Trung ương"},{label:"Chính phủ",value:"Chính phủ"},{label:"Khác",value:"Khác"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn cấp khen",...n})})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Tập thể được khen thưởng: "}),e.jsx(D,{control:Q,name:"nhomchidoanduockhenthuong",render:({field:n})=>e.jsx(S,{options:p,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Tất cả",...n})})]})]}),e.jsx("div",{className:"my-2 text-center",children:e.jsxs(T,{sx:{width:"200px",backgroundColor:"slategray"},type:"submit",color:"info",variant:"contained",children:[e.jsx(A,{})," Tìm kiếm"]})})]}),e.jsxs("div",{className:"mt-6 mx-8",children:[e.jsx("h3",{className:"text-center my-4 text-xl",children:"Danh sách kết quả khen thưởng đối với tập thể"}),e.jsx(Fe,{list:s,onClickOpenDialogDelete:te,onClickOpenDialogEdit:ne})]}),e.jsx(Ae,{open:R.status,onSubmit:re,onCloseDialogAdd:ee,chidoans:m}),e.jsx(ze,{open:H.status,item:H.item,onSubmit:de,onCloseDialogEdit:ae,chidoans:m}),e.jsx(Pe,{open:C.status,onCloseDialogDelete:le,onConfirmDelete:ce,onCancelDelete:se})]})};export{fn as default};
