(this["webpackJsonppost-app"]=this["webpackJsonppost-app"]||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),i=n(13),o=n(14),l=n(16),d=n(15),b=n(3),j=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("span",{className:"navbar-brand mb-0 h1",children:"Ku Ku "})})}),Object(b.jsx)("main",{className:"container"})]})}}]),n}(a.Component),m=n(41),u=n(93),h=n(98),p=n(40),O=n.n(p),x=n(97);function f(){return Math.round(20*Math.random())-10}function g(){var e=50+f(),t=50+f();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var v=Object(u.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function y(){var e=v(),t=c.a.useState(g),n=Object(m.a)(t,1)[0],a=c.a.useState(!1),r=Object(m.a)(a,2),s=r[0],i=r[1],o=Object(b.jsxs)("div",{style:n,className:e.paper,children:[Object(b.jsx)("h2",{id:"simple-modal-title",children:"Text in a modal"}),Object(b.jsx)("p",{id:"simple-modal-description",children:"Edit the post"}),Object(b.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(b.jsx)(x.a,{id:"filled-basic",label:"Filled",variant:"filled"})})]});return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"btn-warning btn-sm m-2",style:{padding:"2px 4px"},"data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:function(){i(!0)},children:Object(b.jsx)(O.a,{fontSize:"small",children:"add_circle"})}),Object(b.jsx)(h.a,{open:s,onClose:function(){i(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:o})]})}var k=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={open:!1,setOpen:!1,currentDateTime:Date().toLocaleString(),count:0},e.incrementMe=function(){var t=e.state.count+1;e.setState({count:t})},e.decrementMe=function(){if(e.state.count>0){var t=e.state.count-1;e.setState({count:t})}},e.modal=function(){var e=document.getElementById("myModal"),t=document.getElementById("myInput");e.addEventListener("shown.bs.modal",(function(){t.focus()}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)("link",{rel:"stylesheet",href:"//cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css"}),Object(b.jsx)("center",{children:Object(b.jsxs)("div",{children:[Object(b.jsxs)("h6",{children:["Abbas",Object(b.jsx)("small",{className:"ml-4 text-muted",children:Object(b.jsx)("i",{className:"mdi mdi-clock mr-1"})})]}),Object(b.jsx)("div",{style:{backgroundColor:"lightblue",width:"600px",padding:"25px",overflow:"hidden"},children:this.props.context}),Object(b.jsxs)("span",{className:"badge badge-pill badge-sm m-2",children:["\u2665",this.state.count]}),Object(b.jsx)("button",{onClick:this.incrementMe,className:"btn-danger btn-sm m-2",children:"Like"}),Object(b.jsx)("button",{onClick:this.decrementMe,className:"btn-danger btn-sm m-2",children:"Dislike"}),Object(b.jsx)(y,{}),Object(b.jsx)("hr",{})]})}),Object(b.jsx)("br",{})]})}}]),n}(a.Component),N=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={context:[],currentDateTime:Date().toLocaleString()},e.getPostContext=function(){var t=document.getElementById("postArea").value;e.setState({context:e.state.context.concat(t)}),e.setState({currentDateTime:Date().toLocaleString()}),console.log(t)},e.handleDelete=function(t){var n=e.state.context.filter((function(e){return e!==t}));e.setState(n)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsxs)("div",{className:"form-outline",children:[Object(b.jsx)("label",{className:"form-label",children:"Post Anything!"}),Object(b.jsx)("textarea",{style:{width:683},className:"form-control",id:"postArea",rows:"4",placeholder:"Write anything!"}),Object(b.jsx)("center",{children:Object(b.jsx)("button",{onClick:this.getPostContext,className:"btn-primary btn-sm m-2",children:"Post"})})]}),Object(b.jsx)("div",{id:"display",children:this.state.context.map((function(t){return Object(b.jsx)(k,{context:t,currentDateTime:e.state.currentDateTime},t.key)}))})]})}}]),n}(a.Component),w=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(c.a.Fragment,{children:[Object(b.jsx)(j,{}),Object(b.jsx)(N,{})]})}}]),n}(a.Component);n(61);s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.849318ad.chunk.js.map