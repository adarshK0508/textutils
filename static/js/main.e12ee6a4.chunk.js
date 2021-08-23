(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),o=a.n(r),l=(a(9),a(2)),s=(a(10),a(0));function i(e){return Object(s.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(s.jsxs)("div",{className:"container-fluid",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),Object(s.jsxs)("div",{className:"form-check form-switch text-".concat(e.textColor),children:[Object(s.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(s.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function b(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(s.jsx)("h1",{children:e.heading}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},id:"myBox",rows:"8",style:{backgroundColor:"dark"===e.mode?"#404040":"white",color:"dark"===e.mode?"white":"#042743"}})}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){r("")},children:"Clear text"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy text"}),Object(s.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove extra spaces"})]}),Object(s.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(s.jsx)("h2",{children:"Your text summary"}),Object(s.jsxs)("p",{children:[c.split(" ").length," words and ",c.length," characters"]}),Object(s.jsxs)("p",{children:[.008*c.split(" ").length," minutes read"]}),Object(s.jsx)("h2",{children:"Preview"}),Object(s.jsx)("p",{children:c.length>0?c:"Enter something in the textbox above to preview it here"})]})]})}i.defaultProps={title:"Your title here",aboutText:"Your aboutText here"};var d=function(){var e=Object(n.useState)("light"),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("dark"),o=Object(l.a)(r,2),d=o[0],j=o[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(i,{title:"TextUtils",aboutText:"About Me",mode:a,toggleMode:function(){"light"===a?(c("dark"),j("light"),document.body.style.backgroundColor="#042743"):(c("light"),j("dark"),document.body.style.backgroundColor="white")},textColor:d}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)(b,{heading:"Enter the text to analyze below",textColor:d,mode:a})})]})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),j()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.e12ee6a4.chunk.js.map