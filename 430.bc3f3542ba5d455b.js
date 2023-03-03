"use strict";(self.webpackChunkDigitalStore=self.webpackChunkDigitalStore||[]).push([[430],{4430:(U,s,e)=>{e.r(s),e.d(s,{DashboardModule:()=>C});var c=e(6895),u=e(1252),d=e(8869),t=e(1571),h=e(1082),l=e(4036);let i=(()=>{class o{constructor(r){this.authService=r,this.breadcrumbs=[{text:"My DashBoard"}]}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(h.W2))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard-landing"]],decls:6,vars:1,consts:[[1,"page-nav"],[3,"pages"],[1,"page-header","container"],["title",""],[1,"page-container"]],template:function(r,n){1&r&&(t._UZ(0,"div",0)(1,"app-breadcrumbs",1),t.TgZ(2,"div",2)(3,"span",3),t._uU(4,"My Dashboard"),t.qZA()(),t._UZ(5,"div",4)),2&r&&(t.xp6(1),t.Q6J("pages",n.breadcrumbs))},dependencies:[l.n]}),o})();var p=e(9179),g=e(1350),m=e(706),v=e(2583),b=e(6927);const T=[{path:"",component:(()=>{class o{constructor(r,n,f,D,y){this.reportservice=r,this.locationservice=n,this.myorderService=f,this.auth=D,this.orderService=y,this.count="",this.countpro="",this.countord="",this.countloc=""}ngOnInit(){this.getTotalReportCount(),this.gettotallocation(),this.getTotalOrderProductCount(),this.getTotalOrderCount()}getTotalReportCount(){this.reportservice.getTotalReportCount().subscribe(({data:r})=>{this.count=r.getTotalReportCount})}getTotalOrderCount(){this.orderService.getTotalOrderCount().subscribe(({data:r})=>{this.countord=r.getTotalOrderCount})}gettotallocation(){this.locationservice.getTotalLocationCount().subscribe(({data:r})=>{this.countloc=r.getTotalLocationCount})}getTotalOrderProductCount(){this.myorderService.getTotalOrderProductCount().subscribe(({data:r})=>{this.countpro=r.getTotalOrderProductCount})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(p.r),t.Y36(g.a),t.Y36(m.j),t.Y36(v.e),t.Y36(b.p))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard"]],decls:47,vars:4,consts:[[1,"row"],[1,"col-sm-6","mt-4"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"card-text"],["href","location",1,"btn","btn-primary"],["href","#",1,"btn","btn-primary","mx-3"],["href","order",1,"btn","btn-primary"],[1,"row","col-xs-2","mt-4"],[1,"col-sm-6"],["href","createreport",1,"btn","btn-primary"],["href","report",1,"btn","btn-danger","mx-3"],["href","#",1,"btn","btn-primary"],["href","#",1,"btn","btn-danger","mx-3"]],template:function(r,n){1&r&&(t._UZ(0,"app-dashboard-landing"),t.TgZ(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h5",4),t._uU(6,"Location"),t.qZA(),t.TgZ(7,"p",5),t._uU(8),t.qZA(),t.TgZ(9,"a",6),t._uU(10,"View Location"),t.qZA(),t.TgZ(11,"a",7),t._uU(12,"Request Location"),t.qZA()()()(),t.TgZ(13,"div",1)(14,"div",2)(15,"div",3)(16,"h5",4),t._uU(17,"Products"),t.qZA(),t.TgZ(18,"p",5),t._uU(19),t.qZA(),t.TgZ(20,"a",8),t._uU(21,"View Products"),t.qZA(),t.TgZ(22,"a",7),t._uU(23,"FeedBack"),t.qZA()()()()(),t.TgZ(24,"div",9)(25,"div",10)(26,"div",2)(27,"div",3)(28,"h5",4),t._uU(29,"Reports"),t.qZA(),t.TgZ(30,"p",5),t._uU(31),t.qZA(),t.TgZ(32,"a",11),t._uU(33,"Raise a Request"),t.qZA(),t.TgZ(34,"a",12),t._uU(35,"View/Delete Request"),t.qZA()()()(),t.TgZ(36,"div",10)(37,"div",2)(38,"div",3)(39,"h5",4),t._uU(40,"My Orders"),t.qZA(),t.TgZ(41,"p",5),t._uU(42),t.qZA(),t.TgZ(43,"a",13),t._uU(44,"Create Order"),t.qZA(),t.TgZ(45,"a",14),t._uU(46,"View/Cancel Order"),t.qZA()()()()()),2&r&&(t.xp6(8),t.hij("Total Location:",n.countloc,""),t.xp6(11),t.hij("Total Products:",n.countord,""),t.xp6(12),t.hij("Total Reports:",n.count,""),t.xp6(11),t.hij("Total Orders:",n.countpro,""))},dependencies:[i]}),o})()},{path:"DashboardLandingComponent",component:i}];let Z=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(T),d.Bz]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,u.m,Z]}),o})()}}]);