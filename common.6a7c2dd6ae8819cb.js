"use strict";(self.webpackChunkDigitalStore=self.webpackChunkDigitalStore||[]).push([[592],{1350:(d,s,n)=>{n.d(s,{a:()=>e});var t=n(6592),r=n(1571),c=n(9327);let e=(()=>{class a{constructor(i){this.apollo=i}getLocation(){return this.apollo.watchQuery({query:t.Ps`
        query getAllLocations {
          getAllLocations {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `}).valueChanges}createLocation(i){return this.apollo.mutate({mutation:t.Ps`
        mutation ($location: LocationDto) {
          createLocation(locationDto: $location) {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `,variables:{location:i}})}deleteLocation(i){return this.apollo.mutate({mutation:t.Ps`
        mutation ($id: Int) {
          deleteLocation(id: $id)
        }
      `,variables:{id:i}})}getTotalLocationCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalLocationCount {
          getTotalLocationCount
        }
      `}).valueChanges}findByLocationId(i){return this.apollo.watchQuery({query:t.Ps`
        query ($id: Int) {
          findByLocationId(id: $id) {
            id
            location
            locationtype
            locationstatus
            address
            createdon
            createdby
            email
            citytown
            country
            postcode
          }
        }
      `,variables:{id:i}}).valueChanges}searchLocation(i){return this.apollo.watchQuery({query:t.Ps`
      query searchLocation($searchInput:SearchInputDto)
      searchLocation(searchInput: $searchInput){
        count
        location{
          id
          citytown
          address
          country
          createdby
          email
          createdon
          location
          locationstatus
          locationtype
        }
      }
    }
    `,variables:{searchInput:i}}).valueChanges}}return a.\u0275fac=function(i){return new(i||a)(r.LFG(c._M))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},706:(d,s,n)=>{n.d(s,{j:()=>c});var t=n(9327),r=n(1571);let c=(()=>{class e{constructor(o){this.apollo=o}getProducts(){return this.apollo.watchQuery({query:t.Ps`
        query getProducts {
          getProducts {
            id
            productname
            producttype
            createdby
            address
            email
            mobile
            productcode
            postcode
            quantity
          }
        }
      `}).valueChanges}getTotalOrderProductCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalOrderProductCount {
          getTotalOrderProductCount
        }
      `}).valueChanges}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(t._M))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},6927:(d,s,n)=>{n.d(s,{p:()=>c});var t=n(9327),r=n(1571);let c=(()=>{class e{constructor(o){this.apollo=o}findAll(){return this.apollo.watchQuery({query:t.Ps`
        query getAllProductList {
          getAllProductList {
            id
            productname
            productcode
            producttype
            price
            description
            imageurl
          }
        }
      `}).valueChanges}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(t._M))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9179:(d,s,n)=>{n.d(s,{r:()=>c});var t=n(9327),r=n(1571);let c=(()=>{class e{constructor(o){this.apollo=o}getreport(){return this.apollo.watchQuery({query:t.Ps`
        query getAllReports {
          getAllReports {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `}).valueChanges}createReport(o){return this.apollo.mutate({mutation:t.Ps`
        mutation ($report: ReportDto) {
          createReport(reportDto: $report) {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `,variables:{report:o}})}deleteReport(o){return this.apollo.mutate({mutation:t.Ps`
        mutation ($id: Int) {
          deleteReport(id: $id)
        }
      `,variables:{id:o}})}getTotalReportCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalReportCount {
          getTotalReportCount
        }
      `}).valueChanges}searchReport(o){return this.apollo.watchQuery({query:t.Ps`
        query searchReport($searchInput: SearchInputDto) {
          searchReport(searchInput: $searchInput) {
            count
            Reports {
              id
              createdby
              createdon
              description
              email
              location
              location
              mobile
              postcode
              priority
              productname
              requesttype
              warranty
            }
          }
        }
      `,variables:{searchInput:o}}).valueChanges}getReportById(o){return this.apollo.watchQuery({query:t.Ps`
        query ($id: Int) {
          findByReportId(id: $id) {
            id
            createdby
            createdon
            description
            email
            location
            location
            mobile
            postcode
            priority
            productname
            requesttype
            warranty
          }
        }
      `,variables:{id:o}}).valueChanges}}return e.\u0275fac=function(o){return new(o||e)(r.LFG(t._M))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4036:(d,s,n)=>{n.d(s,{n:()=>p});var t=n(1571),r=n(6895),c=n(8869);function e(l,_){if(1&l&&(t.TgZ(0,"a",10),t._uU(1),t.qZA()),2&l){const u=t.oxw().$implicit;t.Q6J("routerLink",u.path),t.xp6(1),t.hij(" ",u.text," ")}}function a(l,_){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const u=t.oxw().$implicit;t.xp6(1),t.Oqu(u.text)}}function o(l,_){if(1&l&&(t.TgZ(0,"li",7),t.YNc(1,e,2,2,"a",8),t.YNc(2,a,2,1,"span",9),t.qZA()),2&l){const u=_.$implicit;t.xp6(1),t.Q6J("ngIf",u.path),t.xp6(1),t.Q6J("ngIf",!u.path)}}const i=function(){return["/"]};let p=(()=>{class l{constructor(u){this.location=u,this.pages=[]}ngOnInit(){}goToPreviousPage(){this.location.back()}}return l.\u0275fac=function(u){return new(u||l)(t.Y36(r.Ye))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-breadcrumbs"]],inputs:{pages:"pages"},decls:7,vars:3,consts:[[1,"breadcrumb-container","d-none","d-lg-block"],["aria-label","breadcrumb"],[1,"breadcrumb","align-items-center"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-hidden","true",1,"fas","fa-home","fs-5"],["class","breadcrumb-item active fs-7","aria-current","page",4,"ngFor","ngForOf"],["aria-current","page",1,"breadcrumb-item","active","fs-7"],["class","text-decoration-none text-primary",3,"routerLink",4,"ngIf"],[4,"ngIf"],[1,"text-decoration-none","text-primary",3,"routerLink"]],template:function(u,m){1&u&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),t._UZ(5,"i",5),t.qZA()(),t.YNc(6,o,3,2,"li",6),t.qZA()()()),2&u&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,i)),t.xp6(2),t.Q6J("ngForOf",m.pages))},dependencies:[r.sg,r.O5,c.yS],styles:['.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"|"!important}a[_ngcontent-%COMP%]{color:#5514b4}']}),l})()},3546:(d,s,n)=>{n.d(s,{f:()=>c});var t=n(1571),r=n(6895);let c=(()=>{class e{constructor(){}ngOnInit(){this.scrollRight(),this.scrollLeft()}scrollRight(){this.tableContent?.nativeElement.scrollTo({left:this.tableContent.nativeElement.scrollleft+150,behavior:"smooth"})}scrollLeft(){this.tableContent?.nativeElement.scrollTo({left:this.tableContent.nativeElement.scrollleft-150,behavior:"smooth"})}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-horizontal-scroll"]],inputs:{tableContent:"tableContent"},decls:5,vars:2,consts:[[1,"scroll"],[1,"scroll-left"],["aria-hidden","true",1,"fa","fa-2x","scroll-icon",3,"ngClass","click"],[1,"scroll-right"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"i",2),t.NdJ("click",function(){return i.scrollLeft()}),t.qZA()(),t.TgZ(3,"div",3)(4,"i",2),t.NdJ("click",function(){return i.scrollRight()}),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("ngClass","fa-chevron-circle-left"),t.xp6(2),t.Q6J("ngClass","fa-chevron-circle-right"))},dependencies:[r.mk],styles:[".scroll[_ngcontent-%COMP%]{position:sticky;top:78%;z-index:1;width:100%}.scroll-left[_ngcontent-%COMP%]{position:absolute;cursor:pointer;left:-13px}.scroll-left[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#5514b4;filter:opacity(100%)}.scroll-right[_ngcontent-%COMP%]{right:.5rem;position:absolute;cursor:pointer}.scroll-right[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#5514b4;filter:opacity(100%)}.scroll-icon[_ngcontent-%COMP%]{color:#5514b4;filter:opacity(50%)}"]}),e})()},1858:(d,s,n)=>{n.d(s,{i:()=>r});var t=n(1571);let r=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-no-data-found"]],decls:2,vars:0,consts:[[1,"content"],["src","https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-18568.jpg?w=900&t=st=1676296571~exp=1676297171~hmac=45d744a518b823c28063e0cb137cfae80972aa1acfbf74567816be7b7252ce76","width","80%","height","30%"]],template:function(a,o){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA())},styles:[".content[_ngcontent-%COMP%]{position:relative;margin-top:1px;margin-left:90px}"]}),c})()},3098:(d,s,n)=>{n.d(s,{E:()=>a});var t=n(1571),r=n(433);const c=[[["","preContent",""]],"*"],e=["[preContent]","*"];let a=(()=>{class o{constructor(){this.placeholder="",this.className="",this.searchText=new t.vpe,this.searchForm=new r.cw({search:new r.NI("")})}patchValue(p){this.searchForm.patchValue({search:p||""})}ngOnInit(){}onSearchButtonClick(){this.searchText.emit(this.searchForm.value.search)}}return o.\u0275fac=function(p){return new(p||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-searchbox"]],inputs:{placeholder:"placeholder",className:"className"},outputs:{searchText:"searchText"},ngContentSelectors:e,decls:12,vars:4,consts:[["action","",1,"search-form",3,"formGroup"],[1,"input-text"],["type","text","id","search-text","placeholder","Search with name","formControlName","search",1,"fs-7","form-control",3,"placeholder"],[1,""],[1,"fs-6","btn","btn-primary","px-lg-5","px-2",3,"click"],[1,"d-none","d-lg-block","fw-bold"],[1,"d-lg-none"],["aria-hidden","true",1,"fa","fa-search","fs-6"]],template:function(p,l){1&p&&(t.F$t(c),t.TgZ(0,"div"),t.Hsn(1),t.TgZ(2,"form",0)(3,"div",1),t._UZ(4,"input",2),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return l.onSearchButtonClick()}),t.TgZ(7,"span",5),t._uU(8,"search"),t.qZA(),t.TgZ(9,"span",6),t._UZ(10,"i",7),t.qZA()()()(),t.Hsn(11,1),t.qZA()),2&p&&(t.Tol("search-container "+l.className),t.xp6(2),t.Q6J("formGroup",l.searchForm),t.xp6(2),t.Q6J("placeholder",l.placeholder))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".search-container[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:1rem;border-radius:.625rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;width:100%;max-width:40.625rem}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{flex:1;margin-right:1rem;width:100%}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:.813rem;height:100%;padding-top:.75rem;padding-bottom:.55rem}.search-container[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border:1px solid}.search-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{padding-top:.375rem;padding-bottom:.375rem}.inventory-search.search-container[_ngcontent-%COMP%]{justify-content:flex-start}.inventory-search.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{max-width:initial}@media (max-width: 991.98px){.search-container[_ngcontent-%COMP%]{flex-direction:column}.search-container[_ngcontent-%COMP%]   .filter-element[_ngcontent-%COMP%]{margin-right:auto;margin-top:1rem;padding:.313rem}}"]}),o})()}}]);