import{$ as Q,O as Y,Ta as ae,Ua as se,Wa as le,Y as Z,Ya as de,_ as J,b as q,ba as $,bb as me,c as U,cb as pe,d as z,db as ue,e as V,ea as ee,eb as ce,f as H,fb as ge,g as G,gb as he,h as K,hb as fe,i as u,ib as ye,ja as te,k as X,pa as ie,ra as oe,ta as re,ua as ne}from"./chunk-RIY5EO76.js";import{$a as S,Cb as d,Db as l,Dc as k,Eb as y,La as F,Lb as x,Lc as B,Qc as W,Wb as m,_a as p,aa as A,ab as L,ac as v,bc as M,ca as g,cb as O,cc as b,eb as D,ec as C,gb as E,ha as I,hb as R,ia as h,na as f,qb as T,ra as N,sb as c,ub as j}from"./chunk-ZMMYBEIV.js";var ve=(()=>{let e=class e{constructor(t,o){this._http=t,this._router=o,this._ENDPOINTURL="https://beratceylan0007.bsite.net/api/Auth/LoginAction/Login"}getLogin(t){return this._http.post(this._ENDPOINTURL,t)}};e.\u0275fac=function(o){return new(o||e)(I(q),I(u))},e.\u0275prov=g({token:e,factory:e.\u0275fac,providedIn:"root"});let r=e;return r})();function Ae(r,e){r&1&&(d(0,"div",15),y(1,"mat-spinner"),l())}var _=(()=>{let e=class e{constructor(t,o){this.authService=t,this.router=o,this.loginObj={branchNo:"",userName:"BerCey17",userPassword:"960607Brt."},this.isLoading=!1,this._subSink=new ye}onLogin(){this.isLoading=!0,this._subSink.sink=this.authService.getLogin(this.loginObj).subscribe(t=>{t.status===!0&&(localStorage.setItem("_APIToken",t.token),localStorage.setItem("userUID",t.userUID),localStorage.setItem("subeID",t.subeID),localStorage.setItem("userID",t.userID),this.isLoading=!1,this.router.navigate(["examapp"]))},t=>{console.log(t)}),setTimeout(()=>{this.isLoading=!1},2e3)}};e.\u0275fac=function(o){return new(o||e)(S(ve),S(u))},e.\u0275cmp=f({type:e,selectors:[["app-login"]],standalone:!0,features:[C],decls:32,vars:9,consts:[[1,"container-fluid","p-0"],[1,"row"],[1,"col-md-12"],["color","primary",1,"example-toolbar"],[2,"margin-right","auto","margin-left","auto"],[1,"row","mt-5"],[1,"row","p-5"],[1,"col-12","text-center"],[1,"text-danger"],[1,"col-md-12","text-center"],[1,"w-100"],["matInput","",3,"ngModelChange","ngModel","required"],["type","password","matInput","",3,"ngModelChange","ngModel","required"],["mat-flat-button","","color","primary",1,"w-100",2,"height","60px",3,"click"],["class","spinner-overlay",4,"ngIf"],[1,"spinner-overlay"]],template:function(o,n){o&1&&(d(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-toolbar",3)(4,"h1",4),m(5,"S\u0131nav Takip Sistemine Ho\u015F geldiniz"),l()()()(),d(6,"div",5)(7,"div",2)(8,"div",6)(9,"div",1)(10,"div",7)(11,"mat-icon",8),m(12,"lock"),l()()(),d(13,"div",9)(14,"mat-form-field",10)(15,"mat-label"),m(16,"\u015Eube No"),l(),d(17,"input",11),b("ngModelChange",function(a){return M(n.loginObj.branchNo,a)||(n.loginObj.branchNo=a),a}),l()()(),d(18,"div",9)(19,"mat-form-field",10)(20,"mat-label"),m(21,"Kullan\u0131c\u0131 Ad\u0131"),l(),d(22,"input",11),b("ngModelChange",function(a){return M(n.loginObj.userName,a)||(n.loginObj.userName=a),a}),l()()(),d(23,"div",9)(24,"mat-form-field",10)(25,"mat-label"),m(26,"\u015Eifre"),l(),d(27,"input",12),b("ngModelChange",function(a){return M(n.loginObj.userPassword,a)||(n.loginObj.userPassword=a),a}),l()()(),d(28,"div",7)(29,"button",13),x("click",function(){return n.onLogin()}),m(30,"Giri\u015F"),l()()()()(),T(31,Ae,2,0,"div",14),l()),o&2&&(p(6),j("blur",n.isLoading),p(11),v("ngModel",n.loginObj.branchNo),c("required",!1),p(5),v("ngModel",n.loginObj.userName),c("required",!0),p(5),v("ngModel",n.loginObj.userPassword),c("required",!0),p(4),c("ngIf",n.isLoading))},dependencies:[W,B,V,Q,J,Z,ne,re,ae,le,se,de,me,ue,pe,oe,$,ee,ie,te,fe,he,ge,ce],styles:["mat-icon[_ngcontent-%COMP%]{font-size:256px;width:auto;height:auto}img[_ngcontent-%COMP%]{width:768px!important;border-radius:10rem!important}.spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background:#fffc;z-index:1000}.blur[_ngcontent-%COMP%]{filter:blur(5px);pointer-events:none}"]});let r=e;return r})();var Me=(r,e)=>{let i=h(u);return localStorage.getItem("_APIToken")===null?(i.navigate(["login"]),!1):!0};var be=[{path:"",component:_},{path:"login",component:_},{path:"examapp",loadChildren:()=>import("./chunk-K3IUSWX2.js").then(r=>r.AdminModule),canActivate:[Me]}];var Ne="@",Fe=(()=>{let e=class e{constructor(t,o,n,s,a){this.doc=t,this.delegate=o,this.zone=n,this.animationType=s,this.moduleImpl=a,this._rendererFactoryPromise=null,this.scheduler=h(O,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-DJOGPXKJ.js")).catch(o=>{throw new A(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new P(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let we=a.createRenderer(t,o);s.use(we)}).catch(a=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){L()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let r=e;return r})(),P=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,t,o){this.delegate.insertBefore(e,i,t,o)}removeChild(e,i,t){this.delegate.removeChild(e,i,t)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,t,o){this.delegate.setAttribute(e,i,t,o)}removeAttribute(e,i,t){this.delegate.removeAttribute(e,i,t)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,t,o){this.delegate.setStyle(e,i,t,o)}removeStyle(e,i,t){this.delegate.removeStyle(e,i,t)}setProperty(e,i,t){this.shouldReplay(i)&&this.replay.push(o=>o.setProperty(e,i,t)),this.delegate.setProperty(e,i,t)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,t){return this.shouldReplay(i)&&this.replay.push(o=>o.listen(e,i,t)),this.delegate.listen(e,i,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ne)}};function Ce(r="animations"){return E("NgAsyncAnimations"),N([{provide:D,useFactory:(e,i,t)=>new Fe(e,i,t,r),deps:[k,H,R]},{provide:F,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ie={providers:[X(be),Ce(),U(z()),Y()]};var Se=(()=>{let e=class e{constructor(){this.title="sinav_app"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=f({type:e,selectors:[["app-root"]],standalone:!0,features:[C],decls:1,vars:0,template:function(o,n){o&1&&y(0,"router-outlet")},dependencies:[K]});let r=e;return r})();G(Se,Ie).catch(r=>console.error(r));
