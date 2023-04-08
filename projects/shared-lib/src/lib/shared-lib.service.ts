import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  state:{
    isLoading:boolean;
    isLoggedIn:boolean;
    authToken:string | null;
    showGotoTop:boolean;
    scrollToTop$:Subject<null>;
  }={
    isLoading:false,
    isLoggedIn:false,
    authToken:null,
    showGotoTop:false,
    scrollToTop$: new Subject(),

  };

  constructor() { }

  setLoading(loading:boolean){
    this.state ={
      ...this.state,
      isLoading:loading,
    };

    
  }

  set showGotoTop(flag:boolean){
    Promise.resolve(null).then(()=> (this.state.showGotoTop=flag));
  }

  get showGotoTop(){
    return this.state.showGotoTop;

  }
  set authToken(token:string |null){
    this.state={ ...this.state,authToken:token};
  }

  get authToken():string | null {
    return this.state.authToken;
  }

  
}
