"use strict";(self.webpackChunkDigitalStore=self.webpackChunkDigitalStore||[]).push([[390],{3390:(T,d,o)=>{o.r(d),o.d(d,{AdminModule:()=>v});var l=o(6895),u=o(1252),a=o(8869),t=o(1571),p=o(4036);let s=(()=>{class n{constructor(){this.breadcrumbs=[{text:"Admin"}]}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-landingpage"]],decls:6,vars:1,consts:[[1,"page-nav"],[3,"pages"],[1,"page-header","container"],["title",""],[1,"page-container"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-breadcrumbs",1),t.TgZ(2,"div",2)(3,"span",3),t._uU(4,"Admin-Page"),t.qZA()()(),t._UZ(5,"div",4)),2&e&&(t.xp6(1),t.Q6J("pages",r.breadcrumbs))},dependencies:[p.n]}),n})();var m=o(9179),g=o(1350);const A=[{path:"",component:(()=>{class n{constructor(e,r,c){this.reportservice=e,this.locationservice=r,this.router=c,this.count="",this.countloc=""}ngOnInit(){this.getTotalReportCount(),this.gettotallocation()}getTotalReportCount(){this.reportservice.getTotalReportCount().subscribe(({data:e})=>{this.count=e.getTotalReportCount})}gettotallocation(){this.locationservice.getTotalLocationCount().subscribe(({data:e})=>{this.countloc=e.getTotalLocationCount})}viewreport(){this.router.navigate(["report"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.r),t.Y36(g.a),t.Y36(a.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin"]],decls:59,vars:2,consts:[[1,"container"],[1,"row"],[1,"col-sm-6","mt-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","location",1,"btn","btn-primary"],["href","createlocation",1,"btn","btn-primary","mx-3"],["href","#",1,"btn","btn-primary"],["href","#",1,"btn","btn-primary","mx-3"],[1,"row","col-xs-2","mt-4"],[1,"col-sm-6"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger","mx-3",3,"click"],["href","#",1,"btn","btn-danger","mx-3"]],template:function(e,r){1&e&&(t._UZ(0,"app-admin-landingpage"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"h5",5),t._uU(7,"Location"),t.qZA(),t.TgZ(8,"p",6),t._uU(9),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"View All Location"),t.qZA(),t.TgZ(12,"a",8),t._uU(13,"Create Location"),t.qZA()()()(),t.TgZ(14,"div",2)(15,"div",3)(16,"div",4)(17,"h5",5),t._uU(18,"Products"),t.qZA(),t.TgZ(19,"p",6),t._uU(20,"Total Products:"),t.qZA(),t.TgZ(21,"a",9),t._uU(22,"View All Products"),t.qZA(),t.TgZ(23,"a",10),t._uU(24,"View FeedBack"),t.qZA()()()()(),t.TgZ(25,"div",11)(26,"div",12)(27,"div",3)(28,"div",4)(29,"h5",5),t._uU(30,"Reports"),t.qZA(),t.TgZ(31,"p",6),t._uU(32),t.qZA(),t.TgZ(33,"button",13),t.NdJ("click",function(){return r.viewreport()}),t._uU(34," View Reports "),t.qZA(),t.TgZ(35,"button",14),t.NdJ("click",function(){return r.viewreport()}),t._uU(36," View/Delete Request "),t.qZA()()()(),t.TgZ(37,"div",12)(38,"div",3)(39,"div",4)(40,"h5",5),t._uU(41,"User Details"),t.qZA(),t.TgZ(42,"p",6),t._uU(43,"Total Users:"),t.qZA(),t.TgZ(44,"a",9),t._uU(45,"Create User"),t.qZA(),t.TgZ(46,"a",15),t._uU(47,"View/Delete User"),t.qZA()()()(),t.TgZ(48,"div",2)(49,"div",3)(50,"div",4)(51,"h5",5),t._uU(52,"My Orders"),t.qZA(),t.TgZ(53,"p",6),t._uU(54,"Total Orders:"),t.qZA(),t.TgZ(55,"a",9),t._uU(56,"View All Order"),t.qZA(),t.TgZ(57,"a",15),t._uU(58,"View/Cancel Order"),t.qZA()()()()()()),2&e&&(t.xp6(9),t.hij("Total Location:",r.countloc,""),t.xp6(23),t.hij("Total Reports:",r.count,""))},dependencies:[s],styles:[".container[_ngcontent-%COMP%]{overflow-y:scroll;overflow-x:scroll;width:auto;height:400px}"]}),n})()},{path:"AdminLandingpageComponent",component:s}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.Bz.forChild(A),a.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,u.m,Z]}),n})()}}]);