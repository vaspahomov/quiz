(this["webpackJsonp13.quiz"]=this["webpackJsonp13.quiz"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(2),o=t.n(l),s=(t(13),t(3)),c=t(4),i=t(6),m=t(5),d=t(7),u=(t(14),t(15),function(e){function a(){var e;return Object(s.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={questions:[]},e}return Object(d.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3000/questions",{headers:{}}).then((function(a){a.json().then((function(a){console.log(a),e.setState({questions:a})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Navbar"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Link")),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Dropdown"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement("a",{className:"dropdown-item",href:"#"},"Action"),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action"),r.a.createElement("div",{className:"dropdown-divider"}),r.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link disabled",href:"#"},"Disabled"))),r.a.createElement("form",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{display:"flex","flex-wrap":"wrap"}},this.state.questions?this.state.questions.map((function(e,a){return r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top",src:"./images/".concat(e.image),alt:"Card image cap"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.question),r.a.createElement("div",null,e.answers.map((function(e,t){return r.a.createElement("div",{className:"custom-control custom-radio"},r.a.createElement("input",{type:"radio",id:"customRadio"+t,name:"customRadio"+a,className:"custom-control-input",checked:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customRadio"+t},e))}))))))})):void 0)),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.0b72586e.chunk.js.map