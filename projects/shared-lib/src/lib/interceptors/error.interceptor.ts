import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import {
  catchError,
  finalize,
  mergeMap,
  Observable,
  retryWhen,
  throwError,
  timer,
} from 'rxjs';
import { ConnectionErrorModal } from '../components/modals/connection-error/connection-error.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';
import { OrderManagementBasePath } from '../utils/constants';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  modalOpened: boolean = false;

  /**
   * Custom Staggered Retry Strategy
   *
   * @method
   * @param {number} maxRetryAttempts Number of retry attempts
   * @param {number} scalingDuration Wait time factor between retries
   * @param {number[]} excludedStatusCodes Http error codes to be exculed for retry
   * @memberof RestInterceptor
   */
  genericRetryStrategy =
    ({
      maxRetryAttempts = 3,
      scalingDuration = 1000,
      excludedStatusCodes = [],
    }: {
      maxRetryAttempts?: number;
      scalingDuration?: number;
      excludedStatusCodes?: number[];
    } = {}) =>
    (attempts: Observable<any>) => {
      return attempts.pipe(
        mergeMap((error, i) => {
          const retryAttempt = i + 1;
          if (
            retryAttempt > maxRetryAttempts ||
            excludedStatusCodes.includes(+error.status)
          ) {
            return throwError(error);
          }
          // retry after 1s, 2s, etc...
          return timer(retryAttempt * scalingDuration);
        }),
        finalize(() => {})
      );
    };

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private toast: ToastrService
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retryWhen(
        this.genericRetryStrategy({
          scalingDuration: 100,
          excludedStatusCodes: [500, 502, 401, 403, 404, 400],
        })
      ),
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 400:
            if (error.error && error.error.violations) {
              if (_.isString(error.error.violations)) {
                this.toast.error(error.error.violations, 'Error');
              } else {
                Object.keys(error.error.violations).forEach((key) => {
                  this.toast.error(`${error.error.violations[key]}`, 'Error');
                });
              }
            } else if (error.error && error.error.warning) {
              this.toast.warning(error.error.warning, 'Warning');
            } else if (error.error && JSON.parse(error.error).message) {
              this.toast.error(
                (error.error && JSON.parse(error.error).message) ||
                  error.message,
                'Error'
              );
            }
            break;
          case 401:
          case 403:
            this.router.navigate(['unauthorized']);
            break;
          case 404:
            this.toast.error(
              (error.error && error.error.message) || error.message,
              'Error'
            );
            // const urlTree = this.location.path().split("/");
            // urlTree.splice(urlTree.length - 1, 1);
            // this.router.navigateByUrl(urlTree.join("/"));
            break;
          case 0:
          case 500:
          default:
            if (!this.modalOpened) {
              this.modalOpened = true;
              this.modalService
                .open(ConnectionErrorModal, {
                  windowClass: 'Digitalstore-modal',
                  backdropClass: 'Digitalstore-modal-backdrop',
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
            break;
        }
        return throwError(error);
      })
    );
  }
}
