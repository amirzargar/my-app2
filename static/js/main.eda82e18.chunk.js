(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(4),s=c.n(r),l=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsxs)("label",{className:"form-check-label mx-1",htmlFor:"flexSwitchCheckDefault",children:["light"===e.mode?"dark":"light"," mode"]})]}),Object(o.jsxs)("form",{className:"d-flex",children:[Object(o.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(o.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]})]})]})})}function b(e){var t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],r=c[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsx)("h1",{children:e.defValue}),Object(o.jsxs)("div",{children:[Object(o.jsx)("textarea",{className:"form-control",onChange:function(e){r(e.target.value)},value:a,id:"myBox",rows:"10",style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"#042743"}}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(a.toUpperCase()),e.showAlert("Converted To uppercase!","success")},children:Object(o.jsx)("strong",{children:"Convert to UpperCase"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(a.toLowerCase()),e.showAlert("Converted To lowercase!","success")},children:Object(o.jsx)("strong",{children:"Convert to LowerCase"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(a.bold())},children:Object(o.jsx)("strong",{children:"B"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){r(" "),e.showAlert("Cleared!","success")},children:Object(o.jsx)("strong",{children:"Clear Text"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")},children:Object(o.jsx)("strong",{children:"Copy Text"})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=a.split(/[ ]+/);r(t.join(" ")),e.showAlert("Extra spaces removed!","success")},children:Object(o.jsx)("strong",{children:"-Spaces"})})]})]}),Object(o.jsxs)("div",{className:"container my-3 ",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(o.jsxs)("p",{children:[a.length," no. of characters"]}),Object(o.jsxs)("p",{children:[a.split(" ").length," no of words"]}),Object(o.jsxs)("p",{children:[" ",.08*a.split(" ").length," time to read"]}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Enter Text in the Box above to Preview it!"})]})]})}var d=function(e){return e.alert&&Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.msg]})};var j=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(null),s=Object(l.a)(r,2),j=s[0],h=s[1],m=function(e,t){h({msg:e,type:t}),setTimeout((function(){h(null)}),1400)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtility",mode:c,toggleMode:function(){"light"===c?(a("dark"),document.body.style.backgroundColor="#042743",m("dark mode enabled","success")):(a("light"),document.body.style.backgroundColor="white",m("light mode enabled","success"))}}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)("div",{className:"container my -3",children:Object(o.jsx)(b,{defValue:" Enter the text below for Analyzation!",mode:c,showAlert:m})})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.eda82e18.chunk.js.map