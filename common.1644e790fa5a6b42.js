"use strict";(self.webpackChunkDigitalStore=self.webpackChunkDigitalStore||[]).push([[592],{1350:(p,s,n)=>{n.d(s,{a:()=>o});var t=n(6592),r=n(1571),i=n(9327);let o=(()=>{class a{constructor(c){this.apollo=c}getLocationById(c){throw new Error("Method not implemented.")}getLocation(){return this.apollo.watchQuery({query:t.Ps`
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
      `}).valueChanges}createLocation(c){return this.apollo.mutate({mutation:t.Ps`
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
      `,variables:{location:c}})}deleteLocation(c){return this.apollo.mutate({mutation:t.Ps`
        mutation ($id: Int) {
          deleteLocation(id: $id)
        }
      `,variables:{id:c}})}getTotalLocationCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalLocationCount {
          getTotalLocationCount
        }
      `}).valueChanges}findByLocationId(c){return this.apollo.watchQuery({query:t.Ps`
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
      `,variables:{id:c}}).valueChanges}searchLocation(c){return this.apollo.watchQuery({query:t.Ps`
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
    `,variables:{searchInput:c}}).valueChanges}}return a.\u0275fac=function(c){return new(c||a)(r.LFG(i._M))},a.\u0275prov=r.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},706:(p,s,n)=>{n.d(s,{j:()=>i});var t=n(9327),r=n(1571);let i=(()=>{class o{constructor(e){this.apollo=e}getProducts(){return this.apollo.watchQuery({query:t.Ps`
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
      `}).valueChanges}findById(e){return this.apollo.watchQuery({query:t.Ps`
        query ($id: Int) {
          findById(id: $id) {
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
      `,variables:{id:e}}).valueChanges}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(t._M))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},6927:(p,s,n)=>{n.d(s,{p:()=>i});var t=n(9327),r=n(1571);let i=(()=>{class o{constructor(e){this.apollo=e}findAll(){return this.apollo.watchQuery({query:t.Ps`
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
      `}).valueChanges}getTotalOrderCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalOrderCount {
          getTotalOrderCount
        }
      `}).valueChanges}findByProductId(e){return this.apollo.watchQuery({query:t.Ps`
        query ($id: Int) {
          findByProductId(id: $id) {
            id
            productname
            productcode
            producttype
            price
            description
            imageurl
          }
        }
      `,variables:{id:e}}).valueChanges}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(t._M))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},3963:(p,s,n)=>{n.d(s,{E:()=>i});var t=n(9327),r=n(1571);let i=(()=>{class o{constructor(e){this.apollo=e}getAllSr(){return this.apollo.watchQuery({query:t.Ps`
        query getAllSr {
          getAllSr {
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
      `}).valueChanges}createSr(e){return this.apollo.mutate({mutation:t.Ps`
        mutation ($srDto: SrDto) {
          createSr(srDto: $srDto ) {
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
      `,variables:{srDto:e}})}deleteSr(e){return this.apollo.mutate({mutation:t.Ps`
        mutation ($id: Int) {
          deleteSr(id: $id)
        }
      `,variables:{id:e}})}getTotalSrCount(){return this.apollo.watchQuery({query:t.Ps`
        query getTotalSrCount {
          getTotalSrCount
        }
      `}).valueChanges}searchSr(e){return this.apollo.watchQuery({query:t.Ps`
        query searchSr($searchInput: SearchInputDto) {
          searchSr(searchInput: $searchInput) {
            count
            Sr {
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
      `,variables:{searchInput:e}}).valueChanges}getSrById(e){return this.apollo.watchQuery({query:t.Ps`
        query ($id: Int) {
          findBySrId(id: $id) {
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
      `,variables:{id:e}}).valueChanges}}return o.\u0275fac=function(e){return new(e||o)(r.LFG(t._M))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},4036:(p,s,n)=>{n.d(s,{n:()=>d});var t=n(1571),r=n(6895),i=n(8869);function o(l,m){if(1&l&&(t.TgZ(0,"a",10),t._uU(1),t.qZA()),2&l){const u=t.oxw().$implicit;t.Q6J("routerLink",u.path),t.xp6(1),t.hij(" ",u.text," ")}}function a(l,m){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const u=t.oxw().$implicit;t.xp6(1),t.Oqu(u.text)}}function e(l,m){if(1&l&&(t.TgZ(0,"li",7),t.YNc(1,o,2,2,"a",8),t.YNc(2,a,2,1,"span",9),t.qZA()),2&l){const u=m.$implicit;t.xp6(1),t.Q6J("ngIf",u.path),t.xp6(1),t.Q6J("ngIf",!u.path)}}const c=function(){return["/"]};let d=(()=>{class l{constructor(u){this.location=u,this.pages=[]}ngOnInit(){}goToPreviousPage(){this.location.back()}}return l.\u0275fac=function(u){return new(u||l)(t.Y36(r.Ye))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-breadcrumbs"]],inputs:{pages:"pages"},decls:7,vars:3,consts:[[1,"breadcrumb-container","d-none","d-lg-block"],["aria-label","breadcrumb"],[1,"breadcrumb","align-items-center"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-hidden","true",1,"fas","fa-home","fs-5"],["class","breadcrumb-item active fs-7","aria-current","page",4,"ngFor","ngForOf"],["aria-current","page",1,"breadcrumb-item","active","fs-7"],["class","text-decoration-none text-primary",3,"routerLink",4,"ngIf"],[4,"ngIf"],[1,"text-decoration-none","text-primary",3,"routerLink"]],template:function(u,_){1&u&&(t.TgZ(0,"div",0)(1,"nav",1)(2,"ol",2)(3,"li",3)(4,"a",4),t._UZ(5,"i",5),t.qZA()(),t.YNc(6,e,3,2,"li",6),t.qZA()()()),2&u&&(t.xp6(4),t.Q6J("routerLink",t.DdM(2,c)),t.xp6(2),t.Q6J("ngForOf",_.pages))},dependencies:[r.sg,r.O5,i.yS],styles:['.breadcrumb-item[_ngcontent-%COMP%] + .breadcrumb-item[_ngcontent-%COMP%]:before{content:"|"!important}a[_ngcontent-%COMP%]{color:#142032}']}),l})()},3546:(p,s,n)=>{n.d(s,{f:()=>i});var t=n(1571),r=n(6895);let i=(()=>{class o{constructor(){}ngOnInit(){this.scrollRight(),this.scrollLeft()}scrollRight(){this.tableContent?.nativeElement.scrollTo({left:this.tableContent.nativeElement.scrollleft+150,behavior:"smooth"})}scrollLeft(){this.tableContent?.nativeElement.scrollTo({left:this.tableContent.nativeElement.scrollleft-150,behavior:"smooth"})}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-horizontal-scroll"]],inputs:{tableContent:"tableContent"},decls:5,vars:2,consts:[[1,"scroll"],[1,"scroll-left"],["aria-hidden","true",1,"fa","fa-2x","scroll-icon",3,"ngClass","click"],[1,"scroll-right"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"i",2),t.NdJ("click",function(){return c.scrollLeft()}),t.qZA()(),t.TgZ(3,"div",3)(4,"i",2),t.NdJ("click",function(){return c.scrollRight()}),t.qZA()()()),2&e&&(t.xp6(2),t.Q6J("ngClass","fa-chevron-circle-left"),t.xp6(2),t.Q6J("ngClass","fa-chevron-circle-right"))},dependencies:[r.mk],styles:[".scroll[_ngcontent-%COMP%]{position:sticky;top:78%;z-index:1;width:100%}.scroll-left[_ngcontent-%COMP%]{position:absolute;cursor:pointer;left:-13px}.scroll-left[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#142032;filter:opacity(100%)}.scroll-right[_ngcontent-%COMP%]{right:.5rem;position:absolute;cursor:pointer}.scroll-right[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover{color:#142032;filter:opacity(100%)}.scroll-icon[_ngcontent-%COMP%]{color:#142032;filter:opacity(50%)}"]}),o})()},1858:(p,s,n)=>{n.d(s,{i:()=>r});var t=n(1571);let r=(()=>{class i{constructor(){this.type="general",this.message=""}ngOnInit(){}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-no-data-found"]],inputs:{type:"type",message:"message"},decls:5,vars:0,consts:[[1,"system-error-page"],["src","/assets/img/no-data-found.png","alt","No Search Found",1,"system-error-bg"],[1,"error-banner"],[1,"error-text-sub-title"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"h4",3),t._uU(4,"No data found "),t.qZA()()())},styles:[".system-error-page[_ngcontent-%COMP%]{top:-50px;width:800px;height:500px;display:flex;align-items:center;justify-content:center;position:relative;margin-top:2rem}.system-error-bg[_ngcontent-%COMP%]{width:34vw;height:100%;object-fit:contain}.error-banner[_ngcontent-%COMP%]{position:absolute;width:350px;left:50%;text-align:left}.error-text-sub-title[_ngcontent-%COMP%]{font-size:1.625rem;font-weight:700}.error-text-body[_ngcontent-%COMP%]{text-align:center}@media (max-width: 991.98px){.error-banner[_ngcontent-%COMP%]{width:290px;display:flex;width:50%;flex-wrap:wrap}.error-banner[_ngcontent-%COMP%]   .error-text-sub-title[_ngcontent-%COMP%]{font-size:.9rem}.error-banner[_ngcontent-%COMP%]   .error-text-body[_ngcontent-%COMP%]{font-size:.8rem}}"]}),i})()},3098:(p,s,n)=>{n.d(s,{E:()=>a});var t=n(1571),r=n(433);const i=[[["","preContent",""]],"*"],o=["[preContent]","*"];let a=(()=>{class e{constructor(){this.placeholder="",this.className="",this.searchText=new t.vpe,this.searchForm=new r.cw({search:new r.NI("")})}patchValue(d){this.searchForm.patchValue({search:d||""})}ngOnInit(){}onSearchButtonClick(){this.searchText.emit(this.searchForm.value.search)}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-searchbox"]],inputs:{placeholder:"placeholder",className:"className"},outputs:{searchText:"searchText"},ngContentSelectors:o,decls:12,vars:4,consts:[["action","",1,"search-form",3,"formGroup"],[1,"input-text"],["type","text","id","search-text","placeholder","Search with name","formControlName","search",1,"fs-7","form-control",3,"placeholder"],[1,""],[1,"fs-6","btn","btn-primary","px-lg-5","px-2",3,"click"],[1,"d-none","d-lg-block","fw-bold"],[1,"d-lg-none"],["aria-hidden","true",1,"fa","fa-search","fs-6"]],template:function(d,l){1&d&&(t.F$t(i),t.TgZ(0,"div"),t.Hsn(1),t.TgZ(2,"form",0)(3,"div",1),t._UZ(4,"input",2),t.qZA(),t.TgZ(5,"div",3)(6,"button",4),t.NdJ("click",function(){return l.onSearchButtonClick()}),t.TgZ(7,"span",5),t._uU(8,"search"),t.qZA(),t.TgZ(9,"span",6),t._UZ(10,"i",7),t.qZA()()()(),t.Hsn(11,1),t.qZA()),2&d&&(t.Tol("search-container "+l.className),t.xp6(2),t.Q6J("formGroup",l.searchForm),t.xp6(2),t.Q6J("placeholder",l.placeholder))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".search-container[_ngcontent-%COMP%]{background-color:#f2f2f2;padding:1rem;border-radius:.625rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;width:100%;max-width:40.625rem}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]{flex:1;margin-right:1rem;width:100%}.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]   .input-text[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-size:.813rem;height:100%;padding-top:.75rem;padding-bottom:.55rem}.search-container[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]{border:1px solid}.search-container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{padding-top:.375rem;padding-bottom:.375rem}.inventory-search.search-container[_ngcontent-%COMP%]{justify-content:flex-start}.inventory-search.search-container[_ngcontent-%COMP%]   .search-form[_ngcontent-%COMP%]{max-width:initial}@media (max-width: 991.98px){.search-container[_ngcontent-%COMP%]{flex-direction:column}.search-container[_ngcontent-%COMP%]   .filter-element[_ngcontent-%COMP%]{margin-right:auto;margin-top:1rem;padding:.313rem}}"]}),e})()}}]);