"use strict";(self.webpackChunkDigitalStore=self.webpackChunkDigitalStore||[]).push([[990],{1990:(N,m,s)=>{s.r(m),s.d(m,{SrModule:()=>R});var d=s(6895),Z=s(1252),i=s(433),c=s(8869);class b{}var t=s(1571),u=s(3963),h=s(7185),C=s(6927),f=s(1350),g=s(4036);function v(n,r){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e.productname," ")}}function q(n,r){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.location)}}function T(n,r){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.Oqu(e.postcode)}}let A=(()=>{class n{constructor(e,o,a,l,p,k){this.formbuilder=e,this.srservice=o,this.toast=a,this.router=l,this.orderService=p,this.locationservice=k,this.breadcrumbs=[{text:"Create SR"}],this.sr=new b,this.products=[],this.location=[],this.SRForm=this.formbuilder.group({email:["",[i.kI.email,i.kI.required]],productname:["",[i.kI.required]],requesttype:["",[i.kI.required]],description:["",[i.kI.required]],priority:["",[i.kI.required]],postcode:["",[i.kI.required]],createdon:["",[i.kI.required]],createdby:["",[i.kI.required]],warranty:["",[i.kI.required]],mobile:["",[i.kI.required]],location:["",[i.kI.required]]}),this.srs=[]}ngOnInit(){this.getAllSr(),this.getAllproduct(),this.getAllLocations()}createSr(){this.sr.createdby=this.SRForm.value.createdby,this.sr.email=this.SRForm.value.email,this.sr.productname=this.SRForm.value.productname,this.sr.requesttype=this.SRForm.value.requesttype,this.sr.description=this.SRForm.value.description,this.sr.priority=this.SRForm.value.priority,this.sr.postcode=this.SRForm.value.postcode,this.sr.createdby=this.SRForm.value.createdby,this.sr.warranty=this.SRForm.value.warranty,this.sr.mobile=this.SRForm.value.mobile,this.sr.location=this.SRForm.value.location,this.srservice.createSr(this.sr).subscribe(()=>{this.toast.success("Dear User Sr is Created","Digital Store"),this.router.navigate(["service_management"]),console.log("Nanda"),this.getAllSr()})}getAllSr(){this.srservice.getAllSr().subscribe(e=>{this.srs=e.data.getAllSr})}getAllproduct(){this.orderService.findAll().subscribe(e=>{this.products=e.data.getAllProductList})}getAllLocations(){this.locationservice.getLocation().subscribe(e=>{this.location=e.data.getAllLocations})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(i.qu),t.Y36(u.E),t.Y36(h._W),t.Y36(c.F0),t.Y36(C.p),t.Y36(f.a))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-createsr"]],decls:86,vars:5,consts:[[1,"page-nav"],[3,"pages"],[1,"container"],[1,"title"],[3,"formGroup"],[1,"content"],["action","#"],[1,"user-details"],[1,"input-box"],[1,"details"],[1,"select"],["hidden",""],[4,"ngFor","ngForOf"],["type","email","placeholder","Enter your email","required",""],["type","number","placeholder","Enter your number","required",""],["type","text","placeholder","Enter your name","formControlName","createdby"],["type","datetime-local","placeholder","yyyy-mm-dd","formControlName","createdon","required",""],["formControlName","warranty",1,"select"],["type","date","placeholder","Select Purchase Date","required",""],[1,"input-box","mb-4"],["type","text","placeholder","Enter your Description","formControlName","description","required",""],[1,"button"],["type","submit","value","Save Report",1,"btn","btn-primary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-breadcrumbs",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3),t._uU(4,"Create Service Request"),t.qZA(),t.TgZ(5,"form",4)(6,"div",5)(7,"form",6)(8,"div",7)(9,"div",8)(10,"span",9),t._uU(11,"Product Name"),t.qZA(),t.TgZ(12,"select",10),t._UZ(13,"option",11),t.YNc(14,v,2,1,"option",12),t.qZA()(),t.TgZ(15,"div",8)(16,"span",9),t._uU(17,"Request Type"),t.qZA(),t.TgZ(18,"select",10),t._UZ(19,"option",11),t.TgZ(20,"option"),t._uU(21,"Damaged"),t.qZA(),t.TgZ(22,"option"),t._uU(23,"Repair"),t.qZA(),t.TgZ(24,"option"),t._uU(25,"Not Working"),t.qZA(),t.TgZ(26,"option"),t._uU(27,"Return"),t.qZA()()(),t.TgZ(28,"div",8)(29,"span",9),t._uU(30,"Email"),t.qZA(),t._UZ(31,"input",13),t.qZA(),t.TgZ(32,"div",8)(33,"span",9),t._uU(34,"Mobile Number"),t.qZA(),t._UZ(35,"input",14),t.qZA(),t.TgZ(36,"div",8)(37,"span",9),t._uU(38,"Priority"),t.qZA(),t.TgZ(39,"select",10),t._UZ(40,"option",11),t.TgZ(41,"option"),t._uU(42,"High"),t.qZA(),t.TgZ(43,"option"),t._uU(44,"Medium"),t.qZA(),t.TgZ(45,"option"),t._uU(46,"Low"),t.qZA()()(),t.TgZ(47,"div",8)(48,"span",9),t._uU(49,"Location"),t.qZA(),t.TgZ(50,"select",10),t._UZ(51,"option",11),t.YNc(52,q,2,1,"option",12),t.qZA()(),t.TgZ(53,"div",8)(54,"span",9),t._uU(55,"Created By"),t.qZA(),t._UZ(56,"input",15),t.qZA(),t.TgZ(57,"div",8)(58,"span",9),t._uU(59,"Created On"),t.qZA(),t._UZ(60,"input",16),t.qZA(),t.TgZ(61,"div",8)(62,"span",9),t._uU(63,"Warranty"),t.qZA(),t.TgZ(64,"select",17),t._UZ(65,"option",11),t.TgZ(66,"option"),t._uU(67,"Applicable"),t.qZA(),t.TgZ(68,"option"),t._uU(69,"Not Applicable"),t.qZA()()(),t.TgZ(70,"div",8)(71,"span",9),t._uU(72,"Purchased On "),t.qZA(),t._UZ(73,"input",18),t.qZA(),t.TgZ(74,"div",19)(75,"span",9),t._uU(76,"Description"),t.qZA(),t._UZ(77,"input",20),t.qZA(),t.TgZ(78,"div",8)(79,"span",9),t._uU(80,"Post Code"),t.qZA(),t.TgZ(81,"select",10),t._UZ(82,"option",11),t.YNc(83,T,2,1,"option",12),t.qZA()()(),t.TgZ(84,"div",21)(85,"input",22),t.NdJ("click",function(){return o.createSr()}),t.qZA()()()()()()),2&e&&(t.xp6(1),t.Q6J("pages",o.breadcrumbs),t.xp6(4),t.Q6J("formGroup",o.SRForm),t.xp6(9),t.Q6J("ngForOf",o.products),t.xp6(38),t.Q6J("ngForOf",o.location),t.xp6(31),t.Q6J("ngForOf",o.location))},dependencies:[d.sg,g.n,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap";*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}body[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center;padding:10px;background:linear-gradient(135deg,#71b7e6,#9b59b6)}.container[_ngcontent-%COMP%]{max-width:auto;width:100%;background-color:#fff;padding:25px 30px;border-radius:5px;box-shadow:0 5px 10px #00000026}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:25px;font-weight:500;position:relative}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]:before{content:"";position:absolute;left:0;bottom:0;height:3px;width:30px;border-radius:5px;background:linear-gradient(135deg,#71b7e6,#9b59b6)}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;margin:20px 0 12px}form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:15px;width:calc(50% - 20px)}form[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   span.details[_ngcontent-%COMP%]{display:block;font-weight:500;margin-bottom:5px}.user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{height:45px;width:100%;outline:none;font-size:16px;border-radius:5px;padding-left:15px;border:1px solid #ccc;border-bottom-width:2px;transition:all .3s ease}.user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid{border-color:#9b59b6}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex;width:80%;margin:14px 0;justify-content:space-between}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:18px;width:18px;border-radius:50%;margin-right:10px;background:#d9d9d9;border:5px solid transparent;transition:all .3s ease}#dot-1[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], #dot-2[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], #dot-3[_ngcontent-%COMP%]:checked ~ .category[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]{background:#9b59b6;border-color:#d9d9d9}form[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]{height:45px;margin:35px 0}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:100%;width:100%;border-radius:5px;border:none;color:#fff;font-size:18px;font-weight:500;letter-spacing:1px;cursor:pointer;transition:all .3s ease;background:linear-gradient(135deg,#71b7e6,#9b59b6)}form[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover{background:linear-gradient(-135deg,#71b7e6,#9b59b6)}@media (max-width: 584px){.container[_ngcontent-%COMP%]{max-width:100%}form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{margin-bottom:15px;width:100%}form[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{width:100%}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{max-height:300px;overflow-y:scroll}.user-details[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}}@media (max-width: 459px){.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{flex-direction:column}}.container[_ngcontent-%COMP%]{overflow-x:scroll;height:500px}']}),n})(),_=(()=>{class n{constructor(e){this.router=e,this.breadcrumbs=[{text:"Service_Management"}]}ngOnInit(){}createsr(){this.router.navigate(["sr","createsr"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sr-landing"]],decls:7,vars:1,consts:[[1,"page-nav"],[3,"pages"],[1,"page-header","container"],[1,"col","d-flex","justify-content-end","align-items-start"],["type","button ",1,"btn","btn-primary",3,"click"],[1,"page-container"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-breadcrumbs",1),t.TgZ(2,"div",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return o.createsr()}),t._uU(5," Create Service Request "),t.qZA()()()(),t._UZ(6,"div",5)),2&e&&(t.xp6(1),t.Q6J("pages",o.breadcrumbs))},dependencies:[g.n]}),n})();var O=s(2207),x=s(3098),y=s(3546),U=s(1858);function S(n,r){if(1&n&&t._UZ(0,"app-horizontal-scroll",13),2&n){const e=t.oxw(2);t.Q6J("tableContent",e.tableReference)}}function M(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._UZ(2,"i",14),t.TgZ(3,"i",15),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.viewsr(l.id))}),t.qZA()(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td")(19,"i",16),t.NdJ("click",function(){const l=t.CHM(e).$implicit,p=t.oxw(2);return t.KtG(p.deleteSr(l.id))}),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(5),t.Oqu(e.productname),t.xp6(2),t.Oqu(e.requesttype),t.xp6(2),t.Oqu(e.priority),t.xp6(2),t.Oqu(e.location),t.xp6(2),t.Oqu(e.warranty),t.xp6(2),t.Oqu(e.description),t.xp6(2),t.Oqu(e.postcode)}}function P(n,r){if(1&n&&(t.TgZ(0,"div")(1,"p",3),t._uU(2," Total Request ( "),t.TgZ(3,"span",4),t._uU(4),t.qZA(),t._uU(5,") "),t.qZA(),t.YNc(6,S,1,1,"app-horizontal-scroll",5),t.TgZ(7,"div",6)(8,"div",7,8)(10,"table",9)(11,"thead")(12,"tr",10)(13,"th"),t._uU(14,"Action"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Product Name"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Request Type"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"Priority"),t.qZA(),t.TgZ(21,"th"),t._uU(22,"Location"),t.qZA(),t.TgZ(23,"th"),t._uU(24,"Warranty"),t.qZA(),t.TgZ(25,"th"),t._uU(26,"Description"),t.qZA(),t.TgZ(27,"th"),t._uU(28,"Post Code"),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Delete"),t.qZA()()(),t._UZ(31,"div",11),t.TgZ(32,"tbody"),t.YNc(33,M,20,7,"tr",12),t.qZA()()()()()),2&n){const e=t.oxw();t.xp6(4),t.Oqu(e.count),t.xp6(2),t.Q6J("ngIf",e.sr),t.xp6(27),t.Q6J("ngForOf",e.sr)}}function w(n,r){1&n&&t._UZ(0,"app-no-data-found")}const I=[{path:"",component:(()=>{class n{constructor(e,o,a,l,p){this.router=e,this.srservice=o,this.confirmService=a,this.toast=l,this.Actroute=p,this.count="",this.sr=[],this.fileName="Report.xls",this.searchCount=0}ngAfterContentChecked(){this.tableReference=this.tableElement}ngOnInit(){this.getAllSrs(),this.getTotalSrCount()}viewsr(e){this.router.navigate(["service_management","viewsr",e])}getAllSrs(){this.srservice.getAllSr().subscribe(e=>{this.sr=e.data.getAllSr})}deleteSr(e){this.confirmService.showConfirm("Are You Sure Wants To Delete?",()=>{this.srservice.deleteSr(e).subscribe(()=>{this.toast.success("Deleted successfully!","Success"),this.getAllSrs(),window.location.reload()})},()=>{})}searchSr(){this.srservice.searchSr({searchText:this.searchText,page:1,pageSize:10}).subscribe(e=>{this.sr=e.data.searchSr.sr,this.searchCount=e.data.searchSr.count})}getTotalSrCount(){this.srservice.getTotalSrCount().subscribe(({data:e})=>{this.count=e.getTotalSrCount})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0),t.Y36(u.E),t.Y36(O.Xl),t.Y36(h._W),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-sr"]],decls:5,vars:2,consts:[["placeholder","Search by Service Request Name",3,"searchText"],[4,"ngIf","ngIfElse"],["nodata",""],[1,"fs-7","m-0"],[1,"fw-bold"],[3,"tableContent",4,"ngIf"],[1,"container"],[1,"table-responsive"],["tableContent",""],[1,"table-1","table","table-bordered","table-light","text-center","mt-4"],[1,"table-primary"],[1,"seperated"],[4,"ngFor","ngForOf"],[3,"tableContent"],[1,"fa-sharp","fa-solid","fa-pen-to-square"],[1,"far","fa-file-word","mx-1",3,"click"],[1,"fa-sharp","fa-solid","fa-trash-can",3,"click"]],template:function(e,o){if(1&e&&(t._UZ(0,"app-sr-landing"),t.TgZ(1,"app-searchbox",0),t.NdJ("searchText",function(){return o.searchSr()}),t.qZA(),t.YNc(2,P,34,3,"div",1),t.YNc(3,w,1,0,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(4);t.xp6(2),t.Q6J("ngIf",o.sr&&o.sr.length>0)("ngIfElse",a)}},dependencies:[d.sg,d.O5,x.E,y.f,U.i,_],styles:[".container[_ngcontent-%COMP%]{overflow-x:scroll;height:290px}"]}),n})()},{path:"createsr",component:A},{path:"viewsr/:srId",component:(()=>{class n{constructor(e,o){this.route=e,this.srservice=o,this.breadcrumbs=[{text:"Service Management | ViewSR"}],this.srs=[]}ngOnInit(){this.getSrId()}getSrId(){this.route.params.subscribe({next:e=>{this.srId=e.srId,this.srId&&this.getSrById(Number(this.srId))}})}getSrById(e){this.srservice.getSrById(e).subscribe(o=>{this.sr=o.data.findBySrId})}print(){window.print()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz),t.Y36(u.E))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-viewsr"]],decls:87,vars:12,consts:[[1,"page-nav"],[3,"pages"],[1,"print"],[1,"col","d-flex","justify-content-end","align-items-start"],["type","button ",1,"btn","btn-primary","btn-lg",3,"click"],[1,"fas","fa-print"],[1,"page-header","container"],[1,"card","mx-8"],[1,"container"],[1,"row"],[1,"col"],[1,"form-outline"],[1,"table","align-middle","mb-0","bg-white","mt-4"],[1,"bg-light"],["ngFor","let repo of report"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-breadcrumbs",1),t.TgZ(2,"div",2)(3,"div",3)(4,"button",4),t.NdJ("click",function(){return o.print()}),t._UZ(5,"i",5),t._uU(6," print "),t.qZA()()(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8)(10,"div",9)(11,"div",10)(12,"div",11)(13,"b"),t._uU(14,"Product Name"),t.qZA(),t.TgZ(15,"p"),t._uU(16),t.qZA()()(),t.TgZ(17,"div",10)(18,"div",11)(19,"b"),t._uU(20,"Request Type"),t.qZA(),t.TgZ(21,"p"),t._uU(22),t.qZA()()(),t.TgZ(23,"div",10)(24,"div",11)(25,"b"),t._uU(26,"Priority"),t.qZA(),t.TgZ(27,"p"),t._uU(28),t.qZA()()()(),t.TgZ(29,"div",9)(30,"div",10)(31,"div",11)(32,"b"),t._uU(33,"Location"),t.qZA(),t.TgZ(34,"p"),t._uU(35),t.qZA()()(),t.TgZ(36,"div",10)(37,"div",11)(38,"b"),t._uU(39,"Created On"),t.qZA(),t.TgZ(40,"p"),t._uU(41),t.qZA()()(),t.TgZ(42,"div",10)(43,"div",11)(44,"b"),t._uU(45,"Warranty"),t.qZA(),t.TgZ(46,"p"),t._uU(47,"Not Available"),t.qZA()()()(),t.TgZ(48,"div",9)(49,"div",10)(50,"div",11)(51,"b"),t._uU(52,"Description"),t.qZA(),t.TgZ(53,"p"),t._uU(54),t.qZA()()(),t.TgZ(55,"div",10)(56,"div",11)(57,"b"),t._uU(58,"Post Code "),t.qZA(),t.TgZ(59,"p"),t._uU(60),t.qZA()()(),t._UZ(61,"div",10),t.qZA(),t.TgZ(62,"table",12)(63,"thead",13)(64,"tr")(65,"th"),t._uU(66,"ID"),t.qZA(),t.TgZ(67,"th"),t._uU(68,"User Name"),t.qZA(),t.TgZ(69,"th"),t._uU(70,"Mobile"),t.qZA(),t.TgZ(71,"th"),t._uU(72,"Email"),t.qZA(),t.TgZ(73,"th"),t._uU(74,"Status"),t.qZA()()(),t.TgZ(75,"tbody")(76,"tr",14)(77,"td"),t._uU(78),t.qZA(),t.TgZ(79,"td"),t._uU(80),t.qZA(),t.TgZ(81,"td"),t._uU(82),t.qZA(),t.TgZ(83,"td"),t._uU(84),t.qZA(),t.TgZ(85,"td"),t._uU(86,"Active"),t.qZA()()()()()()()()),2&e&&(t.xp6(1),t.Q6J("pages",o.breadcrumbs),t.xp6(15),t.Oqu(null==o.sr?null:o.sr.productname),t.xp6(6),t.Oqu(null==o.sr?null:o.sr.requesttype),t.xp6(6),t.Oqu(null==o.sr?null:o.sr.priority),t.xp6(7),t.Oqu(null==o.sr?null:o.sr.location),t.xp6(6),t.Oqu(null==o.sr?null:o.sr.createdon),t.xp6(13),t.Oqu(null==o.sr?null:o.sr.description),t.xp6(6),t.Oqu(null==o.sr?null:o.sr.postcode),t.xp6(18),t.Oqu(null==o.sr?null:o.sr.id),t.xp6(2),t.Oqu(null==o.sr?null:o.sr.createdby),t.xp6(2),t.Oqu(null==o.sr?null:o.sr.mobile),t.xp6(2),t.Oqu(null==o.sr?null:o.sr.email))},dependencies:[g.n],styles:[".card[_ngcontent-%COMP%]:hover{box-shadow:0 8px 16px #d6101033}.container[_ngcontent-%COMP%]{padding:20px 10px;height:auto}.card[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003;transition:.3s;width:90%;border-radius:5px}"]}),n})()},{path:"Sr-landing",component:_}];let F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(I),c.Bz]}),n})(),R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,Z.m,F,i.UX]}),n})()}}]);