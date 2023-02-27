import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isArray } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, throwError } from 'rxjs';
import { StateService } from '../services/state.services';
import { getErrorMessage } from '../utilities/function';
import { tap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConnectionErrorModal } from '../components/connection-error/connection-error.component';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  modalOpened: boolean = false;
  constructor(
    private stateService: StateService,
    private toast: ToastrService,
    private modalservice: NgbModal
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.stateService.setError(null);
    return next.handle(request).pipe(
      tap((evt) => {
        if (evt instanceof HttpResponse) {
          const error = evt.body?.errors || [];
          if (isArray(error) && error.length > 0) {
            const message = getErrorMessage(error);
            this.toast.error('Error');
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        if (error.error instanceof ErrorEvent) {
          if (!this.modalOpened) {
            this.modalOpened = true;
            this.modalservice
              .open(ConnectionErrorModal, {
                windowClass: 'digitalstore',
                backdropClass: 'digitalstore-backdrop',
                modalDialogClass: 'collapsed',
                centered: true,
              })
              .result.then((result) => {
                this.modalOpened = false;
                window.open(window.location.href, '_self');
              })
              .catch((reason) => {
                this.modalOpened = false;
              });
          }

          console.log('this is Client Side Error');
          if (error.status === 0) {
            errorMsg = 'Please try again later';
          } else {
            errorMsg = error.message;
          }
        }

        // console.log({ error, errorMsg });
        this.stateService.setError(errorMsg);
        this.toast.error('Oops! Some thing went wrong', 'DigitalStore');
        return throwError(error);
      })
    );
  }
}
