(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";a.r(t),a.d(t,"url",function(){return n});var n="http://localhost:4020"},36:function(e,t,a){e.exports=a(57)},41:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),l=a.n(c),s=(a(41),a(4)),i=a(5),o=a(7),u=a(6),m=a(8),p=a(11),h=a(10),d=a(19),b=a(18),f=a(34),E=a(1),v=a.n(E),g=a(3),y=a(17),O=function(){return function(){var e=Object(g.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.url,"/clinic/list"),{method:"GET",mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"GETCLINICS",payload:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.url,"/clinic/add"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=Object(b.c)({clinics:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETCLINICS":return Object.assign([],e,t.payload);default:return e}},available:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETAVAILABLE":return Object.assign([],e,t.payload);default:return e}}}),C=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"mt-5 "},r.a.createElement("ul",{className:"nav justify-content-center"},r.a.createElement(h.b,{className:"nav-item btn align-self-start",to:"/"},"Tawun Fil Sahiyyati"),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"nav-link btn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Clinics"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(h.b,{className:"nav-item btn",to:"/add-clinic"},"Add clinic"),r.a.createElement(h.b,{className:"nav-item btn",to:"/list-clinic"},"List clinic"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"nav-link btn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Daily Updates"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(h.b,{className:"nav-item btn",to:"/add-daily-update"},"Add Daily Update"),r.a.createElement(h.b,{className:"nav-item btn",to:"/list-daily-update"},"List Daily Update"))),r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("button",{className:"nav-link btn dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Expenses"),r.a.createElement("div",{className:"dropdown-menu"},r.a.createElement(h.b,{className:"nav-item btn",to:"/add-expense"},"Add Expenses"),r.a.createElement(h.b,{className:"nav-item btn",to:"/list-expense"},"List Expenses")))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getAvailable()}},{key:"render",value:function(){return r.a.createElement("div",null,0!==this.props.available.length?r.a.createElement("div",{className:"mb-4 text-monospace"},"Available Balance : ",new Intl.NumberFormat("en-IN",{maximumSignificantDigits:3}).format(this.props.available[0].available)):null,r.a.createElement("div",{className:"text-monospace"},"Welcome to the Health-Care Management Application"))}}]),t}(n.Component);var x=Object(p.b)(function(e){return{available:e.available}},{getAvailable:function(){return function(){var e=Object(g.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.url,"/available"),{method:"GET",mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,t({type:"GETAVAILABLE",payload:n});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(w),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getClinics()}},{key:"render",value:function(){return r.a.createElement("div",null,0!==this.props.clinics.length?this.props.clinics.map(function(e,t){return r.a.createElement("div",{className:"card",key:t},r.a.createElement("div",{className:"card-header"},"Clinic Name: ",e.name),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-title"},"Address: ",e.address)))}):r.a.createElement("div",{className:"text-monospace"},"No Clinics Available"))}}]),t}(n.Component);var k=Object(p.b)(function(e){return{clinics:e.clinics}},{getClinics:O})(S),D=a(16),T=function(e){return r.a.createElement("p",null,e.text)},M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(D.a)({},e.target.name,e.target.value))},a.submitForm=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,N(a.state);case 4:return e.next=6,a.props.getClinics();case 6:a.setState({success:!0}),setTimeout(function(){return a.setState({success:!1,redirect:!0})},2e3),e.next=15;break;case 10:throw e.prev=10,e.t0=e.catch(1),a.setState({failure:!0}),setTimeout(function(){return a.setState({failure:!1})},2e3),e.t0;case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}(),a.state={name:"",address:"",success:!1,redirect:!1,failure:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitForm},this.state.redirect?r.a.createElement(d.a,{to:"/list-clinic"}):null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Clinic Name"),r.a.createElement("input",{type:"text",onChange:this.handleChange,name:"name",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Clinic Adress"),r.a.createElement("input",{type:"text",name:"address",onChange:this.handleChange,className:"form-control"})),this.state.success?r.a.createElement(T,{text:"Entry successfull, Wait while you will be redirected"}):null,this.state.failure?r.a.createElement(T,{text:"Something went wrong"}):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component);var A=Object(p.b)(function(e){return{clinics:e.clinics}},{getClinics:O})(M),I=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.url,"/daily/add-update"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(g.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y.url,"/daily/list-update/").concat(t.year,"/").concat(t.month,"/").concat(t.clinicId),{mehtod:"GET",mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),P=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(D.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,I(a.state);case 4:a.setState({success:!0}),setTimeout(function(){return a.setState({success:!1,redirect:!0})},2e3),e.next=13;break;case 8:throw e.prev=8,e.t0=e.catch(1),a.setState({failure:!0}),setTimeout(function(){return a.setState({failure:!1})},2e3),e.t0;case 13:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();var n=new Date,r=n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1),c=n.getFullYear(),l=n.getDate()>9?n.getDate():"0".concat(n.getDate());return a.state={date:"".concat(c,"-").concat(r,"-").concat(l),clinicId:"",totalPatients:"",amountCollected:"",redirect:!1,success:!1,failure:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getClinics()}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},this.state.redirect?r.a.createElement(d.a,{to:"/list-daily-update"}):null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",className:"form-control",name:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Clinic"),r.a.createElement("select",{className:"custom-select",name:"clinicId",onChange:this.handleChange},r.a.createElement("option",{default:!0},"select"),this.props.clinics.map(function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.name)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Total Patients"),r.a.createElement("input",{type:"number",placeholder:"40",className:"form-control",name:"totalPatients",value:this.state.totalPatients,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount Collected"),r.a.createElement("input",{type:"number",placeholder:"300",className:"form-control",name:"amountCollected",value:this.state.amountCollected,onChange:this.handleChange})),this.state.success?r.a.createElement(T,{text:"Entry successfull, Wait while you will be redirected"}):null,this.state.failure?r.a.createElement(T,{text:"Something went wrong"}):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component);var F=Object(p.b)(function(e){return{clinics:e.clinics}},{getClinics:O,addDailyUpdate:I})(P),G=function(e){return 0===e.list.length?null:r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Total Patients"),r.a.createElement("th",null,"Amount Collected"),r.a.createElement("th",null,"Clinic Name"))),r.a.createElement("tbody",null,e.list.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",null,e.date),r.a.createElement("th",null,e.totalPatients),r.a.createElement("th",null,e.amountCollected),r.a.createElement("th",null,e.clinicName))})))},_=a(24),B=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(D.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,L(a.state);case 3:n=e.sent,a.setState({list:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var n=new Date,r=n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1);return a.state={year:n.getFullYear(),month:r,list:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getClinics()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"mb-3 form-inline",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group mr-2 mb-2"},r.a.createElement("label",{className:"mr-2"},"Year"),r.a.createElement("input",{min:"1900",max:"2050",type:"number",name:"year",className:"form-control",value:this.state.year,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group mr-2 mb-2"},r.a.createElement("label",{className:"mr-2"},"Month"),r.a.createElement("input",{type:"number",min:"1",max:"12",name:"month",className:"form-control",value:this.state.month,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group mr-2 mb-2"},r.a.createElement("label",{className:"mr-2"},"Clinic"),r.a.createElement("select",{className:"custom-select",name:"clinicId",onChange:this.handleChange},r.a.createElement("option",{default:!0},"select"),this.props.clinics.map(function(e,t){return r.a.createElement("option",{value:e.id,key:t},e.name)}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2"},"Search"),0!==this.state.list.length?r.a.createElement(_.CSVLink,{data:this.state.list,filename:"".concat(this.state.list[0].clinicName,"-").concat(this.state.list[0].date.substring(0,7),".csv"),className:"btn btn-primary"},"Download"):null),r.a.createElement(G,{list:this.state.list}))}}]),t}(n.Component);var W=Object(p.b)(function(e){return{clinics:e.clinics}},{getClinics:O})(B),Y=a(17).url,J=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Y,"/amount/add-expense"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(g.a)(v.a.mark(function e(t){var a,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Y,"/amount/list/").concat(t.year,"/").concat(t.month),{method:"GET",mode:"cors"});case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),V=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(D.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(v.a.mark(function e(t){return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,J(a.state);case 4:a.setState({success:!0}),setTimeout(function(){return a.setState({success:!1,redirect:!0})},2e3),e.next=13;break;case 8:throw e.prev=8,e.t0=e.catch(1),a.setState({failure:!0}),setTimeout(function(){return a.setState({failure:!1})},2e3),e.t0;case 13:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();var n=new Date,r=n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1),c=n.getDate()>9?n.getDate():"0".concat(n.getDate());return a.state={date:"".concat(n.getFullYear(),"-").concat(r,"-").concat(c),description:"",type:"debit",amount:null,redirect:!1,success:!1,failure:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},this.state.redirect?r.a.createElement(d.a,{to:"/list-expense"}):null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Date"),r.a.createElement("input",{type:"date",className:"form-control",name:"date",value:this.state.date,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{placeholder:"Some Description",type:"text",className:"form-control",name:"description",onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Type"),r.a.createElement("select",{className:"custom-select",name:"type",onChange:this.handleChange},r.a.createElement("option",{value:"debit"},"debit"),r.a.createElement("option",{value:"credit"},"credit"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{placeholder:"500",type:"number",className:"form-control",name:"amount",onChange:this.handleChange})),this.state.success?r.a.createElement(T,{text:"Entry successfull, Wait while you will be redirected"}):null,this.state.failure?r.a.createElement(T,{text:"Something went wrong"}):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))}}]),t}(n.Component),R=function(e){return 0===e.list.length?null:r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Description"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Balance"))),r.a.createElement("tbody",null,e.list.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("th",null,e.date),r.a.createElement("th",null,e.description),r.a.createElement("th",null,e.amount),r.a.createElement("th",null,e.type),r.a.createElement("th",null,e.available))})))},X=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(D.a)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=Object(g.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,U(a.state);case 3:n=e.sent,a.setState({list:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();var n=new Date,r=n.getFullYear(),c=n.getMonth()+1>9?n.getMonth()+1:"0".concat(n.getMonth()+1);return a.state={year:r,month:c,list:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"mb-2 form-inline",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group mr-2 "},r.a.createElement("label",{className:" mr-2 "},"Year"),r.a.createElement("input",{min:"1900",max:"2050",type:"number",name:"year",className:"form-control",onChange:this.handleChange,value:this.state.year})),r.a.createElement("div",{className:"form-group  mr-2 "},r.a.createElement("label",{className:" mr-2 "},"Month"),r.a.createElement("input",{type:"number",min:"1",max:"12",name:"month",className:"form-control",onChange:this.handleChange,value:this.state.month})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-2 "},"Search"),0!==this.state.list.length?r.a.createElement(_.CSVLink,{data:this.state.list,filename:"clinic-expense-".concat(this.state.list[0].date.substring(0,7),".csv"),className:"btn btn-primary mb-2"},"Download"):null),r.a.createElement(R,{list:this.state.list}))}}]),t}(n.Component),H=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \xa9 Mohammed Shoeb Reserved"))}}]),t}(n.Component),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d,q=Object(b.e)(j,$(Object(b.a)(f.a))),z=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{store:q},r.a.createElement("div",{className:"main d-flex flex-column justify-content-between align-items-center"},r.a.createElement(h.a,null,r.a.createElement(C,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(d.b,{exact:!0,path:"/add-clinic",component:A}),r.a.createElement(d.b,{exact:!0,path:"/list-clinic",component:k}),r.a.createElement(d.b,{exact:!0,path:"/add-daily-update",component:F}),r.a.createElement(d.b,{exact:!0,path:"/list-daily-update",component:W}),r.a.createElement(d.b,{exact:!0,path:"/add-expense",component:V}),r.a.createElement(d.b,{exact:!0,path:"/list-expense",component:X})),r.a.createElement(H,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(56);l.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.1047164d.chunk.js.map