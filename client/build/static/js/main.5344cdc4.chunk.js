(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,n){e.exports=n(367)},209:function(e,t,n){},367:function(e,t,n){"use strict";n.r(t);var a=n(47),r=n.n(a);n(209),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(210);var o=n(0),i=n.n(o),c=n(24),u=n(25),s=n(168),l="https://".concat("40v11qoh6j",".execute-api.us-east-2.amazonaws.com/dev"),h={domain:"gzamora-udacity-capstone.us.auth0.com",clientId:"d6WE3Ms1NjOxWsu5d34o0sBksh9tRgPI",callbackUrl:"http://localhost:3000/callback"},d=function(){function e(t){Object(c.a)(this,e),this.auth0=new s.a.WebAuth({domain:h.domain,clientID:h.clientId,redirectUri:h.callbackUrl,responseType:"token id_token",scope:"openid"}),this.history=t,this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(u.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash(function(t,n){n&&n.accessToken&&n.idToken?(console.log("Access token: ",n.accessToken),console.log("id token: ",n.idToken),e.setSession(n)):t&&(e.history.replace("/"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))})}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.history.replace("/")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))})}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),this.auth0.logout({return_to:window.location.origin}),this.history.replace("/")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}(),p=n(43),m=n(380),f=n(375);var g,v=function(){return i.a.createElement(m.a,{active:!0},i.a.createElement(f.a,{content:"Loading"}))},k=n(190),E=n.n(k),x=n(32),b=n(31),y=n(33),w=n(49),j=n(118),O=n(384),C=n(383),I=n(381),T=n(16),S=n.n(T),A=n(22),U=n(379),L=n(368),D=n(51),F=n.n(D);function N(e){return B.apply(this,arguments)}function B(){return(B=Object(A.a)(S.a.mark(function e(t){var n;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching executions"),e.next=3,F.a.get("".concat(l,"/executions"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,console.log("executions:",n.data),e.abrupt("return",n.data.items);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t){return z.apply(this,arguments)}function z(){return(z=Object(A.a)(S.a.mark(function e(t,n){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(l,"/executions"),JSON.stringify(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.item);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function M(e,t,n){return R.apply(this,arguments)}function R(){return(R=Object(A.a)(S.a.mark(function e(t,n,a){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.patch("".concat(l,"/executions/").concat(n),JSON.stringify(a),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function W(e,t){return _.apply(this,arguments)}function _(){return(_=Object(A.a)(S.a.mark(function e(t,n){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.delete("".concat(l,"/executions/").concat(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e,t){return H.apply(this,arguments)}function H(){return(H=Object(A.a)(S.a.mark(function e(t,n){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.post("".concat(l,"/executions/").concat(n,"/attachment"),"",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.uploadUrl);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function $(e,t){return q.apply(this,arguments)}function q(){return(q=Object(A.a)(S.a.mark(function e(t,n){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.put(t,n);case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(e){e[e.NoUpload=0]="NoUpload",e[e.FetchingPresignedUrl=1]="FetchingPresignedUrl",e[e.UploadingFile=2]="UploadingFile"}(g||(g={}));var G=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={file:void 0,uploadState:g.NoUpload},n.handleFileChange=function(e){var t=e.target.files;t&&n.setState({file:t[0]})},n.handleSubmit=function(){var e=Object(A.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,n.state.file){e.next=5;break}return alert("File should be selected"),e.abrupt("return");case 5:return n.setUploadState(g.FetchingPresignedUrl),e.next=8,J(n.props.auth.getIdToken(),n.props.match.params.executionId);case 8:return a=e.sent,n.setUploadState(g.UploadingFile),e.next=12,$(a,n.state.file);case 12:alert("File was uploaded!"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert("Could not upload a file: "+e.t0.message);case 18:return e.prev=18,n.setUploadState(g.NoUpload),e.finish(18);case 21:case"end":return e.stop()}},e,null,[[1,15,18,21]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"setUploadState",value:function(e){this.setState({uploadState:e})}},{key:"render",value:function(){return o.createElement("div",null,o.createElement("h1",null,"Upload new image"),o.createElement(U.a,{onSubmit:this.handleSubmit},o.createElement(U.a.Field,null,o.createElement("label",null,"File"),o.createElement("input",{type:"file",accept:"image/*",placeholder:"Image to upload",onChange:this.handleFileChange})),this.renderButton()))}},{key:"renderButton",value:function(){return o.createElement("div",null,this.state.uploadState===g.FetchingPresignedUrl&&o.createElement("p",null,"Uploading image metadata"),this.state.uploadState===g.UploadingFile&&o.createElement("p",null,"Uploading file"),o.createElement(L.a,{loading:this.state.uploadState!==g.NoUpload,type:"submit"},"Upload"))}}]),t}(o.PureComponent),K=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).onLogin=function(){n.props.auth.login()},n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.createElement("div",null,o.createElement("h1",null,"Please log in"),o.createElement(L.a,{onClick:this.onLogin,size:"huge",color:"olive"},"Log in"))}}]),t}(o.PureComponent),Q=function(e){function t(){return Object(c.a)(this,t),Object(x.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.createElement("h1",null,"Not Found")}}]),t}(o.PureComponent),V=n(184),X=n(191),Y=n(185),Z=n.n(Y),ee=n(186),te=n.n(ee),ne=n(382),ae=n(377),re=n(378),oe=n(376),ie=n(50),ce=n(192),ue=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(x.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={executions:[],newExecutionName:"",loadingExecutions:!0},n.handleNameChange=function(e){n.setState({newExecutionName:e.target.value})},n.onEditButtonClick=function(e){n.props.history.push("/Executions/".concat(e,"/edit"))},n.onExecutionCreate=function(){var e=Object(A.a)(S.a.mark(function e(t){var a,r;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.calculateDueDate(),e.next=4,P(n.props.auth.getIdToken(),{name:n.state.newExecutionName,dueDate:a});case 4:r=e.sent,n.setState({executions:[].concat(Object(X.a)(n.state.executions),[r]),newExecutionName:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Execution creation failed");case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t){return e.apply(this,arguments)}}(),n.onExecutionDelete=function(){var e=Object(A.a)(S.a.mark(function e(t){return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(n.props.auth.getIdToken(),t);case 3:n.setState({executions:n.state.executions.filter(function(e){return e.executionId!=t})}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Execution deletion failed");case 9:case"end":return e.stop()}},e,null,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),n.onExecutionCheck=function(){var e=Object(A.a)(S.a.mark(function e(t){var a;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.state.executions[t],e.next=4,M(n.props.auth.getIdToken(),a.executionId,{name:a.name,dueDate:a.dueDate,done:!a.done});case 4:n.setState({executions:te()(n.state.executions,Object(V.a)({},t,{done:{$set:!a.done}}))}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Execution deletion failed");case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(A.a)(S.a.mark(function e(){var t;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N(this.props.auth.getIdToken());case 3:t=e.sent,this.setState({executions:t,loadingExecutions:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Failed to fetch Executions: ".concat(e.t0.message));case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.createElement("div",null,o.createElement(ne.a,{as:"h1"},"Executions"),this.rendercreateExecutionInput(),this.renderExecutions())}},{key:"rendercreateExecutionInput",value:function(){return o.createElement(C.a.Row,null,o.createElement(C.a.Column,{width:16},o.createElement(ae.a,{action:{color:"teal",labelPosition:"left",icon:"add",content:"New task",onClick:this.onExecutionCreate},fluid:!0,actionPosition:"left",placeholder:"To change the world...",onChange:this.handleNameChange})),o.createElement(C.a.Column,{width:16},o.createElement(re.a,null)))}},{key:"renderExecutions",value:function(){return this.state.loadingExecutions?this.renderLoading():this.renderExecutionsList()}},{key:"renderLoading",value:function(){return o.createElement(C.a.Row,null,o.createElement(f.a,{indeterminate:!0,active:!0,inline:"centered"},"Loading Executions"))}},{key:"renderExecutionsList",value:function(){var e=this;return o.createElement(C.a,{padded:!0},this.state.executions.map(function(t,n){return o.createElement(C.a.Row,{key:t.executionId},o.createElement(C.a.Column,{width:1,verticalAlign:"middle"},o.createElement(oe.a,{onChange:function(){return e.onExecutionCheck(n)},checked:t.done})),o.createElement(C.a.Column,{width:10,verticalAlign:"middle"},t.name),o.createElement(C.a.Column,{width:3,floated:"right"},t.dueDate),o.createElement(C.a.Column,{width:1,floated:"right"},o.createElement(L.a,{icon:!0,color:"blue",onClick:function(){return e.onEditButtonClick(t.executionId)}},o.createElement(ie.a,{name:"pencil"}))),o.createElement(C.a.Column,{width:1,floated:"right"},o.createElement(L.a,{icon:!0,color:"red",onClick:function(){return e.onExecutionDelete(t.executionId)}},o.createElement(ie.a,{name:"delete"}))),t.attachmentUrl&&o.createElement(ce.a,{src:t.attachmentUrl,size:"small",wrapped:!0}),o.createElement(C.a.Column,{width:16},o.createElement(re.a,null)))}))}},{key:"calculateDueDate",value:function(){var e=new Date;return e.setDate(e.getDate()+7),Z()(e,"yyyy-mm-dd")}}]),t}(o.PureComponent),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(x.a)(this,Object(b.a)(t).call(this,e))).handleLogin=n.handleLogin.bind(Object(w.a)(Object(w.a)(n))),n.handleLogout=n.handleLogout.bind(Object(w.a)(Object(w.a)(n))),n}return Object(y.a)(t,e),Object(u.a)(t,[{key:"handleLogin",value:function(){this.props.auth.login()}},{key:"handleLogout",value:function(){this.props.auth.logout()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(O.a,{style:{padding:"8em 0em"},vertical:!0},i.a.createElement(C.a,{container:!0,stackable:!0,verticalAlign:"middle"},i.a.createElement(C.a.Row,null,i.a.createElement(C.a.Column,{width:16},i.a.createElement(p.b,{history:this.props.history},this.generateMenu(),this.generateCurrentPage()))))))}},{key:"generateMenu",value:function(){return i.a.createElement(I.a,null,i.a.createElement(I.a.Item,{name:"home"},i.a.createElement(j.a,{to:"/"},"Home")),i.a.createElement(I.a.Menu,{position:"right"},this.logInLogOutButton()))}},{key:"logInLogOutButton",value:function(){return this.props.auth.isAuthenticated()?i.a.createElement(I.a.Item,{name:"logout",onClick:this.handleLogout},"Log Out"):i.a.createElement(I.a.Item,{name:"login",onClick:this.handleLogin},"Log In")}},{key:"generateCurrentPage",value:function(){var e=this;return this.props.auth.isAuthenticated()?i.a.createElement(p.c,null,i.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return i.a.createElement(ue,Object.assign({},t,{auth:e.props.auth}))}}),i.a.createElement(p.a,{path:"/executions/:executionId/edit",exact:!0,render:function(t){return i.a.createElement(G,Object.assign({},t,{auth:e.props.auth}))}}),i.a.createElement(p.a,{component:Q})):i.a.createElement(K,{auth:this.props.auth})}}]),t}(o.Component),le=E()(),he=new d(le);r.a.render(i.a.createElement(p.b,{history:le},i.a.createElement("div",null,i.a.createElement(p.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&he.handleAuthentication()}(e),i.a.createElement(v,null)}}),i.a.createElement(p.a,{render:function(e){return i.a.createElement(se,Object.assign({auth:he},e))}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[204,1,2]]]);
//# sourceMappingURL=main.5344cdc4.chunk.js.map