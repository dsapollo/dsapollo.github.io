import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { finalize, tap } from 'rxjs/operators';
  import{Observable} from 'rxjs';
import { StateService } from '../services/state.services';
  
  @Injectable()
  export class SpinnerInterceptor implements HttpInterceptor {
    private httpRequests:HttpRequest<any>[] = [];

    constructor(private stateService:StateService) {}

    asyncAPIList:string[]=[];
    asyncUrlList:string[]=[];

    shouldShowSpinner(request:HttpRequest<unknown>){
const asyncLoading =
typeof request.body === 'object'
?((request.body as any ) || {}).variables?.asyncClientLoading:false;

if(
    ((request.body as any ) || {}).variables?.asyncClientLoading !== undefined
    ){
        delete (request.body as any).variables.asyncClientLoading;
    }
    return (
        !this.asyncAPIList.includes((request as any)?.body?.operationName) &&
        !this.asyncUrlList.some(
            (urlString)=>
            request.url.includes(urlString) &&
            !((request.context as any )?.showSpinner === true)
        ) &&
        !asyncLoading
    );
    }
    intercept(
      request: HttpRequest<unknown>,
      next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
      const shouldShowSpinner =this.shouldShowSpinner(request);
      if(shouldShowSpinner) this.httpRequests.push(request);

      return next.handle(request).pipe(
        tap(()=>{
            if(!this.stateService.isLoading && shouldShowSpinner){
                Promise.resolve(null).then(()=> this.stateService.setLoading(true));
            }
        }),
        finalize(()=>{
            this.removeRequest(request);
        })
      );
      
    }
    private removeRequest(req:HttpRequest<any>){
        const i= this.httpRequests.indexOf(req);
        if(i>=0){
            this.httpRequests.splice(i,1);
        }
        if(this.httpRequests.length <=0){
            this.stateService.setLoading(false);
        }
    }
  }
  